import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Flex, Box, Text } from "theme-ui";
import { FileState } from "..";
import iconsObj from "../../../../../../assets/icons";
import Icon from "../../../../../icon";
import { previewContainer } from "../../../../styles";
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

const PreviewScreen = ({ file, page }: FileState) => {
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
  };

  return file ? (
    <Box sx={previewContainer} className="previewContainer">
      <Box className="preview">
        <FileViewer documents={documents} config={FILE_VIEWER_CONFIG} />
      </Box>
      <Box
        sx={{
          justifyContent: "space-between",
          display: "flex",
          height: "26px",
          gap: "20px",
          mt: "8px",
        }}
      >
        <Flex sx={{ gap: "8px", alignItems: "center" }}>
          <Link
            href={documents[0]?.uri}
            target={"_blank"}
            sx={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <Box sx={{ width: "18px" }}>
              <Icon src={getIconByFileType(file?.type)} />
            </Box>
            <Text
              sx={{
                fontFamily: "InterMedium",
                fontWeight: "500",
                lineHeight: "160%",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {file?.name}
            </Text>
          </Link>
        </Flex>
        <Box sx={{ minWidth: "unset", opacity: "0.5", "&:hover": { opacity: 1 } }}>
          <Flex
            onClick={handleDelete}
            sx={{
              variant: "text.link",
              fontSize: "12px",
              lineHeight: "160%",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <Box sx={{ width: "16px" }}>
              <Icon src={iconsObj.trashPrimary} />
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
