import React, { ImgHTMLAttributes } from "react";
import Image from "next/image";
import { Box } from "theme-ui";
import { networkIcon } from "./styles";

interface Props {
  icon: string;
}

function NetworkIcon({ icon }: Props) {
  
  if (!icon) {
    return null;
  }

  return (
    <Box sx={networkIcon}>
      <Image src={icon} />
    </Box>
  );
}

export default NetworkIcon;
