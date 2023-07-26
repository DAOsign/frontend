import React from "react";
import { Flex, Text, Box } from "theme-ui";
import Identicon from "../../Identicon/Identicon";
import Tooltip from "../../Tooltip";
import CopyIcon from "../../CopyIcon";
import { useWeb3 } from "../../../hooks/useWeb3";
import { SocialLink } from "../../PublicProfile/SocialLink";
import WalletAddress from "./WalletAddress";
import { container, title, subTitle, userName } from "./styles";

const UserName = ({ address }: any) => {
  const { account } = useWeb3();
  return (
    <>
      <Flex sx={{ flexDirection: "column", alignItems: "baseline" }}>
        <Text sx={userName}>johndoe.eth</Text>
        <SocialLink />
        <br />
        <WalletAddress address={account || ""} />
      </Flex>
    </>
  );
};

export default UserName;
