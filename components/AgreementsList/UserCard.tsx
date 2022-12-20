import React from "react";
import { Container, Box, Text, Button, Flex } from "theme-ui";
import iconsObj from "../../assets/icons";
import Icon from "../icon";
import { formatAddress } from "../../utils/formats";
import {
  improveBtnContainer,
  normalTextBoldGreen,
  percentContainer,
  fotoContainer,
  infoContainer,
  improveBtn,
  container,
  userFoto,
  iconExit,
  text,
} from "./styles";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Identicon from "../Identicon/Identicon";

export default function UserCard({ address }: any) {
  const { width } = useWindowDimensions();

  return (
    <Flex sx={container}>
      <Box sx={iconExit}>
        <Icon style={{ cursor: "pointer" }} src={iconsObj.iconExit} />
      </Box>
      <Flex sx={fotoContainer}>
        <Identicon account={address} size={width && width > 768 ? 124 : 80} sx={userFoto} />
        <Flex sx={infoContainer}>
          <Text sx={{ variant: "text.largeTextBold", display: "block", textAlign: "center" }}>
            Ralph Edwards
          </Text>
          <Flex sx={{ justifyContent: "center", marginBottom: "24px", mt: "4px" }}>
            <Text sx={{ variant: "text.smallTextMediumUser" }}>
              {address ? formatAddress(address) : "\u00A0"}
            </Text>
            <Box sx={{ marginLeft: "5px" }}>
              <Icon style={{ cursor: "pointer" }} src={iconsObj.iconSix} />
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Container sx={percentContainer}>
        <Box sx={{ mb: "10px" }}>
          <Icon src={iconsObj.ellipseGreen} />
        </Box>
        <Container sx={text}>
          <Text sx={{ variant: "text.overscript", opacity: "0.5" }}>Verification Score</Text>
          <Text sx={normalTextBoldGreen}>Good</Text>
        </Container>
      </Container>
      <Container sx={improveBtnContainer}>
        <Button sx={improveBtn}>Add Verifications</Button>
      </Container>
    </Flex>
  );
}
