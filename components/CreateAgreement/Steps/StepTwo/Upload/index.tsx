/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { useCreateAgreement } from "../../../../../hooks/useCreateAgreement";
import {
  restoreCloudFile,
  restoreIpfsFile,
  uploadFile,
  uploadToIpfs,
} from "../../../../../modules/rest";
import { LOCATION_CLOUD, LOCATION_LOCAL, LOCATION_PUBLIC_IPFS } from "../../../../../types";
import { withFade } from "../../..";
import { calculateIpfsHash } from "../../../../../utils/ipfs";
import { HashPreviewScreen, UploadScreen, FileLoading } from "./Parts";

export interface FileState {
  file: File | undefined;
  setFile: React.Dispatch<React.SetStateAction<File | undefined>>;
}

export default function Upload() {
  const { values, changeValue } = useCreateAgreement();
  const [file, setFile] = useState<File>();
  const [fileLoading, setFileLoading] = useState(false);

  async function readFile(target: EventTarget & HTMLInputElement) {
    let file = target.files && (target.files[0] as File);

    if (file) {
      if (values.agreementLocation !== LOCATION_LOCAL) {
        setFile(file);
      }
      try {
        const hash = await calculateIpfsHash(file);
        if (hash) {
          changeValue("agreementHash", hash);
        }
      } catch (e) {
        console.error(e);
      }
      if (values.agreementLocation === LOCATION_PUBLIC_IPFS) {
        const uploadResult = await uploadToIpfs(file);
        if (!uploadResult.IpfsHash) {
          console.error(uploadResult);
        }
      }
      if (values.agreementLocation === LOCATION_CLOUD) {
        try {
          const res = await uploadFile(file);
          "fileLink" in res && changeValue("filePath", res.fileLink);
        } catch (e) {
          console.error(e);
        }
      }
    }
  }

  const prevAgreementLocation = useRef(values.agreementLocation);
  const restoreFileStarted = useRef(false);

  //Restore file
  useEffect(() => {
    if (!file && (values.filePath || values.agreementHash)) {
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
    if (!file && (values.filePath || values.agreementHash)) {
      if (values.agreementLocation === LOCATION_CLOUD && values.filePath) {
        return restoreCloudFile(values.filePath)
          .then(file => setFile(file))
          .then(console.error);
      }

      if (values.agreementLocation === LOCATION_PUBLIC_IPFS && values.agreementHash) {
        return restoreIpfsFile(values.agreementHash)
          .then(file => setFile(file))
          .catch(e => {
            console.error(e);
          });
      }
    }
  };

  useEffect(() => {
    if (prevAgreementLocation.current != values.agreementLocation) {
      setFile(undefined);
      prevAgreementLocation.current = values.agreementLocation;
    }
  }, [values.agreementLocation]);

  return (
    <>
      <form id="upload-container">
        {values.agreementLocation === LOCATION_LOCAL && values.agreementHash
          ? withFade(<HashPreviewScreen />, "hashPreview")
          : fileLoading
          ? withFade(<FileLoading />, "loader")
          : withFade(
              <UploadScreen file={file} setFile={setFile} readFile={readFile} />,
              "UploadScreen"
            )}
      </form>
    </>
  );
}
