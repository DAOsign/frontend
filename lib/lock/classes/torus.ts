/* eslint-disable no-console */
const get = () =>
  import(/* webpackChunkName: "torus" */ "@toruslabs/torus-embed");
import LockConnector from "./connector";

export default class Connector extends LockConnector {
  //@ts-ignore
  async connect() {
    let provider;
    try {
      const Torus = (await get()).default;
      const torus = new Torus({});
      await torus.init({ showTorusButton: false });
      await torus.login({});
      provider = torus.provider;
    } catch (e) {
      console.error(e);
    }
    //@ts-ignore
    provider.connectorName = "torus";
    return provider;
  }
}
