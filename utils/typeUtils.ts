import { Agreement as AgreementResponse } from "../modules/graphql/gql/graphql";
import { Agreement, AgreementLocation, AgreementPrivacy, AgreementStatus } from "../types";

export const toAgreement = (agreement: AgreementResponse): Agreement => {
  return {
    snapshotProposalUrl: agreement.snapshotProposalUrl,
    agreementId: Number(agreement.agreementId),
    title: agreement.title,
    agreementLocation: agreement.agreementLocation?.name as unknown as AgreementLocation,
    agreementPrivacy: agreement.agreementPrivacy?.name as AgreementPrivacy,
    agreementStatus: agreement.agreementStatus.name as AgreementStatus,
    authorWalletAddress: agreement.authorWallet.address,
    content: agreement.content || "",
    observers: agreement.observers.map(o => o.wallet?.address || "noWallet"),
    signers: agreement.signers?.map(s => s.wallet?.address || "noWallet") || [],
    isWaitingForMySignature: agreement.isWaitingForMySignature || false,
    signProofAmount: agreement.signProofs?.filter(p => p.cid && p.signature)?.length || 0,
    isAllowedToEditObservers: agreement.isAllowedToEditObservers || false,
    createdAt: new Date(agreement.createdAt),
    agreementFile: agreement?.agreementFile
      ? {
          filePath: agreement?.agreementFile?.filePath || undefined,
          agreementHash: agreement?.agreementFile?.agreementHash || undefined,
          createdAt: agreement?.agreementFile?.createdAt,
        }
      : undefined,
  };
};

export const toAgreementWithParticipants = (agreement: AgreementResponse) => {
  return {
    ...toAgreement(agreement),
    observers: agreement.observers || [],
    signers:
      agreement.signers.map(s => {
        const signProof = agreement?.signProofs?.find(
          p => p.signerWallet && p.signerWallet.address === s.wallet?.address
        );
        return { ...s, signProof: signProof };
      }) || [],
    agreementProof: agreement?.agreementProof || null,
    agreementFileProof: agreement?.agreementFileProof || null,
  };
};
