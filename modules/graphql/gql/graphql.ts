/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
};

export type Agreement = {
  __typename?: 'Agreement';
  agreementFile?: Maybe<AgreementFile>;
  agreementFileProof?: Maybe<AgreementFileProof>;
  agreementId: Scalars['ID'];
  agreementLocation?: Maybe<AgreementLocation>;
  agreementLocationId?: Maybe<Scalars['Int']>;
  agreementPrivacy?: Maybe<AgreementPrivacy>;
  agreementPrivacyId?: Maybe<Scalars['Int']>;
  agreementProof?: Maybe<AgreementProof>;
  agreementStatus: AgreementStatus;
  agreementStatusId: Scalars['Int'];
  authorWallet: Wallet;
  authorWalletId: Scalars['Int'];
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  isAllowedToEditObservers: Scalars['Boolean'];
  isWaitingForMySignature: Scalars['Boolean'];
  observers: Array<Observer>;
  signProofs?: Maybe<Array<AgreementSignProof>>;
  signers: Array<Signer>;
  snapshotProposalUrl?: Maybe<Scalars['String']>;
  storeOnBlockchain?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type AgreementFile = {
  __typename?: 'AgreementFile';
  agreementFileId: Scalars['ID'];
  agreementHash?: Maybe<Scalars['String']>;
  agreementId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  filePath?: Maybe<Scalars['String']>;
};

export type AgreementFileProof = {
  __typename?: 'AgreementFileProof';
  agreementFileId: Scalars['Int'];
  agreementFileProofId: Scalars['ID'];
  agreementFileProofMetadataId: Scalars['Int'];
  agreementId: Scalars['String'];
  authorWalletId: Scalars['Int'];
  blockchainStored?: Maybe<Scalars['String']>;
  cid?: Maybe<Scalars['String']>;
  signature?: Maybe<Scalars['String']>;
  signers: Array<Scalars['String']>;
  timestamp: Scalars['DateTime'];
};

export type AgreementInvitation = {
  __typename?: 'AgreementInvitation';
  agreement: Agreement;
  agreementId: Scalars['String'];
  agreementInvitationId: Scalars['ID'];
  email?: Maybe<Scalars['String']>;
  role: Scalars['Int'];
};

export type AgreementLocation = {
  __typename?: 'AgreementLocation';
  agreementLocationId: Scalars['ID'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
};

export type AgreementPrivacy = {
  __typename?: 'AgreementPrivacy';
  agreementPrivacyId: Scalars['ID'];
  name: Scalars['String'];
};

export type AgreementProof = {
  __typename?: 'AgreementProof';
  agreementId: Scalars['String'];
  agreementProofId: Scalars['ID'];
  blockchainStored?: Maybe<Scalars['String']>;
  cid: Scalars['String'];
  signedAt: Scalars['DateTime'];
};

export type AgreementSignProof = {
  __typename?: 'AgreementSignProof';
  agreementId: Scalars['String'];
  agreementSignProofId: Scalars['ID'];
  agreementSignProofMetadataId: Scalars['Int'];
  blockchainStored?: Maybe<Scalars['String']>;
  cid?: Maybe<Scalars['String']>;
  signature?: Maybe<Scalars['String']>;
  signerWallet?: Maybe<Wallet>;
  signerWalletId: Scalars['Int'];
  timestamp: Scalars['DateTime'];
};

export type AgreementSignature = {
  __typename?: 'AgreementSignature';
  agreementId: Scalars['String'];
  agreementSignatureId: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  signature?: Maybe<Scalars['String']>;
  signatureCid?: Maybe<Scalars['String']>;
  signedAt?: Maybe<Scalars['DateTime']>;
  signerId: Scalars['Int'];
};

export type AgreementStatus = {
  __typename?: 'AgreementStatus';
  agreementStatusId: Scalars['ID'];
  name: Scalars['String'];
};

export type Cid = {
  __typename?: 'CID';
  cid: Scalars['String'];
};

export type DeleteAgreementResponse = {
  __typename?: 'DeleteAgreementResponse';
  agreementId: Scalars['String'];
  message: Scalars['String'];
};

export type Ens = {
  __typename?: 'Ens';
  ensId: Scalars['ID'];
  name: Scalars['String'];
  networkId: Scalars['Int'];
  walletId: Scalars['Int'];
};

export type GenerateAgreementResponse = {
  __typename?: 'GenerateAgreementResponse';
  text: Scalars['String'];
};

export type GetAgreementsResponse = {
  __typename?: 'GetAgreementsResponse';
  agreements: Array<Agreement>;
  count: Scalars['Int'];
};

export type GetUsersResponse = {
  __typename?: 'GetUsersResponse';
  count: Scalars['Int'];
  users: Array<User>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  error?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type LogoutResponse = {
  __typename?: 'LogoutResponse';
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteAgreement: DeleteAgreementResponse;
  editObservers?: Maybe<SendAgreementInvitationResponse>;
  login: LoginResponse;
  logout: LogoutResponse;
  saveAgreement?: Maybe<Agreement>;
  sendAgreementInvitation: SendAgreementInvitationResponse;
  sendEmailVerificationLink: Scalars['Boolean'];
  sendSignedFileProofData?: Maybe<Cid>;
  sendSignedSignProofData?: Maybe<Cid>;
  setAgreementReadyToSign: SetAgreementReadyToSignResponse;
  updateUser: User;
  verifyMyEmail: Scalars['Boolean'];
};


export type MutationDeleteAgreementArgs = {
  agreementId: Scalars['String'];
};


export type MutationEditObserversArgs = {
  agreementId?: InputMaybe<Scalars['String']>;
  observers?: InputMaybe<Array<Scalars['String']>>;
};


export type MutationLoginArgs = {
  address: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  signature?: InputMaybe<Scalars['String']>;
};


export type MutationSaveAgreementArgs = {
  agreementFilePath?: InputMaybe<Scalars['String']>;
  agreementHash?: InputMaybe<Scalars['String']>;
  agreementId?: InputMaybe<Scalars['String']>;
  agreementLocation?: InputMaybe<Scalars['String']>;
  agreementPrivacy?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  isReadyToSign?: InputMaybe<Scalars['Boolean']>;
  observers?: InputMaybe<Array<Scalars['String']>>;
  signers?: InputMaybe<Array<Scalars['String']>>;
  snapshotProposalUrl?: InputMaybe<Scalars['String']>;
  storeOnBlockchain?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
};


export type MutationSendAgreementInvitationArgs = {
  targetEmail: Scalars['String'];
};


export type MutationSendEmailVerificationLinkArgs = {
  agreementTitle: Scalars['String'];
  email: Scalars['String'];
  isSigner: Scalars['Boolean'];
};


export type MutationSendSignedFileProofDataArgs = {
  agreementId: Scalars['String'];
  data: Scalars['JSONObject'];
  signature: Scalars['String'];
};


export type MutationSendSignedSignProofDataArgs = {
  agreementId: Scalars['String'];
  data: Scalars['JSONObject'];
  signature: Scalars['String'];
};


export type MutationSetAgreementReadyToSignArgs = {
  agreementId: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  bio?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};


export type MutationVerifyMyEmailArgs = {
  email: Scalars['String'];
  emailVerificationSalt: Scalars['String'];
};

export type Observer = {
  __typename?: 'Observer';
  agreementId: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  ens?: Maybe<Ens>;
  observerId: Scalars['ID'];
  wallet?: Maybe<Wallet>;
  walletId?: Maybe<Scalars['Int']>;
};

export type OpenaiMessage = {
  __typename?: 'OpenaiMessage';
  agreementId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  message: Scalars['String'];
  openaiMessageId: Scalars['ID'];
  userId: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  agreement?: Maybe<Agreement>;
  agreementInvitation?: Maybe<AgreementInvitation>;
  agreementLocation?: Maybe<AgreementLocation>;
  agreementLocations: Array<AgreementLocation>;
  agreementPrivacies: Array<AgreementPrivacy>;
  agreementPrivacy?: Maybe<AgreementPrivacy>;
  agreementStatus?: Maybe<AgreementStatus>;
  agreementStatuses: Array<AgreementStatus>;
  generateAgreement: GenerateAgreementResponse;
  getAgreementFileProofData?: Maybe<Scalars['JSONObject']>;
  getAgreementSignProofData?: Maybe<Scalars['JSONObject']>;
  getOpenAIMessagesForAgreement?: Maybe<Array<OpenaiMessage>>;
  isUserRegistered: Scalars['Boolean'];
  me?: Maybe<User>;
  myAgreements: GetAgreementsResponse;
  observer?: Maybe<Observer>;
  publicAgreementsByWallet: GetAgreementsResponse;
  refineGeneratedAgreement: GenerateAgreementResponse;
  signer?: Maybe<Signer>;
  user?: Maybe<User>;
  users: GetUsersResponse;
  wallet?: Maybe<Wallet>;
  wallets: Array<Wallet>;
};


export type QueryAgreementArgs = {
  agreementId: Scalars['String'];
};


export type QueryAgreementInvitationArgs = {
  agreementInvitationId: Scalars['Int'];
};


export type QueryAgreementLocationArgs = {
  agreementLocationId: Scalars['Int'];
};


export type QueryAgreementPrivacyArgs = {
  agreementPrivacyId: Scalars['Int'];
};


export type QueryAgreementStatusArgs = {
  agreementStatusId: Scalars['Int'];
};


export type QueryGenerateAgreementArgs = {
  addIndemnificationClause?: InputMaybe<Scalars['Boolean']>;
  addIntellectualPropertyClause?: InputMaybe<Scalars['Boolean']>;
  addNonSolicitationClause?: InputMaybe<Scalars['Boolean']>;
  additionalDetails?: InputMaybe<Scalars['String']>;
  agreementId: Scalars['String'];
  contractType?: InputMaybe<Scalars['String']>;
  legalJurisdictionCountry?: InputMaybe<Scalars['String']>;
  legalJurisdictionState?: InputMaybe<Scalars['String']>;
  proposalText: Scalars['String'];
};


export type QueryGetAgreementFileProofDataArgs = {
  agreementId: Scalars['String'];
};


export type QueryGetAgreementSignProofDataArgs = {
  agreementId: Scalars['String'];
};


export type QueryGetOpenAiMessagesForAgreementArgs = {
  agreementId: Scalars['String'];
};


export type QueryIsUserRegisteredArgs = {
  email: Scalars['String'];
};


export type QueryMyAgreementsArgs = {
  filterBy?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortByField?: InputMaybe<Scalars['String']>;
  sortByOrder?: InputMaybe<Scalars['String']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryObserverArgs = {
  observerId: Scalars['Int'];
};


export type QueryPublicAgreementsByWalletArgs = {
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortByField?: InputMaybe<Scalars['String']>;
  sortByOrder?: InputMaybe<Scalars['String']>;
  take?: InputMaybe<Scalars['Int']>;
  walletAddress: Scalars['String'];
};


export type QueryRefineGeneratedAgreementArgs = {
  agreementId: Scalars['String'];
  userRequest: Scalars['String'];
};


export type QuerySignerArgs = {
  signerId: Scalars['Int'];
};


export type QueryUserArgs = {
  userId: Scalars['Int'];
};


export type QueryUsersArgs = {
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryWalletArgs = {
  walletId: Scalars['Float'];
};


export type QueryWalletsArgs = {
  isExactSearch?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
};

export type SendAgreementInvitationResponse = {
  __typename?: 'SendAgreementInvitationResponse';
  message: Scalars['String'];
};

export type SetAgreementReadyToSignResponse = {
  __typename?: 'SetAgreementReadyToSignResponse';
  agreementId: Scalars['String'];
  message: Scalars['String'];
};

export type Signer = {
  __typename?: 'Signer';
  agreementId: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  ens?: Maybe<Ens>;
  signature?: Maybe<AgreementSignature>;
  signerId: Scalars['ID'];
  wallet?: Maybe<Wallet>;
  walletId?: Maybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  bio?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailVerificationSalt?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  twitterVerificationCode?: Maybe<Scalars['String']>;
  twitterVerificationSig?: Maybe<Scalars['String']>;
  userId: Scalars['ID'];
  wallets: Array<Wallet>;
};

export type Wallet = {
  __typename?: 'Wallet';
  address: Scalars['String'];
  networkId: Scalars['Int'];
  user: User;
  userId: Scalars['Int'];
  walletId: Scalars['ID'];
};

export type SaveAgreementMutationVariables = Exact<{
  agreementId?: InputMaybe<Scalars['String']>;
  agreementPrivacy?: InputMaybe<Scalars['String']>;
  agreementLocation?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  signers?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  observers?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  agreementHash?: InputMaybe<Scalars['String']>;
  agreementFilePath?: InputMaybe<Scalars['String']>;
  isReadyToSign: Scalars['Boolean'];
  snapshotProposalUrl?: InputMaybe<Scalars['String']>;
  storeOnBlockchain?: InputMaybe<Scalars['Int']>;
}>;


export type SaveAgreementMutation = { __typename?: 'Mutation', saveAgreement?: { __typename?: 'Agreement', agreementId: string, title: string, content?: string | null, authorWallet: { __typename?: 'Wallet', address: string } } | null };

export type DeleteAgreementMutationMutationVariables = Exact<{
  agreementId: Scalars['String'];
}>;


export type DeleteAgreementMutationMutation = { __typename?: 'Mutation', deleteAgreement: { __typename?: 'DeleteAgreementResponse', agreementId: string, message: string } };

export type SendSignedFileProofDataMutationVariables = Exact<{
  data: Scalars['JSONObject'];
  signature: Scalars['String'];
  agreementId: Scalars['String'];
}>;


export type SendSignedFileProofDataMutation = { __typename?: 'Mutation', sendSignedFileProofData?: { __typename?: 'CID', cid: string } | null };

export type SendSignedSignProofDataMutationVariables = Exact<{
  data: Scalars['JSONObject'];
  signature: Scalars['String'];
  agreementId: Scalars['String'];
}>;


export type SendSignedSignProofDataMutation = { __typename?: 'Mutation', sendSignedSignProofData?: { __typename?: 'CID', cid: string } | null };

export type EditObserversMutationVariables = Exact<{
  agreementId?: InputMaybe<Scalars['String']>;
  observers?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type EditObserversMutation = { __typename?: 'Mutation', editObservers?: { __typename?: 'SendAgreementInvitationResponse', message: string } | null };

export type LoginMutationVariables = Exact<{
  address: Scalars['String'];
  signature?: InputMaybe<Scalars['String']>;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', message?: string | null, error?: string | null, payload?: string | null, token?: string | null } };

export type MutationMutationVariables = Exact<{ [key: string]: never; }>;


export type MutationMutation = { __typename?: 'Mutation', logout: { __typename?: 'LogoutResponse', message: string } };

export type VerifyMyEmailMutationVariables = Exact<{
  emailVerificationSalt: Scalars['String'];
  email: Scalars['String'];
}>;


export type VerifyMyEmailMutation = { __typename?: 'Mutation', verifyMyEmail: boolean };

export type QueryQueryVariables = Exact<{
  agreementId: Scalars['String'];
}>;


export type QueryQuery = { __typename?: 'Query', agreement?: { __typename?: 'Agreement', agreementId: string, snapshotProposalUrl?: string | null, storeOnBlockchain?: number | null, title: string, content?: string | null, isWaitingForMySignature: boolean, isAllowedToEditObservers: boolean, createdAt: any, agreementFile?: { __typename?: 'AgreementFile', agreementFileId: string, agreementHash?: string | null, createdAt: any, filePath?: string | null } | null, agreementLocation?: { __typename?: 'AgreementLocation', agreementLocationId: string, isActive: boolean, name: string } | null, agreementPrivacy?: { __typename?: 'AgreementPrivacy', name: string } | null, agreementStatus: { __typename?: 'AgreementStatus', name: string }, authorWallet: { __typename?: 'Wallet', address: string, networkId: number, userId: number, walletId: string }, observers: Array<{ __typename?: 'Observer', email?: string | null, observerId: string, wallet?: { __typename?: 'Wallet', address: string } | null, ens?: { __typename?: 'Ens', name: string } | null }>, signers: Array<{ __typename?: 'Signer', email?: string | null, wallet?: { __typename?: 'Wallet', address: string } | null, ens?: { __typename?: 'Ens', name: string } | null }>, signProofs?: Array<{ __typename?: 'AgreementSignProof', signature?: string | null, cid?: string | null, signerWalletId: number, blockchainStored?: string | null, signerWallet?: { __typename?: 'Wallet', address: string } | null }> | null, agreementFileProof?: { __typename?: 'AgreementFileProof', cid?: string | null, signature?: string | null, signers: Array<string>, blockchainStored?: string | null } | null, agreementProof?: { __typename?: 'AgreementProof', cid: string, signedAt: any, blockchainStored?: string | null } | null } | null };

export type MyAgreementsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sortByField?: InputMaybe<Scalars['String']>;
  sortByOrder?: InputMaybe<Scalars['String']>;
  filterBy?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type MyAgreementsQuery = { __typename?: 'Query', myAgreements: { __typename?: 'GetAgreementsResponse', count: number, agreements: Array<{ __typename?: 'Agreement', agreementId: string, title: string, content?: string | null, isWaitingForMySignature: boolean, createdAt: any, storeOnBlockchain?: number | null, agreementLocation?: { __typename?: 'AgreementLocation', name: string, isActive: boolean } | null, agreementPrivacy?: { __typename?: 'AgreementPrivacy', name: string } | null, agreementFile?: { __typename?: 'AgreementFile', filePath?: string | null, createdAt: any } | null, authorWallet: { __typename?: 'Wallet', address: string, user: { __typename?: 'User', name?: string | null, email?: string | null, phone?: string | null, twitterVerificationCode?: string | null, twitterVerificationSig?: string | null, bio?: string | null } }, signers: Array<{ __typename?: 'Signer', email?: string | null, wallet?: { __typename?: 'Wallet', address: string, user: { __typename?: 'User', name?: string | null } } | null }>, observers: Array<{ __typename?: 'Observer', email?: string | null, wallet?: { __typename?: 'Wallet', address: string, user: { __typename?: 'User', name?: string | null } } | null }>, agreementStatus: { __typename?: 'AgreementStatus', name: string }, signProofs?: Array<{ __typename?: 'AgreementSignProof', cid?: string | null, signature?: string | null }> | null }> } };

export type GetAgreementFileProofDataQueryVariables = Exact<{
  agreementId: Scalars['String'];
}>;


export type GetAgreementFileProofDataQuery = { __typename?: 'Query', getAgreementFileProofData?: any | null };

export type GetAgreementSignProofDataQueryVariables = Exact<{
  agreementId: Scalars['String'];
}>;


export type GetAgreementSignProofDataQuery = { __typename?: 'Query', getAgreementSignProofData?: any | null };

export type GenerateAgreementQueryVariables = Exact<{
  agreementId: Scalars['String'];
  proposalText: Scalars['String'];
  contractType?: InputMaybe<Scalars['String']>;
  legalJurisdictionCountry?: InputMaybe<Scalars['String']>;
  legalJurisdictionState?: InputMaybe<Scalars['String']>;
  additionalDetails?: InputMaybe<Scalars['String']>;
  addIndemnificationClause?: InputMaybe<Scalars['Boolean']>;
  addIntellectualPropertyClause?: InputMaybe<Scalars['Boolean']>;
  addNonSolicitationClause?: InputMaybe<Scalars['Boolean']>;
}>;


export type GenerateAgreementQuery = { __typename?: 'Query', generateAgreement: { __typename?: 'GenerateAgreementResponse', text: string } };

export type RefineGeneratedAgreementQueryVariables = Exact<{
  userRequest: Scalars['String'];
  agreementId: Scalars['String'];
}>;


export type RefineGeneratedAgreementQuery = { __typename?: 'Query', refineGeneratedAgreement: { __typename?: 'GenerateAgreementResponse', text: string } };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: { __typename?: 'GetUsersResponse', users: Array<{ __typename?: 'User', name?: string | null, bio?: string | null, email?: string | null, phone?: string | null, twitterVerificationCode?: string | null, twitterVerificationSig?: string | null }> } };


export const SaveAgreementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SaveAgreement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agreementId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agreementPrivacy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agreementLocation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signers"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"observers"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agreementHash"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agreementFilePath"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isReadyToSign"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"snapshotProposalUrl"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"storeOnBlockchain"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saveAgreement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"agreementId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agreementId"}}},{"kind":"Argument","name":{"kind":"Name","value":"agreementPrivacy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agreementPrivacy"}}},{"kind":"Argument","name":{"kind":"Name","value":"agreementLocation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agreementLocation"}}},{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}},{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"signers"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signers"}}},{"kind":"Argument","name":{"kind":"Name","value":"observers"},"value":{"kind":"Variable","name":{"kind":"Name","value":"observers"}}},{"kind":"Argument","name":{"kind":"Name","value":"agreementHash"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agreementHash"}}},{"kind":"Argument","name":{"kind":"Name","value":"agreementFilePath"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agreementFilePath"}}},{"kind":"Argument","name":{"kind":"Name","value":"isReadyToSign"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isReadyToSign"}}},{"kind":"Argument","name":{"kind":"Name","value":"snapshotProposalUrl"},"value":{"kind":"Variable","name":{"kind":"Name","value":"snapshotProposalUrl"}}},{"kind":"Argument","name":{"kind":"Name","value":"storeOnBlockchain"},"value":{"kind":"Variable","name":{"kind":"Name","value":"storeOnBlockchain"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agreementId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"authorWallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]} as unknown as DocumentNode<SaveAgreementMutation, SaveAgreementMutationVariables>;
export const DeleteAgreementMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAgreementMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agreementId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAgreement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"agreementId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agreementId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agreementId"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteAgreementMutationMutation, DeleteAgreementMutationMutationVariables>;
export const SendSignedFileProofDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"sendSignedFileProofData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signature"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agreementId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendSignedFileProofData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"signature"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signature"}}},{"kind":"Argument","name":{"kind":"Name","value":"agreementId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agreementId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}}]}}]}}]} as unknown as DocumentNode<SendSignedFileProofDataMutation, SendSignedFileProofDataMutationVariables>;
export const SendSignedSignProofDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"sendSignedSignProofData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signature"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agreementId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendSignedSignProofData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"signature"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signature"}}},{"kind":"Argument","name":{"kind":"Name","value":"agreementId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agreementId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}}]}}]}}]} as unknown as DocumentNode<SendSignedSignProofDataMutation, SendSignedSignProofDataMutationVariables>;
export const EditObserversDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditObservers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agreementId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"observers"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editObservers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"agreementId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agreementId"}}},{"kind":"Argument","name":{"kind":"Name","value":"observers"},"value":{"kind":"Variable","name":{"kind":"Name","value":"observers"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<EditObserversMutation, EditObserversMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signature"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}},{"kind":"Argument","name":{"kind":"Name","value":"signature"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signature"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Mutation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<MutationMutation, MutationMutationVariables>;
export const VerifyMyEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"verifyMyEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"emailVerificationSalt"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyMyEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"emailVerificationSalt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"emailVerificationSalt"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}]}}]} as unknown as DocumentNode<VerifyMyEmailMutation, VerifyMyEmailMutationVariables>;
export const QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Query"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agreementId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agreement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"agreementId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agreementId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agreementId"}},{"kind":"Field","name":{"kind":"Name","value":"snapshotProposalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"storeOnBlockchain"}},{"kind":"Field","name":{"kind":"Name","value":"agreementFile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agreementFileId"}},{"kind":"Field","name":{"kind":"Name","value":"agreementHash"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"filePath"}}]}},{"kind":"Field","name":{"kind":"Name","value":"agreementLocation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agreementLocationId"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"agreementPrivacy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"agreementStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorWallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"networkId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"walletId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"observers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"observerId"}},{"kind":"Field","name":{"kind":"Name","value":"wallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"signers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"wallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"isWaitingForMySignature"}},{"kind":"Field","name":{"kind":"Name","value":"snapshotProposalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isAllowedToEditObservers"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"signProofs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signature"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"signerWalletId"}},{"kind":"Field","name":{"kind":"Name","value":"signerWallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"blockchainStored"}}]}},{"kind":"Field","name":{"kind":"Name","value":"agreementFileProof"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"signature"}},{"kind":"Field","name":{"kind":"Name","value":"signers"}},{"kind":"Field","name":{"kind":"Name","value":"blockchainStored"}}]}},{"kind":"Field","name":{"kind":"Name","value":"agreementProof"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"signedAt"}},{"kind":"Field","name":{"kind":"Name","value":"blockchainStored"}}]}}]}}]}}]} as unknown as DocumentNode<QueryQuery, QueryQueryVariables>;
export const MyAgreementsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyAgreements"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortByField"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortByOrder"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filterBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myAgreements"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortByField"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortByField"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortByOrder"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortByOrder"}}},{"kind":"Argument","name":{"kind":"Name","value":"filterBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filterBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agreements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agreementId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"isWaitingForMySignature"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"storeOnBlockchain"}},{"kind":"Field","name":{"kind":"Name","value":"agreementLocation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}},{"kind":"Field","name":{"kind":"Name","value":"agreementPrivacy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"agreementFile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filePath"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorWallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"twitterVerificationCode"}},{"kind":"Field","name":{"kind":"Name","value":"twitterVerificationSig"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"signers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"wallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"observers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"wallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"agreementStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"signProofs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"signature"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<MyAgreementsQuery, MyAgreementsQueryVariables>;
export const GetAgreementFileProofDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAgreementFileProofData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agreementId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAgreementFileProofData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"agreementId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agreementId"}}}]}]}}]} as unknown as DocumentNode<GetAgreementFileProofDataQuery, GetAgreementFileProofDataQueryVariables>;
export const GetAgreementSignProofDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAgreementSignProofData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agreementId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAgreementSignProofData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"agreementId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agreementId"}}}]}]}}]} as unknown as DocumentNode<GetAgreementSignProofDataQuery, GetAgreementSignProofDataQueryVariables>;
export const GenerateAgreementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GenerateAgreement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agreementId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"proposalText"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contractType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"legalJurisdictionCountry"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"legalJurisdictionState"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"additionalDetails"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addIndemnificationClause"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addIntellectualPropertyClause"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addNonSolicitationClause"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateAgreement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"agreementId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agreementId"}}},{"kind":"Argument","name":{"kind":"Name","value":"proposalText"},"value":{"kind":"Variable","name":{"kind":"Name","value":"proposalText"}}},{"kind":"Argument","name":{"kind":"Name","value":"contractType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractType"}}},{"kind":"Argument","name":{"kind":"Name","value":"legalJurisdictionCountry"},"value":{"kind":"Variable","name":{"kind":"Name","value":"legalJurisdictionCountry"}}},{"kind":"Argument","name":{"kind":"Name","value":"legalJurisdictionState"},"value":{"kind":"Variable","name":{"kind":"Name","value":"legalJurisdictionState"}}},{"kind":"Argument","name":{"kind":"Name","value":"additionalDetails"},"value":{"kind":"Variable","name":{"kind":"Name","value":"additionalDetails"}}},{"kind":"Argument","name":{"kind":"Name","value":"addIndemnificationClause"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addIndemnificationClause"}}},{"kind":"Argument","name":{"kind":"Name","value":"addIntellectualPropertyClause"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addIntellectualPropertyClause"}}},{"kind":"Argument","name":{"kind":"Name","value":"addNonSolicitationClause"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addNonSolicitationClause"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]} as unknown as DocumentNode<GenerateAgreementQuery, GenerateAgreementQueryVariables>;
export const RefineGeneratedAgreementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RefineGeneratedAgreement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userRequest"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agreementId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refineGeneratedAgreement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userRequest"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userRequest"}}},{"kind":"Argument","name":{"kind":"Name","value":"agreementId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agreementId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]} as unknown as DocumentNode<RefineGeneratedAgreementQuery, RefineGeneratedAgreementQueryVariables>;
export const UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"twitterVerificationCode"}},{"kind":"Field","name":{"kind":"Name","value":"twitterVerificationSig"}}]}}]}}]}}]} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;