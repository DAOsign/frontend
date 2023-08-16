import React, { useState } from "react";
import Info from "./Info";
import { useWeb3 } from "../../hooks/useWeb3";
import { Flex, Container } from "theme-ui";
import UserFoto from "./UserFoto";
import UserName from "./UserName";
import { profileSection, infoSection, profile } from "./styles";
import Score from "./Score";
import { VerificationBadges } from "./VerificationBadges";
import EditProfileModal from "./ProfileModals/EditProfileModal";

export default function Profile() {
  const [visible, setVisible] = useState(false);
  const { account } = useWeb3();
  return (
    <>
      <Flex sx={profileSection}>
        <UserFoto setVisible={setVisible} address={account || ""} />

        <Flex sx={profile}>
          <Container sx={{ ...infoSection, minWidth: "33%" }}>
            <UserName />
            <Info />
          </Container>
          <VerificationBadges />
          {visible && <EditProfileModal setVisible={setVisible} address={account || ""} />}
        </Flex>
      </Flex>
      <Score />
    </>
  );
}
