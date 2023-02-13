import React from "react";
import { Container, Box, Text, Button, Flex } from "theme-ui";
import iconsObj from "../../assets/icons";
import Image from "next/image";
import Icon from "../icon";
import { formatAddress, onCopyClick } from "../../utils/formats";
import {
  verificationIconContainer,
  improveBtnContainer,
  fotoContainer,
  userContainer,
  infoContainer,
  improveBtn,
  container,
  userFoto,
  iconExit,
  iconCopy,
} from "./styles";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Identicon from "../Identicon/Identicon";
import { notifSucces } from "../../utils/notification";
import Tooltip from "../Tooltip";
import CopyIcon from "../CopyIcon";
export default function UserCard({ address }: any) {
  const { width } = useWindowDimensions();

  return (
    <Flex sx={container}>
      <Box sx={iconExit}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 10V14.2C19 15.8802 19 16.7202 18.673 17.362C18.3854 17.9265 17.9265 18.3854 17.362 18.673C16.7202 19 15.8802 19 14.2 19H5.8C4.11984 19 3.27976 19 2.63803 18.673C2.07354 18.3854 1.6146 17.9265 1.32698 17.362C1 16.7202 1 15.8802 1 14.2V10M14 5L10 1M10 1L6 5M10 1V13"
            stroke="#CA5CF2"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Box>
      <Flex sx={fotoContainer}>
        <Identicon account={address} size={width && width > 720 ? 124 : 80} sx={userFoto} />
        <Flex sx={infoContainer}>
          <Text sx={{ variant: "text.largeTextBold", display: "block", textAlign: "center" }}>
            Anonymous
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
              <CopyIcon />
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
