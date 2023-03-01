import axios, { AxiosResponse, AxiosError } from "axios";

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
  axios.get("/api/getFromIpfs", { params: { hash }, responseType: "json" }).then(res => res.data);

export const restoreIpfsFile = async (hash: string, abortController?: AbortController) => {
  return axios
    .get("/api/getFromIpfs", {
      params: { hash: hash },
      responseType: "blob",
      signal: abortController?.signal || undefined,
    })
    .then(res => {
      const blob: Blob = res.data;
      const fileName = res.headers["content-disposition"]?.split("=")[1];

      return new File([blob], fileName || hash, { type: blob.type });
    });
  /* 
  return axios
    .get(
      `https://${process.env.NEXT_PUBLIC_PINATA_GATEWAY}/ipfs/${hash}?metadata[name]=exampleName`,
      {
        headers: {
          "Referrer-Policy": "no-referrer",
          "x-pinata-gateway-token": process.env.NEXT_PUBLIC_ACCESS_TOKEN,
        },
      }
    )
    .then(result => {
      console.log("pinata result", result);
      const type = result.headers["content-type"];

      const blob = new Blob([result.data], { type: type });

      return new File([blob], hash, { type: blob.type });
    }); */
};
