/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import { Button, Container, Heading, Text } from "theme-ui";
import { title, container } from "./styles";
import { useWeb3 } from "../../hooks/useWeb3";
import { getToken } from "../../utils/token";
import { useRouter } from "next/router";
import { useLock } from "../../hooks/useLock";

export default function Connect() {
  const { login } = useWeb3();
  const { getConnector } = useLock();
  const { push } = useRouter();
  const connect = async (name: any) => {
    login(name);
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
    <Container sx={container}>
      <Heading sx={title}>Connect a Wallet</Heading>
      <Button type="button" variant="primary" onClick={() => connect("injected")}>
        MetaMask
      </Button>
      <Button type="button" variant="primary" onClick={() => connect("walletconnect")}>
        Wallet Connect
      </Button>
      <Button type="button" variant="primary" onClick={() => connect("walletlink")}>
        Coinbase Wallet
      </Button>
      <Text variant="secondary" sx={{ maxWidth: "220px", display: "inline-block" }}>
        By connecting a wallet, you agree to our Terms of Service
      </Text>
    </Container>
  );
}
