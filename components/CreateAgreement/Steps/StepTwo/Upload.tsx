import React, { useEffect, useRef, useState } from "react";
import { Text, Box, Flex } from "theme-ui";
import iconsObj from "../../../../assets/icons";
import Icon from "../../../icon";
import { imageUploadContainer, uploadText, uploadTextMobile } from "../../styles";
import dynamic from "next/dynamic";
import { useCreateAgreement } from "../../../../hooks/useCreateAgreement";
import { uploadFile } from "../../../../modules/rest";
const Hash = require("ipfs-only-hash");

const FileViewer = dynamic(() => import("@cyntler/react-doc-viewer"), {
  ssr: false,
});

const getIconByType = (type: string) => {
  return iconsObj.fileSvg;
};

const calculateIpfsHash = async (file: File) => {
  const buffer = await file.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  return await Hash.of(bytes);
};

export default function Upload() {
  const { values, changeValue } = useCreateAgreement();
  const [file, setFile] = useState<File>();

  async function readFile(target: any) {
    let file = target.files[0] as File;

    if (file) {
      setFile(file);
      try {
        const hash = await calculateIpfsHash(file);
        if (hash) {
          changeValue("agreementHash", hash);

          changeValue("filePath", window.URL.createObjectURL(file));
        }
      } catch (e) {
        console.error(e);
      }
      try {
        const res = await uploadFile(file);
        "fileLink" in res && changeValue("filePath", res.fileLink);
      } catch (e) {
        console.error(e);
      }
    }
  }

  //clear agreement hash on file changed ?
  useEffect(() => {
    if (!file) {
      changeValue("agreementHash", "");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  const prevAgreementLocation = useRef(values.agreementLocation);

  /* Restore file   
  useEffect(() => {
    if (values.filePath) {
      console.log(values.filePath);

      axios({
        url: values.filePath, //your url
        method: "GET",
        responseType: "blob", // important
      }).then(res => {
        console.log("axios res", res);
        const file = new File([res], "resotred");
        setFile(file);
        console.log("file", file);
      });
    }
  }, []); */

  useEffect(() => {
    if (prevAgreementLocation.current != values.agreementLocation) {
      setFile(undefined);
      prevAgreementLocation.current = values.agreementLocation;
    }
  }, [values.agreementLocation]);

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
              <Icon src={getIconByType(file?.type)} />
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
