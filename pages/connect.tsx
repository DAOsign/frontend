import React from "react";
import Connect from "../components/Connect";
import LogoAnimate from "../components/Logo/LogoAnimate";
import { Container } from "theme-ui";
import { animateContainer } from "../components/Logo/styles";
import Footer from "../components/Footer/Footer";

function ConnectPage() {
  return (
    <div className="bg">
      <Container sx={animateContainer}>
        <LogoAnimate />
        <Connect />
      </Container>
      <Footer />
    </div>
  );
}

ConnectPage.noLayout = true;

export default ConnectPage;
