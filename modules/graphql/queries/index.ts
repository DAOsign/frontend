import { graphql } from "../gql";

export const allUsers = graphql(`
  query Users {
    users {
      users {
        name
        bio
        email
        phone
        twitterVerificationCode
        twitterVerificationSig
      }
    }
  }
`);

export const agreements = graphql(`
  query Agreements($authorWallet: String) {
    agreements(authorWallet: $authorWallet) {
      agreements {
        title
        content
        agreementLocation {
          name
          isActive
        }
        agreementPrivacy {
          name
        }
        agreementFile {
          filePath
          createdAt
        }
        authorWallet {
          address
          user {
            name
            email
            phone
            twitterVerificationCode
            twitterVerificationSig
            bio
          }
        }
        observers {
          email
          wallet {
            address
            user {
              name
            }
          }
        }
        agreementStatus {
          name
        }
      }
      count
    }
  }
`);
