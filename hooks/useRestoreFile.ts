import { useState } from "react";
import { restoreCloudFile, restoreIpfsFile } from "../modules/rest";
import { LOCATION_CLOUD, LOCATION_PUBLIC_IPFS } from "../types";

interface FileValues {
  file?: File;
  filePath?: string;
  agreementHash?: string;
  agreementLocation?: string;
}

type ChangeValueFunction = (key: keyof FileValues, value: any) => void;

const useRestoreFile = () => {
  const [fileLoading, setFileLoading] = useState(false);

  const restoreFile = async (values: FileValues, changeValue: ChangeValueFunction) => {
    if (!values.file && (values.filePath || values.agreementHash)) {
      setFileLoading(true);

      try {
        let file;
        if (values.filePath && values.agreementHash) {
          file = await restoreCloudFile(values.filePath);
        } else if (!values.filePath && values.agreementHash) {
          const hash = values.agreementHash;
          file = await restoreIpfsFile(hash);
        }
        console.log(file);
        if (file) {
          changeValue("file", file);
          return file;
        }
      } catch (e) {
        console.error(e);
      } finally {
        setFileLoading(false);
      }
    }
  };

  return { restoreFile, fileLoading };
};

export default useRestoreFile;
