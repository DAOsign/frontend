import dynamic from "next/dynamic";
import { Flex, Box, Text } from "theme-ui";
import { FileState } from "..";
import iconsObj from "../../../../../../assets/icons";
import Icon from "../../../../../icon";
import { previewContainer } from "../../../../styles";
import { useCreateAgreement } from "../../../../../../hooks/useCreateAgreement";
import { Link } from "theme-ui";

const FileViewer = dynamic(() => import("@cyntler/react-doc-viewer"), {
  ssr: false,
});

const getIconByFileType = (type: string) => {
  return iconsObj.fileSvg;
};

const PreviewScreen = ({ file, setFile }: FileState) => {
  const { changeValue } = useCreateAgreement();

  const getFilePath = () => {
    if (typeof window !== "undefined" && file) {
      return window.URL.createObjectURL(file);
    }

    return "#";
  };

  return file ? (
    <Box sx={previewContainer} className="previewContainer">
      <Box className="preview">
        <FileViewer
          documents={[{ uri: window.URL.createObjectURL(file), fileName: file.name }]}
          config={{ header: { disableHeader: true } }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", height: "26px", gap: "20px" }}>
        <Flex sx={{ gap: "8px", alignItems: "center" }}>
          <Link
            href={getFilePath()}
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
        <Box sx={{ minWidth: "unset" }}>
          <Flex
            onClick={() => {
              changeValue("filePath", "");
              changeValue("agreementHash", "");
              setFile(undefined);
            }}
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
