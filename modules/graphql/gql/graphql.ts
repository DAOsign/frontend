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
};

export type Agreement = {
  __typename?: 'Agreement';
  agreementFile?: Maybe<AgreementFile>;
  agreementId: Scalars['ID'];
  agreementLocation?: Maybe<AgreementLocation>;
  agreementLocationId?: Maybe<Scalars['Int']>;
  agreementPrivacy?: Maybe<AgreementPrivacy>;
  agreementPrivacyId?: Maybe<Scalars['Int']>;
  agreementStatus: AgreementStatus;
  agreementStatusId: Scalars['Int'];
  authorWallet: Wallet;
  authorWalletId: Scalars['Int'];
  content?: Maybe<Scalars['String']>;
  observers: Array<Observer>;
  signers: Array<Signer>;
  title: Scalars['String'];
};

export type AgreementFile = {
  __typename?: 'AgreementFile';
  agreementFileId: Scalars['ID'];
  agreementHash?: Maybe<Scalars['String']>;
  agreementId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  filePath?: Maybe<Scalars['String']>;
};

export type AgreementInvitation = {
  __typename?: 'AgreementInvitation';
  agreement: Agreement;
  agreementId: Scalars['Int'];
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

export type AgreementSignature = {
  __typename?: 'AgreementSignature';
  agreementId: Scalars['Int'];
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
  message: Scalars['String'];
  payload?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type LogoutResponse = {
  __typename?: 'LogoutResponse';
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteAgreement: Scalars['Boolean'];
  login: LoginResponse;
  logout: LogoutResponse;
  saveAgreement?: Maybe<Agreement>;
  updateUser: User;
};


export type MutationDeleteAgreementArgs = {
  agreementId: Scalars['Int'];
};


export type MutationLoginArgs = {
  address: Scalars['String'];
  signature?: InputMaybe<Scalars['String']>;
};


export type MutationSaveAgreementArgs = {
  agreementFilePath?: InputMaybe<Scalars['String']>;
  agreementHash?: InputMaybe<Scalars['String']>;
  agreementId?: InputMaybe<Scalars['Int']>;
  agreementLocation?: InputMaybe<Scalars['String']>;
  agreementPrivacy?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  isReadyToSign?: InputMaybe<Scalars['Boolean']>;
  observers?: InputMaybe<Array<Scalars['String']>>;
  signers?: InputMaybe<Array<Scalars['String']>>;
  title: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  bio?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type Observer = {
  __typename?: 'Observer';
  agreementId: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  observerId: Scalars['ID'];
  wallet?: Maybe<Wallet>;
  walletId?: Maybe<Scalars['Int']>;
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
  agreements: GetAgreementsResponse;
  me?: Maybe<User>;
  observer?: Maybe<Observer>;
  signer?: Maybe<Signer>;
  user?: Maybe<User>;
  users: GetUsersResponse;
  wallet?: Maybe<Wallet>;
  wallets: Array<Wallet>;
};


export type QueryAgreementArgs = {
  agreementId: Scalars['Int'];
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


export type QueryAgreementsArgs = {
  authorWallet?: InputMaybe<Scalars['String']>;
  filterBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortByField?: InputMaybe<Scalars['String']>;
  sortByOrder?: InputMaybe<Scalars['String']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryObserverArgs = {
  observerId: Scalars['Int'];
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

export type Signer = {
  __typename?: 'Signer';
  agreementId: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  signature?: Maybe<AgreementSignature>;
  signerId: Scalars['ID'];
  wallet?: Maybe<Wallet>;
  walletId?: Maybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  bio?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
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

export type LoginMutationVariables = Exact<{
  address: Scalars['String'];
  signature?: InputMaybe<Scalars['String']>;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', message: string, payload?: string | null, token?: string | null } };

export type SaveAgreementMutationVariables = Exact<{
  agreementPrivacy?: InputMaybe<Scalars['String']>;
  agreementLocation?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  signers?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  observers?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  agreementHash?: InputMaybe<Scalars['String']>;
  agreementFilePath?: InputMaybe<Scalars['String']>;
  isReadyToSign: Scalars['Boolean'];
}>;


export type SaveAgreementMutation = { __typename?: 'Mutation', saveAgreement?: { __typename?: 'Agreement', title: string, content?: string | null, authorWallet: { __typename?: 'Wallet', address: string } } | null };

export type MutationMutationVariables = Exact<{ [key: string]: never; }>;


export type MutationMutation = { __typename?: 'Mutation', logout: { __typename?: 'LogoutResponse', message: string } };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: { __typename?: 'GetUsersResponse', users: Array<{ __typename?: 'User', name?: string | null, bio?: string | null, email?: string | null, phone?: string | null, twitterVerificationCode?: string | null, twitterVerificationSig?: string | null }> } };

export type QueryQueryVariables = Exact<{
  agreementId: Scalars['Int'];
}>;


export type QueryQuery = { __typename?: 'Query', agreement?: { __typename?: 'Agreement', title: string, content?: string | null, agreementFile?: { __typename?: 'AgreementFile', agreementFileId: string, agreementHash?: string | null, createdAt: any, filePath?: string | null } | null, agreementLocation?: { __typename?: 'AgreementLocation', agreementLocationId: string, isActive: boolean, name: string } | null, agreementPrivacy?: { __typename?: 'AgreementPrivacy', name: string } | null, agreementStatus: { __typename?: 'AgreementStatus', name: string }, authorWallet: { __typename?: 'Wallet', address: string, networkId: number, userId: number, walletId: string }, observers: Array<{ __typename?: 'Observer', email?: string | null, observerId: string, wallet?: { __typename?: 'Wallet', address: string } | null }>, signers: Array<{ __typename?: 'Signer', email?: string | null, wallet?: { __typename?: 'Wallet', address: string } | null }> } | null };

export type AgreementsQueryVariables = Exact<{
  authorWallet?: InputMaybe<Scalars['String']>;
}>;


export type AgreementsQuery = { __typename?: 'Query', agreements: { __typename?: 'GetAgreementsResponse', count: number, agreements: Array<{ __typename?: 'Agreement', agreementId: string, title: string, content?: string | null, agreementLocation?: { __typename?: 'AgreementLocation', name: string, isActive: boolean } | null, agreementPrivacy?: { __typename?: 'AgreementPrivacy', name: string } | null, agreementFile?: { __typename?: 'AgreementFile', filePath?: string | null, createdAt: any } | null, authorWallet: { __typename?: 'Wallet', address: string, user: { __typename?: 'User', name?: string | null, email?: string | null, phone?: string | null, twitterVerificationCode?: string | null, twitterVerificationSig?: string | null, bio?: string | null } }, signers: Array<{ __typename?: 'Signer', email?: string | null, wallet?: { __typename?: 'Wallet', address: string, user: { __typename?: 'User', name?: string | null } } | null }>, observers: Array<{ __typename?: 'Observer', email?: string | null, wallet?: { __typename?: 'Wallet', address: string, user: { __typename?: 'User', name?: string | null } } | null }>, agreementStatus: { __typename?: 'AgreementStatus', name: string } }> } };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signature"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}},{"kind":"Argument","name":{"kind":"Name","value":"signature"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signature"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const SaveAgreementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SaveAgreement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agreementPrivacy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agreementLocation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signers"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"observers"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agreementHash"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agreementFilePath"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isReadyToSign"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saveAgreement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"agreementPrivacy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agreementPrivacy"}}},{"kind":"Argument","name":{"kind":"Name","value":"agreementLocation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agreementLocation"}}},{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}},{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"signers"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signers"}}},{"kind":"Argument","name":{"kind":"Name","value":"observers"},"value":{"kind":"Variable","name":{"kind":"Name","value":"observers"}}},{"kind":"Argument","name":{"kind":"Name","value":"agreementHash"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agreementHash"}}},{"kind":"Argument","name":{"kind":"Name","value":"agreementFilePath"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agreementFilePath"}}},{"kind":"Argument","name":{"kind":"Name","value":"isReadyToSign"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isReadyToSign"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"authorWallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]} as unknown as DocumentNode<SaveAgreementMutation, SaveAgreementMutationVariables>;
export const MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Mutation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<MutationMutation, MutationMutationVariables>;
export const UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"twitterVerificationCode"}},{"kind":"Field","name":{"kind":"Name","value":"twitterVerificationSig"}}]}}]}}]}}]} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;
export const QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Query"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agreementId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agreement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"agreementId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agreementId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agreementFile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agreementFileId"}},{"kind":"Field","name":{"kind":"Name","value":"agreementHash"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"filePath"}}]}},{"kind":"Field","name":{"kind":"Name","value":"agreementLocation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agreementLocationId"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"agreementPrivacy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"agreementStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorWallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"networkId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"walletId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"observers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"observerId"}},{"kind":"Field","name":{"kind":"Name","value":"wallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"signers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"wallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<QueryQuery, QueryQueryVariables>;
export const AgreementsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Agreements"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorWallet"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agreements"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"authorWallet"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorWallet"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agreements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agreementId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"agreementLocation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}},{"kind":"Field","name":{"kind":"Name","value":"agreementPrivacy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"agreementFile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filePath"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorWallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"twitterVerificationCode"}},{"kind":"Field","name":{"kind":"Name","value":"twitterVerificationSig"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"signers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"wallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"observers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"wallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"agreementStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<AgreementsQuery, AgreementsQueryVariables>;