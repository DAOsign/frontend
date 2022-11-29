/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Button, Container, Heading, Text } from "theme-ui";
import { title, container } from "./styles";
import { useWeb3 } from "../../hooks/useWeb3";
import { useMutation } from "urql";
import { login as loginMutation } from "../../modules/graphql/mutations";

export default function Connect() {
  const { login, sign } = useWeb3();

  const [, loginRequest] = useMutation(loginMutation);

  const connect = async (name: any) => {
    login(name).then(res => {
      onAfterConnect(res.account);
    });
  };

  const onAfterConnect = async (account: string) => {
    if (account) {
      if (localStorage.getItem("token")) return;
      const res = await loginRequest({ address: account });

      if (res.data) {
        const payload = res.data.login.payload;
        if (payload) {
          const signature = await sign(payload);

          const tokenRes = await loginRequest({
            address: account,
            signature: signature,
          });

          if (tokenRes.data) {
            const token = tokenRes.data.login.token;
            if (token) {
              console.log(token);
              localStorage.setItem("token", token);
            }
          }
        }
      }
    }
  };

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
