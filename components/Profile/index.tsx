import React, { useState } from "react";
import Info from "./Info";
import { useWeb3 } from "../../hooks/useWeb3";
import { Flex, Container } from "theme-ui";
import UserFoto from "./UserFoto";
import UserName from "./UserName";
import { profileSection, infoSection } from "./styles";
import Score from "./Score";
import { VerificationBadges } from "./VerificationBadges";
import EditProfileModal from "./ProfileModals/EditProfileModal";
import EmailVerificationModal from "./ProfileModals/EmailVerificationModal";
import SuccessModal from "./ProfileModals/SuccessModal";

export default function Profile() {
  const [visible, setVisible] = useState(false);
  const { account } = useWeb3();
  return (
    <>
      <Flex sx={profileSection}>
        <UserFoto setVisible={setVisible} address={account || ""} />
        <Container sx={{ ...infoSection, minWidth: "33%" }}>
          <UserName />
          {/* <VerificationBadges className="status-badges" /> */}
          <Info />
        </Container>
        <VerificationBadges className="status-icon" />
        {visible && <EditProfileModal setVisible={setVisible} address={account || ""} />}
        {/* {visible && <EmailVerificationModal setVisible={setVisible} address={account || ""} />} */}
        {/* {visible && <SuccessModal setVisible={setVisible} address={account || ""} />} */}
      </Flex>
      <Score />
    </>
  );
}
