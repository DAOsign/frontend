import React, { useState } from "react";
import { Container, Flex, Text, Button, Link, Box } from "theme-ui";
import iconsObj from "../../assets/icons";
import { formatAddress } from "../../utils/formats";
import { container, addresContainer, iconMenu } from "./styles";
import Icon from "../icon";
import { Logo } from "../Logo/Logo";
import { useMutation } from "urql";
import { logoutMutation } from "../../modules/graphql/mutations";
import { useWeb3 } from "../../hooks/useWeb3";
import NextLink from "next/link";
import { clearToken } from "../../utils/token";

export default function Header({ visible, setVisible }: any) {
  const [, logoutRequest] = useMutation(logoutMutation);
  const { logout, account } = useWeb3();

  const handleLogout = async () => {
    const result = await logoutRequest({});
    if (result.data && !result.error) {
      logout();
      clearToken();
    }
  };

  return (
    <Container sx={container}>
      <Flex sx={{ justifyContent: "space-between" }}>
        <NextLink href={"/"}>
          <Link>
            <Logo />
          </Link>
        </NextLink>
        <Flex sx={{ alignItems: "center", flexDirection: "row" }}>
          <Button type="button" sx={{ ...iconMenu, display: "block" }}>
            <Box sx={{ width: "24px", height: "24px", m: "0 auto" }}>
              <Icon src={iconsObj.Bell} />
            </Box>
          </Button>
          <Flex sx={addresContainer}>
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                backgroundColor: "#000",
                marginRight: "8px",
              }}
            ></div>
            <Text onClick={handleLogout}>{formatAddress(account!)}</Text>
          </Flex>
          <Button onClick={() => setVisible(!visible)} type="button" sx={iconMenu}>
            {visible ? (
              <Box sx={{ width: "24px", display: "block", m: "0 auto" }}>
                <Icon src={iconsObj.xClose} />
              </Box>
            ) : (
              <Box sx={{ width: "24px", display: "block", m: "0 auto" }}>
                <Icon src={iconsObj.menu} />
              </Box>
            )}
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
}
