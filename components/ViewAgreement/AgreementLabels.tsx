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
import { notifSucces } from "../../utils/notification";
import { notifComingSoon } from "../../utils/notification";
import Tooltip from "../Tooltip";
import { downloadPdf } from "../../modules/rest";

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
  agreementId: string;
  agreementTitle?: string;
  agreementStatus?: AgreementStatus;
  agreementPrivacy?: AgreementPrivacy | string;
  isWaitingForMySignature: boolean;
}

export const AgreementLabels = ({
  agreementTitle,
  agreementId,
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
    downloadPdf(agreementId, agreementTitle);
    //notifComingSoon("Download PDF Document is coming soon");
  };

  const titleTooltip = (value: string | undefined) => {
    if (!value) {
      return "";
    }
    if (value === "Private") {
      return "Agreement Privacy: Private";
    } else if (value === "With Link") {
      return "Agreement Privacy: Anyone With Link";
    } else {
      return `Agreement Privacy: ${value} `;
    }
  };

  return (
    <Flex sx={labelsContainer}>
      <Flex sx={labelsRow}>
        <Tooltip
          top="-46px"
          height="0"
          left="58%"
          transform={"translate(-60%, -3%)"}
          title={"Agreement Status"}
          minWidth="135px"
        >
          <Flex sx={getAgreementStatusLabelStyle(agreementStatus)}>
            {formatAgreementStatus(agreementStatus)}
          </Flex>
        </Tooltip>
        <Tooltip
          height="0"
          top="-62px"
          left="66%"
          transform={
            //@ts-ignore
            agreementPrivacy !== "With Link" ? "translate(-65%, 0px)" : "translate(-60%, -3%)"
          }
          title={titleTooltip(agreementPrivacy)}
          minWidth={
            //@ts-ignore
            agreementPrivacy !== "With Link" ? "135px" : "135px"
          }
        >
          <Flex sx={baseLabel}>
            {agreementPrivacy ? (
              <Box sx={labelIcon}>
                <Icon
                  src={
                    agreementPrivacy === PRIVACY_PRIVATE
                      ? iconsObj.privateIcon
                      : iconsObj.publicIcon
                  }
                />
              </Box>
            ) : null}
            {agreementPrivacy}
          </Flex>
        </Tooltip>
        {isWaitingForMySignature ? (
          <Tooltip
            title="Your signature is missing"
            transform="translate(-58%, -11%)"
            minWidth="170px"
            left="61%"
            top="-142%"
            height="0"
          >
            <Box sx={needSigningIcon}>
              <SignatureIcon />
            </Box>
          </Tooltip>
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
          <Flex
            sx={greyLabelWithHover}
            onClick={() => {
              // handleDownloadDocument();
              notifComingSoon("Download Document is coming soon");
            }}
          >
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
