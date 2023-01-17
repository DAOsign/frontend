import React, { useEffect, useMemo, useState } from "react";
import { Box, Button, Flex, Link, ThemeUIStyleObject } from "theme-ui";
import { useRouter } from "next/router";
import { useQuery } from "urql";
import { agreementById } from "../../modules/graphql/queries";
import NextLink from "next/link";
import {
  backContainer,
  backIcon,
  baseLabel,
  blueLabel,
  briefInformation,
  btnPrimary,
  buttonsContainer,
  btnSecondary,
  container,
  errorBackButton,
  errorContainer,
  errorMessage,
  greenLabel,
  greyLabel,
  greyLabelWithHover,
  labelIcon,
  labelsContainer,
  labelsRow,
  mainData,
  title,
  yellowLabel,
  deleteAgreementBtn,
  briefInformationHeader,
  briefInformationData,
  needSigningIcon,
} from "./styles";
import iconsObj from "../../assets/icons";
import Icon from "../icon";
import { toAgreement } from "../../utils/typeUtils";
import { formatAgreementCreationDate, formatAgreementStatus } from "../../utils/formats";
import {
  PRIVACY_PRIVATE,
  STATUS_DRAFT,
  STATUS_PARTIALLY_SIGNED,
  STATUS_READY_TO_SIGN,
  STATUS_SIGNED,
} from "../../types";
import { useWeb3 } from "../../hooks/useWeb3";
import { areWalletsEqual } from "../../utils/wallet";
import { InformationRow } from "./InformationRow";
import DownloadIcon from "../icon/editable/DownloadIcon";
import ShareIcon from "../icon/editable/ShareIcon";
import SignatureIcon from "../icon/editable/SignatureIcon";
import ModalConfirmAgreementDeletion from "../ModalConfirmAgreementDeletion/ModalConfirmAgreementDeletion";
import { sleep } from "../../utils/common";

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

export const ViewAgreement = () => {
  const { push, query } = useRouter();
  const { agreementId } = query;
  const idIsWrong = !!agreementId && !Number(agreementId);

  const [isConfirmAgreementDeletionPopupVisible, setIsConfirmAgreementDeletionPopupVisible] =
    useState<boolean>(false);

  const { account } = useWeb3();

  const [{ data, error: getAgreementError }] = useQuery({
    query: agreementById,
    variables: { agreementId: Number(agreementId) },
    pause: !agreementId || idIsWrong,
  });

  const agreement = useMemo(
    () => (data?.agreement ? toAgreement(data.agreement as any) : null),
    [data]
  );

  // TODO: compare by user, not wallet
  const userIsAuthor = areWalletsEqual(account, agreement?.authorWalletAddress);

  useEffect(() => {
    if (
      getAgreementError &&
      getAgreementError.message &&
      !getAgreementError.message.includes("Access denied")
    ) {
      // TODO: toast notify
      console.error("[GetAgreementById]", getAgreementError.message);
    }
  }, [getAgreementError]);

  const handleBack = () => {
    push("/");
  };

  // TODO: share link
  const handleShareLink = () => {};

  // TODO: download document
  const handleDownloadDocument = () => {};

  // TODO: edit observers
  const handleEditObservers = () => {};

  // TODO: set status to ready to sign
  const handleReadyToSign = () => {};

  // TODO: sign agreement
  const handleSignAgreement = () => {};

  const handleDeleteAgreement = async () => {
    setIsConfirmAgreementDeletionPopupVisible(true);
  };

  const onAgreementDeletionSuccess = async () => {
    // For less screen flickering
    await sleep(500);
    push("/agreements", "/agreements", { shallow: false });
  };

  return (
    <Flex sx={container}>
      {idIsWrong || getAgreementError ? (
        <Flex sx={errorContainer}>
          <Box sx={errorMessage}>
            {idIsWrong ? "Agreement ID is not valid" : "You can't view this agreement"}
          </Box>
          <Button onClick={handleBack} sx={errorBackButton}>
            Go Back
          </Button>
        </Flex>
      ) : (
        <>
          <Flex sx={mainData}>
            <Flex onClick={handleBack} sx={backContainer}>
              <Box sx={backIcon}>
                <Icon src={iconsObj.arrowNarrowLeft} />
              </Box>
              <Box>Back</Box>
            </Flex>
            <Box sx={title}>{agreement?.title}</Box>
            <Flex sx={labelsContainer}>
              <Flex sx={labelsRow}>
                <Flex sx={getAgreementStatusLabelStyle(agreement?.agreementStatus)}>
                  {formatAgreementStatus(agreement?.agreementStatus)}
                </Flex>
                <Flex sx={baseLabel}>
                  {agreement?.agreementPrivacy ? (
                    <Box sx={labelIcon}>
                      <Icon
                        src={
                          agreement?.agreementPrivacy === PRIVACY_PRIVATE
                            ? iconsObj.privateIcon
                            : iconsObj.publicIcon
                        }
                      />
                    </Box>
                  ) : null}
                  {agreement?.agreementPrivacy}
                </Flex>
                {agreement?.isWaitingForMySignature ? (
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
                <Flex sx={greyLabelWithHover} onClick={handleDownloadDocument}>
                  <Box sx={labelIcon}>
                    <DownloadIcon />
                  </Box>
                  Download Document
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex sx={briefInformation}>
            <Flex sx={briefInformationHeader}>
              <Box>Information</Box>
              <Box style={{ width: "20px", transform: "rotate(180deg)" }}>
                <Icon src={iconsObj.arrowLeftPink} />
              </Box>
            </Flex>
            <Flex sx={briefInformationData}>
              <InformationRow
                name="Creation Date"
                value={
                  agreement?.createdAt ? formatAgreementCreationDate(agreement?.createdAt) : ""
                }
              />
              <InformationRow name="Signed Date" value="-" />
              <InformationRow name="Creator" value="-" />
              <InformationRow name="Agreement proof" value="-" />
              <InformationRow name="Authority proof" value="-" />
            </Flex>
            <Flex sx={buttonsContainer}>
              {userIsAuthor ? (
                agreement?.agreementStatus === STATUS_DRAFT ||
                agreement?.agreementStatus === STATUS_READY_TO_SIGN ? (
                  <NextLink href={`/edit/${agreementId}?step=1`}>
                    <Link>
                      <Button sx={btnSecondary}>Edit Agreement</Button>
                    </Link>
                  </NextLink>
                ) : (
                  <Button sx={btnSecondary} onClick={handleEditObservers}>
                    Edit Observers
                  </Button>
                )
              ) : null}
              {agreement?.agreementStatus === STATUS_DRAFT ? (
                <Button sx={btnPrimary} onClick={handleReadyToSign}>
                  Ready to Sign
                </Button>
              ) : (agreement?.agreementStatus === STATUS_READY_TO_SIGN ||
                  agreement?.agreementStatus === STATUS_PARTIALLY_SIGNED) &&
                agreement?.isWaitingForMySignature ? (
                <Button sx={btnPrimary} onClick={handleSignAgreement}>
                  Sign Agreement
                </Button>
              ) : null}
              {userIsAuthor && agreement?.agreementStatus === STATUS_DRAFT ? (
                <Box sx={deleteAgreementBtn} onClick={handleDeleteAgreement}>
                  Delete Agreement
                </Box>
              ) : null}
            </Flex>
          </Flex>
          <ModalConfirmAgreementDeletion
            agreementId={Number(agreementId)}
            isOpen={isConfirmAgreementDeletionPopupVisible}
            onSuccess={onAgreementDeletionSuccess}
            onExit={() => setIsConfirmAgreementDeletionPopupVisible(false)}
          />
        </>
      )}
    </Flex>
  );
};
