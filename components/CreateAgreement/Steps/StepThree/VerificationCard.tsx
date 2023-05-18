import React from "react";
import { Box, Text, Flex } from "theme-ui";
import { verificationCardStyles } from "./styles";
import Image from "next/image";
import Icon from "../../../icon";
import CheckboxComponent from "../../../Checkbox";
import "react-tooltip/dist/react-tooltip.css";

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
    <Box
      sx={{
        ...verificationCardStyles,
        cursor: disabled ? "no-drop" : "pointer",
        "&:hover": { boxShadow: "unset", border: "2px solid #D8D8E2" },
      }}
      onClick={onClick}
    >
      <Flex>
        <Box style={{ position: "relative" }} className="card_head">
          <CheckboxComponent disabled={disabled} checked={checked} />
        </Box>
        <Box
          sx={{
            "@media screen and (max-width: 480px)": {
              maxWidth: "140px",
            },
          }}
          className="card_body"
        >
          <Text className="title">{title}</Text>
          <Text as="p" className="description">
            {description}
          </Text>
        </Box>
      </Flex>
      <Flex>
        <Box className="card_tail">
          <Box className="image_container">
            <Image src={img} alt={title} />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
