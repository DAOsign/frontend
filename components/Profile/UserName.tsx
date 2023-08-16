import React from "react";
import { Flex, Text } from "theme-ui";
import { useWeb3 } from "../../hooks/useWeb3";
import { SocialLink } from "../PublicProfile/SocialLink";
import WalletAddress from "./WalletAddress";
import { title, userName, containerName } from "./styles";

const UserName = () => {
  const { account } = useWeb3();
  return (
    <>
      <Flex sx={containerName}>
        <Text sx={userName}>johndoe.eth</Text>
        <SocialLink />
        <Flex>
          <Text sx={{ ...title, minWidth: "55px" }}>Address</Text>
          <WalletAddress address={account || ""} />
        </Flex>
      </Flex>
    </>
  );
};

export default UserName;
