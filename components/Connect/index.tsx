/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useLock } from "../../hooks/useLock";
import { Button, Container, Heading, Text } from "theme-ui";
import {title, container} from "./styles";

export default function Connect({setAddres}: any) {
  const lock = useLock();
  console.log(lock);

  useEffect(() => {
    setAddres(lock?.provider?.safe?.safeAddress || lock?.provider?.selectedAddress || lock?.provider?.accounts[0] || "");
  }, [lock]);

  const connect = async (name: any) => {
    const res = await lock.login(name);
    console.log("res", res);
  };

  return (
      <Container sx={container}>
        <Heading  sx={title}>
          Connect a Wallet
        </Heading>
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