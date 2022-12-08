import dynamic from "next/dynamic";
import { Flex, Box, Text } from "theme-ui";
import { FileState } from "..";
import iconsObj from "../../../../../../assets/icons";
import Icon from "../../../../../icon";
import { previewContainer } from "../../../../styles";

const FileViewer = dynamic(() => import("@cyntler/react-doc-viewer"), {
  ssr: false,
});

const getIconByFileType = (type: string) => {
  return iconsObj.fileSvg;
};

const PreviewScreen = ({ file, setFile }: FileState) => {
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
        </Flex>
        <Box sx={{ minWidth: "unset" }}>
          <Flex
            onClick={() => setFile(undefined)}
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
