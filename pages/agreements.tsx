import React from "react";
import AgreementsList from "../components/AgreementsList";
import { useWeb3 } from "../hooks/useWeb3";

export default function Agreements() {
  const { account } = useWeb3();
  return <AgreementsList address={account} />;
}
