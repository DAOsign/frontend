/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { useCreateAgreement } from "../../../../../hooks/useCreateAgreement";
import { useEditAgreement } from "../../../../../hooks/useEditAgreement";
import { restoreCloudFile, restoreIpfsFile } from "../../../../../modules/rest";
import { LOCATION_CLOUD, LOCATION_PUBLIC_IPFS } from "../../../../../types";
import { withFade } from "../../..";
import { UploadScreen, FileLoading } from "./Parts";
import useRestoreFile from "../../../../../hooks/useRestoreFile";

export interface FileState {
  file: File | undefined;
  page: string;
}

export default function Upload({ page }: { page: string }) {
  const create = useCreateAgreement();
  const edit = useEditAgreement();
  const { values, changeValue } = page === "create" ? create : edit;
  const { restoreFile, fileLoading } = useRestoreFile();

  //Restore file
  useEffect(() => {
    if (!values.file && (values.filePath || values.agreementHash)) {
      restoreFile(values, changeValue);
    }
  }, [values, changeValue, restoreFile]);

  return (
    <form id="upload-container">
      {fileLoading
        ? withFade(<FileLoading />, "loader")
        : withFade(<UploadScreen page={page} />, "UploadScreen")}
    </form>
  );
}
