import React, { useState } from "react";
import Connect from "../components/Connect";
import LogoAnimate from "../components/Logo/LogoAnimate";
import { Container } from "theme-ui";
import { animateContainer } from "../components/Logo/styles";
import Footer from "../components/Footer/Footer";
import Popap from "../components/popup";

function ConnectPage() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="bg">
      <Container sx={animateContainer}>
        <LogoAnimate />
        <Connect />
      </Container>
      <Footer setVisible={setVisible} />
      {visible && <Popap setVisible={setVisible} />}
    </div>
  );
}

ConnectPage.noLayout = true;

export default ConnectPage;
