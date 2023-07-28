import React from "react";
import { Flex, Text } from "theme-ui";
import { useWeb3 } from "../../hooks/useWeb3";
import { SocialLink } from "../PublicProfile/SocialLink";
import WalletAddress from "./WalletAddress";
import { userName } from "./styles";

const UserName = () => {
  const { account } = useWeb3();
  return (
    <>
      <Flex sx={{ flexDirection: "column", alignItems: "baseline" }}>
        <Text sx={userName}>johndoe.eth</Text>
        <SocialLink />
        <WalletAddress address={account || ""} />
      </Flex>
    </>
  );
};

export default UserName;
