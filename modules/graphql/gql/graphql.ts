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
};

export type Agreement = {
  __typename?: 'Agreement';
  agreementId: Scalars['ID'];
  agreementLocation: AgreementLocation;
  agreementLocationId: Scalars['Int'];
  agreementPrivacy: AgreementPrivacy;
  agreementPrivacyId: Scalars['Int'];
  agreementStatus: AgreementStatus;
  agreementStatusId: Scalars['Int'];
  authorWallet: Wallet;
  authorWalletId: Scalars['Int'];
  content: Scalars['String'];
  title: Scalars['String'];
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

export type AgreementStatus = {
  __typename?: 'AgreementStatus';
  agreementStatusId: Scalars['ID'];
  name: Scalars['String'];
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
  login: LoginResponse;
  logout: LogoutResponse;
  updateUser: User;
};


export type MutationLoginArgs = {
  address: Scalars['String'];
  signature?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateUserArgs = {
  bio?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  agreements: Array<Agreement>;
  me?: Maybe<User>;
  user?: Maybe<User>;
  users: Array<User>;
  wallet?: Maybe<Wallet>;
  wallets: Array<Wallet>;
};


export type QueryUserArgs = {
  userId: Scalars['Float'];
};


export type QueryWalletArgs = {
  walletId: Scalars['Float'];
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
};

export type Wallet = {
  __typename?: 'Wallet';
  address: Scalars['String'];
  networkId: Scalars['Int'];
  userId: Scalars['Int'];
  walletId: Scalars['ID'];
};

export type LoginMutationVariables = Exact<{
  address: Scalars['String'];
  signature?: InputMaybe<Scalars['String']>;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', message: string, payload?: string | null, token?: string | null } };

export type AllUsersQueryVariables = Exact<{
  first: Scalars['Int'];
}>;


export type AllUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', userId: string, name?: string | null, bio?: string | null, phone?: string | null, email?: string | null, twitterVerificationCode?: string | null, twitterVerificationSig?: string | null }> };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signature"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}},{"kind":"Argument","name":{"kind":"Name","value":"signature"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signature"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const AllUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"twitterVerificationCode"}},{"kind":"Field","name":{"kind":"Name","value":"twitterVerificationSig"}}]}}]}}]} as unknown as DocumentNode<AllUsersQuery, AllUsersQueryVariables>;