import networks from "../lib/snapshot/networks.json";
import { ChainId } from "../modules/types";

export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export const DEFAULT_CHAIN_ID = (process.env.NEXT_PUBLIC_DEFAULT_NETWORK ||
  Object.keys(networks)[0]) as ChainId;

enum NetworksEnum {
  ETHEREUM = "ethereum",
  SUI = "sui",
  POLKADOT = "polkadot",
}

export const networksTitle = {
  [NetworksEnum.ETHEREUM]: "Goerli (ETH Testnet)",
  [NetworksEnum.SUI]: "SUI Testnet",
  [NetworksEnum.POLKADOT]: "Polkadot Testnet",
};
