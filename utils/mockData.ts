import EtherImg from "../img/svg/mainnet/ethereum.svg";
import SUIImg from "../img/svg/mainnet/sui.svg";
import PolkadotImg from "../img/svg/mainnet/polkadot.svg";
import { Option } from "../components/Select";

export const networkOptions: Option[] = [
  { label: "Ethereum Mainnet", value: 1, icon: EtherImg },
  { label: "SUI Mainnet", value: 2, icon: SUIImg },
  { label: "Polkadot Mainnet", value: 3, icon: PolkadotImg },
  //{ title: "Ethereum Testnet", value: 4, icon: EtherImg },
];
