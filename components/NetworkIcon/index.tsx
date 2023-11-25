import React, { ImgHTMLAttributes } from "react";
import Image from "next/image";
import { Box } from "theme-ui";
import { networkIcon } from "./styles";
import EtherImg from "../../img/svg/mainnet/ethereum.svg";
import SUIImg from "../../img/svg/mainnet/sui.svg";
import PolkadotImg from "../../img/svg/mainnet/polkadot.svg";

interface Props {
  name: "ethereum" | "sui" | "polkadot";
}

const network = {
  ethereum: EtherImg,
  sui: SUIImg,
  polkadot: PolkadotImg,
};

function NetworkIcon({ name }: Props) {
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
