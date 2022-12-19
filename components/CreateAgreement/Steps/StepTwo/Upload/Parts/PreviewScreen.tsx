import dynamic from "next/dynamic";
import { Flex, Box, Text } from "theme-ui";
import { FileState } from "..";
import iconsObj from "../../../../../../assets/icons";
import Icon from "../../../../../icon";
import { previewContainer } from "../../../../styles";
import { useCreateAgreement } from "../../../../../../hooks/useCreateAgreement";

const FileViewer = dynamic(() => import("@cyntler/react-doc-viewer"), {
  ssr: false,
});

const getIconByFileType = (type: string) => {
  return iconsObj.fileSvg;
};

const PreviewScreen = ({ file, setFile }: FileState) => {
  const { changeValue } = useCreateAgreement();

  return file ? (
    <Box sx={previewContainer} className="previewContainer">
      <Box className="preview">
        <FileViewer
          documents={[{ uri: window.URL.createObjectURL(file), fileName: file.name }]}
          config={{ header: { disableHeader: true } }}
        />
      </Box>
      <iframe
        id="msdoc-iframe"
        title="msdoc-iframe"
        src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
          window.URL.createObjectURL(file)
        )}`}
        frameBorder="0"
      />
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
