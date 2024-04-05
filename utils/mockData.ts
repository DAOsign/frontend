import EtherImg from "../img/svg/mainnet/ethereum.svg";
import SUIImg from "../img/svg/mainnet/sui.svg";
import PolkadotImg from "../img/svg/mainnet/polkadot.svg";
import OasisImg from "../img/svg/mainnet/oasis.svg";
import { Option } from "../components/Select";

export const networkOptions: Option[] = [
  { label: "Sepolia (ETH Testnet)", value: 1, icon: EtherImg, disabled: false },
  { label: "SUI Testnet", value: 2, icon: SUIImg, disabled: false },
  { label: "Polkadot Testnet", value: 3, icon: PolkadotImg, disabled: true },
  { label: "Oasis Testnet", value: 4, icon: OasisImg, disabled: false },

  { label: "Ethereum Mainnet", value: 5, icon: EtherImg, disabled: true },
  { label: "SUI Mainnet", value: 6, icon: SUIImg, disabled: true },
  { label: "Polkadot Mainnet", value: 7, icon: PolkadotImg, disabled: true },
];
