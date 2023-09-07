/* eslint-disable no-console */
import LockConnector from "./connector";
import {EthereumProvider} from "@walletconnect/ethereum-provider";

export default class Connector extends LockConnector {
  async connect() {
    console.log("Connect:", this.options, "!!!!");
    const provider: any = await EthereumProvider.init(this.options);
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
