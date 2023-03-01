import React, { ReactNode, useState } from "react";
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
import iconsObj from "../../assets/icons";
import { InformationRow } from "./InformationRow";
import { formatAddress, formatAgreementCreationDate, onCopyClick } from "../../utils/formats";
import Tooltip from "../../components/Tooltip";
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
import ModalSignStatus from "../ModalSignStatus";
import ModalProof from "../ModalProof";
import { toAgreementWithParticipants } from "../../utils/typeUtils";
import SignedIcon from "../icon/editable/SignedIcon";
import SignatureIcon from "../icon/editable/SignatureIcon";
import CopyIcon from "../CopyIcon";

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
  agreement: ReturnType<typeof toAgreementWithParticipants>;
  agreementId: number;
  agreementStatus?: AgreementStatus;
  agreementPrivacy?: AgreementPrivacy;
  agreementLocation?: AgreementLocation;
  createdAt?: Date | string | number;
  isWaitingForMySignature: boolean;
  userIsAuthor: boolean;
  authorWalletAddress?: string;
  setIsOpen: any;
  onSetAgreementReadyToSign?: () => void;
  onSignAgreement?: (...props: any) => Promise<any>;
}

export const AGREEMENT_PROOF = "Agreement Proof";
export const AUTHORITY_PROOF = "Authority Proof";

export const AgreementInformation = ({
  agreement,
  agreementId,
  agreementStatus,
  agreementPrivacy,
  agreementLocation,
  createdAt,
  isWaitingForMySignature,
  userIsAuthor,
  setIsOpen,
  authorWalletAddress,
  onSetAgreementReadyToSign = () => {},
  onSignAgreement = async () => {},
}: Props) => {
  const { push } = useRouter();
  const [isConfirmAgreementDeletionPopupVisible, setIsConfirmAgreementDeletionPopupVisible] =
    useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);

  const [successModalContent, setSuccessModalContent] = useState<
    { title?: string; content: ReactNode } | undefined
  >();

  const [proofToShow, showProof] = useState<
    { title: string; proof: { cid: string; signature?: string } } | undefined
  >();

  const handleCopyAddress = () => {
    onCopyClick(authorWalletAddress || "");
    notifSucces("Address Copied");
  };

  // TODO: edit observers
  const handleEditObservers = () => {
    setIsOpen(true);
  };

  const handleReadyToSign = () => {
    onSetAgreementReadyToSign();
  };

  const handleSignAgreement = async () => {
    if (loading) return;
    setLoading(true);
    try {
      await onSignAgreement();

      const signProofsLength = agreement.signers.filter(
        s => !!s.signProof?.cid && !!s.signProof?.signature
      ).length;

      const isLastSignature = agreement.signers.length - signProofsLength === 0;

      setSuccessModalContent({
        content: (
          <>
            <p>You have successfully generated Proof-of-signature </p>
            {isLastSignature && (
              <p> Proof-of-agreement was generated because all signers signed the Agreement.</p>
            )}
          </>
        ),
      });
    } catch (error) {
      notifError(error.message);
    }
    setLoading(false);
  };

  const handleDeleteAgreement = async () => {
    setIsConfirmAgreementDeletionPopupVisible(true);
  };

  const onAgreementDeletionSuccess = async () => {
    // For less screen flickering
    await sleep(500);
    push("/agreements", "/agreements", { shallow: false });
  };

  const onShowProof = (type: typeof AGREEMENT_PROOF | typeof AUTHORITY_PROOF) => {
    if (type === AGREEMENT_PROOF && agreement.agreementProof) {
      showProof({ title: AGREEMENT_PROOF, proof: agreement.agreementProof });
    }
    if (type === AUTHORITY_PROOF && agreement.agreementFileProof) {
      //@ts-ignore
      showProof({ title: AUTHORITY_PROOF, proof: agreement.agreementFileProof });
    }
  };

  return (
    <Flex sx={briefInformation}>
      <Flex sx={briefInformationHeader}>
        <Box>Information</Box>
      </Flex>
      <Flex sx={briefInformationData}>
        <InformationRow
          name="Creation Date"
          value={createdAt ? formatAgreementCreationDate(createdAt) : ""}
        />
        <InformationRow
          name="Signed Date"
          value={
            agreement?.agreementProof?.signedAt
              ? formatAgreementCreationDate(agreement?.agreementProof?.signedAt)
              : "-"
          }
        />
        <InformationRow
          name="Creator"
          tooltipValue={authorWalletAddress}
          value={
            <Box className="signature_icon" sx={{ cursor: "pointer" }} onClick={handleCopyAddress}>
              {formatAddress(authorWalletAddress!)} <CopyIcon />
            </Box>
          }
        />
        <InformationRow
          name="Agreement proof"
          tooltipValue={agreement?.agreementProof?.cid}
          value={
            agreement.agreementProof ? (
              <Box
                onClick={() => (agreement.agreementProof ? onShowProof(AGREEMENT_PROOF) : {})}
                sx={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "4px" }}
                className="signature_icon"
              >
                {formatAddress(agreement.agreementProof!.cid)} <SignatureIcon color="#CA5CF2" />
              </Box>
            ) : (
              "-"
            )
          }
        />

        <InformationRow
          name="Authority proof"
          tooltipValue={agreement?.agreementFileProof?.cid || undefined}
          value={
            agreement.agreementFileProof ? (
              <Box
                onClick={() => (agreement.agreementFileProof ? onShowProof(AUTHORITY_PROOF) : {})}
                sx={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "4px" }}
                className="signature_icon"
              >
                {formatAddress(agreement.agreementFileProof!.cid!)}{" "}
                <SignatureIcon color="#CA5CF2" />
              </Box>
            ) : (
              "-"
            )
          }
        />
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
            <Tooltip
              top="-111%"
              left="-47px"
              transform=""
              minWidth="132px"
              title={"Anonymous Badge"}
              height={undefined}
            >
              <img width={52} src={iconsObj.verificationAnonymous.src} alt="anonymous" />
            </Tooltip>
          </Box>
        </Flex>
      </Flex>
      <Flex sx={buttonsContainer}>
        {
          <>
            {userIsAuthor && agreementStatus === STATUS_DRAFT ? (
              <NextLink href={`/edit/${agreementId}?step=1`}>
                <Link>
                  <Button sx={btnSecondary}>Edit Agreement</Button>
                </Link>
              </NextLink>
            ) : null}
            {agreement.isAllowedToEditObservers && (
              <Button sx={btnSecondary} onClick={handleEditObservers}>
                Edit Observers
              </Button>
            )}
          </>
        }
        {agreementStatus === STATUS_DRAFT && userIsAuthor ? (
          <Button sx={btnPrimary} onClick={handleReadyToSign}>
            Ready to Sign
          </Button>
        ) : (agreementStatus === STATUS_READY_TO_SIGN ||
            agreementStatus === STATUS_PARTIALLY_SIGNED) &&
          isWaitingForMySignature ? (
          <Button sx={btnPrimary} onClick={handleSignAgreement} disabled={loading}>
            {loading ? <Spinner size={16} color="white" /> : "Sign Agreement"}
          </Button>
        ) : null}
        {userIsAuthor &&
        (agreementStatus === STATUS_DRAFT || agreementStatus === STATUS_READY_TO_SIGN) ? (
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
      {successModalContent && (
        <ModalSignStatus
          isOpen={!!successModalContent}
          title={successModalContent.title}
          content={successModalContent.content}
          onExit={() => setSuccessModalContent(undefined)}
          error={false}
        />
      )}
      {proofToShow && (
        <ModalProof
          title={proofToShow.title}
          isOpen={!!proofToShow}
          onExit={() => showProof(undefined)}
          proof={proofToShow.proof}
        />
      )}
    </Flex>
  );
};
