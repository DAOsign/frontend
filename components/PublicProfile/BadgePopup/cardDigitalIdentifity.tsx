import React from "react";
import { Container, Text, Box, Flex } from "theme-ui";
import Icon from "../../icon";
import iconsObj from "../../../assets/icons";
import { cardContainer } from "./styles";

export default function CardDigitalIdentifity() {
  return (
    <Container sx={cardContainer}>
      <Flex
        sx={{
          paddingTop: "24px",
          paddingLeft: "32px",
          paddingRight: "16px",
          justifyContent: "space-between",
        }}
      >
        <Flex>
          <Box sx={{ width: "24px", height: "24px" }}>
            <Icon width={24} height={24} src={iconsObj.twitter} />
          </Box>
          <Text>Twitter Verification</Text>
        </Flex>
        <Box sx={{ width: "24px", height: "24px" }}>
          <Icon src={iconsObj.greenArrow} width={24} height={24} />
        </Box>
      </Flex>
    </Container>
  );
}
