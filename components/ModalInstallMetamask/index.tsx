import React from "react";
import Icon from "../icon";
import iconsObj from "../../assets/icons";
import { Container, Flex, Text, Box, Link, Button } from "theme-ui";
import CloseIcon from "../IconComponent/CloseIcon";
import {
  flexContainer,
  textContainer,
  containerIcon,
  btnContainer,
  secondText,
  container,
  closeIcon,
  mainText,
  bg,
} from "./styles";

export default function ModalInstallMetamask({ setVisible }: any) {
  return (
    <Container sx={bg}>
      <Flex sx={container}>
        <Flex sx={flexContainer}>
          <Box onClick={() => setVisible(false)} sx={closeIcon}>
            <CloseIcon />
          </Box>
          <Box sx={containerIcon}>
            <Icon width={"44px"} height={"44px"} src={iconsObj.frame} />
          </Box>
          <Text sx={mainText}>Oops...</Text>
          <Text sx={textContainer}>
            No MetaMask detected. Please install the MetaMask browser extension to interact with
            this website
          </Text>
          <Link
            sx={{ m: "0 auto", width: "fit-content", display: "inline-block", mt: "24px" }}
            href="https://metamask.io/download/"
            target="_blank"
          >
            <Button sx={btnContainer}>Install Metamask</Button>
          </Link>
          <Text onClick={() => setVisible(false)} sx={secondText}>
            Cancel
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
}
