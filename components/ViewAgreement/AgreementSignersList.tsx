import React from "react";
import { Signer } from "../../modules/graphql/gql/graphql";
import { Box, Flex } from "theme-ui";
import { participantsCard, participantsCardTitle, noObserversMessage } from "./styles";
import { SignerRow } from "./SignerRow";

interface Props {
  signers: Signer[];
}

export const AgreementSignersList = ({ signers }: Props) => {
  return (
    <Flex sx={participantsCard}>
      <Box sx={participantsCardTitle}>List of Signers</Box>
      {signers?.length ? (
        <table className="participantsTable">
          <thead>
            <tr>
              <th>Signer Name</th>
              <th>Signer Address</th>
              <th>Signature status</th>
              <th>Proof of signature</th>
            </tr>
          </thead>
          <tbody>
            {signers?.map((signer, index) => (
              <SignerRow signer={signer} key={index} />
            ))}
          </tbody>
        </table>
      ) : (
        <Box sx={noObserversMessage}>Agreement has no signers</Box>
      )}
    </Flex>
  );
};
