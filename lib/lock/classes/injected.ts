import LockConnector from "./connector";

export default class Connector extends LockConnector {
  async connect() {
    let provider;
    if (window["ethereum"]) {
      provider = window["ethereum"];

      try {
        const accounts = await window["ethereum"].request({ method: "eth_accounts" });
        if (accounts.length > 0) {
          return provider;
        }

        await window["ethereum"].request({ method: "eth_requestAccounts" });
      } catch (e) {
        console.error(e);
        if (e.code === 4001) return;
      }
    } else if (window["web3"]) {
      provider = window["web3"].currentProvider;
    }
    return provider;
  }

  async isLoggedIn() {
    if (!window["ethereum"]) return false;

    const accounts = await window["ethereum"].request({ method: "eth_accounts" });
    console.log('window["ethereum"]', window["ethereum"]);
    console.log('accounts', accounts);
    await new Promise((r) => setTimeout(r, 400));

    return accounts.length > 0;
  }
}
