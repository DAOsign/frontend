/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Flex, Text } from "theme-ui";
import Tooltip from "../Tooltip";
import CopyIcon from "../CopyIcon";
import Identicon from "../Identicon/Identicon";
import { formatAddress, onCopyClick } from "../../utils/formats";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { notifSucces } from "../../utils/notification";
import { userContainer, userFoto, iconCopy, nameTitle } from "./styles";
import { SocialLink } from "./SocialLink";
import Info from "../Profile/Info/index";

export default function UserInFoProfile({ address }: any) {
  const { width } = useWindowDimensions();
  return (
    <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
      <Flex>
        <Identicon account={address} size={width && width > 720 ? 180 : 120} sx={userFoto} />
        <Flex
          sx={{
            flexDirection: "column",
            alignItems: "baseline",
            paddingTop: "40px",
          }}
        >
          <Text sx={nameTitle}>John Doe</Text>
          <Flex sx={userContainer}>
            {/* <Tooltip
              title={address}
              left="-118%"
              top="-42px"
              transform=""
              minWidth="150px"
              height="0"
            >
              <Text sx={{ variant: "text.smallTextMediumUser" }}>{formatAddress(address)}</Text>
            </Tooltip> */}
            <Text sx={{ variant: "text.smallTextMediumUser", cursor: "pointer" }}>
              {formatAddress(address)}
            </Text>

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
      </Flex>
      <Info />
    </Flex>
  );
}
