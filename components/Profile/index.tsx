import React from "react";
import Info from "./Info";
import { useWeb3 } from "../../hooks/useWeb3";
import { Flex, Container } from "theme-ui";
import UserFoto from "./UserFoto";
import UserName from "./UserName";
import { profileSection, infoSection } from "./styles";
import Score from "./Score";
import { VerificationBadges } from "./VerificationBadges";

export default function Profile() {
  const { account } = useWeb3();
  return (
    <>
      <Flex sx={profileSection}>
        <UserFoto address={account || ""} />
        <Container sx={{ ...infoSection, minWidth: "33%" }}>
          <UserName />
          <Info />
        </Container>
        <VerificationBadges />
      </Flex>
      <Score />
    </>
  );
}
