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

export const logoutMutation = graphql(`
  mutation Mutation {
    logout {
      message
    }
  }
`);

export const createUserByEmailMutation = graphql(`
  mutation createUserByEmail($email: String!) {
    createUserByEmail(email: $email)
  }
`);

export const sendEmailVerificationLinkMutation = graphql(`
  mutation sendEmailVerificationLink(
    $email: String!
    $isSigner: Boolean!
    $agreementNumber: String!
  ) {
    sendEmailVerificationLink(email: $email, isSigner: $isSigner, agreementNumber: $agreementNumber)
  }
`);

export const verifyMyEmailMutation = graphql(`
  mutation verifyMyEmail($emailVerificationSalt: String!, $email: String!) {
    verifyMyEmail(emailVerificationSalt: $emailVerificationSalt, email: $email)
  }
`);
