import React from "react";
import { Container, Flex, Text, Box, Button } from "theme-ui";
import { menuContainer, fotoContainer, foto } from "../../styles/styles";
import Icon from "../../components/icon/index";
import iconsObj from "../../assets/icons";
import { formatAddress } from "../../utils/formats";

const MobileMenu = ({ address }: any) => {
  return (
    <Container sx={menuContainer}>
      <Container sx={fotoContainer}>
        <Flex>
          <Container sx={foto}></Container>
          <Container sx={{ maxWidth: "190px", m: "0 0 0 16px" }}>
            <Text
              sx={{
                variant: "text.largeTextBold",
                display: "block",
                textAlign: "left",
              }}
            >
              Ralph Edwards
            </Text>
            <Flex sx={{ justifyContent: "left", marginBottom: "24px", mt: "4px" }}>
              <Text sx={{ variant: "text.smallTextMediumUser" }}>{formatAddress(address)}</Text>
              <Box sx={{ marginLeft: "5px" }}>
                <Icon style={{ cursor: "pointer" }} src={iconsObj.iconSix} />
              </Box>
            </Flex>
          </Container>
        </Flex>
        <Button sx={{ variant: "buttons.grey", mt: "24px" }}>Copy Share Link</Button>
        <Button sx={{ variant: "buttons.grey", mt: "16px" }}>My Profile</Button>
      </Container>
    </Container>
  );
};
export default MobileMenu;
