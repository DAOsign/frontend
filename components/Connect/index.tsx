/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Heading, Link, Text } from "theme-ui";
import { title, container } from "./styles";
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
  const { push } = useRouter();
  const connect = async (name: any) => {
    setLoadingConnect(true);
    await login(name);
    setLoadingConnect(false);
  };

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
    <Container
      sx={{ ...container, backgroundColor: !loadingConnect ? "rgba(255, 255, 255, 0.24)" : "#fff" }}
    >
      <Heading sx={title}>Connect a Wallet</Heading>
      {loadingConnect ? (
        <>
          <Lottie
            style={{ height: "60px", marginBottom: "52px" }}
            animationData={loader}
            loop={true}
          />
          {
            <div style={{ marginBottom: "52px" }}>
              <Text
                sx={{
                  variant: "text.normalTextBold",
                  color: "#CA5CF2",
                  width: "56px",
                  height: "26px",
                  cursor: 'pointer'
                }}
              >
                Cancel
              </Text>
            </div>
          }
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
      <Text variant="secondary" sx={{ maxWidth: "220px", display: "inline-block" }}>
        By connecting a wallet, you agree to our{" "}
        <Link sx={{ color: "#CA5CF2", cursor: "pointer" }}>Terms of Service</Link>
      </Text>
    </Container>
  );
}
