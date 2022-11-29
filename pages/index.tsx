import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Connect from "../components/Connect";
import Footer from "../components/Footer/Footer";
import { LogoAnimate } from "../components/Logo/Logo";
import Header from "../components/Header/Header";
import { Container } from "theme-ui";
import CreateAgreement from "../components/CreateAgreement";
import { animateContainer } from "../components/Logo/styles";

import MyAgreement from "../components/MyAgreement";
import MobileMenu from "../components/Header/MobileMenu";

const Home: NextPage = () => {
  const [address, setAddres] = useState<string>("");
  const [visible, setVisible] = useState(false);

  return (
    <Container sx={{ width: "100%", paddingTop: "80px" }}>
      <Head>
        <title>Dao-Sign</title>
        <meta name="description" content="Dao-Sign" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!address ? (
        <Container sx={animateContainer}>
          <LogoAnimate />
          <Connect setAddres={setAddres} />
        </Container>
      ) : (
        <>
          <Header visible={visible} setVisible={setVisible} address={address || ""} />
          {visible && <MobileMenu address={address} />}
          {/* <CreateAgreement/>  */}
          <MyAgreement address={address} />
        </>
      )}
      {/*   <Footer/>*/}
    </Container>
  );
};

export default Home;
