import { graphql } from "../gql";

export const snapshotProposal = `
  query ($proposalId: String!) {
    proposal(id: $proposalId) {
      body
    }
  }
`;
