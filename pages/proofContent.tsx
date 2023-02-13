import React from "react";
import { Container, Text } from "theme-ui";

export default function ProofContent() {
  return (
    <Container sx={{ p: "20px" }}>
      <Text>
        {
          "address: <User's address>, sig: <User's signature of Agreement File Proof Data,> data: { types: { EIP712Domain: [ { name: name, type: string }, { name: version, type: string },{ name: chainId,type: uint64 },{ name: verifyingContract, type: address }], Agreement: [{ name: from, type:  address },{ name: agreementFileCID, type: string },{ name: signers, type: Signers },{ name: app, type: string },{ name: timestamp, type: uint64 },{ name: metadata, type: string}],Signers: [            { name: address, type: string },{ name: metadata, type: string }          ]},domain: {name: daosign,version: 0.1.0},primaryType: Agreement,message: {          from: <Creator's address>,agreementFileCID: <Agreement File CID>,signers: [{ address: <Signer 1 address>, metadata: {} },{ address: <Signer 2 address>, metadata: {} },{ address: <Signer 3 address>, metadata: {} }],app: daosign,metadata: {}}}}"
        }
      </Text>
    </Container>
  );
}
ProofContent.noLayout = true;
