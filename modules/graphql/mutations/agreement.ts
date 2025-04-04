import { graphql } from "../gql";

export const saveAgreementMutation = graphql(`
  mutation SaveAgreement(
    $agreementId: String
    $agreementPrivacy: String
    $agreementLocation: String
    $content: String
    $title: String!
    $signers: [String!]
    $observers: [String!]
    $agreementHash: String
    $agreementFilePath: String
    $isReadyToSign: Boolean!
    $snapshotProposalUrl: String
    $storeOnBlockchain: Int
  ) {
    saveAgreement(
      agreementId: $agreementId
      agreementPrivacy: $agreementPrivacy
      agreementLocation: $agreementLocation
      content: $content
      title: $title
      signers: $signers
      observers: $observers
      agreementHash: $agreementHash
      agreementFilePath: $agreementFilePath
      isReadyToSign: $isReadyToSign
      snapshotProposalUrl: $snapshotProposalUrl
      storeOnBlockchain: $storeOnBlockchain
    ) {
      agreementId
      title
      content
      authorWallet {
        address
      }
    }
  }
`);

export const deleteAgreementMutation = graphql(`
  mutation DeleteAgreementMutation($agreementId: String!) {
    deleteAgreement(agreementId: $agreementId) {
      agreementId
      message
    }
  }
`);

export const sendSignedAgreementFileData = graphql(`
  mutation sendSignedFileProofData($data: JSONObject!, $signature: String!, $agreementId: String!) {
    sendSignedFileProofData(data: $data, signature: $signature, agreementId: $agreementId) {
      cid
    }
  }
`);

export const sendSignedAgreementSignData = graphql(`
  mutation sendSignedSignProofData($data: JSONObject!, $signature: String!, $agreementId: String!) {
    sendSignedSignProofData(data: $data, signature: $signature, agreementId: $agreementId) {
      cid
    }
  }
`);

export const editObservers = graphql(`
  mutation EditObservers($agreementId: String, $observers: [String!]) {
    editObservers(agreementId: $agreementId, observers: $observers) {
      message
    }
  }
`);
