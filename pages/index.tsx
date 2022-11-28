import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Connect from "../components/Connect";
import Footer from "../components/Footer/Footer";
import { LogoAnimate } from "../components/Logo/Logo";
import Header from "../components/Header/Header";
import { Container, Spinner } from "theme-ui";
import CreateAgreement from "../components/CreateAgreement";
import { animateContainer } from "../components/Logo/styles";
import { useWeb3 } from "../hooks/useWeb3";

const Home: NextPage = () => {
  const { account, authLoading } = useWeb3();

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
          <CreateAgreement />
        </>
      )}
      {/* <Footer/> */}
    </Container>
  );
};

export default Home;
