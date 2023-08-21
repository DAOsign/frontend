import React, { ReactElement, ReactNode } from "react";
import { Flex, Text, Button, Box } from "theme-ui";
import Icon from "../icon/index";
import iconsObj from "../../assets/icons";
import {
  flexContainer,
  closeIcon,
  containerIcon,
  mainText,
  textContainer,
} from "../ModalIpfsWarning/styles";
import CloseIcon from "../CloseIcon";
import { Portal } from "../Portal/Portal";
import { ModalBase } from "../ModalBase/ModalBase";

interface Props {
  isOpen: boolean;
  error: boolean;
  onExit: () => void;
  title?: string;
  content: ReactNode;
}

export default function ModalSignStatus({
  isOpen,
  onExit,
  error,
  title = "Congratulations!",
  content,
}: Props) {
  return (
    <Portal isOpen={isOpen} onClose={onExit}>
      <ModalBase width={undefined} height={error ? "382px" : "360px"}>
        <Flex sx={flexContainer}>
          <Box onClick={onExit} sx={closeIcon}>
            <CloseIcon />
          </Box>
          <Box sx={{ ...containerIcon, backgroundColor: error ? "#FF5269" : "#44F268", p: "32px" }}>
            {error ? (
              <Icon width={"36px"} height={"36px"} src={iconsObj.errorSign} />
            ) : (
              <Icon width={"36px"} height={"36px"} src={iconsObj.success} />
            )}
          </Box>
          <Text sx={mainText}>{!error ? title : "Signing Error"}</Text>
          <Text sx={textContainer}>
            {error ? (
              <div>
                The signature validation has failed. <br />
                Please sign the Agreement again
              </div>
            ) : (
              content
            )}
          </Text>
        </Flex>
      </ModalBase>
    </Portal>
  );
}
