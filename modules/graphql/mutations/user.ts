import { graphql } from "../gql";

export const loginMutation = graphql(`
  mutation login($address: String!, $signature: String) {
    login(address: $address, signature: $signature) {
      message
      error
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

export const verifyMyEmailMutation = graphql(`
  mutation verifyMyEmail($emailVerificationSalt: String!, $email: String!) {
    verifyMyEmail(emailVerificationSalt: $emailVerificationSalt, email: $email)
  }
`);
