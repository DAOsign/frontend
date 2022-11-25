import { graphql } from '../gql'

export const allUsers = graphql(`
  query allUsers($first: Int!) {
    users {
      userId
      name
      bio
      phone
      email
      twitterVerificationCode
      twitterVerificationSig
    }
  }
`)