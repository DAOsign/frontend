import React from "react";
import { Flex, Text, Button, Box } from "theme-ui";
import Icon from "../icon/index";
import iconsObj from "../../assets/icons";
import {
  flexContainer,
  textContainer,
  btnContainer,
  containerIcon,
  mainText,
  closeIcon,
} from "./styles";
import { Portal } from "../Portal/Portal";
import { ModalBase } from "../ModalBase/ModalBase";

interface Props {
  isOpen: boolean;
  onExit: () => void;
}

export default function ModalIpfsWarning({ isOpen, onExit }: Props) {
  return (
    <Portal isOpen={isOpen}>
      <ModalBase width="" height="442px">
        <Flex sx={flexContainer}>
          <Box onClick={onExit} sx={closeIcon}>
            <Icon src={iconsObj.xClose} />
          </Box>
          <Box sx={containerIcon}>
            <Icon width={"44px"} height={"44px"} src={iconsObj.frame} />
          </Box>
          <Text sx={mainText}>Note</Text>
          <Text sx={textContainer}>
            IPFS is a public domain. The agreement will not be <br /> visible in our system but can
            potentially be accessed <br /> through IPFS.
          </Text>
          <Button onClick={onExit} sx={btnContainer}>
            Continue
          </Button>
        </Flex>
      </ModalBase>
    </Portal>
  );
}
