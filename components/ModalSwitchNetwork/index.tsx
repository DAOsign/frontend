import React from "react";
import { Flex, Text, Button, Box, Container } from "theme-ui";
import Icon from "../icon/index";
import iconsObj from "../../assets/icons";
import networks from "../../lib/snapshot/networks.json";
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
import { DEFAULT_CHAIN_ID } from "../../constants/common";

export default function ModalSwitchNetwork({ isOpen }: { isOpen: boolean }) {
  const { switchToDefaultNetwork } = useWeb3();
  const defaultNetworkName = networks[DEFAULT_CHAIN_ID].name;

  return (
    <Portal sx={bg} isOpen={isOpen} onClose={() => {}}>
      <Container sx={bg}>
        <Flex sx={container}>
          <Flex sx={flexContainer}>
            <Box sx={containerIcon}>
              <Icon width={"44px"} height={"44px"} src={iconsObj.frame} />
            </Box>
            <Text sx={mainText}>Switch to {defaultNetworkName}</Text>
            <Text sx={textContainer}>Switch to {defaultNetworkName} to access the website</Text>
            <Button onClick={switchToDefaultNetwork} sx={btnContainer}>
              Switch
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Portal>
  );
}
