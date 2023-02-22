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
  "\n  mutation SaveAgreement(\n    $agreementId: Int\n    $agreementPrivacy: String\n    $agreementLocation: String\n    $content: String\n    $title: String!\n    $signers: [String!]\n    $observers: [String!]\n    $agreementHash: String\n    $agreementFilePath: String\n    $isReadyToSign: Boolean!\n  ) {\n    saveAgreement(\n      agreementId: $agreementId\n      agreementPrivacy: $agreementPrivacy\n      agreementLocation: $agreementLocation\n      content: $content\n      title: $title\n      signers: $signers\n      observers: $observers\n      agreementHash: $agreementHash\n      agreementFilePath: $agreementFilePath\n      isReadyToSign: $isReadyToSign\n    ) {\n      agreementId\n      title\n      content\n      authorWallet {\n        address\n      }\n    }\n  }\n":
    types.SaveAgreementDocument,
  "\n  mutation DeleteAgreementMutation($agreementId: Int!) {\n    deleteAgreement(agreementId: $agreementId) {\n      agreementId\n      message\n    }\n  }\n":
    types.DeleteAgreementMutationDocument,
  "\n  mutation Mutation {\n    logout {\n      message\n    }\n  }\n": types.MutationDocument,
  "\n  mutation sendSignedFileProofData(\n    $data: AgreementFileProofDataInput!\n    $signature: String!\n    $agreementId: Int!\n  ) {\n    sendSignedFileProofData(data: $data, signature: $signature, agreementId: $agreementId) {\n      cid\n    }\n  }\n":
    types.SendSignedFileProofDataDocument,
  "\n  mutation sendSignedSignProofData(\n    $data: AgreementSignProofDataInput!\n    $signature: String!\n    $agreementId: Int!\n  ) {\n    sendSignedSignProofData(data: $data, signature: $signature, agreementId: $agreementId) {\n      cid\n    }\n  }\n":
    types.SendSignedSignProofDataDocument,
  "\n  query Users {\n    users {\n      users {\n        name\n        bio\n        email\n        phone\n        twitterVerificationCode\n        twitterVerificationSig\n      }\n    }\n  }\n":
    types.UsersDocument,
  "\n  query Query($agreementId: Int!) {\n    agreement(agreementId: $agreementId) {\n      agreementFile {\n        agreementFileId\n        agreementHash\n        createdAt\n        filePath\n      }\n      agreementLocation {\n        agreementLocationId\n        isActive\n        name\n      }\n      agreementPrivacy {\n        name\n      }\n      agreementStatus {\n        name\n      }\n      authorWallet {\n        address\n        networkId\n        userId\n        walletId\n      }\n      observers {\n        email\n        observerId\n        wallet {\n          address\n        }\n      }\n      signers {\n        email\n        wallet {\n          address\n        }\n      }\n      title\n      content\n      isWaitingForMySignature\n      createdAt\n      signProofs {\n        signature\n        cid\n        signerWalletId\n        signerWallet {\n          address\n        }\n      }\n      agreementFileProof {\n        cid\n        signature\n        signers\n      }\n      agreementProof {\n        cid\n        signedAt\n      }\n    }\n  }\n":
    types.QueryDocument,
  "\n  query MyAgreements($take: Int, $filterBy: [String!], $search: String, $skip: Int) {\n    myAgreements(take: $take, filterBy: $filterBy, search: $search, skip: $skip) {\n      agreements {\n        agreementId\n        title\n        content\n        isWaitingForMySignature\n        createdAt\n        agreementLocation {\n          name\n          isActive\n        }\n        agreementPrivacy {\n          name\n        }\n        agreementFile {\n          filePath\n          createdAt\n        }\n        authorWallet {\n          address\n          user {\n            name\n            email\n            phone\n            twitterVerificationCode\n            twitterVerificationSig\n            bio\n          }\n        }\n        signers {\n          email\n          wallet {\n            address\n            user {\n              name\n            }\n          }\n        }\n        observers {\n          email\n          wallet {\n            address\n            user {\n              name\n            }\n          }\n        }\n        agreementStatus {\n          name\n        }\n      }\n      count\n    }\n  }\n":
    types.MyAgreementsDocument,
  "\n  query GetAgreementFileProofData($agreementId: Int!) {\n    getAgreementFileProofData(agreementId: $agreementId) {\n      domain {\n        name\n        version\n      }\n      primaryType\n      types {\n        Agreement {\n          name\n          type\n        }\n        Signers {\n          name\n          type\n        }\n      }\n      message {\n        agreementFileCID\n        app\n        from\n        metadata\n        signers {\n          address\n          metadata\n        }\n        timestamp\n      }\n    }\n  }\n":
    types.GetAgreementFileProofDataDocument,
  "\n  query GetAgreementSignProofData($agreementId: Int!) {\n    getAgreementSignProofData(agreementId: $agreementId) {\n      domain {\n        name\n        version\n      }\n      primaryType\n      types {\n        Agreement {\n          name\n          type\n        }\n      }\n      message {\n        agreementFileProofCID\n        app\n        metadata\n        signer\n        timestamp\n      }\n    }\n  }\n":
    types.GetAgreementSignProofDataDocument,
};

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
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation login($address: String!, $signature: String) {\n    login(address: $address, signature: $signature) {\n      message\n      payload\n      token\n    }\n  }\n"
): (typeof documents)["\n  mutation login($address: String!, $signature: String) {\n    login(address: $address, signature: $signature) {\n      message\n      payload\n      token\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation SaveAgreement(\n    $agreementId: Int\n    $agreementPrivacy: String\n    $agreementLocation: String\n    $content: String\n    $title: String!\n    $signers: [String!]\n    $observers: [String!]\n    $agreementHash: String\n    $agreementFilePath: String\n    $isReadyToSign: Boolean!\n  ) {\n    saveAgreement(\n      agreementId: $agreementId\n      agreementPrivacy: $agreementPrivacy\n      agreementLocation: $agreementLocation\n      content: $content\n      title: $title\n      signers: $signers\n      observers: $observers\n      agreementHash: $agreementHash\n      agreementFilePath: $agreementFilePath\n      isReadyToSign: $isReadyToSign\n    ) {\n      agreementId\n      title\n      content\n      authorWallet {\n        address\n      }\n    }\n  }\n"
): (typeof documents)["\n  mutation SaveAgreement(\n    $agreementId: Int\n    $agreementPrivacy: String\n    $agreementLocation: String\n    $content: String\n    $title: String!\n    $signers: [String!]\n    $observers: [String!]\n    $agreementHash: String\n    $agreementFilePath: String\n    $isReadyToSign: Boolean!\n  ) {\n    saveAgreement(\n      agreementId: $agreementId\n      agreementPrivacy: $agreementPrivacy\n      agreementLocation: $agreementLocation\n      content: $content\n      title: $title\n      signers: $signers\n      observers: $observers\n      agreementHash: $agreementHash\n      agreementFilePath: $agreementFilePath\n      isReadyToSign: $isReadyToSign\n    ) {\n      agreementId\n      title\n      content\n      authorWallet {\n        address\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation DeleteAgreementMutation($agreementId: Int!) {\n    deleteAgreement(agreementId: $agreementId) {\n      agreementId\n      message\n    }\n  }\n"
): (typeof documents)["\n  mutation DeleteAgreementMutation($agreementId: Int!) {\n    deleteAgreement(agreementId: $agreementId) {\n      agreementId\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation Mutation {\n    logout {\n      message\n    }\n  }\n"
): (typeof documents)["\n  mutation Mutation {\n    logout {\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation sendSignedFileProofData(\n    $data: AgreementFileProofDataInput!\n    $signature: String!\n    $agreementId: Int!\n  ) {\n    sendSignedFileProofData(data: $data, signature: $signature, agreementId: $agreementId) {\n      cid\n    }\n  }\n"
): (typeof documents)["\n  mutation sendSignedFileProofData(\n    $data: AgreementFileProofDataInput!\n    $signature: String!\n    $agreementId: Int!\n  ) {\n    sendSignedFileProofData(data: $data, signature: $signature, agreementId: $agreementId) {\n      cid\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation sendSignedSignProofData(\n    $data: AgreementSignProofDataInput!\n    $signature: String!\n    $agreementId: Int!\n  ) {\n    sendSignedSignProofData(data: $data, signature: $signature, agreementId: $agreementId) {\n      cid\n    }\n  }\n"
): (typeof documents)["\n  mutation sendSignedSignProofData(\n    $data: AgreementSignProofDataInput!\n    $signature: String!\n    $agreementId: Int!\n  ) {\n    sendSignedSignProofData(data: $data, signature: $signature, agreementId: $agreementId) {\n      cid\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query Users {\n    users {\n      users {\n        name\n        bio\n        email\n        phone\n        twitterVerificationCode\n        twitterVerificationSig\n      }\n    }\n  }\n"
): (typeof documents)["\n  query Users {\n    users {\n      users {\n        name\n        bio\n        email\n        phone\n        twitterVerificationCode\n        twitterVerificationSig\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query Query($agreementId: Int!) {\n    agreement(agreementId: $agreementId) {\n      agreementFile {\n        agreementFileId\n        agreementHash\n        createdAt\n        filePath\n      }\n      agreementLocation {\n        agreementLocationId\n        isActive\n        name\n      }\n      agreementPrivacy {\n        name\n      }\n      agreementStatus {\n        name\n      }\n      authorWallet {\n        address\n        networkId\n        userId\n        walletId\n      }\n      observers {\n        email\n        observerId\n        wallet {\n          address\n        }\n      }\n      signers {\n        email\n        wallet {\n          address\n        }\n      }\n      title\n      content\n      isWaitingForMySignature\n      createdAt\n      signProofs {\n        signature\n        cid\n        signerWalletId\n        signerWallet {\n          address\n        }\n      }\n      agreementFileProof {\n        cid\n        signature\n        signers\n      }\n      agreementProof {\n        cid\n        signedAt\n      }\n    }\n  }\n"
): (typeof documents)["\n  query Query($agreementId: Int!) {\n    agreement(agreementId: $agreementId) {\n      agreementFile {\n        agreementFileId\n        agreementHash\n        createdAt\n        filePath\n      }\n      agreementLocation {\n        agreementLocationId\n        isActive\n        name\n      }\n      agreementPrivacy {\n        name\n      }\n      agreementStatus {\n        name\n      }\n      authorWallet {\n        address\n        networkId\n        userId\n        walletId\n      }\n      observers {\n        email\n        observerId\n        wallet {\n          address\n        }\n      }\n      signers {\n        email\n        wallet {\n          address\n        }\n      }\n      title\n      content\n      isWaitingForMySignature\n      createdAt\n      signProofs {\n        signature\n        cid\n        signerWalletId\n        signerWallet {\n          address\n        }\n      }\n      agreementFileProof {\n        cid\n        signature\n        signers\n      }\n      agreementProof {\n        cid\n        signedAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query MyAgreements($take: Int, $filterBy: [String!], $search: String, $skip: Int) {\n    myAgreements(take: $take, filterBy: $filterBy, search: $search, skip: $skip) {\n      agreements {\n        agreementId\n        title\n        content\n        isWaitingForMySignature\n        createdAt\n        agreementLocation {\n          name\n          isActive\n        }\n        agreementPrivacy {\n          name\n        }\n        agreementFile {\n          filePath\n          createdAt\n        }\n        authorWallet {\n          address\n          user {\n            name\n            email\n            phone\n            twitterVerificationCode\n            twitterVerificationSig\n            bio\n          }\n        }\n        signers {\n          email\n          wallet {\n            address\n            user {\n              name\n            }\n          }\n        }\n        observers {\n          email\n          wallet {\n            address\n            user {\n              name\n            }\n          }\n        }\n        agreementStatus {\n          name\n        }\n      }\n      count\n    }\n  }\n"
): (typeof documents)["\n  query MyAgreements($take: Int, $filterBy: [String!], $search: String, $skip: Int) {\n    myAgreements(take: $take, filterBy: $filterBy, search: $search, skip: $skip) {\n      agreements {\n        agreementId\n        title\n        content\n        isWaitingForMySignature\n        createdAt\n        agreementLocation {\n          name\n          isActive\n        }\n        agreementPrivacy {\n          name\n        }\n        agreementFile {\n          filePath\n          createdAt\n        }\n        authorWallet {\n          address\n          user {\n            name\n            email\n            phone\n            twitterVerificationCode\n            twitterVerificationSig\n            bio\n          }\n        }\n        signers {\n          email\n          wallet {\n            address\n            user {\n              name\n            }\n          }\n        }\n        observers {\n          email\n          wallet {\n            address\n            user {\n              name\n            }\n          }\n        }\n        agreementStatus {\n          name\n        }\n      }\n      count\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetAgreementFileProofData($agreementId: Int!) {\n    getAgreementFileProofData(agreementId: $agreementId) {\n      domain {\n        name\n        version\n      }\n      primaryType\n      types {\n        Agreement {\n          name\n          type\n        }\n        Signers {\n          name\n          type\n        }\n      }\n      message {\n        agreementFileCID\n        app\n        from\n        metadata\n        signers {\n          address\n          metadata\n        }\n        timestamp\n      }\n    }\n  }\n"
): (typeof documents)["\n  query GetAgreementFileProofData($agreementId: Int!) {\n    getAgreementFileProofData(agreementId: $agreementId) {\n      domain {\n        name\n        version\n      }\n      primaryType\n      types {\n        Agreement {\n          name\n          type\n        }\n        Signers {\n          name\n          type\n        }\n      }\n      message {\n        agreementFileCID\n        app\n        from\n        metadata\n        signers {\n          address\n          metadata\n        }\n        timestamp\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetAgreementSignProofData($agreementId: Int!) {\n    getAgreementSignProofData(agreementId: $agreementId) {\n      domain {\n        name\n        version\n      }\n      primaryType\n      types {\n        Agreement {\n          name\n          type\n        }\n      }\n      message {\n        agreementFileProofCID\n        app\n        metadata\n        signer\n        timestamp\n      }\n    }\n  }\n"
): (typeof documents)["\n  query GetAgreementSignProofData($agreementId: Int!) {\n    getAgreementSignProofData(agreementId: $agreementId) {\n      domain {\n        name\n        version\n      }\n      primaryType\n      types {\n        Agreement {\n          name\n          type\n        }\n      }\n      message {\n        agreementFileProofCID\n        app\n        metadata\n        signer\n        timestamp\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
