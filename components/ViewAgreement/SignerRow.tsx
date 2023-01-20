import React, { useMemo } from "react";
import { Box, Flex } from "theme-ui";
import {
  informationRowIcon,
  pendingIcon,
  tableAddressCell,
  tableSignatureCell,
  tableUserNameCell,
  usernameText,
  userPicture,
} from "./styles";
import Identicon from "../Identicon/Identicon";
import Icon from "../icon";
import iconsObj from "../../assets/icons";
import { formatAddress, onCopyClick } from "../../utils/formats";
import PendingIcon from "../icon/editable/PendingIcon";
import { Signer } from "../../modules/graphql/gql/graphql";
import { notifSucces } from "../../utils/notification";

interface Props {
  signer: Signer;
}

export const SignerRow = ({ signer }: Props) => {
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
    <tr>
      <td>
        <Flex sx={tableUserNameCell}>
          <Box sx={userPicture}>
            {address ? (
              <Identicon account={address} size={20} />
            ) : (
              <Icon src={iconsObj.defaultUserPicture} />
            )}
          </Box>
          <Box sx={usernameText}>{signer?.wallet?.user?.name || "Anonymous"}</Box>
        </Flex>
      </td>
      <td>
        {address ? (
          <Flex sx={tableAddressCell}>
            <Box>{formatAddress(address)}</Box>
            <Box onClick={() => handleCopyAddress(address)} sx={informationRowIcon}>
              <Icon style={{ cursor: "pointer" }} src={iconsObj.iconSix} />
            </Box>
          </Flex>
        ) : (
          "-"
        )}
      </td>
      <td>
        <Flex sx={tableSignatureCell}>
          {signer?.signature?.signature ? (
            signer.signature.signature
          ) : (
            <>
              <Box sx={pendingIcon}>
                <PendingIcon />
              </Box>
              <Box>Pending</Box>
            </>
          )}
        </Flex>
      </td>
      <td>{signer?.signature?.signatureCid || "-"}</td>
    </tr>
  );
};
