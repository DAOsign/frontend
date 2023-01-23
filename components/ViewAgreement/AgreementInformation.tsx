import React, { useState } from "react";
import {
  briefInformation,
  briefInformationData,
  briefInformationHeader,
  btnPrimary,
  btnSecondary,
  buttonsContainer,
  deleteAgreementBtn,
  verificationCard,
  verificationsContainer,
  verificationsRow,
  verificationsTitle,
} from "./styles";
import { Box, Button, Flex, Link, Spinner } from "theme-ui";
import Icon from "../icon";
import iconsObj from "../../assets/icons";
import { InformationRow } from "./InformationRow";
import { formatAddress, formatAgreementCreationDate, onCopyClick } from "../../utils/formats";
import {
  AgreementLocation,
  AgreementPrivacy,
  AgreementStatus,
  STATUS_DRAFT,
  STATUS_PARTIALLY_SIGNED,
  STATUS_READY_TO_SIGN,
} from "../../types";
import NextLink from "next/link";
import ModalConfirmAgreementDeletion from "../ModalConfirmAgreementDeletion/ModalConfirmAgreementDeletion";
import { sleep } from "../../utils/common";
import { useRouter } from "next/router";
import { notifError, notifSucces } from "../../utils/notification";
import Image from "next/image";
import { useMutation } from "urql";
import { setAgreementReadyToSignMutation } from "../../modules/graphql/mutations";

const formatAgreementPrivacy = (agreementPrivacy: string | undefined) => {
  if (!agreementPrivacy) return "";
  switch (agreementPrivacy) {
    case "With Link":
      return "Anyone With Link";
    default:
      return agreementPrivacy;
  }
};

interface Props {
  agreementId: number;
  agreementStatus?: AgreementStatus;
  agreementPrivacy?: AgreementPrivacy;
  agreementLocation?: AgreementLocation;
  createdAt?: Date | string | number;
  isWaitingForMySignature: boolean;
  userIsAuthor: boolean;
  authorWalletAddress?: string;
  onSetAgreementReadyToSign?: () => void;
}

export const AgreementInformation = ({
  agreementId,
  agreementStatus,
  agreementPrivacy,
  agreementLocation,
  createdAt,
  isWaitingForMySignature,
  userIsAuthor,
  authorWalletAddress,
  onSetAgreementReadyToSign = () => {},
}: Props) => {
  const { push } = useRouter();
  const [isConfirmAgreementDeletionPopupVisible, setIsConfirmAgreementDeletionPopupVisible] =
    useState<boolean>(false);

  const [, setAgreementReadyToSign] = useMutation(setAgreementReadyToSignMutation);
  const [isSettingReadyToSign, setIsSettingReadyToSign] = useState<boolean>(false);

  const handleCopyAddress = () => {
    onCopyClick(authorWalletAddress || "");
    notifSucces("Link Copied");
  };

  // TODO: edit observers
  const handleEditObservers = () => {
    notifError("Editing observers is not yet implemented");
  };

  const handleReadyToSign = async () => {
    if (isSettingReadyToSign) return;
    setIsSettingReadyToSign(true);

    try {
      await setAgreementReadyToSign({ agreementId: agreementId });
      onSetAgreementReadyToSign();
      notifSucces("Agreement is ready to sign");
    } catch (error) {
      notifError(error?.message || "Failed to set agreement to Ready to Sign status");
      console.error("[HandleReadyToSign]", error);
    } finally {
      setIsSettingReadyToSign(false);
    }
  };

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
          value={createdAt ? formatAgreementCreationDate(createdAt) : ""}
        />
        <InformationRow name="Signed Date" value="-" />
        <InformationRow
          name="Creator"
          value={authorWalletAddress ? formatAddress(authorWalletAddress) : ""}
          valueIcon={iconsObj.iconSix}
          onIconClick={handleCopyAddress}
        />
        <InformationRow name="Agreement proof" value="-" />
        <InformationRow name="Authority proof" value="-" />
        <InformationRow name="Location" value={agreementLocation || ""} />
        <InformationRow
          name="Access"
          value={agreementPrivacy ? formatAgreementPrivacy(agreementPrivacy) : ""}
        />
      </Flex>
      <Flex sx={verificationsContainer}>
        <Box sx={verificationsTitle}>Required Verifications</Box>
        <Flex sx={verificationsRow}>
          <Box sx={verificationCard}>
            <Image src={iconsObj.verificationAnonymous} alt="anonymous" />
          </Box>
        </Flex>
      </Flex>
      <Flex sx={buttonsContainer}>
        {userIsAuthor ? (
          <>
            {agreementStatus === STATUS_DRAFT ? (
              <NextLink href={`/edit/${agreementId}?step=1`}>
                <Link>
                  <Button sx={btnSecondary}>Edit Agreement</Button>
                </Link>
              </NextLink>
            ) : null}
            {agreementStatus === STATUS_READY_TO_SIGN ? (
              <Button sx={btnSecondary} onClick={handleEditObservers}>
                Edit Observers
              </Button>
            ) : null}
          </>
        ) : null}
        {agreementStatus === STATUS_DRAFT ? (
          <Button sx={btnPrimary} onClick={handleReadyToSign} disabled={isSettingReadyToSign}>
            {isSettingReadyToSign ? <Spinner size={16} color="#CA5CF2" /> : "Ready to Sign"}
          </Button>
        ) : (agreementStatus === STATUS_READY_TO_SIGN ||
            agreementStatus === STATUS_PARTIALLY_SIGNED) &&
          isWaitingForMySignature ? (
          <Button sx={btnPrimary} onClick={handleSignAgreement}>
            Sign Agreement
          </Button>
        ) : null}
        {userIsAuthor && agreementStatus === STATUS_DRAFT ? (
          <Box sx={deleteAgreementBtn} onClick={handleDeleteAgreement}>
            Delete Agreement
          </Box>
        ) : null}
      </Flex>
      <ModalConfirmAgreementDeletion
        agreementId={Number(agreementId)}
        isOpen={isConfirmAgreementDeletionPopupVisible}
        onSuccess={onAgreementDeletionSuccess}
        onExit={() => setIsConfirmAgreementDeletionPopupVisible(false)}
      />
    </Flex>
  );
};
