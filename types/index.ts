export type AgreementStatus = string;
export type AgreementPrivacy = "Public" | "Private" | string;
export type AgreementLocation = "Cloud" | "Public IPFS" | "Private IPFS" | "Local";

export interface Agreement {
  agreementFile?: string;
  agreementLocation: AgreementLocation;
  agreementPrivacy: AgreementPrivacy;
  agreementStatus: AgreementStatus;
  authorWalletAddress: string;
  content: string;
  observers: string[];
  signers: string[];
  title: string;
}
