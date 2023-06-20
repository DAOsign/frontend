import axios, { AxiosResponse, AxiosError } from "axios";
import fileDownload from "js-file-download";
import { getToken } from "../../utils/token";

export const uploadFile = async (
  authToken: string,
  file: File
): Promise<{ fileLink: string } | AxiosError> => {
  const formData = new FormData();
  formData.append("data", file);
  const res = await axios<AxiosResponse<{ fileLink: string }>>({
    method: "post",
    url: `${process.env.NEXT_PUBLIC_REST_ENDPOINT}/files/upload`,
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
      token: authToken,
    },
  });

  const error = res["error"];
  return error || res.data;
};

export const uploadToIpfs = async (authToken: string, file: File) => {
  const formData = new FormData();
  formData.append("data", file);

  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_REST_ENDPOINT}/files/uploadIPFS`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        token: authToken,
      },
    }
  );

  const error = res["error"];
  return error || res.data;
};

export const restoreCloudFile = async (url: string, abortController?: AbortController) => {
  return axios
    .get(url, { responseType: "blob", signal: abortController?.signal || undefined })
    .then(res => {
      const blob: Blob = res.data;

      const split = url.split("/")!;
      const fullFileName = split[split.length - 1];
      const [, ...filenameArray] = fullFileName.split("-");
      const fileName = filenameArray.join("-");

      const file = new File([blob], fileName, { type: blob.type });
      return file;
    });
};

export const getFileFromIPFS = async (hash: string) =>
  axios
    .get(`${process.env.NEXT_PUBLIC_PINATA_GATEWAY}/ipfs/${hash}`, { responseType: "json" })
    .then(res => res.data);

export const restoreIpfsFile = async (hash: string, abortController?: AbortController) => {
  return axios
    .get(`${hash}`, {
      responseType: "blob",
      signal: abortController?.signal || undefined,
    })
    .then(res => {
      const blob: Blob = res.data;
      const split = hash.split("/")!;
      const fullFileName = split[split.length - 1];
      const [, ...filenameArray] = fullFileName.split("-");
      const fileName = filenameArray.join("-");
      const file = new File([blob], fileName, { type: blob.type });
      return file;
    });
};
export const subscribeToUpdates = async (email: string) => {
  return axios.post(
    "/api/subscribe",
    { email },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const downloadPdf = async (agreementId: string, fileName = agreementId) => {
  return axios
    .get(`${process.env.NEXT_PUBLIC_REST_ENDPOINT}/files/generatePdf`, {
      params: { agreementId },
      responseType: "blob",

      headers: {
        token: getToken(),
      },
    })
    .then(res => {
      fileDownload(res.data, `${fileName}.pdf`);
    })
    .catch(e => console.error(e));
};
