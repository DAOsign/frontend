import React, { useState } from "react";
import { Flex, Text, Button, Box, Container } from "theme-ui";
import Icon from "../icon/index";
import iconsObj from "../../assets/icons";
import {
  flexContainer,
  textContainer,
  btnContainer,
  containerIcon,
  secondText,
  container,
  mainText,
  closeIcon,
  bg,
} from "./styles";
import { useMutation } from "urql";
import { logoutMutation } from "../../modules/graphql/mutations";
import { useWeb3 } from "../../hooks/useWeb3";
import { clearToken } from "../../utils/token";
import { useRouter } from "next/router";
import { Portal } from "../Portal/Portal";

export default function ModalSwitchNetwork({
  isOpen,
  onExit,
}: {
  isOpen: boolean;
  onExit: () => any;
}) {
  const [, logoutRequest] = useMutation(logoutMutation);
  const { push } = useRouter();
  const { logout, switchToMainnet } = useWeb3();

  return (
    <Portal sx={bg} isOpen={isOpen} onClose={() => {}}>
      <Container sx={bg}>
        <Flex sx={container}>
          <Flex sx={flexContainer}>
            {/* <Box onClick={() => setVisible(false)} sx={closeIcon}>
            <Icon src={iconsObj.xClose} />
          </Box> */}
            <Box sx={containerIcon}>
              <Icon width={"44px"} height={"44px"} src={iconsObj.frame} />
            </Box>
            <Text sx={mainText}>Switch to Ethereum Mainnet</Text>
            <Text sx={textContainer}>Switch to Ethereum Mainnet to access the website</Text>
            <Button onClick={switchToMainnet(onExit)} sx={btnContainer}>
              Switch
            </Button>
            {/* <Text onClick={() => setVisible(false)} sx={secondText}>
            Cancel
          </Text> */}
          </Flex>
        </Flex>
      </Container>
    </Portal>
  );
}
