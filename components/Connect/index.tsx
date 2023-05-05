/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Heading, Link, Text } from "theme-ui";
import { title, container, link, userGreeting } from "./styles";
import { useWeb3 } from "../../hooks/useWeb3";
import { getToken } from "../../utils/token";
import { useRouter } from "next/router";
import { useLock } from "../../hooks/useLock";
import Lottie from "lottie-react";
import loader from "../../img/json/loader.json";

export default function Connect() {
  const [loadingConnect, setLoadingConnect] = useState(false);
  const { login } = useWeb3();
  const { getConnector } = useLock();
  const { push, query } = useRouter();

  const connect = async (name: any) => {
    setLoadingConnect(true);
    await login(name, query.email as string, query.salt as string);
    setLoadingConnect(false);
  };

  const isSignUpByEmail = (): boolean => !!(query?.email && query?.salt);

  const initStarted = useRef(false);

  useEffect(() => {
    const init = async () => {
      if (initStarted.current) return;
      initStarted.current = true;
      const currentToken = getToken();
      const connector = await getConnector();
      if (currentToken && connector) {
        push("/");
      }
    };
    init();
  }, []);

  // useEffect(() => {
  //   await login(name, query.email as string, query.salt as string);
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span>
      <Container
        sx={{
          ...userGreeting,
          mb: loadingConnect ? "226px" : "0",
          display: isSignUpByEmail() ? "block" : "none",
        }}
      >
        Hello, {query?.email}!<br></br>
        <br></br>
        Welcome to DaoSign.<br></br>
        Please connect your wallet to proceed.
      </Container>
      <Container
        sx={{
          ...container,
          backgroundColor: !loadingConnect ? "rgba(255, 255, 255, 0.24)" : "#fff",
          mb: loadingConnect ? "226px" : "0",
        }}
      >
        <Heading sx={title}>Connect a Wallet</Heading>
        {loadingConnect ? (
          <>
            <Lottie
              style={{ height: "60px", marginBottom: "52px" }}
              animationData={loader}
              loop={true}
            />
          </>
        ) : (
          <>
            <Button type="button" variant="primary" onClick={() => connect("injected")}>
              MetaMask
            </Button>
            <Button type="button" variant="primary" onClick={() => connect("walletconnect")}>
              Wallet Connect
            </Button>
            <Button type="button" variant="primary" onClick={() => connect("walletlink")}>
              Coinbase Wallet
            </Button>
          </>
        )}
        <Text
          sx={{ maxWidth: "220px", display: "inline-block", lineHeight: "15px", fontSize: "12px" }}
        >
          <Text variant="secondary">By connecting a wallet, you agree to our</Text>
          <Link href="https://daosign.org/terms" sx={link}>
            Terms of Service
          </Link>
        </Text>
      </Container>
    </span>
  );
}
