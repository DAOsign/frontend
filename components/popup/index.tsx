import React from "react";
import { Container, Flex, Text, Box } from "theme-ui";
import { backgroundPopap, popap, popapTitle, popapText } from "./styles";
import Icon from "../icon";
import CloseIcon from "../CloseIcon";
import iconsObj from "../../assets/icons";

export default function Popup({ setVisible }: any) {
  return (
    <Container sx={backgroundPopap}>
      <Container sx={popap}>
        <Box
          onClick={() => {
            setVisible(false);
          }}
          sx={{ mt: "24px", ml: "auto", width: "20px", mr: "24px", cursor: "pointer" }}
        >
          <CloseIcon />
        </Box>
        <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
          <Box sx={{ width: "165px", height: "160px", mb: "24px" }}>
            <Icon width={165} height={160} src={iconsObj.birthday} />
          </Box>
          <Text sx={popapTitle}>Thank You For Subscribing</Text>
          <Text sx={popapText}>You have successfully subscribed to our list!</Text>
        </Flex>
      </Container>
    </Container>
  );
}
