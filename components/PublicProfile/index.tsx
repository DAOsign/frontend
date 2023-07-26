import React from "react";
import { Verification } from "./Verification";
import { useWeb3 } from "../../hooks/useWeb3";
import UserInFoProfile from "./UserInfoProfile";
import Agreements from "./Agreements";
import { profileContainer } from "./styles";
import { Container } from "theme-ui";

export default function PublicProfile() {
  const { account } = useWeb3();

  return (
    <Container sx={profileContainer}>
      <UserInFoProfile address={account || ""} />
      <Verification />
      <Agreements />
    </Container>
  );
}
