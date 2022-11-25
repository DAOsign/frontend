/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { useLock } from "../../hooks/useLock";
import { Button, Container, Heading, Text } from "theme-ui";
import { title, container } from "./styles";
import { useQuery, useMutation } from "urql";
import { allUsers } from "../../modules/graphql/queries";
import { login as loginMutation } from "../../modules/graphql/mutations";

export default function Connect({ setAddres }: any) {
  const lock = useLock();
  console.log(lock);

  useEffect(() => {
    setAddres(lock?.provider?.safe?.safeAddress || lock?.provider?.selectedAddress || lock?.provider?.accounts[0] || "");
  }, [lock]);

  const payloadToSign = useRef("");

  const [, login] = useMutation(loginMutation);

  const onAfterConnect = async () => {
    login({ address: await lock.getSignerAddress(), signature: "" }).then((res) => console.log(res));
    //const signature = await lock.sign("");
  };

  const connect = async (name: any) => {
    const res = await lock.login(name);
    onAfterConnect();
    console.log("res", res);
  };

  useEffect(() => {
    //ToDo move to fetch utils
    const getPayload = async () => {
      return "";
    };

    getPayload().then((res) => {
      payloadToSign.current = res;
    });
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
