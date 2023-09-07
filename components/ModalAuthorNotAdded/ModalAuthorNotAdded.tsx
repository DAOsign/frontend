import React from "react";
import { Flex, Text, Button, Box } from "theme-ui";
import Icon from "../icon/index";
import iconsObj from "../../assets/icons";
import CloseIcon from "../IconComponent/CloseIcon";
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

export default function ModalAuthorNotAdded({ isOpen, onExit }: Props) {
  return (
    <Portal isOpen={isOpen} onClose={onExit}>
      <ModalBase height="442px">
        <Flex sx={flexContainer}>
          <Box onClick={onExit} sx={closeIcon}>
            <CloseIcon />
          </Box>
          <Box sx={containerIcon}>
            <Icon width={"44px"} height={"44px"} src={iconsObj.frame} />
          </Box>
          <Text sx={mainText}>Note</Text>
          <Text sx={textContainer}>
            To Create Agreement you should be added as Signer <br /> or Observer. Please add
            yourself by pressing the button <br /> {'"Add me"'}
          </Text>
          <Button onClick={onExit} sx={btnContainer}>
            Continue
          </Button>
        </Flex>
      </ModalBase>
    </Portal>
  );
}
