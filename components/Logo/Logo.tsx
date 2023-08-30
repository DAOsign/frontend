import React from "react";
import { Box, Container } from "theme-ui";
import iconsObj from "../../assets/icons";
import { logoWithoutAnimate, logoContainer } from "./styles";
import Icon from "../icon";
import LogoIcon from "../Header/iconLogo";

export function Logo() {
  return (
    <Container sx={logoContainer}>
      <Box sx={logoWithoutAnimate}>
        <LogoIcon />
      </Box>
    </Container>
  );
}
