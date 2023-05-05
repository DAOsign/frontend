import { graphql } from "../gql";

export const loginMutation = graphql(`
  mutation login($address: String!, $email: String, $signature: String) {
    login(address: $address, email: $email, signature: $signature) {
      message
      payload
      token
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

export const sendEmailVerificationLinkMutation = graphql(`
  mutation sendEmailVerificationLink(
    $email: String!
    $isSigner: Boolean!
    $agreementTitle: String!
  ) {
    sendEmailVerificationLink(email: $email, isSigner: $isSigner, agreementTitle: $agreementTitle)
  }
`);

export const verifyMyEmailMutation = graphql(`
  mutation verifyMyEmail($emailVerificationSalt: String!, $email: String!) {
    verifyMyEmail(emailVerificationSalt: $emailVerificationSalt, email: $email)
  }
`);
