/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Flex, Text } from "theme-ui";
import Tooltip from "../Tooltip";
import CopyIcon from "../CopyIcon";
import Identicon from "../Identicon/Identicon";
import { formatAddress, onCopyClick } from "../../utils/formats";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { notifSucces } from "../../utils/notification";
import {
  container,
  userContainer,
  infoContainer,
  userFoto,
  profile,
  iconCopy,
  nameTitle,
} from "./styles";
import { SocialLink } from "./SocialLink";
import Info from "../Profile/Info";

export default function UserInFoProfile({ address }: any) {
  const { width } = useWindowDimensions();
  return (
    <Flex sx={container}>
      <Identicon account={address} size={width && width > 375 ? 180 : 120} sx={userFoto} />
      <Flex sx={infoContainer}>
        <Flex sx={profile}>
          <Text sx={nameTitle}>John Doe</Text>
          <Flex sx={userContainer}>
            <Tooltip
              title={address}
              left="-118%"
              top="-42px"
              transform=""
              minWidth="150px"
              height="0"
            >
              <Text sx={{ variant: "text.smallTextMediumUser" }}>{formatAddress(address)}</Text>
            </Tooltip>

            <Box
              onClick={() => {
                onCopyClick(address);
                notifSucces("Link copied");
              }}
              sx={iconCopy}
            >
              <CopyIcon />
            </Box>
          </Flex>
          <SocialLink />
        </Flex>
        <Info />
      </Flex>
    </Flex>
  );
}
