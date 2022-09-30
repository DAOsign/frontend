import injected from "../lock/classes/injected";
import walletconnect from "../lock/classes/walletconnect";
import portis from "../lock/classes/portis";
import connectors from "./connectors.json";
import walletlink from "../lock/classes/walletlink";
import gnosis from "../lock/classes/gnosis";
import stargazer from "../lock/classes/stargazer";

export type ConnectorType = keyof typeof connectors;

const options: {
  connectors: { key: string; connector: any; options?: any }[];
} = {
  connectors: [],
};

const lockConnectors = {
  injected,
  walletconnect,
  walletlink,
  portis,
  stargazer,
  gnosis,
};

Object.entries(connectors).forEach((connector) => {
  options.connectors.push({
    key: connector[0],
    //@ts-ignore
    connector: lockConnectors[connector[0]],
    options: (connector[1] as any)?.options,
  });
});

export default options;
