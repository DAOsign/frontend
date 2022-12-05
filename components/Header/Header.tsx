import React, { useState } from "react";
import { Container, Flex, Text, Button, Link, Box } from "theme-ui";
import iconsObj from "../../assets/icons";
import { formatAddress } from "../../utils/formats";
import { container, addresContainer, iconMenu } from "./styles";
import Icon from "../icon";
import { Logo } from "../Logo/Logo";
import { useWeb3 } from "../../hooks/useWeb3";
import NextLink from "next/link";

export default function Header({ visible, setVisible }: any) {
  const { account } = useWeb3();

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
          <Flex onClick={() => setVisible(!visible)} sx={addresContainer}>
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                backgroundColor: "#000",
                marginRight: "8px",
              }}
            ></div>
            <Text>{formatAddress(account!)}</Text>
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
