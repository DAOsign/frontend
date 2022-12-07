import React, { useState } from "react";
import { Text, Box, Flex } from "theme-ui";
import iconsObj from "../../../../assets/icons";
import Icon from "../../../icon";
import { imageUploadContainer, uploadText, uploadTextMobile } from "../../styles";
import dynamic from "next/dynamic";

const FileViewer = dynamic(() => import("@cyntler/react-doc-viewer"), {
  ssr: false,
});

const Hash = require("ipfs-only-hash");

const getIconByType = (type: string) => {
  return iconsObj.fileSvg;
};

export default function Upload() {
  //const [bytes, setBytes] = useState<Uint8Array>();
  const [file, setFile] = useState<File>();

  async function readFile(target: any) {
    let file = target.files[0] as File;

    if (file) {
      setFile(file);
      //const buffer = await file.arrayBuffer();
      //const bytes = new Uint8Array(buffer);
      // setBytes(bytes);
    }
  }

  /* const ipfs = async () => {
    const hash = await Hash.of(bytes);
  }; */

  return (
    <form id="upload-container">
      <Box sx={imageUploadContainer} className={file ? "uploaded" : undefined}>
        <input
          lang="en"
          onChange={({ target }) => readFile(target)}
          className="file"
          id="file"
          type="file"
          name="file"
          accept=".txt,.pdf,.doc,.docx"
        />
        {file?.name ? (
          <FileViewer
            documents={[{ uri: window.URL.createObjectURL(file), fileName: file.name }]}
            config={{ header: { disableHeader: true } }}
          />
        ) : (
          <>
            <Text sx={uploadText}>
              Upload Agreement file using Drag & Drop <br /> or
              <span style={{ color: "#CA5CF2" }}> Choose File</span>
            </Text>
            <Text sx={uploadTextMobile}>Choose File</Text>
          </>
        )}
      </Box>
      {file && (
        <Flex sx={{ justifyContent: "space-between", height: "26px" }}>
          <Flex sx={{ gap: "8px", alignItems: "center" }}>
            <Box sx={{ width: "18px" }}>
              <Icon src={getIconByType(file?.type || "pdf")} />
            </Box>
            <Text sx={{ fontFamily: "InterMedium", fontWeight: "500", lineHeight: "160%" }}>
              {file?.name}
            </Text>
          </Flex>
          <Box>
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
        </Flex>
      )}
    </form>
  );
}
