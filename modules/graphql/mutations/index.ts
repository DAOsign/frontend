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
    $agreementHash: String
    $agreementFilePath: String
  ) {
    addAgreement(
      agreementPrivacy: $agreementPrivacy
      agreementLocation: $agreementLocation
      content: $content
      title: $title
      signers: $signers
      observers: $observers
      agreementHash: $agreementHash
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

export const logoutMutation = graphql(`
  mutation Mutation {
    logout {
      message
    }
  }
`);
