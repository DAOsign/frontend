import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Container } from "theme-ui";
import Header from "../Header/Header";
import { useWeb3 } from "../../hooks/useWeb3";
import MobileMenu from "../Header/MobileMenu";
import Footer from "../Footer/Footer";

function Layout({ children }: React.PropsWithChildren) {
  const { account, login } = useWeb3();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    login();
  }, []);

  return (
    <Container sx={{ width: "100%", paddingTop: "80px" }}>
      <Head>
        <title>Dao-Sign</title>
        <meta name="description" content="Dao-Sign" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header visible={visible} setVisible={setVisible} address={account || ""} />
      {visible && <MobileMenu address={account || ""} />}
      {children}
      <Footer />
    </Container>
  );
}

export default Layout;
