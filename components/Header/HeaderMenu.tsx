import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Flex, Text, Box, Button } from "theme-ui";
import { menuContainer, fotoContainer, foto } from "../../styles/styles";
import Icon from "../icon/index";
import iconsObj from "../../assets/icons";
import { notifSucces } from "../../utils/notification";
import { formatAddress, onCopyClick } from "../../utils/formats";
import LogOutPopap from "../modalLogaut";

const HeaderMenu = ({ address, setVisibleMenu }: any) => {
  const [visible, setVisible] = useState(false);

  return (
    <Container onClick={() => setVisibleMenu(false)} sx={menuContainer}>
      <Container onClick={e => e.stopPropagation()} sx={fotoContainer}>
        <Flex>
          <Container sx={foto}></Container>
          <Container sx={{ maxWidth: "190px", pl: "16px" }}>
            <Text sx={{ variant: "text.largeTextBold", display: "block", textAlign: "left" }}>
              Ralph Edwards
            </Text>
            <Flex
              sx={{ justifyContent: "left", alignItems: "center", marginBottom: "24px", mt: "4px" }}
            >
              <Text sx={{ variant: "text.smallTextMediumUser" }}>{formatAddress(address)}</Text>
              <Box
                onClick={() => {
                  onCopyClick(address);
                  notifSucces("Link copied");
                }}
                sx={{ marginLeft: "5px", width: "10px", height: "10px" }}
              >
                <Icon style={{ cursor: "pointer" }} src={iconsObj.iconSix} />
              </Box>
            </Flex>
            <ToastContainer icon />
          </Container>
        </Flex>
        <Button sx={{ variant: "buttons.grey", mt: "24px", width: "100%" }}>Copy Share Link</Button>
        <Button sx={{ variant: "buttons.grey", mt: "16px", width: "100%" }}>My Profile</Button>
        <Button sx={{ variant: "buttons.grey", mt: "16px", width: "100%" }}>Switch Wallet</Button>
        <Box
          sx={{
            width: "341px",
            height: "2px",
            backgroundColor: "grey",
            position: "absolute",
            mt: "32px",
            left: 0,
          }}
        />
        <Button
          onClick={() => setVisible(!visible)}
          sx={{
            variant: "buttons.grey",
            mt: "50px",
            textAlign: "left",
            border: "none",
            width: "100%",
          }}
        >
          <Box sx={{ width: "24px", height: "24px", position: "absolute" }}>
            <Icon src={iconsObj.logOut} />
          </Box>
          <Text sx={{ ml: "40px" }}>Log Out</Text>
        </Button>
      </Container>
      {visible ? <LogOutPopap setVisible={setVisible} /> : null}
    </Container>
  );
};
export default HeaderMenu;
