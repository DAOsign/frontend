import React from "react";
import { Box, Container } from "theme-ui";
import iconsObj from "../../assets/icons";
import { logoWithoutAnimate, logoContainer } from "./styles";
import Icon from "../icon";

export function Logo() {
  return (
    <Container sx={logoContainer}>
      <Box sx={logoWithoutAnimate}>
        <Icon src={iconsObj.logoHeader} />
      </Box>
    </Container>
  );
}
