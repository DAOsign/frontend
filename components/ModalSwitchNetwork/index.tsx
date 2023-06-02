import React from "react";
import { Flex, Text, Button, Box, Container } from "theme-ui";
import Icon from "../icon/index";
import iconsObj from "../../assets/icons";
import {
  flexContainer,
  textContainer,
  btnContainer,
  containerIcon,
  container,
  mainText,
  bg,
} from "./styles";
import { useWeb3 } from "../../hooks/useWeb3";
import { Portal } from "../Portal/Portal";

export default function ModalSwitchNetwork({ isOpen }: { isOpen: boolean }) {
  const { switchToMainnet } = useWeb3();

  return (
    <Portal sx={bg} isOpen={isOpen} onClose={() => {}}>
      <Container sx={bg}>
        <Flex sx={container}>
          <Flex sx={flexContainer}>
            <Box sx={containerIcon}>
              <Icon width={"44px"} height={"44px"} src={iconsObj.frame} />
            </Box>
            <Text sx={mainText}>Switch to Ethereum Mainnet</Text>
            <Text sx={textContainer}>Switch to Ethereum Mainnet to access the website</Text>
            <Button onClick={switchToMainnet} sx={btnContainer}>
              Switch
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Portal>
  );
}
