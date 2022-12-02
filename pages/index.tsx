import React from "react";
import type { NextPage } from "next";
import { useWeb3 } from "../hooks/useWeb3";
import AgreementsList from "../components/AgreementsList";

const Home: NextPage = () => {
  const { account } = useWeb3();
  return <AgreementsList address={account} />;
};

export default Home;
