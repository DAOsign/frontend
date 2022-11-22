import {
  createContext,
  ProviderProps,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { Lock } from "../lib/lock";
import options, { ConnectorType } from "../lib/snapshot/options";
import { getInjected } from "../lib/lock/utils";

type ProviderType = any;

interface LockContext {
  isLoading: Boolean;
  isAuthenticated: Boolean;
  provider?: ProviderType;
  lockClient: Lock;
  login: (connector: ConnectorType) => Promise<ProviderType>;
  logout: () => Promise<void>;
  sign: (message: string) => Promise<string>;
  getConnector: () => Promise<ConnectorType | false>;
  //web3?: Web3Provider;
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
  const lockInstance = lockInstanceRef.current;

  const providerRef = useRef<ProviderType>();
  const provider = providerRef.current;

  async function login(
    connector: ConnectorType = "injected"
  ): Promise<ProviderType> {
    const lockConnector = lockInstance.getConnector(connector);
    console.log("connector", connector);

    const localProvider = (await lockConnector.connect()) as null | any;

    if (localProvider !== null) {
      providerRef.current = localProvider;
    }
    if (providerRef.current) {
      localStorage.setItem(`_${name}.connector`, connector);
      setState((state) => ({
        ...state,
        isAuthenticated: true,
      }));
    }

    return providerRef.current;
  }

  async function logout() {
    const connector = await getConnector();
    if (connector) {
      const lockConnector = lockInstance.getConnector(connector);
      await lockConnector.logout();
      localStorage.removeItem(`_${name}.connector`);
      //isAuthenticatedRef.current = false;
      setState((state) => ({ ...state, isAuthenticated: false }));
      providerRef.current = undefined;
    }
  }

  async function sign(value: string): Promise<string> {
    const connector = await getConnector();

    if (!connector) return ""; //TODO throw error
    console.log("connector", connector);
    switch (connector) {
      // Metamask
      case "injected": {
        return await provider.request({
          method: "personal_sign",
          params: [provider?.selectedAddress, value],
        });
      }
      // Walletconnect
      case "walletconnect": {
        return await provider.request({
          method: "eth_sign",
          params: [provider?.accounts[0], value],
        });
      }
      // Coinbase
      case "walletlink": {
        return await provider.request({
          method: "personal_sign",
          params: [value, provider?._addresses[0]],
        });
      }
    }

    return connector;
  }
  console.log("provider", provider);

  async function getConnector(): Promise<ConnectorType | false> {
    const connector = localStorage.getItem(
      `_${name}.connector`
    ) as ConnectorType;
    if (connector) {
      const lockConnector = lockInstance.getConnector(
        connector as ConnectorType
      );
      const isLoggedIn = await lockConnector.isLoggedIn();
      return isLoggedIn ? connector : false;
    }
    return false;
  }

  const onAppLoad = useCallback(() => {
    // Auto connect if previous session was connected
    if (window?.parent === window)
      getConnector().then((connector) => {
        if (connector) return login(connector);
      });

    // Auto connect with gnosis-connector when gnosis safe is detected
    login("gnosis");

    const injected = getInjected();
    // edge case if MM and CBW are both installed
    setState((state) => ({ ...state, isLoading: false }));
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
        lockClient: lockInstance,
        login,
        logout,
        sign,
        getConnector,
      }}
    />
  );
};

export default LockProvider;
