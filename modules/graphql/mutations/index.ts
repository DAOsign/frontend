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

export const addAgreementMutation = graphql(`
  mutation AddAgreement(
    $agreementPrivacy: String!
    $agreementLocation: String!
    $content: String!
    $title: String!
    $signers: [String!]
    $observers: [String!]
    $isReadyToSign: Boolean
    $agreementFilePath: String
  ) {
    addAgreement(
      agreementPrivacy: $agreementPrivacy
      agreementLocation: $agreementLocation
      content: $content
      title: $title
      signers: $signers
      observers: $observers
      isReadyToSign: $isReadyToSign
      agreementFilePath: $agreementFilePath
    ) {
      title
      content
      authorWallet {
        address
      }
    }
  }
`);
