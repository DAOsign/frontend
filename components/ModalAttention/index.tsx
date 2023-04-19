import React from "react";
import { Flex, Text, Button, Box } from "theme-ui";
import Icon from "../icon/index";
import iconsObj from "../../assets/icons";
import {
  flexContainer,
  textContainer,
  btnContainer,
  containerIcon,
  closeIcon,
  cancelBtn,
  mainText,
} from "../ModalAuthorNotAdded/styles";
import { Portal } from "../Portal/Portal";
import { ModalBase } from "../ModalBase/ModalBase";

interface Props {
  isOpen: boolean;
  onExit: () => void;
  onSubmit: () => void;
  method: string;
}

export default function ModalAttention({ isOpen, onExit, onSubmit, method }: Props) {
  const getMethotName = () => {
    switch (method) {
      case "Shapshot":
        return "Import From Snapshot";
      case "Enter":
        return "Enter Agreement";
      case "Upload":
        return "Upload Agreement";
      default:
        break;
    }
  };

  return (
    <Portal isOpen={isOpen} onClose={onExit}>
      <ModalBase height="442px">
        <Flex sx={flexContainer}>
          <Box onClick={onExit} sx={closeIcon}>
            <Icon src={iconsObj.xClose} />
          </Box>
          <Box sx={containerIcon}>
            <Icon width={"44px"} height={"44px"} src={iconsObj.frame} />
          </Box>
          <Text sx={mainText}>Attention!</Text>
          <Text sx={textContainer}>
            You have {getMethotName()} method in progress. <br />
            You will lose your progress if you select other method. <br />
            Are you sure you want to continue ?
          </Text>
          <Button onClick={onSubmit} sx={btnContainer}>
            Continue
          </Button>
          <Button onClick={onExit} sx={cancelBtn}>
            Cancel
          </Button>
        </Flex>
      </ModalBase>
    </Portal>
  );
}
