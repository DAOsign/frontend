import React from "react";
import Info from "./Info";
import { useWeb3 } from "../../hooks/useWeb3";
import { Flex, Container } from "theme-ui";
import UserFoto from "./User";
import UserName from "./Info/UserName";
import { profileSection, infoSection } from "./styles";

export default function Profile() {
  const { account } = useWeb3();
  return (
    <>
      <Flex sx={profileSection}>
        <UserFoto address={account || ""} />
        <Container sx={infoSection}>
          <UserName />
          <Info />
        </Container>
      </Flex>
    </>
  );
}
