import React, { useState } from "react";
import { Verification } from "./Verification";
import { useWeb3 } from "../../hooks/useWeb3";
import UserInFoProfile from "./UserInfoProfile";
import Agreements from "./Agreements";
import { profileContainer } from "./styles";
import { Container } from "theme-ui";
import BadgePopup from "./BadgePopup.tsx/index";

export default function PublicProfile() {
  const [visible, setVisible] = useState(false);
  const { account } = useWeb3();

  return (
    <Container sx={profileContainer}>
      <UserInFoProfile address={account || ""} />
      <Verification setVisible={setVisible} />
      <Agreements />
      {visible && <BadgePopup setVisible={setVisible} />}
    </Container>
  );
}
