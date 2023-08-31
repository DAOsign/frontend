/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import { Flex, Text, Box } from "theme-ui";
import Identicon from "../Identicon/Identicon";
import WalletAddress from "../Profile/WalletAddress";
import { useWeb3 } from "../../hooks/useWeb3";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {
  container,
  userContainer,
  infoContainer,
  userFoto,
  profile,
  nameTitle,
  backBtnPropfile,
} from "./styles";
import Icon from "../icon";
import iconsObj from "../../assets/icons";
import { backContainer, backIcon } from "../ViewAgreement/styles";
// import { SocialLink } from "./SocialLink";
// import Info from "../Profile/Info";

export default function UserInFoProfile({ address }: any) {
  const { width } = useWindowDimensions();
  const { account } = useWeb3();
  const { back } = useRouter();

  return (
    <Flex sx={container}>
      <Identicon account={address} size={width && width > 375 ? 180 : 120} sx={userFoto} />
      <Flex sx={infoContainer}>
        <Flex sx={profile}>
          <Flex onClick={back} sx={{ ...backContainer, mb: "8px", ...backBtnPropfile }}>
            <Box sx={backIcon}>
              <Icon src={iconsObj.arrowNarrowLeft} />
            </Box>
            <Box>Back</Box>
          </Flex>
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
