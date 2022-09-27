import React from 'react'
import { ExternalProvider, JsonRpcFetchFunc, Web3Provider } from '@ethersproject/providers';
import { getInstance } from '@snapshot-labs/lock/plugins/vue3';
import networks from '@snapshot-labs/snapshot.js/src/networks.json';
import { formatUnits } from '@ethersproject/units';

//@ts-ignore
let auth: { login: (arg0: string) => any; provider: { value: ExternalProvider | JsonRpcFetchFunc; }; web3: Web3Provider; logout: () => void; };
//@ts-ignore
const defaultNetwork = Object.keys(networks)[0];

const state = <{
  account: string;
  network: Record<string, any>;
  authLoading: boolean;
  walletConnectType: string | null;
}>({
  account: '',
  //@ts-ignore
  network: networks[defaultNetwork],
  authLoading: false,
  walletConnectType: null
});

export function useWeb3() {
  async function login(connector = 'injected') {
    auth = getInstance();
    state.authLoading = true;
    await auth.login(connector);
    if (auth.provider.value) {
      auth.web3 = new Web3Provider(auth.provider.value, 'any');
      await loadProvider();
    }
    state.authLoading = false;
  }

  function logout() {
    auth = getInstance();
    auth.logout();
    state.account = '';
  }

  async function loadProvider() {
    try {
      if (
        //@ts-ignore
        auth.provider.value.removeAllListeners &&
           //@ts-ignore
        !auth.provider.value.isTorus
      )
         //@ts-ignore
        auth.provider.value.removeAllListeners();
         //@ts-ignore
      if (auth.provider.value.on) {
         //@ts-ignore
        auth.provider.value.on('chainChanged', async chainId => {
          handleChainChanged(parseInt(formatUnits(chainId, 0)));
        });
        //@ts-ignore
        auth.provider.value.on('accountsChanged', async accounts => {
          if (accounts.length !== 0) {
            state.account = accounts[0];
            await login();
          }
        });
        // auth.provider.on('disconnect', async () => {});
      }
      console.log('Provider', auth.provider.value);
      let network, accounts;
      try {
           //@ts-ignore
        const connector = auth.provider.value?.connectorName;
        if (connector === 'gnosis') {
               //@ts-ignore
          const { chainId: safeChainId, safeAddress } = auth.web3.provider.safe;
          network = { chainId: safeChainId };
          accounts = [safeAddress];
        } else {
          [network, accounts] = await Promise.all([
            auth.web3.getNetwork(),
            auth.web3.listAccounts()
          ]);
        }
      } catch (e) {
        console.log(e);
      }
      console.log('Network', network);
      console.log('Accounts', accounts);
         //@ts-ignore
      handleChainChanged(network.chainId);
         //@ts-ignore
      const acc = accounts.length > 0 ? accounts[0] : null;

      state.account = acc;
         //@ts-ignore
      state.walletConnectType = auth.provider.value?.wc?.peerMeta?.name || null;
    } catch (e) {
      state.account = '';
      return Promise.reject(e);
    }
  }

  function handleChainChanged(chainId: any) {
    //@ts-ignore
    if (!networks[chainId]) {
           //@ts-ignore
      networks[chainId] = {
           //@ts-ignore
        ...networks[defaultNetwork],
        chainId,
        name: 'Unknown',
        network: 'unknown',
        unknown: true
      };
    }
    //@ts-ignore
    state.network = networks[chainId];
  }

  return {
    login,
    logout,
    loadProvider,
    handleChainChanged,
    web3: () => state,
    web3Account: () => state.account
  };
}