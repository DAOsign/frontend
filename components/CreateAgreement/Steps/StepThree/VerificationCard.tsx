import React from "react";
import { Box, Text, Flex } from "theme-ui";
import { verificationCardStyles, iconComingSoon } from "./styles";
import Image from "next/image";
import Icon from "../../../icon";
import CheckboxComponent from "../../../Checkbox";
import iconsObj from "../../../../assets/icons";
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
  const isAnonymus = title === "Anonymus";
  const isNotarizedIdentity = title === "Notarized Identity";

  return (
    <Box
      sx={{
        ...verificationCardStyles,

        cursor: disabled ? "no-drop" : "pointer",
        backgroundColor: isAnonymus ? "#fff" : "#F7F7FB",
        "&:hover": { boxShadow: disabled ? "unset" : "0 0 11px rgba(33,33,33,.2)" },
        "@media screen and (max-width: 719px)": {
          height: isNotarizedIdentity ? "167px" : "183px",
        },
      }}
      onClick={onClick}
    >
      <Flex>
        <Box style={{ position: "relative" }} className="card_head">
          <CheckboxComponent disabled={disabled} checked={checked} />
        </Box>
        <Box className="card_body">
          <Text className="title">{title}</Text>
          <Text as="p" className="description">
            {description}
          </Text>
        </Box>
      </Flex>
      <Flex>
        {!isAnonymus && (
          <Box sx={iconComingSoon}>
            <Icon src={iconsObj.comingSoon} />
          </Box>
        )}
        <Box className="card_tail">
          <Box className="image_container">
            <Image src={img} alt={title} />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
