import React from "react";
import type { NextPage } from "next";
import { useWeb3 } from "../hooks/useWeb3";
import AgreementsList from "../components/AgreementsList";
import { Container } from "theme-ui";
import ModalSwitchNetwork from "../components/ModalSwitchNetwork";
import { ETH_MAINNET_CHAIN_ID } from "../constants/common";

const Home: NextPage = () => {
  const { account, network } = useWeb3();
  const isWrongNetwork = network?.chainId !== ETH_MAINNET_CHAIN_ID;
  return (
    <Container>
      <ModalSwitchNetwork isOpen={isWrongNetwork} />
      <AgreementsList address={account} />;
    </Container>
  );
};

export default Home;
