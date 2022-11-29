import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Connect from "../components/Connect";
import { LogoAnimate } from "../components/Logo/Logo";
import Header from "../components/Header/Header";
import { Container, Spinner } from "theme-ui";
import { animateContainer } from "../components/Logo/styles";
import { useWeb3 } from "../hooks/useWeb3";

import MyAgreement from "../components/MyAgreement";
import MobileMenu from "../components/Header/MobileMenu";

const Home: NextPage = () => {
  const { account, authLoading } = useWeb3();
  const [visible, setVisible] = useState(false);

  return (
    <Container sx={{ width: "100%", paddingTop: "80px" }}>
      <Head>
        <title>Dao-Sign</title>
        <meta name="description" content="Dao-Sign" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {authLoading ? (
        <Spinner /> //@TODO add loading state
      ) : !account ? (
        <Container sx={animateContainer}>
          <LogoAnimate />
          <Connect />
        </Container>
      ) : (
        <>
          <Header address={account || ""} />
          {visible && <MobileMenu address={account} />}
          {/* <CreateAgreement/>  */}
          <MyAgreement address={account} />
        </>
      )}
      {/* <Footer/> */}
    </Container>
  );
};

export default Home;
