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
import { AgreementSignProof, Signer } from "../../modules/graphql/gql/graphql";
import { notifSucces } from "../../utils/notification";
import SignedIcon from "../icon/editable/SignedIcon";
import SignatureIcon from "../icon/editable/SignatureIcon";

interface Props {
  signer: Signer;
  signProof: AgreementSignProof;
  viewProof: (proof: AgreementSignProof) => void;
}

export const SignerRow = ({ signer, signProof, viewProof }: Props) => {
  const handleCopyAddress = (address: string) => {
    onCopyClick(address);
    notifSucces("Address Copied");
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
              <Icon
                style={{ cursor: "pointer", width: "14px", height: "14px" }}
                src={iconsObj.iconSix}
              />
            </Box>
          </Flex>
        ) : (
          "-"
        )}
      </td>
      <td>
        <Flex sx={tableSignatureCell}>
          {signProof?.signature ? (
            <>
              <Box sx={pendingIcon}>
                <SignedIcon />
              </Box>
              <Box>Signed</Box>
            </>
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

      {signProof?.cid ? (
        <td onClick={() => viewProof(signProof)} style={{ cursor: "pointer" }}>
          {formatAddress(signProof.cid)} <SignatureIcon />
        </td>
      ) : (
        <td>-</td>
      )}
    </tr>
  );
};
