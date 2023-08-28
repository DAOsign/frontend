/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Flex, Text } from "theme-ui";
import Identicon from "../Identicon/Identicon";
import WalletAddress from "../Profile/WalletAddress";
import { useWeb3 } from "../../hooks/useWeb3";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { container, userContainer, infoContainer, userFoto, profile, nameTitle } from "./styles";
import { SocialLink } from "./SocialLink";
import Info from "../Profile/Info";

export default function UserInFoProfile({ address }: any) {
  const { width } = useWindowDimensions();
  const { account } = useWeb3();

  return (
    <Flex sx={container}>
      <Identicon account={address} size={width && width > 375 ? 180 : 120} sx={userFoto} />
      <Flex sx={infoContainer}>
        <Flex sx={profile}>
          <Text sx={nameTitle}>Anonymous</Text>
          <Flex sx={userContainer}>
            <WalletAddress address={account || ""} />
          </Flex>
          {/* <SocialLink /> */}
        </Flex>
        {/* <Info /> */}
      </Flex>
    </Flex>
  );
}
