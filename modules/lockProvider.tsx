import {
  createContext,
  MutableRefObject,
  ProviderProps,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { Lock } from "../lib/lock";
import options, { ConnectorType } from "../lib/snapshot/options";
import { getInjected } from "../lib/lock/utils";
import type WalletConnectProvider from "@walletconnect/web3-provider";
import type { CoinbaseWalletProvider } from "@coinbase/wallet-sdk/dist/provider/CoinbaseWalletProvider";

import { Web3Provider } from "@ethersproject/providers";

type ProviderType = WalletConnectProvider | any;

interface LockContext {
  isLoading: Boolean;
  isAuthenticated: Boolean;
  provider?: ProviderType;
  lockClient: Lock;
  login: (connector: ConnectorType) => Promise<ProviderType>;
  getSignerAddress: () => Promise<string>;
  logout: () => Promise<void>;
  getConnector: () => Promise<ConnectorType | false>;
}
//@ts-ignore
export const LockContext = createContext<LockContext>({});

interface State {
  isLoading: Boolean;
  isAuthenticated: Boolean;
  // provider: ProviderType | null;
}

const name = "lock";

const LockProvider = (props?: Partial<ProviderProps<LockContext>>) => {
  const [state, setState] = useState<State>({
    isLoading: true,
    isAuthenticated: false,
  });

  const lockInstanceRef = useRef<Lock>(new Lock(options.connectors));

  const providerRef = useRef<ProviderType>();

  async function login(
    connector: ConnectorType = "injected"
  ): Promise<MutableRefObject<ProviderType>> {
    const lockConnector = lockInstanceRef.current.getConnector(connector);

    const localProvider = (await lockConnector.connect()) as null | any;

    if (localProvider !== null) {
      providerRef.current = localProvider;
    }
    if (providerRef.current) {
      localStorage.setItem(`_${name}.connector`, connector);

      setState(state => ({
        ...state,
        isAuthenticated: true,
      }));
    }

    return providerRef.current;
  }

  async function logout() {
    const connector = await getConnector();
    if (connector) {
      const lockConnector = lockInstanceRef.current.getConnector(connector);
      await lockConnector.logout();
      localStorage.removeItem(`_${name}.connector`);
      //isAuthenticatedRef.current = false;
      setState(state => ({ ...state, isAuthenticated: false }));
      providerRef.current = undefined;
    }
  }

  async function getSignerAddress() {
    const connector = await getConnector();

    if (!connector) return ""; //TODO throw error

    switch (connector) {
      // Metamask
      case "injected": {
        return providerRef.current?.selectedAddress;
      }
      // Walletconnect
      case "walletconnect": {
        return (providerRef.current as WalletConnectProvider)?.accounts[0];
      }
      // Coinbase
      case "walletlink": {
        return (providerRef.current as CoinbaseWalletProvider)?.request({
          method: "eth_requestAccounts",
        })[0];
      }
    }
    return "";
  }

  async function getConnector(): Promise<ConnectorType | false> {
    const connector = localStorage.getItem(`_${name}.connector`) as ConnectorType;
    if (connector) {
      const lockConnector = lockInstanceRef.current.getConnector(connector as ConnectorType);
      const isLoggedIn = await lockConnector.isLoggedIn();

      return isLoggedIn ? connector : false;
    }
    return false;
  }

  const onAppLoad = useCallback(() => {
    // Auto connect if previous session was connected
    if (window?.parent === window)
      getConnector().then(connector => {
        if (connector) return login(connector);
      });

    // Auto connect with gnosis-connector when gnosis safe is detected
    login("gnosis");

    const injected = getInjected();
    // edge case if MM and CBW are both installed
    setState(state => ({ ...state, isLoading: false }));
    if (injected?.id === "metamask") return;
    // Auto connect when coinbase wallet is detected
    if (injected?.id === "coinbase") return login("injected");
  }, []); //eslint-disable-line

  useEffect(() => {
    onAppLoad();
  }, []); //eslint-disable-line

  return (
    <LockContext.Provider
      {...props}
      value={{
        ...state,
        provider: providerRef.current,
        lockClient: lockInstanceRef.current,
        login,
        getSignerAddress,
        logout,
        getConnector,
      }}
    />
  );
};

export default LockProvider;
