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
        return clearPayload(signingPayload);
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

  return payload;
}

export default useSignAgreement;
