/* eslint-disable no-console */
import LockConnector from "./connector";
import {EthereumProvider} from "@walletconnect/ethereum-provider";

export default class Connector extends LockConnector {
  async connect() {
    console.log("Connect:", this.options, "!!!!");
    const provider: any = await EthereumProvider.init(this.options);
    /////////
    provider.connect({
      chains: [1, 4, 42, 10],
      rpcMap: {
        "1": "https://mainnet.infura.io/v3/a2bdb60cad374dbc9a560323a6222e62",
        "4": "https://rpc.brovider.xyz/4",
        "42": "https://rpc.brovider.xyz/42",
        "10": "https://rpc.brovider.xyz/10"
      },
    });
/////////
    provider.connectorName = "walletconnect";
    provider.enable();
    return provider;
  }

  logout() {
    if (localStorage) {
      localStorage.removeItem("walletconnect");
    }
    return;
  }
}
