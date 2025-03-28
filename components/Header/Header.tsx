import React from "react";
import { Container, Flex, Text, Button, Link, Box } from "theme-ui";
import iconsObj from "../../assets/icons";
import { formatAddress } from "../../utils/formats";
import CloseIcon from "../IconComponent/CloseIcon";
import {
  container,
  addresContainer,
  iconMenu,
  identiconIcon,
  iconBell,
  containerBtn,
  logoIcon,
} from "./styles";
import Icon from "../icon";
import { Logo } from "../Logo/Logo";
import { useWeb3 } from "../../hooks/useWeb3";
import Identicon from "../Identicon/Identicon";
import { notifComingSoon } from "../../utils/notification";
import { ZERO_ADDRESS } from "../../constants/common";

export default function Header({ visible, setVisible, visibleLogOut }: any) {
  const { account } = useWeb3();
  const isViewingAgreementWithoutLogIn = account === ZERO_ADDRESS;

  return (
    <Container
      onClick={() => setVisible(false)}
      sx={{ ...container, zIndex: visibleLogOut ? 3 : 10 }}
    >
      <Flex sx={{ justifyContent: "space-between" }}>
        <Link href={"/"} sx={logoIcon}>
          <Logo />
        </Link>
        {isViewingAgreementWithoutLogIn ? (
          <></>
        ) : (
          <Flex sx={containerBtn}>
            <Button
              onClick={() => notifComingSoon("Notification Center is coming soon")}
              type="button"
              sx={{ ...iconMenu, display: "block" }}
            >
              <Box sx={iconBell}>
                <Icon src={iconsObj.Bell} />
              </Box>
            </Button>
            <Flex
              onClick={e => {
                e.stopPropagation();
                setVisible(!visible);
              }}
              sx={addresContainer}
            >
              <Identicon account={account} size={24} sx={identiconIcon} />
              <Text>{formatAddress(account!)}</Text>
            </Flex>
            <Button
              onClick={e => {
                e.stopPropagation();
                setVisible(!visible);
              }}
              type="button"
              sx={iconMenu}
            >
              {visible ? (
                <Box sx={iconBell}>
                  <CloseIcon />
                </Box>
              ) : (
                <Box sx={iconBell}>
                  <Icon src={iconsObj.menu} />
                </Box>
              )}
            </Button>
          </Flex>
        )}
      </Flex>
    </Container>
  );
}
