import React from "react";
import { Box, Checkbox, Text } from "theme-ui";
import { verificationCardStyles } from "./styles";
import Image from "next/image";
import Icon from "../../../icon";
import "react-tooltip/dist/react-tooltip.css";

export interface Props {
  title: string;
  description: string;
  img: Icon;
  checked: boolean;
  onClick: () => void;
}

export default function VerificationCard({ title, description, img, checked, onClick }: Props) {
  return (
    <Box sx={verificationCardStyles} onClick={onClick}>
      <Box className="card_head">
        <Checkbox checked={checked} />
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
