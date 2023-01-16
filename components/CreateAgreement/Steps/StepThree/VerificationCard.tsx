import React from "react";
import { Box, Checkbox, Text } from "theme-ui";
import { verificationCardStyles } from "./styles";
import Image from "next/image";
import Icon from "../../../icon";
import "react-tooltip/dist/react-tooltip.css";
import CheckboxComponent from "../../../Checkbox";

export interface Props {
  title: string;
  description: string;
  img: Icon;
  checked: boolean;
  disabled: boolean;
  onClick: () => void;
}

export default function VerificationCard({
  title,
  description,
  img,
  checked,
  onClick,
  disabled,
}: Props) {
  return (
    <Box sx={verificationCardStyles} onClick={onClick}>
      <Box style={{ position: "relative" }} className="card_head">
        <CheckboxComponent disabled={disabled} checked={checked} />
      </Box>
      <Box className="card_body">
        <Text className="title">{title}</Text>
        <Text as="p" className="description">
          {description}
        </Text>
      </Box>
      <Box className="card_tail">
        <Box className="image_container">
          <Image src={img} alt={title} />
        </Box>
      </Box>
    </Box>
  );
}
