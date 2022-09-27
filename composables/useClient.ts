import React, {useState} from 'react'
import client from '../helpers/client';
import clientGnosisSafe from '../helpers/clientGnosisSafe';
import clientEIP712 from '../helpers/clientEIP712';
import { useWeb3 } from './useWeb3';
import { getInstance } from '@snapshot-labs/lock/plugins/vue3';

export function useClient() {
  const [isSending, setIsSending] = useState(false)
  const { web3 } = useWeb3();
  const auth = getInstance();


  const connectorName = () => auth.provider.value?.connectorName

  const isGnosisSafe = 
    () =>
      web3().walletConnectType === 'Gnosis Safe Multisig' ||
      connectorName() === 'gnosis'


  const usePersonalSign = 
    () => connectorName()=== 'walletlink'

  async function send(space: any, type: any, payload: any) {
    setIsSending(true);
    try {
      if (usePersonalSign()) {
        if (payload.proposal) payload.proposal = payload.proposal.id;
        const clientPersonalSign = isGnosisSafe()
          ? clientGnosisSafe
          : client;
        return await clientPersonalSign.broadcast(
          auth.web3,
          web3().account,
          space.id,
          type,
          payload
        );
      }
      return await sendEIP712(space, type, payload);
    } catch (e: any) {
      const errorMessage =
        e?.error_description && typeof e.error_description === 'string'
          ? `Oops, ${e.error_description}`
          : 'Something Went Wrong';
      console.log(errorMessage);
      return e;
    } finally {
      setIsSending(false)
    }
  }

  async function sendEIP712(space: any, type:  any, payload:  any) {
    if (type === 'proposal') {
      let plugins = {};
      if (Object.keys(payload.metadata?.plugins).length !== 0)
        plugins = payload.metadata.plugins;
      return clientEIP712.proposal(auth.web3, web3().account, {
        space: space.id,
        type: payload.type,
        title: payload.name,
        body: payload.body,
        discussion: payload.discussion,
        choices: payload.choices,
        start: payload.start,
        end: payload.end,
        snapshot: payload.snapshot,
        plugins: JSON.stringify(plugins),
        app: 'snapshot'
      });
    } else if (type === 'vote') {
      return clientEIP712.vote(auth.web3, web3().account, {
        space: space.id,
        proposal: payload.proposal.id,
        type: payload.proposal.type,
        choice: payload.choice,
        app: 'snapshot'
      });
    } else if (type === 'delete-proposal') {
      return clientEIP712.cancelProposal(auth.web3, web3().account, {
        space: space.id,
        proposal: payload.proposal.id
      });
    } else if (type === 'settings') {
      return clientEIP712.space(auth.web3, web3().account, {
        space: space.id,
        settings: JSON.stringify(payload)
      });
    }
  }

  return { send, isSending, isGnosisSafe };
}