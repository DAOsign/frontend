import React, { useMemo, useState } from "react";
import { Box, Flex, Text, ThemeUIStyleObject } from "theme-ui";
import { formatAgreementStatus, onCopyClick } from "../../utils/formats";
import Icon from "../icon";
import {
  AgreementPrivacy,
  AgreementStatus,
  PRIVACY_PRIVATE,
  STATUS_DRAFT,
  STATUS_PARTIALLY_SIGNED,
  STATUS_READY_TO_SIGN,
  STATUS_SIGNED,
} from "../../types";
import iconsObj from "../../assets/icons";
import SignatureIcon from "../icon/editable/SignatureIcon";
import ShareIcon from "../icon/editable/ShareIcon";
import DownloadIcon from "../icon/editable/DownloadIcon";
import { notifSuccess } from "../../utils/notification";
import loader from "../../img/json/loader.json";
import Tooltip from "../Tooltip";
import { downloadPdf } from "../../modules/rest";
import { ModalBase } from "../ModalBase/ModalBase";
import {
  bg,
  closeIcon,
  flexContent,
  flexLoader,
  importingText,
  mainText,
  modalBase,
  overflowContentStyles,
} from "../ModalImportSnapshot/styles";
import Lottie from "lottie-react";
import { Portal } from "../Portal/Portal";
import NetworkIcon from "../NetworkIcon";
import { Observer, Signer } from "../../modules/graphql/gql/graphql";

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
  storedOnNetwork?: number;
  userIsAuthor: boolean;
  account: string | null;
  agreementSigners: Array<Signer> | undefined;
  agreementObservers: Array<Observer> | undefined;
}

export const AgreementLabels = ({
  agreementTitle,
  agreementId,
  agreementStatus,
  agreementPrivacy,
  isWaitingForMySignature,
  storedOnNetwork,
  agreementSigners,
  userIsAuthor,
  account,
  agreementObservers,
}: Props) => {
  const handleShareLink = () => {
    onCopyClick(window?.location?.href);
    notifSuccess("Link Copied");
  };
  const [downloadInProgress, setDownloadInProgress] = useState(false);

  // TODO: download document
  const handleDownloadDocument = () => {
    setDownloadInProgress(true);
    downloadPdf(agreementId, agreementTitle).then(() => {
      setDownloadInProgress(false);
    });
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

  const userIsSigner = useMemo(
    () =>
      account &&
      agreementSigners?.some((signer: any) => signer?.wallet.address === account.toLowerCase()),
    [agreementSigners, account]
  );

  const userIsObserver = useMemo(
    () =>
      account &&
      agreementObservers?.some(
        (observer: any) => observer?.wallet.address === account.toLowerCase()
      ),
    [agreementSigners, account]
  );

  const isShowDownload = () => {
    return userIsAuthor || userIsSigner || userIsObserver;
  };

  return (
    <>
      <Flex sx={labelsContainer}>
        <Flex sx={labelsRow}>
          <Tooltip
            top="-46px"
            height="0"
            className="statusViews"
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
              agreementPrivacy !== "With Link" ? "translate(-65%, 0px)" : "translate(-60%, -3%)"
            }
            title={titleTooltip(agreementPrivacy)}
            minWidth={agreementPrivacy !== "With Link" ? "135px" : "135px"}
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
          {storedOnNetwork && <NetworkIcon networkId={storedOnNetwork} />}
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
            Share Link
          </Flex>
          {isShowDownload() && (
            <Flex
              sx={greyLabelWithHover}
              onClick={() => {
                handleDownloadDocument();
              }}
            >
              <Box sx={labelIcon}>
                <DownloadIcon />
              </Box>
              Download Document
            </Flex>
          )}
        </Flex>
      </Flex>
      <Portal sx={bg} isOpen={downloadInProgress}>
        <ModalBase height="auto" sx={{ ...modalBase, zIndex: "100" }}>
          <Flex sx={flexContent}>
            <Box onClick={() => setDownloadInProgress(false)} sx={closeIcon}>
              <Icon src={iconsObj.xClose} />
            </Box>
            <Text sx={{ ...mainText, mb: "40px" }}>Generate Pdf</Text>
            <Flex sx={{ ...flexContent, ...overflowContentStyles }}>
              <Flex sx={flexLoader}>
                <Lottie style={{ height: "80px" }} animationData={loader} loop={true} />
                <Text sx={importingText}>Generating...</Text>
              </Flex>
            </Flex>
          </Flex>
        </ModalBase>
      </Portal>
    </>
  );
};
