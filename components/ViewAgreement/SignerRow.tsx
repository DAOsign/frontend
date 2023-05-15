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
import CopyIcon from "../CopyIcon";
import { Tooltip } from "react-tooltip";

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
      !!signer?.email?.length
        ? signer?.email
        : signer?.wallet?.address
        ? signer?.wallet?.address
        : "",
    [signer]
  );

  const signerName = useMemo<string>(
    () => signer?.ens?.name || signer?.wallet?.user?.name || "Anonymous",
    []
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
          <Box sx={usernameText}>{signerName}</Box>
        </Flex>
      </td>
      <td>
        {address ? (
          <Flex
            className="signature_icon"
            sx={tableAddressCell}
            onClick={() => handleCopyAddress(address)}
          >
            <Box data-tooltip-id={`${address}-signer`} data-tooltip-content={address}>
              {formatAddress(address)}
            </Box>
            <Tooltip id={`${address}-signer`} />
            <Box sx={informationRowIcon}>
              <CopyIcon />
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
        <td
          onClick={() => viewProof(signProof)}
          style={{ cursor: "pointer" }}
          className="signature_icon"
        >
          <Box data-tooltip-id={signProof.cid} data-tooltip-content={signProof.cid}>
            {formatAddress(signProof.cid)} <SignatureIcon color="#CA5CF2" />
          </Box>
          <Tooltip id={signProof.cid} />
        </td>
      ) : (
        <td>-</td>
      )}
    </tr>
  );
};
