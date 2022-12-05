export const LOCATION_CLOUD = "Cloud";
export const LOCATION_PUBLIC_IPFS = "Public IPFS";
export const LOCATION_PRIVATE_IPFS = "Private IPFS";
export const LOCATION_LOCAL = "Local";

export const PRIVACY_PRIVATE = "Private";
export const PRIVACY_PUBLIC_PUBLISHED = "Published";
export const PRIVACY_PUBLIC_PROOF_ONLY = "ProofOnly";
export const PRIVACY_PUBLIC_WITH_LINK = "Link";

export type AgreementStatus = string;
export type AgreementPrivacy =
  | typeof PRIVACY_PRIVATE
  | typeof PRIVACY_PUBLIC_PROOF_ONLY
  | typeof PRIVACY_PUBLIC_PUBLISHED
  | typeof PRIVACY_PUBLIC_WITH_LINK
  | "";

export type AgreementLocation =
  | typeof LOCATION_CLOUD
  | typeof LOCATION_PUBLIC_IPFS
  | typeof LOCATION_PRIVATE_IPFS
  | typeof LOCATION_LOCAL;

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
