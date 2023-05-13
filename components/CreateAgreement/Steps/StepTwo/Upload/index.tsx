/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { useCreateAgreement } from "../../../../../hooks/useCreateAgreement";
import { useEditAgreement } from "../../../../../hooks/useEditAgreement";
import { restoreCloudFile, restoreIpfsFile } from "../../../../../modules/rest";
import { LOCATION_CLOUD, LOCATION_PUBLIC_IPFS } from "../../../../../types";
import { withFade } from "../../..";
import { UploadScreen, FileLoading } from "./Parts";

export interface FileState {
  file: File | undefined;
  page: string;
}

export default function Upload({ page }: { page: string }) {
  const create = useCreateAgreement();
  const edit = useEditAgreement();
  const { values, changeValue } = page === "create" ? create : edit;
  const [fileLoading, setFileLoading] = useState(false);

  const restoreFileStarted = useRef(false);

  //Restore file
  useEffect(() => {
    if (!values.file && (values.filePath || values.agreementHash)) {
      if (restoreFileStarted.current) return;
      restoreFileStarted.current = true;
      setFileLoading(true);
      restoreFile().then(res => {
        restoreFileStarted.current = false;
        setFileLoading(false);
      });
    }
  }, []);

  const restoreFile = async () => {
    if (!values.file && (values.filePath || values.agreementHash)) {
      if (values.agreementLocation === LOCATION_CLOUD && values.filePath) {
        return restoreCloudFile(values.filePath)
          .then(file => changeValue("file", file))
          .then(console.error);
      }

      if (values.agreementLocation === LOCATION_PUBLIC_IPFS && values.agreementHash) {
        return restoreIpfsFile(values.agreementHash)
          .then(file => changeValue("file", file))
          .catch(e => {
            console.error(e);
          });
      }
    }
  };

  return (
    <form id="upload-container">
      {fileLoading
        ? withFade(<FileLoading />, "loader")
        : withFade(<UploadScreen page={page} />, "UploadScreen")}
    </form>
  );
}
