import React, { useState } from "react";
import { useWeb3 } from "../../hooks/useWeb3";
import { Flex } from "theme-ui";
import UserPhoto from "./UserPhoto";
import UserName from "./UserName";
import { profileSection, infoSection } from "./styles";
import Score from "./Score";
import { VerificationBadges } from "./VerificationBadges";
import EditProfileModal from "./ProfileModals/EditProfileModal";

export default function Profile() {
  const [visible, setVisible] = useState(false);
  const { account } = useWeb3();

  return (
    <>
      <Flex sx={profileSection}>
        <Flex sx={infoSection}>
          <UserPhoto setVisible={setVisible} address={account || ""} />
          <UserName />
        </Flex>
        <VerificationBadges />
        {visible && <EditProfileModal setVisible={setVisible} address={account || ""} />}
        {/* {visible && <EmailVerificationModal setVisible={setVisible} address={account || ""} />} */}
        {/* {visible && <SuccessModal setVisible={setVisible} address={account || ""} />} */}
      </Flex>
      <Score />
    </>
  );
}
