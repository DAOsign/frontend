import axios, { AxiosResponse, AxiosError } from "axios";

export const uploadFile = async (file: File): Promise<{ fileLink: string } | AxiosError> => {
  const formData = new FormData();
  formData.append("data", file);
  const res = await axios<AxiosResponse<{ fileLink: string }>>({
    method: "post",
    url: `${process.env.NEXT_PUBLIC_REST_ENDPOINT}/files/upload`,
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  const error = res["error"];
  return error || res.data;
};
