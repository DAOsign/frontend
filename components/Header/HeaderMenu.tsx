import React, { useState } from "react";
import { Container, Flex, Text, Box, Button } from "theme-ui";
import { notifComingSoon, notifSuccess } from "../../utils/notification";
import {
  menuContainer,
  fotoContainer,
  foto,
  copyIcon,
  btnLogaut,
  iconLogOut,
} from "../../styles/styles";
import { formatAddress, onCopyClick } from "../../utils/formats";
import LogOutPopap from "../modalLogout";
import Identicon from "../Identicon/Identicon";
import Tooltip from "../Tooltip";
import CopyIcon from "../CopyIcon";

const HeaderMenu = ({
  setVisibleLogOut,
  setVisibleMenu,
  visibleLogOut,
  visibleMenu,
  address,
}: any) => {
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
          <Identicon account={address} size={80} sx={foto} />
          <Container sx={{ maxWidth: "150px", ml: "16px", mt: "15px" }}>
            <Text
              sx={{
                variant: "text.largeTextBold",
                display: "block",
                textAlign: "left",
                fontSize: "24px",
              }}
            >
              Anonymous
            </Text>
            <Flex sx={{ justifyContent: "left", alignItems: "center", mt: "4px" }}>
              <Tooltip
                title={address}
                left="-118%"
                top="-42px"
                transform=""
                minWidth="150px"
                height="0"
              >
                <Text sx={{ variant: "text.smallTextMediumUser" }}>{formatAddress(address)}</Text>
              </Tooltip>
              <Box
                onClick={() => {
                  onCopyClick(address);
                  notifSuccess("Link copied");
                }}
                sx={copyIcon}
              >
                <CopyIcon />
              </Box>
            </Flex>
          </Container>
        </Flex>
        <Button
          onClick={() => notifComingSoon("My Profile is coming soon")}
          sx={{ variant: "buttons.grey", mt: "32px", width: "100%" }}
        >
          My Profile
        </Button>
        <Button
          onClick={() => {
            onCopyClick(address);
            notifSuccess("Link copied");
          }}
          sx={{ variant: "buttons.grey", mt: "16px", width: "100%" }}
        >
          Copy Share Link
        </Button>
        <Button
          onClick={() => notifComingSoon("Switch Wallet is coming soon")}
          sx={{ variant: "buttons.grey", mt: "16px", width: "100%" }}
        >
          Switch Wallet
        </Button>
        <Box
          sx={{
            width: "343px",
            height: "2px",
            backgroundColor: "grey",
            position: "absolute",
            mt: "32px",
            left: 0,
          }}
        />
        <Button onClick={() => setVisibleLogOut(!visibleLogOut)} sx={btnLogaut}>
          <Box sx={iconLogOut}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 17L21 12M21 12L16 7M21 12H9M9 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H9"
                stroke="#CA5CF2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Box>
          <Text sx={{ display: "inline-block", ml: "28px", mt: "13px" }}>Log Out</Text>
        </Button>
      </Container>
      {visibleLogOut ? <LogOutPopap setVisible={setVisibleLogOut} /> : null}
    </Container>
  );
};
export default HeaderMenu;
