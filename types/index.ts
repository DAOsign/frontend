export const LOCATION_CLOUD = "Cloud";
export const LOCATION_PUBLIC_IPFS = "IPFS";
export const LOCATION_PRIVATE_IPFS = "Private IPFS";
export const LOCATION_LOCAL = "Local";

export enum TOOLTIP_VALUES {
  PRIVATE = "Private",
  WITH_LINK = "With Link",
}

export const STATEMENT_WORK = "statementWork";
export const CHOOSE_COUNTRY = "chooseCountry";
export const CHOOSE_STATE = "chooseState";
export const UNITED_STATES = "United States";
export const ENABLE_TRANSFORM = "enableTransform";
export const CONTRACT_TYPE = "contractType";
export const INDEMNIFICATION_CLAUSE = "indemnificationClause";
export const INTELLECTUAL_PROPERTY_CLAUSE = "intellectualPropertyClause";
export const NON_SOLICITATION_CLAUSE = "nonSolicitationClause";
export const LEGAL_JURISDICTION = "legalJurisdiction";

export const PRIVACY_PRIVATE = "Private";
export const PRIVACY_PUBLIC_PUBLISHED = "Published";
export const PRIVACY_PUBLIC_PROOF_ONLY = "proof_only";
export const PRIVACY_PUBLIC_PROOF_ONLY_FULL_NAME = "Proof Only";
export const PRIVACY_PUBLIC_WITH_LINK = "with_link";

export const METHOD_UPLOAD = "Upload";
export const METHOD_ENTER = "Enter";
export const METHOD_IMPORT_SHAPSHOT = "Shapshot";

export const STATUS_DRAFT = "Draft";
export const STATUS_READY_TO_SIGN = "Ready to sign";
export const STATUS_PARTIALLY_SIGNED = "Partially signed";
export const STATUS_SIGNED = "Signed";

export type AnimateContainer = () => void;

export interface Props {
  animateContainer: AnimateContainer;
  page: string;
  loading: any;
}

export interface PublicProps extends Props {
  setPublic: any;
}

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

export type AgreementMethod =
  | typeof METHOD_UPLOAD
  | typeof METHOD_ENTER
  | typeof METHOD_IMPORT_SHAPSHOT
  | "";

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
  isAllowedToEditObservers: boolean;
  createdAt: Date;
  agreementFile?: AgreementFile;
  signProofAmount: number;
}

export interface DataProposalProps {
  text: string;
}

interface AgreementFile {
  agreementHash?: string;
  filePath?: string;
  createdAt: Date;
}

export type FieldError = string | null | undefined;
