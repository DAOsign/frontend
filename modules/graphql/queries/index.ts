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

export const agreementById = graphql(`
  query Query($agreementId: Int!) {
    agreement(agreementId: $agreementId) {
      agreementFile {
        agreementFileId
        agreementHash
        createdAt
        filePath
      }
      agreementLocation {
        agreementLocationId
        isActive
        name
      }
      agreementPrivacy {
        name
      }
      agreementStatus {
        name
      }
      authorWallet {
        address
        networkId
        userId
        walletId
      }
      observers {
        email
        observerId
        wallet {
          address
        }
      }
      signers {
        email
        wallet {
          address
        }
      }
      title
      content
      isWaitingForMySignature
      createdAt
    }
  }
`);
export const myAgreementsQuery = graphql(`
  query MyAgreements($search: String, $filterBy: [String!]) {
    myAgreements(search: $search, filterBy: $filterBy) {
      agreements {
        agreementId
        title
        content
        isWaitingForMySignature
        createdAt
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
        signers {
          email
          wallet {
            address
            user {
              name
            }
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
