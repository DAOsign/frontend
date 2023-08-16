import React from "react";
import { Container, Flex, Text, Box, Button, Input, Textarea } from "theme-ui";
import { useWeb3 } from "../../../hooks/useWeb3";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { titlePopup, background, cardInput, userFoto, cardBtn, popup } from "./styles";
import Icon from "../../icon";
import Identicon from "../../Identicon/Identicon";
import iconsObj from "../../../assets/icons";

export default function EditProfileModal({ address, setVisible }: any) {
  const { width } = useWindowDimensions();

  return (
    <Container sx={background}>
      <Container sx={popup}>
        <Box
          onClick={() => {
            setVisible(false);
          }}
          sx={{ ml: "auto", width: "20px", cursor: "pointer" }}
        >
          <Icon width={24} height={24} src={iconsObj.xClose} />
        </Box>
        <Flex sx={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <Text sx={titlePopup}>Edit Profile</Text>
          <Identicon account={address} size={width && width > 375 ? 100 : 90} sx={userFoto} />
          <Flex sx={{ flexDirection: "column" }}>
            <Text sx={{ variant: "forms.label" }}>Name</Text>
            <Input sx={cardInput} />
            <Text sx={{ variant: "forms.label" }}>Bio</Text>
            <Textarea sx={{ ...cardInput, height: "150px", borderColor: "none" }} />
          </Flex>
          <Button sx={cardBtn}>Save Changes</Button>
        </Flex>
      </Container>
    </Container>
  );
}
