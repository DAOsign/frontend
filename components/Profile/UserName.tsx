import React from "react";
import { Flex, Text, Box } from "theme-ui";
import { useWeb3 } from "../../hooks/useWeb3";
import { SocialLink } from "../PublicProfile/SocialLink";
import WalletAddress from "./WalletAddress";
import { title, userName, containerName } from "./styles";
import Info from "./Info";

const UserName = () => {
  const { account } = useWeb3();
  return (
    <>
      <Flex sx={containerName}>
        <Text sx={userName}>johndoe.eth</Text>
        <SocialLink />
        <Box sx={{ height: "42px" }} />
        <Flex>
          <Text sx={{ ...title, minWidth: "55px" }}>Address</Text>
          <WalletAddress address={account || ""} />
        </Flex>
        <Info />
      </Flex>
    </>
  );
};

export default UserName;
