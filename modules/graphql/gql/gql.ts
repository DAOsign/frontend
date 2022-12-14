/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
  "\n  mutation login($address: String!, $signature: String) {\n    login(address: $address, signature: $signature) {\n      message\n      payload\n      token\n    }\n  }\n":
    types.LoginDocument,
  "\n  mutation AddAgreement(\n    $agreementPrivacy: String\n    $agreementLocation: String\n    $content: String\n    $title: String!\n    $signers: [String!]\n    $observers: [String!]\n    $agreementHash: String\n    $agreementFilePath: String\n    $isReadyToSign: Boolean!\n  ) {\n    addAgreement(\n      agreementPrivacy: $agreementPrivacy\n      agreementLocation: $agreementLocation\n      content: $content\n      title: $title\n      signers: $signers\n      observers: $observers\n      agreementHash: $agreementHash\n      agreementFilePath: $agreementFilePath\n      isReadyToSign: $isReadyToSign\n    ) {\n      title\n      content\n      authorWallet {\n        address\n      }\n    }\n  }\n":
    types.AddAgreementDocument,
  "\n  mutation Mutation {\n    logout {\n      message\n    }\n  }\n": types.MutationDocument,
  "\n  query Users {\n    users {\n      users {\n        name\n        bio\n        email\n        phone\n        twitterVerificationCode\n        twitterVerificationSig\n      }\n    }\n  }\n":
    types.UsersDocument,
  "\n  query Agreements($authorWallet: String) {\n    agreements(authorWallet: $authorWallet) {\n      agreements {\n        title\n        content\n        agreementLocation {\n          name\n          isActive\n        }\n        agreementPrivacy {\n          name\n        }\n        agreementFile {\n          filePath\n          createdAt\n        }\n        authorWallet {\n          address\n          user {\n            name\n            email\n            phone\n            twitterVerificationCode\n            twitterVerificationSig\n            bio\n          }\n        }\n        signers {\n          email\n          wallet {\n            address\n            user {\n              name\n            }\n          }\n        }\n        observers {\n          email\n          wallet {\n            address\n            user {\n              name\n            }\n          }\n        }\n        agreementStatus {\n          name\n        }\n      }\n      count\n    }\n  }\n":
    types.AgreementsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation login($address: String!, $signature: String) {\n    login(address: $address, signature: $signature) {\n      message\n      payload\n      token\n    }\n  }\n"
): typeof documents["\n  mutation login($address: String!, $signature: String) {\n    login(address: $address, signature: $signature) {\n      message\n      payload\n      token\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation AddAgreement(\n    $agreementPrivacy: String\n    $agreementLocation: String\n    $content: String\n    $title: String!\n    $signers: [String!]\n    $observers: [String!]\n    $agreementHash: String\n    $agreementFilePath: String\n    $isReadyToSign: Boolean!\n  ) {\n    addAgreement(\n      agreementPrivacy: $agreementPrivacy\n      agreementLocation: $agreementLocation\n      content: $content\n      title: $title\n      signers: $signers\n      observers: $observers\n      agreementHash: $agreementHash\n      agreementFilePath: $agreementFilePath\n      isReadyToSign: $isReadyToSign\n    ) {\n      title\n      content\n      authorWallet {\n        address\n      }\n    }\n  }\n"
): typeof documents["\n  mutation AddAgreement(\n    $agreementPrivacy: String\n    $agreementLocation: String\n    $content: String\n    $title: String!\n    $signers: [String!]\n    $observers: [String!]\n    $agreementHash: String\n    $agreementFilePath: String\n    $isReadyToSign: Boolean!\n  ) {\n    addAgreement(\n      agreementPrivacy: $agreementPrivacy\n      agreementLocation: $agreementLocation\n      content: $content\n      title: $title\n      signers: $signers\n      observers: $observers\n      agreementHash: $agreementHash\n      agreementFilePath: $agreementFilePath\n      isReadyToSign: $isReadyToSign\n    ) {\n      title\n      content\n      authorWallet {\n        address\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation Mutation {\n    logout {\n      message\n    }\n  }\n"
): typeof documents["\n  mutation Mutation {\n    logout {\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query Users {\n    users {\n      users {\n        name\n        bio\n        email\n        phone\n        twitterVerificationCode\n        twitterVerificationSig\n      }\n    }\n  }\n"
): typeof documents["\n  query Users {\n    users {\n      users {\n        name\n        bio\n        email\n        phone\n        twitterVerificationCode\n        twitterVerificationSig\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query Agreements($authorWallet: String) {\n    agreements(authorWallet: $authorWallet) {\n      agreements {\n        title\n        content\n        agreementLocation {\n          name\n          isActive\n        }\n        agreementPrivacy {\n          name\n        }\n        agreementFile {\n          filePath\n          createdAt\n        }\n        authorWallet {\n          address\n          user {\n            name\n            email\n            phone\n            twitterVerificationCode\n            twitterVerificationSig\n            bio\n          }\n        }\n        signers {\n          email\n          wallet {\n            address\n            user {\n              name\n            }\n          }\n        }\n        observers {\n          email\n          wallet {\n            address\n            user {\n              name\n            }\n          }\n        }\n        agreementStatus {\n          name\n        }\n      }\n      count\n    }\n  }\n"
): typeof documents["\n  query Agreements($authorWallet: String) {\n    agreements(authorWallet: $authorWallet) {\n      agreements {\n        title\n        content\n        agreementLocation {\n          name\n          isActive\n        }\n        agreementPrivacy {\n          name\n        }\n        agreementFile {\n          filePath\n          createdAt\n        }\n        authorWallet {\n          address\n          user {\n            name\n            email\n            phone\n            twitterVerificationCode\n            twitterVerificationSig\n            bio\n          }\n        }\n        signers {\n          email\n          wallet {\n            address\n            user {\n              name\n            }\n          }\n        }\n        observers {\n          email\n          wallet {\n            address\n            user {\n              name\n            }\n          }\n        }\n        agreementStatus {\n          name\n        }\n      }\n      count\n    }\n  }\n"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 **/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
