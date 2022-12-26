import { graphql } from "../gql";

export const loginMutation = graphql(`
  mutation login($address: String!, $signature: String) {
    login(address: $address, signature: $signature) {
      message
      payload
      token
    }
  }
`);

export const saveAgreementMutation = graphql(`
  mutation SaveAgreement(
    $agreementPrivacy: String
    $agreementLocation: String
    $content: String
    $title: String!
    $signers: [String!]
    $observers: [String!]
    $agreementHash: String
    $agreementFilePath: String
    $isReadyToSign: Boolean!
  ) {
    saveAgreement(
      agreementPrivacy: $agreementPrivacy
      agreementLocation: $agreementLocation
      content: $content
      title: $title
      signers: $signers
      observers: $observers
      agreementHash: $agreementHash
      agreementFilePath: $agreementFilePath
      isReadyToSign: $isReadyToSign
    ) {
      title
      content
      authorWallet {
        address
      }
    }
  }
`);

export const logoutMutation = graphql(`
  mutation Mutation {
    logout {
      message
    }
  }
`);
