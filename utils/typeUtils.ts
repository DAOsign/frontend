import { Agreement as AgreementResponse } from "../modules/graphql/gql/graphql";
import { Agreement, AgreementLocation } from "../types";

export const toAgreement = (agreement: AgreementResponse): Agreement => {
  return {
    title: agreement.title,
    agreementLocation: agreement.agreementLocation.name as unknown as AgreementLocation,
    agreementPrivacy: agreement.agreementPrivacy.name,
    agreementStatus: agreement.agreementStatus.name,
    authorWalletAddress: agreement.authorWallet.address,
    content: agreement.content,
    observers: agreement.observers.map(o => o.wallet?.address || "noWallet"),
    signers: agreement.signers?.map(s => s.wallet?.address || "noWallet") || [],
    agreementFile: agreement.agreementFile?.filePath,
  };
};
