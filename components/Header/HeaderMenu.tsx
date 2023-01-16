import React, { useState } from "react";
import { Container, Flex, Text, Box, Button } from "theme-ui";
import { menuContainer, fotoContainer, foto, copyIcon, btnLogaut } from "../../styles/styles";
import Icon from "../icon/index";
import iconsObj from "../../assets/icons";
import { notifSucces } from "../../utils/notification";
import { formatAddress, onCopyClick } from "../../utils/formats";
import LogOutPopap from "../modalLogout";
import Identicon from "../Identicon/Identicon";
import styles from "./index.module.css";

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
          <Container sx={{ maxWidth: "150px", ml: "20px" }}>
            <Text
              sx={{
                variant: "text.largeTextBold",
                display: "block",
                textAlign: "left",
                fontSize: "24px",
              }}
            >
              Ralph Edwards
            </Text>

            <Flex sx={{ justifyContent: "left", alignItems: "center", mt: "4px" }}>
              <div className={`${styles.tooltip}`}>
                <button className={`${styles.tooltip_button}`}>
                  <Text sx={{ variant: "text.smallTextMediumUser" }}>{formatAddress(address)}</Text>
                </button>
                <Box
                  onClick={() => {
                    onCopyClick(address);
                    notifSucces("Link copied");
                  }}
                  sx={copyIcon}
                >
                  <Icon style={{ cursor: "pointer" }} src={iconsObj.iconSix} />
                </Box>

                <div className={`${styles.tooltip_container}`}>
                  <div className={`${styles.tooltip_text}`}>{address}</div>
                  <div className={`${styles.tooltip_text_buttom}`}></div>
                </div>
              </div>
            </Flex>
          </Container>
        </Flex>
        <Button sx={{ variant: "buttons.grey", mt: "32px", width: "100%" }}>My Profile</Button>
        <Button
          onClick={() => {
            onCopyClick(address);
            notifSucces("Link copied");
          }}
          sx={{ variant: "buttons.grey", mt: "16px", width: "100%" }}
        >
          Copy Share Link
        </Button>
        <Button sx={{ variant: "buttons.grey", mt: "16px", width: "100%" }}>Switch Wallet</Button>
        <Box
          sx={{
            width: "292px",
            height: "2px",
            backgroundColor: "grey",
            position: "absolute",
            mt: "20px",
            left: 0,
          }}
        />
        <Button onClick={() => setVisible(!visible)} sx={btnLogaut}>
          <Box
            sx={{ width: "24px", height: "24px", position: "absolute", left: "calc(50% - 48px)" }}
          >
            <Icon src={iconsObj.logOut} />
          </Box>
          <Text sx={{ ml: "28px" }}>Log Out</Text>
        </Button>
      </Container>
      {visible ? <LogOutPopap setVisible={setVisible} /> : null}
    </Container>
  );
};
export default HeaderMenu;
