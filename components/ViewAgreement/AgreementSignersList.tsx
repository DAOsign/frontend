import React from "react";
import { Signer } from "../../modules/graphql/gql/graphql";
import { Box, Flex } from "theme-ui";
import { participantsCard, participantsCardTitle, noObserversMessage } from "./styles";
import { SignerRow } from "./SignerRow";
import SignerCardMobile from "./SignerCardMobile";

interface Props {
  signers: Signer[];
}

export const AgreementSignersList = ({ signers }: Props) => {
  return (
    <Flex sx={participantsCard}>
      <Box
        sx={{
          ...participantsCardTitle,
          "@media screen and (max-width: 720px)": {
            "&": {
              display: signers?.length ? "block" : "none",
            },
          },
        }}
      >
        List of Signers
      </Box>
      {signers?.length ? (
        <>
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
          <Flex className="participantsTableMobile">
            {signers?.map((signer, index) => (
              <SignerCardMobile signer={signer} key={index} />
            ))}
          </Flex>
        </>
      ) : (
        <Box
          sx={{
            ...noObserversMessage,
            "@media screen and (max-width: 720px)": {
              "&": {
                display: signers?.length ? "block" : "none",
              },
            },
          }}
        >
          Agreement has no signers
        </Box>
      )}
    </Flex>
  );
};
