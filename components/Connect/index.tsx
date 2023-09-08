/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Heading, Link, Text } from "theme-ui";
import { title, container, link, userGreeting, hiddenInMobile } from "./styles";
import { useWeb3 } from "../../hooks/useWeb3";
import { getToken } from "../../utils/token";
import { useRouter } from "next/router";
import { useLock } from "../../hooks/useLock";
import Lottie from "lottie-react";
import loader from "../../img/json/loader.json";
import ModalInstallMetamask from "../ModalInstallMetamask";
import { ConnectorType } from "../../lib/snapshot/options";

export default function Connect() {
  const [loadingConnect, setLoadingConnect] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { login } = useWeb3();
  const { getConnector } = useLock();
  const { push, query } = useRouter();

  const connect = async (name: ConnectorType) => {
    setLoadingConnect(true);

    const loginState = await login(name, query.email as string, query.salt as string);

    if (name === "injected" && loginState?.account === null) {
      setIsVisible(true);
    }
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
        <Heading sx={title}>Connect a Wallet!!</Heading>
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
            <Button
              onClick={() => connect("injected")}
              sx={hiddenInMobile}
              variant="primary"
              type="button"
            >
              MetaMask
            </Button>

            <Button type="button" variant="primary" onClick={() => connect("walletconnect")}>
              Wallet Connect!
            </Button>
            <Button
              onClick={() => connect("walletlink")}
              sx={hiddenInMobile}
              variant="primary"
              type="button"
            >
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
      {isVisible && <ModalInstallMetamask setVisible={setIsVisible} />}
    </span>
  );
}
