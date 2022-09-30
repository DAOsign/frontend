export default {};
/* import { useState } from "react";
import { computed, reactive } from "vue";
import { Web3Provider } from "@ethersproject/providers";
import { getInstance } from "@snapshot-labs/lock/plugins/vue3";
import networks from "@snapshot-labs/snapshot.js/src/networks.json";
import { formatUnits } from "@ethersproject/units";
import { useLock } from "./useLock";

interface Web3State {
  account: string | null;
  network: Record<string, any>;
  authLoading: boolean;
  walletConnectType: string | null;
}

type ChainId = keyof typeof networks;

const defaultNetwork = (process.env.DEFAULT_NETWORK ||
  Object.keys(networks)[0]) as ChainId;

export function useWeb3() {
  const [state, setState] = useState<Web3State>({
    account: "",
    network: networks[defaultNetwork],
    authLoading: false,
    walletConnectType: null,
  });

  const auth = useLock();

  async function login(connector = "injected") {
    setState((state) => ({ ...state, authLoading: true }));

    await auth.login(connector);
    if (auth.provider) {
      auth.web3 = new Web3Provider(auth.provider, "any");
      await loadProvider();
    }

    setState((state) => ({ ...state, authLoading: false }));
  }

  function logout() {
    auth.logout();
    setState((state) => ({ ...state, account: "" }));
  }

  async function loadProvider() {
    try {
      //@ts-ignore TODO
      if (auth?.provider?.removeAllListeners && !auth.provider?.isTorus)
        auth.provider.removeAllListeners();
      if (auth.provider.on) {
        auth.provider.on("chainChanged", async (chainId: string) => {
          handleChainChanged(formatUnits(chainId, 0) as ChainId);
        });
        auth.provider.on("accountsChanged", async (accounts: string[]) => {
          if (accounts.length !== 0) {
            state.account = accounts[0];
            await login();
          }
        });
        // auth.provider.on('disconnect', async () => {});
      }
      console.log("Provider", auth.provider);
      let network,
        accounts: string[] | undefined = [];
      try {
        //TODO check https://github.com/snapshot-labs/lock/blob/master/connectors/torus.ts
        const connector = auth.provider.connectorName;
        if (connector === "gnosis") {
          //@ts-ignore
          const { chainId: safeChainId, safeAddress } = auth.web3.provider.safe;
          network = { chainId: safeChainId };
          accounts = [safeAddress];
        } else {
          [network, accounts] = await Promise.all([
            auth?.web3?.getNetwork(),
            auth?.web3?.listAccounts(),
          ]);
        }
      } catch (e) {
        console.log(e);
      }

      console.log("Network", network);
      console.log("Accounts", accounts);

      handleChainChanged(network?.chainId);
      const acc = accounts && accounts?.length > 0 ? accounts[0] : null;

      setState((state) => ({
        ...state,
        account: acc,
        walletConnectType: auth.provider.value?.wc?.peerMeta?.name || null,
      }));
    } catch (e) {
      state.account = "";
      return Promise.reject(e);
    }
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
    setState((state) => ({ ...state, network: network }));
  }

  return {
    login,
    logout,
    loadProvider,
    handleChainChanged,
    web3: state,
    web3Account: state.account,
  };
}
 */
