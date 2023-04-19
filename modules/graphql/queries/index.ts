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
      agreementId
      snapshotProposalUrl
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
        ens {
          name
        }
      }
      signers {
        email
        wallet {
          address
        }
        ens {
          name
        }
      }
      title
      content
      isWaitingForMySignature
      snapshotProposalUrl
      isAllowedToEditObservers
      createdAt
      signProofs {
        signature
        cid
        signerWalletId
        signerWallet {
          address
        }
      }
      agreementFileProof {
        cid
        signature
        signers
      }
      agreementProof {
        cid
        signedAt
      }
    }
  }
`);
export const myAgreementsQuery = graphql(`
  query MyAgreements($take: Int, $filterBy: [String!], $search: String, $skip: Int) {
    myAgreements(take: $take, filterBy: $filterBy, search: $search, skip: $skip) {
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
        signProofs {
          cid
          signature
        }
      }
      count
    }
  }
`);

export const getAgreementFileProofData = graphql(`
  query GetAgreementFileProofData($agreementId: Int!) {
    getAgreementFileProofData(agreementId: $agreementId) {
      domain {
        name
        version
      }
      primaryType
      types {
        Agreement {
          name
          type
        }
        Signers {
          name
          type
        }
      }
      message {
        name
        agreementFileCID
        app
        from
        metadata
        signers {
          address
          metadata
        }
        timestamp
      }
    }
  }
`);

export const getAgreementSignProofData = graphql(`
  query GetAgreementSignProofData($agreementId: Int!) {
    getAgreementSignProofData(agreementId: $agreementId) {
      domain {
        name
        version
      }
      primaryType
      types {
        Agreement {
          name
          type
        }
      }
      message {
        name
        agreementFileProofCID
        app
        metadata
        signer
        timestamp
      }
    }
  }
`);

export const generateAgreement = graphql(`
  query GenerateAgreement(
    $agreementId: Int!
    $proposalText: String!
    $contractType: String
    $legalJurisdictionCountry: String
    $legalJurisdictionState: String
    $additionalDetails: String
    $addIndemnificationClause: Boolean
    $addIntellectualPropertyClause: Boolean
    $addNonSolicitationClause: Boolean
  ) {
    generateAgreement(
      agreementId: $agreementId
      proposalText: $proposalText
      contractType: $contractType
      legalJurisdictionCountry: $legalJurisdictionCountry
      legalJurisdictionState: $legalJurisdictionState
      additionalDetails: $additionalDetails
      addIndemnificationClause: $addIndemnificationClause
      addIntellectualPropertyClause: $addIntellectualPropertyClause
      addNonSolicitationClause: $addNonSolicitationClause
    ) {
      text
    }
  }
`);

export const refineGeneratedAgreement = graphql(`
  query RefineGeneratedAgreement($userRequest: String!, $agreementId: Int!) {
    refineGeneratedAgreement(userRequest: $userRequest, agreementId: $agreementId) {
      text
    }
  }
`);
