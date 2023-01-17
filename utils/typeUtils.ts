import { Agreement as AgreementResponse } from "../modules/graphql/gql/graphql";
import { Agreement, AgreementLocation, AgreementPrivacy, AgreementStatus } from "../types";

export const toAgreement = (agreement: AgreementResponse): Agreement => {
  return {
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
    createdAt: new Date(agreement.createdAt),
  };
};
