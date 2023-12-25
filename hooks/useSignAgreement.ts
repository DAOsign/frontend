import { useClient, useMutation } from "urql";
import {
  sendSignedAgreementFileData,
  sendSignedAgreementSignData,
} from "../modules/graphql/mutations";
import { getAgreementFileProofData, getAgreementSignProofData } from "../modules/graphql/queries";
import { useWeb3 } from "./useWeb3";

const useSignAgreement = (agreementId: string) => {
  const client = useClient();

  const { signTypedData } = useWeb3();

  const [, sendSignedFileProofData] = useMutation(sendSignedAgreementFileData);
  const [, sendSignedSignProofData] = useMutation(sendSignedAgreementSignData);

  const requestFileProofData = async () => {
    return client
      .query(getAgreementFileProofData, { agreementId })
      .toPromise()
      .then(async res => {
        const signingPayload = res.data?.getAgreementFileProofData;
        if (res.error || !signingPayload) {
          throw new Error("No file proof payload");
        }

        return signingPayload;
      });
  };

  const requestSignProofData = async () => {
    return client
      .query(getAgreementSignProofData, { agreementId })
      .toPromise()
      .then(async res => {
        const signingPayload = res.data?.getAgreementSignProofData;
        if (res.error || !signingPayload) {
          throw new Error("No file proof payload");
        }
        // return clearPayload(signingPayload);
        return {
          domain: { name: "daosign", version: "0.1.0" },
          types: {
            /*       EIP712Domain: [
              { name: "name", type: "string" },
              { name: "version", type: "string" },
              { name: "chainId", type: "uint256" },
              { name: "verifyingContract", type: "address" },
            ], */
            ProofOfSignature: [
              { name: "name", type: "string" },
              { name: "signer", type: "address" },
              { name: "agreementCID", type: "string" },
              { name: "app", type: "string" },
              { name: "timestamp", type: "uint256" },
              { name: "metadata", type: "string" },
            ],
          },
          primaryType: "ProofOfSignature",
          message: {
            name: "Proof-of-Signature",
            signer: "0xd405aebF7b60eD2cb2Ac4497Bddd292DEe534E82",
            agreementCID: "QmaV4x1uwEvfpoec6AkCcs3Rt2iQrCrtyofxLC7RabZ733",
            app: "daosign",
            timestamp: 1702982560608,
            metadata: "{}",
          },
        };
      });
  };

  const signFileProofData = async (signingPayload: any, signature: string) => {
    return sendSignedFileProofData({
      data: signingPayload,
      signature: signature,
      agreementId,
    }).then(res => {
      if (res.error) {
        throw new Error(res.error.message);
      }
      return res;
    });
  };

  const signSignProofData = async (signingPayload: any, signature: string) => {
    return sendSignedSignProofData({
      data: signingPayload,
      signature: signature,
      agreementId,
    }).then(res => {
      if (res.error) {
        throw new Error(res.error.message);
      }
      return res;
    });
  };

  const makeProofOfIdentity = async () => {
    const signingPayload = await requestFileProofData();

    const { domain, types, message } = signingPayload;
    const signature = await signTypedData(domain, types, message);

    if (!signature) {
      throw new Error("Payload wasn't signed");
    }

    return signFileProofData(signingPayload, signature);
  };

  const makeProofOfSignature = async () => {
    const signingPayload = await requestSignProofData();

    const { domain, types, message } = signingPayload;
    const signature = await signTypedData(domain, types, message);

    if (!signature) {
      throw new Error("Payload wasn't signed");
    }

    return signSignProofData(signingPayload, signature);
  };

  return {
    makeProofOfIdentity,
    makeProofOfSignature,
  };
};

export function removeTypeName(obj: any) {
  delete obj?.__typename;
}

export function clearPayload(payload: any) {
  removeTypeName(payload);

  const domain = payload?.domain;
  removeTypeName(domain);

  const types = payload?.types;
  removeTypeName(types);

  const message = payload?.message;
  removeTypeName(message);

  message?.signers?.forEach((s: any) => removeTypeName(s));
  const typeKeys = Object.keys(types);

  typeKeys.forEach(t => types[t].forEach((k: any) => removeTypeName(k)));

  console.log(payload);
  return payload;
}

export default useSignAgreement;
