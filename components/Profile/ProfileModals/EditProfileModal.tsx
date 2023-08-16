import React from "react";
import { Container, Flex, Text, Box, Button } from "theme-ui";
import { useWeb3 } from "../../../hooks/useWeb3";
import WalletAddress from "../WalletAddress";
import { titlePopup, background, iconCopy, button, popup } from "./styles";
import Icon from "../../icon";
import iconsObj from "../../../assets/icons";

export default function EditProfileModal({ setVisible }: any, { address }: any) {
  const { account } = useWeb3();

  return (
    <Container sx={background}>
      <Container sx={popup}>
        <Box
          onClick={() => {
            setVisible(false);
          }}
          sx={{ mt: "24px", ml: "auto", width: "20px", mr: "24px", cursor: "pointer" }}
        >
          <Icon width={24} height={24} src={iconsObj.xClose} />
        </Box>
        <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
          {/* <Button sx={button} type="button">
            Verified
          </Button>
          <Box sx={{ width: "100px", height: "100px", marginBottom: "24px" }}>
            <Icon src={iconsObj.verificationDigital} width={100} height={100} alt="socialIcon" />
          </Box> */}
          <Text sx={titlePopup}>Edit Profile</Text>
        </Flex>
      </Container>
    </Container>
  );
}
