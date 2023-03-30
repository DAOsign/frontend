import { graphql } from "../gql";

export const snapshotProposal = `
  query ($proposalId: Int!) {
    proposal(id: $proposalId) {
      body
    }
  }
`;
