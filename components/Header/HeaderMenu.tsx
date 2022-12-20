import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Flex, Text, Box, Button } from "theme-ui";
import { menuContainer, fotoContainer, foto, copyIcon } from "../../styles/styles";
import Icon from "../icon/index";
import iconsObj from "../../assets/icons";
import { notifSucces } from "../../utils/notification";
import { formatAddress, onCopyClick } from "../../utils/formats";
import LogOutPopap from "../modalLogaut";
import Identicon from "../Identicon/Identicon";

const HeaderMenu = ({ address, setVisibleMenu, visibleMenu }: any) => {
  const [visible, setVisible] = useState(false);

  return (
    <Container
      className={visibleMenu ? "visible" : "close"}
      onClick={() => setVisibleMenu(false)}
      sx={menuContainer}
    >
      <Container
        className={visibleMenu ? "visible" : "close"}
        onClick={e => e.stopPropagation()}
        sx={fotoContainer}
      >
        <Flex>
          <Identicon account={address} size={60} sx={foto} />
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
                sx={copyIcon}
              >
                <Icon style={{ cursor: "pointer" }} src={iconsObj.iconSix} />
              </Box>
            </Flex>
            <ToastContainer />
          </Container>
        </Flex>
        <Button
          onClick={() => {
            onCopyClick(address);
            notifSucces("Link copied");
          }}
          sx={{ variant: "buttons.grey", mt: "24px", width: "100%" }}
        >
          Copy Share Link
        </Button>
        <Button sx={{ variant: "buttons.grey", mt: "16px", width: "100%" }}>My Profile</Button>
        <Button sx={{ variant: "buttons.grey", mt: "16px", width: "100%" }}>Switch Wallet</Button>
        <Box
          sx={{
            width: "292px",
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
