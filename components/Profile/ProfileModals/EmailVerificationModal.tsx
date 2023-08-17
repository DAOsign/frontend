/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Flex, Text, Box, Button, Input, Textarea } from "theme-ui";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { titleEmail, background, cardInput, resentBtn, popup, xClose, formEmail } from "./styles";
import Icon from "../../icon";
import iconsObj from "../../../assets/icons";

export default function EmailVerificationModal({ address, setVisible }: any) {
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
          <Text sx={titleEmail}>Email Verification</Text>
          <Text sx={{ marginBottom: "12px", variant: "text.smallTextMediumUser" }}>
            You're almost there. We sent an email to johndoe@mai.com
          </Text>
          <Text sx={{ marginBottom: "56px", variant: "text.smallTextMediumUser" }}>
            If you don't see it, you may check your spam folder.
          </Text>
          <Flex sx={{ flexDirection: "column", textAlign: "left", width: "100%" }}>
            <Text sx={{ variant: "forms.label", textAlign: "left" }}>
              Past your verification link
            </Text>
            <Input sx={{ ...cardInput, margin: "0 0 4px 0" }} />
            <Button sx={resentBtn}>Resent Email</Button>
          </Flex>
        </Flex>
      </Container>
    </Container>
  );
}
