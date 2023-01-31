export const LOCATION_CLOUD = "Cloud";
export const LOCATION_PUBLIC_IPFS = "Public IPFS";
export const LOCATION_PRIVATE_IPFS = "Private IPFS";
export const LOCATION_LOCAL = "Local";

export enum TOOLTIP_VALUES {
  PRIVATE = "Private",
  WITH_LINK = "With Link",
}

export const PRIVACY_PRIVATE = "Private";
export const PRIVACY_PUBLIC_PUBLISHED = "Published";
export const PRIVACY_PUBLIC_PROOF_ONLY = "proof_only";
export const PRIVACY_PUBLIC_PROOF_ONLY_FULL_NAME = "Proof Only";
export const PRIVACY_PUBLIC_WITH_LINK = "with_link";

export const METHOD_UPLOAD = "Upload";
export const METHOD_ENTER = "Enter";

export const STATUS_DRAFT = "Draft";
export const STATUS_READY_TO_SIGN = "Ready to sign";
export const STATUS_PARTIALLY_SIGNED = "Partially signed";
export const STATUS_SIGNED = "Signed";

export type AgreementStatus =
  | typeof STATUS_DRAFT
  | typeof STATUS_READY_TO_SIGN
  | typeof STATUS_PARTIALLY_SIGNED
  | typeof STATUS_SIGNED
  | "";

export type AgreementPrivacy =
  | typeof PRIVACY_PRIVATE
  | typeof PRIVACY_PUBLIC_PROOF_ONLY
  | typeof PRIVACY_PUBLIC_PUBLISHED
  | typeof PRIVACY_PUBLIC_WITH_LINK
  | "";

export type AgreementMethod = typeof METHOD_UPLOAD | typeof METHOD_ENTER | "";

export type AgreementLocation =
  | typeof LOCATION_CLOUD
  | typeof LOCATION_PUBLIC_IPFS
  | typeof LOCATION_PRIVATE_IPFS
  | typeof LOCATION_LOCAL
  | "";

export interface Agreement {
  agreementId: number;
  agreementLocation: AgreementLocation;
  agreementPrivacy: AgreementPrivacy;
  agreementStatus: AgreementStatus;
  authorWalletAddress: string;
  content: string;
  observers: string[];
  signers: string[];
  title: string;
  isWaitingForMySignature: boolean;
  createdAt: Date;
  agreementFile?: AgreementFile;
}

interface AgreementFile {
  agreementHash?: string;
  filePath?: string;
  createdAt: Date;
}

export type FieldError = string | null | undefined;
