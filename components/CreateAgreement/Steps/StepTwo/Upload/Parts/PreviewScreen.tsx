import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Flex, Box, Text } from "theme-ui";
import { FileState } from "..";
import iconsObj from "../../../../../../assets/icons";
import Icon from "../../../../../icon";
import {
  previewContainer,
  removeContainer,
  flexRemove,
  containerFlex,
  nameFile,
} from "../../../../styles";
import { useCreateAgreement } from "../../../../../../hooks/useCreateAgreement";
import { useEditAgreement } from "../../../../../../hooks/useEditAgreement";
import { Link } from "theme-ui";

const FileViewer = dynamic(() => import("@cyntler/react-doc-viewer"), {
  ssr: false,
});

export const getIconByFileType = (type: string | undefined) => {
  switch (type) {
    case "application/pdf":
      return iconsObj.fileSvg;
    default:
      return iconsObj.fileSecondarysvg;
  }
};

export const DEFAULT_FILE_PATH = "#";

export const FILE_VIEWER_CONFIG = { header: { disableHeader: true } };

export interface AgreementDocument {
  uri: string;
  fileName: string;
}

interface Props extends FileState {
  onFileDelete?: () => void;
}

const PreviewScreen = ({ file, page, onFileDelete = () => {} }: Props) => {
  const create = useCreateAgreement();
  const edit = useEditAgreement();
  const { changeValue } = page === "create" ? create : edit;

  const [documents, setDocuments] = useState<AgreementDocument[]>([]);

  useEffect(() => {
    const getDocuments = () => {
      let filePath;
      if (typeof window !== "undefined" && file) {
        filePath = window.URL.createObjectURL(file);
      } else {
        filePath = DEFAULT_FILE_PATH;
      }

      setDocuments([{ uri: filePath, fileName: file?.name || "agreement file" }]);
    };

    getDocuments();
  }, [file]);

  const handleDelete = () => {
    changeValue("filePath", "");
    changeValue("agreementHash", "");
    changeValue("file", undefined);
    onFileDelete();
  };

  return file ? (
    <Box sx={previewContainer} className="previewContainer">
      <Box className="preview">
        <FileViewer documents={documents} config={FILE_VIEWER_CONFIG} />
      </Box>
      <Box sx={containerFlex}>
        <Flex sx={flexRemove}>
          <Link
            href={documents[0]?.uri}
            target={"_blank"}
            sx={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <Box sx={{ width: "18px" }}>
              <Icon src={getIconByFileType(file?.type)} />
            </Box>
            <Text sx={nameFile}>{file?.name}</Text>
          </Link>
        </Flex>
        <Box sx={{ minWidth: "unset" }}>
          <Flex onClick={handleDelete} sx={removeContainer}>
            <Box
              sx={{
                width: "16px",
                height: "21px",
              }}
            >
              <svg width="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6"
                  stroke="#CA5CF2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            Delete
          </Flex>
        </Box>
      </Box>
    </Box>
  ) : (
    <></>
  );
};

export default PreviewScreen;
