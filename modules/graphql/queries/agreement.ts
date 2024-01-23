import { graphql } from "../gql";

export const agreementById = graphql(`
  query Query($agreementId: String!) {
    agreement(agreementId: $agreementId) {
      agreementId
      snapshotProposalUrl
      storeOnBlockchain
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
  query MyAgreements(
    $skip: Int
    $take: Int
    $search: String
    $sortByField: String
    $sortByOrder: String
    $filterBy: [String!]
  ) {
    myAgreements(
      skip: $skip
      take: $take
      search: $search
      sortByField: $sortByField
      sortByOrder: $sortByOrder
      filterBy: $filterBy
    ) {
      agreements {
        agreementId
        title
        content
        isWaitingForMySignature
        createdAt
        storeOnBlockchain
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
  query GetAgreementFileProofData($agreementId: String!) {
    getAgreementFileProofData(agreementId: $agreementId)
  }
`);

export const getAgreementSignProofData = graphql(`
  query GetAgreementSignProofData($agreementId: String!) {
    getAgreementSignProofData(agreementId: $agreementId)
  }
`);

export const generateAgreement = graphql(`
  query GenerateAgreement(
    $agreementId: String!
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
  query RefineGeneratedAgreement($userRequest: String!, $agreementId: String!) {
    refineGeneratedAgreement(userRequest: $userRequest, agreementId: $agreementId) {
      text
    }
  }
`);
