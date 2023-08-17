/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Flex, Text, Box, Button, Input, Textarea } from "theme-ui";
import { useWeb3 } from "../../../hooks/useWeb3";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import {
  titlePopup,
  background,
  greenArrow,
  resentBtn,
  cardInput,
  formEmail,
  xClose,
  popup,
} from "./styles";
import Icon from "../../icon";
import iconsObj from "../../../assets/icons";

export default function SuccessModal({ address, setVisible }: any) {
  const { width } = useWindowDimensions();

  return (
    <Container sx={background}>
      <Container sx={popup}>
        <Flex sx={formEmail}>
          <Box
            onClick={() => {
              setVisible(false);
            }}
            sx={xClose}
          >
            <Icon width={24} height={24} src={iconsObj.xClose} />
          </Box>
          <Box sx={greenArrow}>
            <Icon width={100} height={100} src={iconsObj.greenArrow} />
          </Box>
          <Text sx={{ ...titlePopup, marginBottom: "16px" }}>Success</Text>
          <Text sx={{ variant: "text.smallTextMediumUser" }}>
            You're email address has been verified
          </Text>
        </Flex>
      </Container>
    </Container>
  );
}
