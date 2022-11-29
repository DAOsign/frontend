import React from "react";
import Layout from "../components/Layout";
import MyAgreement from "../components/MyAgreement";
import { useWeb3 } from "../hooks/useWeb3";

export default function Agreements() {
  const { account } = useWeb3();
  return (
    <Layout>
      <MyAgreement address={account} />;
    </Layout>
  );
}
