import React from "react";
import { Box, Checkbox, Label, Text } from "theme-ui";
import { verificationCardStyles } from "./styles";
import Image from "next/image";
import Icon from "../../../icon";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import iconsObj from "../../../../assets/icons";
type Props = {
  title: string;
  description: string;
  img: Icon;
  checked?: boolean;
};

export default function VerificationCard({ title, description, img, checked }: Props) {
  return (
    <Box sx={verificationCardStyles}>
      <Box className="card_head">
        <Checkbox defaultChecked={checked} />
        <Text>{title}</Text>
        <Box className="tooltip" id={`${title}_tooltip`}>
          <Image src={iconsObj.infoCircle} alt="tooltip" />
        </Box>
        <Tooltip anchorId={`${title}_tooltip`} place="top" content={"Hello world!"} />
      </Box>
      <Box className="card_body">
        <Box className="image_container">
          <Image src={img} alt={title} />
        </Box>
        <Text as="p" className="description">
          {description}
        </Text>
      </Box>
    </Box>
  );
}
