import React from "react";
import {
  baseLabel,
  blueLabel,
  greenLabel,
  greyLabel,
  greyLabelWithHover,
  labelIcon,
  labelsContainer,
  labelsRow,
  needSigningIcon,
  yellowLabel,
} from "./styles";
import { Box, Flex, ThemeUIStyleObject } from "theme-ui";
import { formatAgreementStatus, onCopyClick } from "../../utils/formats";
import Icon from "../icon";
import {
  AgreementPrivacy,
  AgreementStatus,
  PRIVACY_PRIVATE,
  PRIVACY_PUBLIC_PROOF_ONLY,
  PRIVACY_PUBLIC_PROOF_ONLY_FULL_NAME,
  STATUS_DRAFT,
  STATUS_PARTIALLY_SIGNED,
  STATUS_READY_TO_SIGN,
  STATUS_SIGNED,
} from "../../types";
import iconsObj from "../../assets/icons";
import SignatureIcon from "../icon/editable/SignatureIcon";
import ShareIcon from "../icon/editable/ShareIcon";
import DownloadIcon from "../icon/editable/DownloadIcon";
import { notifError, notifSucces } from "../../utils/notification";

const getAgreementStatusLabelStyle = (agreementStatus: string | undefined): ThemeUIStyleObject => {
  switch (agreementStatus) {
    case STATUS_DRAFT:
      return greyLabel;
    case STATUS_READY_TO_SIGN:
      return blueLabel;
    case STATUS_PARTIALLY_SIGNED:
      return yellowLabel;
    case STATUS_SIGNED:
      return greenLabel;
    default:
      return greyLabel;
  }
};

interface Props {
  agreementStatus?: AgreementStatus;
  agreementPrivacy?: AgreementPrivacy | string;
  isWaitingForMySignature: boolean;
}

export const AgreementLabels = ({
  agreementStatus,
  agreementPrivacy,
  isWaitingForMySignature,
}: Props) => {
  const handleShareLink = () => {
    onCopyClick(window?.location?.href);
    notifSucces("Link Copied");
  };

  // TODO: download document
  const handleDownloadDocument = () => {
    notifError("Document download is not yet implemented");
  };

  return (
    <Flex sx={labelsContainer}>
      <Flex sx={labelsRow}>
        <Flex sx={getAgreementStatusLabelStyle(agreementStatus)}>
          {formatAgreementStatus(agreementStatus)}
        </Flex>
        <Flex sx={baseLabel}>
          {agreementPrivacy ? (
            <Box sx={labelIcon}>
              <Icon
                src={
                  agreementPrivacy === PRIVACY_PRIVATE ? iconsObj.privateIcon : iconsObj.publicIcon
                }
              />
            </Box>
          ) : null}
          {agreementPrivacy}
        </Flex>
        {isWaitingForMySignature ? (
          <Box sx={needSigningIcon}>
            <SignatureIcon />
          </Box>
        ) : null}
      </Flex>
      <Flex sx={labelsRow}>
        <Flex sx={greyLabelWithHover} onClick={handleShareLink}>
          <Box sx={labelIcon}>
            <ShareIcon />
          </Box>
          Share link
        </Flex>
        {agreementPrivacy !== PRIVACY_PUBLIC_PROOF_ONLY &&
        agreementPrivacy !== PRIVACY_PUBLIC_PROOF_ONLY_FULL_NAME ? (
          <Flex sx={greyLabelWithHover} onClick={handleDownloadDocument}>
            <Box sx={labelIcon}>
              <DownloadIcon />
            </Box>
            Download Document
          </Flex>
        ) : null}
      </Flex>
    </Flex>
  );
};
