import networks from "../lib/snapshot/networks.json";
import { ChainId } from "../modules/types";

import EtherImg from "../img/svg/mainnet/ethereum.svg";
import SUIImg from "../img/svg/mainnet/sui.svg";
import PolkadotImg from "../img/svg/mainnet/polkadot.svg";
import OasisImg from "../img/svg/mainnet/oasis.svg";
import NearImg from "../img/svg/mainnet/near.svg";
import { Option } from "../components/Select";

export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export const DEFAULT_CHAIN_ID = (process.env.NEXT_PUBLIC_DEFAULT_NETWORK ||
  Object.keys(networks)[0]) as ChainId;


export const networkOptions: Option[] = [
  { label: "Sepolia (ETH Testnet)", title: "Goerli (ETH Testnet)", value: 1, icon: EtherImg, disabled: false },
  { label: "NEAR Testnet", value: 6, title: "NEAR Testnet", icon: NearImg, disabled: false },
  { label: "SUI Testnet", value: 2, title: "SUI Testnet", icon: SUIImg, disabled: false },
  { label: "Polkadot Testnet", value: 5, title: "Polkadot Testnet", icon: PolkadotImg, disabled: false },
  { label: "Oasis Testnet", value: 4, title: "Oasis Testnet", icon: OasisImg, disabled: false },
  { label: "Ethereum Mainnet", title: "ETH Mainnet", value: 3, icon: EtherImg, disabled: true },
  { label: "SUI Mainnet", title: "SUI Mainnet", value: 7, icon: SUIImg, disabled: true },
  { label: "Polkadot Mainnet", title: "Polkadot Mainnet", value: 8, icon: PolkadotImg, disabled: true },
];
