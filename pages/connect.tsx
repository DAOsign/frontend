import React from "react";
import Connect from "../components/Connect";
import { LogoAnimate } from "../components/Logo/Logo";
import { Container } from "theme-ui";
import { animateContainer } from "../components/Logo/styles";

function ConnectPage() {
  return (
    <Container sx={animateContainer}>
      <LogoAnimate />
      <Connect />
    </Container>
  );
}

ConnectPage.noLayout = true;

export default ConnectPage;
