import React from "react";
import { Container, Box, Text, Button, Flex } from "theme-ui";
import iconsObj from "../../assets/icons";
import Image from "next/image";
import Icon from "../icon";
import { formatAddress, onCopyClick } from "../../utils/formats";
import {
  verificationIconContainer,
  improveBtnContainer,
  normalTextBoldGreen,
  percentContainer,
  fotoContainer,
  userContainer,
  infoContainer,
  improveBtn,
  container,
  userFoto,
  iconExit,
  iconCopy,
  text,
} from "./styles";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Identicon from "../Identicon/Identicon";
import { notifSucces } from "../../utils/notification";
import Tooltip from "../Tooltip";
export default function UserCard({ address }: any) {
  const { width } = useWindowDimensions();

  return (
    <Flex sx={container}>
      <Box sx={iconExit}>
        <Icon style={{ cursor: "pointer" }} src={iconsObj.iconExit} />
      </Box>
      <Flex sx={fotoContainer}>
        <Identicon account={address} size={width && width > 720 ? 124 : 80} sx={userFoto} />
        <Flex sx={infoContainer}>
          <Text sx={{ variant: "text.largeTextBold", display: "block", textAlign: "center" }}>
            Ralph Edwards
          </Text>
          <Flex sx={userContainer}>
            <Tooltip
              top="-164%"
              left="-95px"
              transform=""
              minWidth=""
              title={address}
              height={undefined}
            >
              <Text
                sx={{
                  variant: "text.smallTextMediumUser",
                  cursor: "default",
                }}
              >
                {address ? formatAddress(address) : "\u00A0"}
              </Text>
            </Tooltip>
            <Box
              onClick={() => {
                onCopyClick(address);
                notifSucces("Link copied");
              }}
              sx={iconCopy}
            >
              <Icon style={{ cursor: "pointer" }} src={iconsObj.iconSix} />
            </Box>
          </Flex>
          <Box className="card_tail">
            <Box sx={verificationIconContainer}>
              <Image src={iconsObj.verificationAnonymous} alt="anonymous" />
            </Box>
          </Box>
        </Flex>
      </Flex>
      <Container sx={improveBtnContainer}>
        <Button sx={improveBtn}>Add Verifications</Button>
      </Container>
    </Flex>
  );
}
