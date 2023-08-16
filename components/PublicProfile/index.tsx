import React, { useState } from "react";
import { Verification } from "./Verification";
import { useWeb3 } from "../../hooks/useWeb3";
import UserInFoProfile from "./UserInfoProfile";
import Agreements from "./Agreements";
import { profileContainer } from "./styles";
import { Container } from "theme-ui";
import BadgePopup from "./BadgePopup/index";

export default function PublicProfile() {
  const { account } = useWeb3();
  const [visible, setVisible] = useState(false);

  return (
    <Container sx={profileContainer}>
      {/* <UserInFoProfile address={account || ""} />
      <Verification />
      <Agreements />
      {visible && <BadgePopup setVisible={setVisible} />} */}
      <BadgePopup address={account || ""} />
    </Container>
  );
}
