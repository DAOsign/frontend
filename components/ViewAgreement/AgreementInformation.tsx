/* eslint-disable @next/next/no-img-element */
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
import { Box, Button, Flex, Link, Spinner, Text } from "theme-ui";
import iconsObj from "../../assets/icons";
import { InformationRow } from "./InformationRow";
import {
  formatAddress,
  formatAgreementCreationDate,
  onCopyClick,
  extractProposalId,
} from "../../utils/formats";
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
import { notifError, notifSuccess } from "../../utils/notification";
import ModalSignStatus from "../ModalSignStatus";
import ModalProof from "../ModalProof";
import { toAgreementWithParticipants } from "../../utils/typeUtils";
import SignatureIcon from "../icon/editable/SignatureIcon";
import CopyIcon from "../CopyIcon";
import Icon from "../icon";
import { InformationRowValue } from "./InformationRowValue";

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
  agreementId: string;
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
export const IDENTITY_PROOF = "Identity Proof";
export const CANCEL_PROOF = "Cancel Proof";
export const VOID_PROOF = "Void Proof";

export const AgreementInformation = ({
  onSetAgreementReadyToSign = () => {},
  onSignAgreement = async () => {},
  isWaitingForMySignature,
  authorWalletAddress,
  agreementLocation,
  agreementPrivacy,
  agreementStatus,
  userIsAuthor,
  agreementId,
  createdAt,
  setIsOpen,
  agreement,
}: Props) => {
  const { push } = useRouter();
  const [isConfirmAgreementDeletionPopupVisible, setIsConfirmAgreementDeletionPopupVisible] =
    useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);

  const [successModalContent, setSuccessModalContent] = useState<
    { title?: string; content: ReactNode } | undefined
  >();

  const [proofToShow, showProof] = useState<
    | { title: string; proof: { cid: string; signature?: string; blockchainStored?: string } }
    | undefined
  >();

  const handleCopyAddress = () => {
    onCopyClick(authorWalletAddress || "");
    notifSuccess("Address Copied");
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

      const isLastSignature = agreement.signers.length - signProofsLength <= 1;

      setSuccessModalContent({
        content: (
          <>
            <p>You have successfully generated Proof-of-Signature</p>
            {isLastSignature && (
              <p> Proof-of-Agreement was generated because all signers signed the Agreement.</p>
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

  const onShowProof = (type: typeof AGREEMENT_PROOF | typeof IDENTITY_PROOF) => {
    if (type === AGREEMENT_PROOF && agreement.agreementProof) {
      //@ts-ignore
      showProof({ title: AGREEMENT_PROOF, proof: agreement.agreementProof });
    }
    if (type === IDENTITY_PROOF && agreement.agreementFileProof) {
      //@ts-ignore
      showProof({ title: IDENTITY_PROOF, proof: agreement.agreementFileProof });
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
          value={
            <InformationRowValue text={createdAt ? formatAgreementCreationDate(createdAt) : ""} />
          }
        />
        <InformationRow
          name="Signed Date"
          value={
            <InformationRowValue
              text={
                agreement?.agreementProof?.signedAt
                  ? formatAgreementCreationDate(agreement?.agreementProof?.signedAt)
                  : "-"
              }
            />
          }
        />
        {agreement?.snapshotProposalUrl && (
          <InformationRow
            className="proposalId"
            tooltipValue={extractProposalId(agreement.snapshotProposalUrl)!}
            value={
              <Link href={agreement?.snapshotProposalUrl} target="_blank">
                <InformationRowValue
                  text={formatAddress(extractProposalId(agreement.snapshotProposalUrl)!)!}
                  icon={
                    <Box sx={{ width: "16px", height: "16px" }}>
                      <Icon src={iconsObj.lightning} />
                    </Box>
                  }
                />
              </Link>
            }
            name="Snapshot proposal"
          />
        )}
        <InformationRow
          name="Creator"
          tooltipValue={authorWalletAddress}
          value={
            <InformationRowValue
              text={formatAddress(authorWalletAddress!)}
              onClick={handleCopyAddress}
              icon={<CopyIcon />}
            />
          }
        />
        <InformationRow
          name="Agreement Proof"
          tooltipValue={agreement?.agreementProof?.cid}
          value={
            agreement.agreementProof ? (
              <InformationRowValue
                text={formatAddress(agreement.agreementProof!.cid)}
                onClick={() => (agreement.agreementProof ? onShowProof(AGREEMENT_PROOF) : {})}
                icon={<SignatureIcon color="#CA5CF2" />}
              />
            ) : (
              "-"
            )
          }
        />

        <InformationRow
          name="Authority Proof"
          tooltipValue={agreement?.agreementFileProof?.cid || undefined}
          value={
            agreement.agreementFileProof ? (
              <InformationRowValue
                text={formatAddress(agreement.agreementFileProof!.cid!)}
                onClick={() => (agreement.agreementFileProof ? onShowProof(IDENTITY_PROOF) : {})}
                icon={<SignatureIcon color="#CA5CF2" />}
              />
            ) : (
              "-"
            )
          }
        />
        <InformationRow
          name="Identity Proof"
          value={<InformationRowValue text="<Not required>" />}
        />
        <InformationRow
          name="Location"
          value={<InformationRowValue text={agreementLocation || ""} />}
        />
        <InformationRow
          name="Access"
          value={
            <InformationRowValue
              text={agreementPrivacy ? formatAgreementPrivacy(agreementPrivacy) : ""}
            />
          }
        />
      </Flex>
      <Flex sx={verificationsContainer}>
        <Box sx={verificationsTitle}>Required Verifications</Box>
        <Flex sx={verificationsRow}>
          <Box sx={verificationCard}>
            <Tooltip
              top="-111%"
              left="-47px"
              className=""
              transform="anonymousTooltip"
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
        agreementId={agreementId}
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
          storedOnBlockchain={agreement?.storedOnBlockchain}
        />
      )}
    </Flex>
  );
};
