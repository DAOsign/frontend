import React from "react";
import { Container, Text, Box, Flex, Link } from "theme-ui";
import Icon from "../../icon";
import iconsObj from "../../../assets/icons";
import { cardContainer, link, socialTitle } from "./styles";

export default function CardDigitalIdentifity() {
  return (
    <Container sx={cardContainer}>
      <Flex
        sx={{
          paddingTop: "24px",
          paddingLeft: "32px",
          paddingRight: "16px",
          flexDirection: "column",
        }}
      >
        <Flex
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Flex>
            <Box sx={{ width: "24px", height: "24px" }}>
              <Icon width={24} height={24} src={iconsObj.twitter} />
            </Box>
            <Text sx={socialTitle}>Twitter Verification</Text>
          </Flex>
          <Box sx={{ width: "24px", height: "24px" }}>
            <Icon src={iconsObj.greenArrow} width={24} height={24} />
          </Box>
        </Flex>
        <Link sx={link}>
          View proof
          <Box sx={{ width: "14px", height: "14px", marginLeft: "4px" }}>
            <Icon src={iconsObj.iconArrow} width={14} height={14} />
          </Box>
        </Link>
      </Flex>
    </Container>
  );
}
