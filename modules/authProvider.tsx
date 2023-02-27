/* eslint-disable no-console */
import { createContext, ProviderProps, useRef } from "react";
import { useEffect, useState } from "react";
import { Web3Provider } from "@ethersproject/providers";
import networks from "../lib/snapshot/networks.json";
import { formatUnits } from "@ethersproject/units";
import { TypedDataDomain, TypedDataField } from "ethers";
import { useLock } from "../hooks/useLock";
import { ConnectorType } from "../lib/snapshot/options";
import { clearToken, getToken, setToken } from "../utils/token";
import { useMutation } from "urql";
import { loginMutation } from "./graphql/mutations";
import { useRouter } from "next/router";
//import { TypedDataDomainType, TypedDataFieldType } from "./graphql/gql/graphql";

interface AuthProps {}

interface AuthContext {
  login: (connector?: ConnectorType) => Promise<any>;
  logout: () => void;
  account: string | null;
  authLoading: boolean;
  sign: (message: string) => Promise<string>;
  signTypedData: (
    domain: TypedDataDomain,
    types: Record<string, TypedDataField[]>,
    value: Record<string, any>
  ) => Promise<string>;
  _signTypedData: (msg: any) => Promise<any>;
  resolveEns: (name: string) => Promise<string | undefined | null>;
}

type ChainId = keyof typeof networks;

interface Web3State {
  account: string | null;
  network: (typeof networks)[ChainId];
  authLoading: boolean;
  walletConnectType: string | null;
  profile: null;
  //isTrezor: boolean;
}

const defaultNetwork = (process.env.NEXT_PUBLIC_DEFAULT_NETWORK ||
  Object.keys(networks)[0]) as ChainId;

export const AuthContext = createContext<AuthContext>({
  account: null,
  authLoading: false,
  login: async () => {},
  logout: () => {},
  sign: async () => "",
  signTypedData: async () => "",
  _signTypedData: async (msg: any) => "",
  resolveEns: async (name: string) => "",
});

const AuthProvider = (props?: Partial<ProviderProps<AuthProps>>) => {
  const [state, setState] = useState<Web3State>({
    account: null,
    network: networks[defaultNetwork],
    authLoading: false,
    walletConnectType: null,
    profile: null,
    //isTrezor: false,
  });
  const { push } = useRouter();
  const [, loginRequest] = useMutation(loginMutation);

  const auth = useLock();

  const loginStarted = useRef(false);

  const web3ProviderRef = useRef<Web3Provider>();

  async function login(connector?: ConnectorType) {
    // Prevent double loginRequest due to react dev useEffect[] runs twice
    if (loginStarted.current) return;
    loginStarted.current = true;

    try {
      const hasToken = Boolean(getToken());
      if (!connector) {
        const loadedConnector = await auth.getConnector();
        if (!loadedConnector || !hasToken) {
          clearToken();
          await push("/connect");
          loginStarted.current = false;
          return;
        }
        connector = loadedConnector || "injected";
      }
      setState(state => ({ ...state, authLoading: true }));

      const provider = await auth.login(connector);

      if (!provider) {
        const newState = { ...state, authLoading: false };
        setState(state => ({ ...state, newState }));
        return newState;
      }

      web3ProviderRef.current = new Web3Provider(provider, "any");

      const loadedState = await loadProvider(provider);

      if (!loadedState.account) return;
      await onAfterConnect(loadedState.account);

      setState(state => ({ ...state, ...loadedState, authLoading: false }));
      loginStarted.current = false;

      return loadedState;
    } catch (error) {
      console.error("[Login] error:", error);
    } finally {
      loginStarted.current = false;
    }
  }

  const onAfterConnect = async (account: string) => {
    if (account) {
      const currentToken = getToken();

      if (currentToken) return;
      const res = await loginRequest({ address: account });

      if (res.data) {
        const payload = res.data.login.payload;
        if (payload) {
          const signature = await sign(payload);

          const tokenRes = await loginRequest({
            address: account,
            signature: signature,
          });

          if (tokenRes.data) {
            const token = tokenRes.data.login.token;
            if (token) {
              setToken(token);
              push("/");
            }
          }
        }
      }
    }
  };
  function logout() {
    auth.logout();
    setState(state => ({ ...state, account: "" }));
  }

  async function loadProvider(provider: Web3Provider) {
    const loadedState: Partial<Web3State> = {};
    try {
      //@ts-ignore TODO
      if (provider?.removeAllListeners && provider?.isTorus) {
        provider.removeAllListeners();
        console.log("remove listeners", provider?.removeAllListeners);
      }
      if (provider?.on) {
        provider.on("chainChanged", async (chainId: string) => {
          handleChainChanged(formatUnits(chainId, 0) as ChainId);
        });
        provider.on("accountsChanged", async (accounts: string[]) => {
          clearToken();
          await login();
          // TODO: swap between different wallets without deleting token
          // if (accounts.length !== 0) {
          //   loadedState.account = accounts[0];
          //   //setState((state) => ({ ...state, account: accounts[0] }));
          //
          //   await login();
          // }
        });
        // auth.provider.on('disconnect', async () => {});
      }

      let network,
        accounts: string[] | undefined = [];
      try {
        //TODO check https://github.com/snapshot-labs/lock/blob/master/connectors/torus.ts
        //@ts-ignore
        const connector = provider?.connectorName;
        if (web3ProviderRef.current) {
          if (connector === "gnosis") {
            const { chainId: safeChainId, safeAddress } =
              //@ts-ignore
              web3ProviderRef.current.provider.safe;

            network = { chainId: safeChainId };
            accounts = [safeAddress];
          } else {
            [network, accounts] = await Promise.all([
              web3ProviderRef.current!.getNetwork(),
              web3ProviderRef.current!.listAccounts(),
            ]);
          }
        }
      } catch (e) {
        console.error(e);
      }
      //console.log("Network", network);
      // console.log("Accounts", accounts);
      handleChainChanged(network?.chainId);
      const acc = accounts && accounts?.length > 0 ? accounts[0] : null;

      /*       setState((state) => ({
        ...state,
        account: acc,
        //@ts-ignore
        walletConnectType: provider.value?.wc?.peerMeta?.name || null,
    })); */

      loadedState.account = acc;
      loadedState.walletConnectType =
        //@ts-ignore
        provider.value?.wc?.peerMeta?.name || null;
    } catch (e) {
      console.log("ERROR load web3", e);
      //setState((state) => ({ ...state, account: "" }));
      loadedState.account = "";

      //return Promise.reject(e);
    }
    const newState = { ...state, ...loadedState };

    return newState;
  }

  function handleChainChanged(chainId: ChainId) {
    let network = networks[chainId];
    if (!network) {
      network = {
        ...networks[defaultNetwork],
        chainId: Number(chainId),
        name: "Unknown",
        network: "unknown",
        //@ts-ignore
        unknown: true,
      };
    }
    setState(state => ({ ...state, network: network }));
  }

  async function sign(value: string): Promise<string> {
    const signer = web3ProviderRef.current!.getSigner();

    if (!signer) {
      throw Error("No signer in Web3Provider");
    }
    try {
      const signature = await signer.signMessage(value);
      return signature;
    } catch (e) {
      console.error(e);
    }
    return "";
  }

  async function _signTypedData(msgParam: any) {
    const signer = web3ProviderRef.current!.getSigner();
    const address = await signer.getAddress();
    return await signer.provider.send("eth_signTypedData_v4", [address, JSON.stringify(msgParam)]);
  }

  async function signTypedData(
    domain: TypedDataDomain,
    types: Record<string, TypedDataField[]>,
    value: Record<string, any>
  ): Promise<string> {
    const signer = web3ProviderRef.current!.getSigner();
    if (!signer) {
      throw Error("No signer in Web3Provider");
    }
    try {
      const signature = await signer._signTypedData(domain, types, value);
      return signature;
    } catch (e) {
      console.error(e);
    }
    return "";
  }

  async function resolveEns(name: string) {
    return await web3ProviderRef.current?.resolveName(name);
  }

  useEffect(() => {
    login();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AuthContext.Provider
      {...props}
      value={{
        login,
        logout,
        sign,
        signTypedData,
        _signTypedData,
        resolveEns,
        //loadProvider,
        //handleChainChanged,
        //web3: state,
        ...state,
      }}
    />
  );
};

export default AuthProvider;
