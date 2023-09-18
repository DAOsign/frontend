/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Flex, Text, Box } from "theme-ui";
import Identicon from "../Identicon/Identicon";
import WalletAddress from "../Profile/WalletAddress";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {
  container,
  userContainer,
  infoContainer,
  userFoto,
  profile,
  nameTitle,
  backProfile,
} from "./styles";
import { backContainer, backIcon } from "../ViewAgreement/styles";
import Icon from "../icon";
import iconsObj from "../../assets/icons";
import { useRouter } from "next/router";

export default function UserInFoProfile({ address }: any) {
  const { width } = useWindowDimensions();
  const { back } = useRouter();

  return (
    <Flex sx={container}>
      <Identicon account={address} size={width && width > 375 ? 180 : 120} sx={userFoto} />
      <Flex sx={infoContainer}>
        <Flex sx={profile}>
          <Flex onClick={() => back()} sx={{ ...backContainer, mb: "9px", ...backProfile }}>
            <Box sx={backIcon}>
              <Icon src={iconsObj.arrowNarrowLeft} />
            </Box>
            <Box>Back</Box>
          </Flex>
          <Text sx={nameTitle}>Anonymous</Text>
          <Flex sx={userContainer}>
            <WalletAddress address={address || ""} />
          </Flex>
          {/* <SocialLink /> */}
        </Flex>
        {/* <Info /> */}
      </Flex>
    </Flex>
  );
}
