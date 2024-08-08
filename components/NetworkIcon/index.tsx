import React, { ImgHTMLAttributes } from "react";
import Image from "next/image";
import { Box } from "theme-ui";
import { networkIcon } from "./styles";
import EtherImg from "../../img/svg/mainnet/ethereum.svg";
import SUIImg from "../../img/svg/mainnet/sui.svg";
import PolkadotImg from "../../img/svg/mainnet/polkadot.svg";
import OasisImg from "../../img/svg/mainnet/oasis.svg";
import NearImg from "../../img/svg/mainnet/near.svg";

interface Props {
  networkId: number;
}

const network = {
  ethereum: EtherImg,
  sui: SUIImg,
  polkadot: PolkadotImg,
  oasis: OasisImg,
  near: NearImg
};

export const networkName = [null, "ethereum", "sui", "polkadot", "oasis", null, "near"];

function NetworkIcon({ networkId }: Props) {
  const name = networkName[networkId] as string;

  if (!network[name]) {
    return null;
  }

  return (
    <Box sx={networkIcon}>
      <Image src={network[name]} />
    </Box>
  );
}

export default NetworkIcon;
