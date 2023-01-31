import React, { useMemo } from "react";
import { Box, Flex, Container } from "theme-ui";
import {
  informationRowIcon,
  pendingIcon,
  tableAddressCell,
  tableSignatureCell,
  signersRow,
  tableUserNameCell,
  usernameText,
  textMobile,
  cardMobile,
  userPicture,
} from "./styles";
import Identicon from "../Identicon/Identicon";
import Icon from "../icon";
import iconsObj from "../../assets/icons";
import { formatAddress, onCopyClick } from "../../utils/formats";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import PendingIcon from "../icon/editable/PendingIcon";
import { Signer } from "../../modules/graphql/gql/graphql";
import { notifSucces } from "../../utils/notification";

interface Props {
  signer: Signer;
}
const SignerCardMobile = ({ signer }: Props) => {
  const { width } = useWindowDimensions();
  const handleCopyAddress = (address: string) => {
    onCopyClick(address);
    notifSucces("Link Copied");
  };
  const address = useMemo<string>(
    () =>
      signer?.wallet?.address
        ? signer.wallet.address
        : !!signer?.email?.startsWith("0x")
        ? signer?.email
        : "",
    [signer]
  );

  return (
    <Container sx={cardMobile}>
      <Flex sx={{ alignItems: "center" }}>
        <Box sx={userPicture}>
          {address ? (
            //@ts-ignore
            <Identicon account={address} size={width > 720 ? 20 : 40} />
          ) : (
            <Icon src={iconsObj.defaultUserPicture} />
          )}
        </Box>
        <Box sx={usernameText}>{signer?.wallet?.user?.name || "Anonymous"}</Box>
      </Flex>
      <Flex sx={{ ...tableAddressCell, backgroundColor: "#fff" }}>
        <Box sx={textMobile}>Signer Address</Box>
        {address ? (
          <Flex sx={signersRow}>
            <Box>{formatAddress(address)}</Box>
            <Box onClick={() => handleCopyAddress(address)} sx={informationRowIcon}>
              <Icon style={{ cursor: "pointer" }} src={iconsObj.iconSix} />
            </Box>
          </Flex>
        ) : (
          "-"
        )}
      </Flex>
      <Flex sx={{ ...tableSignatureCell, backgroundColor: "#fff !important" }}>
        <Box sx={textMobile}>Signature status</Box>
        <Box>
          {signer?.signature?.signature ? (
            signer.signature.signature
          ) : (
            <Flex sx={{ alignItems: "center" }}>
              <Box mx={"6px"}>Pending</Box>
              <Box sx={pendingIcon}>
                <PendingIcon />
              </Box>
            </Flex>
          )}
        </Box>
      </Flex>
      <Flex sx={tableSignatureCell}>
        <Box sx={textMobile}>Proof of signature</Box>
        <Box>
          <Box>{signer?.signature?.signatureCid || "-"}</Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default SignerCardMobile;
