import React from "react";
import Layout from "../components/Layout";
import AgreementsList from "../components/AgreementsList";
import { useWeb3 } from "../hooks/useWeb3";

export default function Agreements() {
  const { account } = useWeb3();
  return (
    <Layout>
      <AgreementsList address={account} />;
    </Layout>
  );
}
