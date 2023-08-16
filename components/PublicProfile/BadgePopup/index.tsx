import React from "react";
import { Container, Flex, Text, Box, Button } from "theme-ui";
import Tooltip from "../../Tooltip";
import CopyIcon from "../../CopyIcon";
import CardDigitalIdentifity from "./cardDigitalIdentifity";
import { formatAddress, onCopyClick } from "../../../utils/formats";
import { notifSucces } from "../../../utils/notification";
import { titlePopup, background, iconCopy, button, popup } from "./styles";
import Icon from "../../icon";
import iconsObj from "../../../assets/icons";

export default function BadgePopup({ setVisible }: any, { address }: any) {
  return (
    <Container sx={background}>
      <Container sx={popup}>
        <Box
          onClick={() => {
            setVisible(false);
          }}
          sx={{ mt: "24px", ml: "auto", width: "20px", mr: "24px", cursor: "pointer" }}
        >
          <Icon width={24} height={24} src={iconsObj.xClose} />
        </Box>
        <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
          <Button sx={button}>Verified</Button>
          <Box sx={{ width: "100px", height: "100px", marginBottom: "24px" }}>
            <Icon src={iconsObj.verificationDigital} width={100} height={100} alt="socialIcon" />
          </Box>
          <Text sx={titlePopup}>Digital Identifity</Text>
          <Flex>
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
        </Flex>
        <CardDigitalIdentifity />
      </Container>
    </Container>
  );
}
