import React from "react";
import Info from "./Info";
import { useWeb3 } from "../../hooks/useWeb3";
import {} from "./styles";

export default function Profile() {
  const { account } = useWeb3();
  return (
    <>
      <Info address={account || ""} />
    </>
  );
}
