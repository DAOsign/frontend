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
import Tooltip from "../Tooltip";
import NextLink from "next/link";
import { useWeb3 } from "../../hooks/useWeb3";

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

  const signerName = useMemo<string>(
    () => signer?.ens?.name || signer?.wallet?.user?.name || "Anonymous",
    []
  );
  const { account } = useWeb3();
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
          <NextLink href={`/profile/${address}`}>
            <Box sx={usernameText}>{signerName}</Box>
          </NextLink>
        </Flex>
      </td>
      <td>
        {address ? (
          <Flex
            className="signature_icon"
            sx={tableAddressCell}
            onClick={() => handleCopyAddress(address)}
          >
            <Tooltip top="-45px" left="-115px" title={address}>
              <Box sx={{ cursor: "pointer" }}>{formatAddress(address)}</Box>
            </Tooltip>
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
          <Tooltip top="-45px" left="-130px" title={signProof.cid}>
            <Box sx={{ cursor: "pointer" }}>
              {formatAddress(signProof.cid)} <SignatureIcon color="#CA5CF2" />
            </Box>
          </Tooltip>
        </td>
      ) : (
        <td>-</td>
      )}
    </tr>
  );
};
