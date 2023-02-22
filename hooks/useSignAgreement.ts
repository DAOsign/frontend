import { useClient, useMutation } from "urql";
import {
  sendSignedAgreementFileData,
  sendSignedAgreementSignData,
} from "../modules/graphql/mutations";
import { getAgreementFileProofData, getAgreementSignProofData } from "../modules/graphql/queries";
import { notifError } from "../utils/notification";
import { useWeb3 } from "./useWeb3";

const useSignAgreement = (agreementId: number) => {
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
        if (!signingPayload) {
          console.error("No file proof payload");
          return;
        }

        return clearPayload(signingPayload);
      });
  };

  const requestSignProofData = async () => {
    return client
      .query(getAgreementSignProofData, { agreementId })
      .toPromise()
      .then(async res => {
        const signingPayload = res.data?.getAgreementSignProofData;
        if (!signingPayload) {
          console.error("No sign proof payload");
          return;
        }
        return clearPayload(signingPayload);
      });
  };

  const signFileProofData = async (signingPayload: any, signature: string) => {
    return sendSignedFileProofData({
      data: signingPayload,
      signature: signature,
      agreementId: Number(agreementId),
    }).then(console.log);
  };

  const signSignProofData = async (signingPayload: any, signature: string) => {
    return sendSignedSignProofData({
      data: signingPayload,
      signature: signature,
      agreementId: Number(agreementId),
    });
  };

  const makeProofOfAuthority = async () => {
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
    makeProofOfAuthority,
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

  return payload;
}

export default useSignAgreement;
