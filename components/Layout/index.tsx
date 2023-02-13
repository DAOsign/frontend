/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Container } from "theme-ui";
import Header from "../Header/Header";
import { useWeb3 } from "../../hooks/useWeb3";
import HeaderMenu from "../Header/HeaderMenu";
import Footer from "../Footer/Footer";

function Layout({ children }: React.PropsWithChildren) {
  const { account } = useWeb3();
  const [visible, setVisible] = useState(false);
  const [visibleLogOut, setVisibleLogOut] = useState(false);

  const hideStyles = account ? {} : { display: "none" };

  return (
    <Container sx={{ width: "100%", paddingTop: "80px", ...hideStyles }}>
      <Head>
        <title>Dao-Sign</title>
        <meta name="description" content="Dao-Sign" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        visibleLogOut={visibleLogOut}
        visible={visible}
        setVisible={setVisible}
        address={account || ""}
      />
      <HeaderMenu
        visibleLogOut={visibleLogOut}
        visibleMenu={visible}
        setVisibleLogOut={setVisibleLogOut}
        setVisibleMenu={setVisible}
        address={account || ""}
      />
      {children}
    </Container>
  );
}

export default Layout;
