/* eslint-disable no-console */
import { createContext, ProviderProps, useRef, useEffect, useState } from "react";
import { Web3Provider } from "@ethersproject/providers";
import networks from "../lib/snapshot/networks.json";
import { formatUnits } from "@ethersproject/units";
import { TypedDataDomain, TypedDataField } from "ethers";
import { useLock } from "../hooks/useLock";
import { ConnectorType } from "../lib/snapshot/options";
import { clearToken, getToken, setToken } from "../utils/token";
import { OperationResult, useMutation } from "urql";
import { loginMutation, verifyMyEmailMutation } from "./graphql/mutations";
import { useRouter } from "next/router";
import { notifError } from "../utils/notification";
import { ZERO_ADDRESS, DEFAULT_CHAIN_ID } from "../constants/common";
import {
  AuthContext as AuthContextInterface,
  AuthProps,
  ChainId,
  Web3State,
  LoginResponse,
} from "./types";
import { numberToHex } from "../utils/common";

export const AuthContext = createContext<AuthContextInterface>({
  account: null,
  authLoading: false,
  network: null,
  walletConnectType: "",
  login: async () => {},
  logout: () => {},
  sign: async () => "",
  signTypedData: async () => "",
  _signTypedData: async (msg: any) => "",
  resolveEns: async (name: string) => "",
  switchToDefaultNetwork: () => {},
});

const AuthProvider = (props?: Partial<ProviderProps<AuthProps>>) => {
  const [state, setState] = useState<Web3State>({
    account: null,
    network: networks[DEFAULT_CHAIN_ID],
    authLoading: false,
    walletConnectType: null,
    profile: null,
  });
  const { push, pathname } = useRouter();
  const [, loginRequest] = useMutation(loginMutation);
  const [, verifyMyEmailRequest] = useMutation(verifyMyEmailMutation);
  const auth = useLock();
  const loginStarted = useRef(false);
  const web3ProviderRef = useRef<Web3Provider>();

  async function viewPublicAgreement() {
    const loadedStateNotConnectedUser = {
      account: ZERO_ADDRESS,
      network: {},
      authLoading: false,
      walletConnectType: null,
      profile: null,
    } as Web3State;
    setState(state => ({ ...state, ...loadedStateNotConnectedUser, authLoading: false }));
  }

  async function login(connector?: ConnectorType, email?: string, emailVerificationSalt?: string) {
    console.log("Started login process.");
    console.log(`Connected with: ${connector}`);
    // Prevent double loginRequest due to react dev useEffect[] runs twice
    if (loginStarted.current) return;
    loginStarted.current = true;

    try {
      const hasToken = Boolean(getToken());
      console.log(`User has auth token: ${hasToken ? "yes" : "no"}`);
      if (!connector) {
        const loadedConnector = await auth.getConnector();
        console.log(`Loaded connector: ${loadedConnector}`);
        if ((!loadedConnector || !hasToken) && pathname !== "/connect") {
          console.log(1);
          clearToken();
          await push("/connect");
          loginStarted.current = false;
          return;
        }
        console.log(2);
        if (!loadedConnector) return;
        connector = loadedConnector || "injected";
      }
      setState(state => ({ ...state, authLoading: true }));

      console.log("Detecting Web3 provider");
      const provider = await auth.login(connector);

      // console.log({ isMetaMask: provider?.isMetaMask });
      // console.log({ isCoinbaseWallet: provider?.isCoinbaseWallet });
      // console.log({ provider });
      if (!provider) {
        console.log("> No Web3 provider");
        const newState = { ...state, authLoading: false };
        setState(state => ({ ...state, newState }));
        return newState;
      }
      console.log("> Web3 provider detected");

      web3ProviderRef.current = new Web3Provider(provider, "any");

      const loadedState = await loadProvider(provider);

      if (!loadedState.account) return;
      await onAfterConnect(loadedState.account, email, emailVerificationSalt);

      setState(state => ({ ...state, ...loadedState, authLoading: false }));
      loginStarted.current = false;

      return loadedState;
    } catch (error) {
      console.error("[Login] error:", error);
    } finally {
      loginStarted.current = false;
    }
  }

  async function onAfterConnect(account: string, email?: string, emailVerificationSalt?: string) {
    if (!account) return;
    if (getToken()) return; // user already has a token
    console.log("Get payload to sign");
    const res = (await loginRequest({ address: account })) as OperationResult<{
      login: LoginResponse;
    }>;

    if (res?.data?.login?.error) {
      notifError(res?.data?.login?.error || "Login error");
      return;
    }

    const payload = res?.data?.login?.payload;
    if (!payload) return;
    console.log("> Get payload success");

    console.log("Signing payload");
    const signature = await sign(payload);
    if (!signature) return;
    console.log(`> Signing payload success. Signature: ${signature}`);

    console.log("Obtaining auth token");
    const tokenRes = (await loginRequest({
      address: account,
      signature,
    })) as OperationResult<{ login: LoginResponse }>;

    if (tokenRes?.data?.login?.error) {
      console.log("> Get auth token error");
      notifError(tokenRes?.data?.login?.error || "Login error");
      return;
    }

    const token = tokenRes?.data?.login?.token;
    console.log(`> Auth token success: ${token}`);
    if (!token) return;

    setToken(token);

    // Sign up by email
    if (email) {
      const isVerified = await verifyMyEmailRequest({
        email,
        emailVerificationSalt: emailVerificationSalt ?? "",
      });
      if (!isVerified?.data?.verifyMyEmail) {
        clearToken();
        return;
      }
    }

    console.log("Redirecting to the home page");

    push("/");
  }

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
      }
      if (provider?.on) {
        provider.on("chainChanged", async (chainId: string) => {
          handleChainChanged(formatUnits(chainId, 0) as ChainId);
        });
        provider.on("accountsChanged", async (accounts: string[]) => {
          clearToken();
          await push("/connect");
          window.location.reload();
        });
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

      handleChainChanged(network?.chainId);
      const acc = accounts && accounts?.length > 0 ? accounts[0] : null;

      loadedState.account = acc;
      //@ts-ignore
      loadedState.walletConnectType = provider.value?.wc?.peerMeta?.name || null;
    } catch (e) {
      console.log("ERROR load web3", e);
      loadedState.account = "";
    }

    return loadedState;
  }

  function handleChainChanged(chainId: ChainId) {
    let network = networks[chainId];
    if (!network) {
      network = {
        ...networks[DEFAULT_CHAIN_ID],
        chainId: Number(chainId),
        name: "Unknown",
        network: "unknown",
        //@ts-ignore
        unknown: true,
      };
    }
    setState(state => {
      const newState = state;
      newState.network = network;
      return { ...state, network: network, authLoading: false };
    });
  }

  async function switchToDefaultNetwork() {
    const request = web3ProviderRef.current!.provider.request!;
    const chainId = numberToHex(parseInt(DEFAULT_CHAIN_ID, 10));
    await request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId }], // default chainId
    });
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
    const hasToken = Boolean(getToken());
    if (!hasToken && pathname === "/agreement/[agreementId]") {
      viewPublicAgreement();
    } else {
      login();
    }
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
        switchToDefaultNetwork,
        ...state,
      }}
    />
  );
};

export default AuthProvider;
