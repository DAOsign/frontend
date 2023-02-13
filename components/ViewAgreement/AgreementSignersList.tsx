import React, { useState } from "react";
import { Signer } from "../../modules/graphql/gql/graphql";
import { Box, Flex, Container } from "theme-ui";
import { participantsCard, participantsCardTitle, noObserversMessage } from "./styles";
import { SignerRow } from "./SignerRow";
import ModalProof from "../ModalProof";
import Icon from "../../components/icon";
import SignerCardMobile from "./SignerCardMobile";
import iconsObj from "../../assets/icons";

interface Props {
  signers: Signer[];
}

export const AgreementSignersList = ({ signers }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
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
                  <SignerRow openProof={() => setIsOpen(true)} signer={signer} key={index} />
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
            <Box sx={{ width: "80px", height: "80px", m: "20px auto 12px" }}>
              <Icon src={iconsObj.whitoutUser} />
            </Box>
            The agreement has no signers yet
          </Box>
        )}
      </Flex>
      <ModalProof isOpen={isOpen} onExit={() => setIsOpen(false)} title="signature" />
    </Container>
  );
};
