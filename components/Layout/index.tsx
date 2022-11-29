import React from "react";
import Head from "next/head";
import { Container, Spinner } from "theme-ui";
import Header from "../Header/Header";
import { useWeb3 } from "../../hooks/useWeb3";

export default function Layout({ children }: React.PropsWithChildren) {
  const { account } = useWeb3();
  return (
    <Container sx={{ width: "100%", paddingTop: "80px" }}>
      <Head>
        <title>Dao-Sign</title>
        <meta name="description" content="Dao-Sign" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header address={account || ""} />
      {children}
      {/* <Footer/> */}
    </Container>
  );
}
