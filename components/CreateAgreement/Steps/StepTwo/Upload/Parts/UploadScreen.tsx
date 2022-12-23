import React from "react";
import { Box } from "theme-ui";
import { PreviewScreen, UploadPaceholder } from "./";
import { imageUploadContainer } from "../../../../styles";
import { useCreateAgreement } from "../../../../../../hooks/useCreateAgreement";

const UploadScreen = () => {
  const { values, changeValue } = useCreateAgreement();

  const handleReadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    let file = event?.target?.files && (event?.target?.files[0] as File);

    if (file) {
      changeValue("filePath", "");
      changeValue("agreementHash", "");
      changeValue("file", file);
    }
  };

  return (
    <>
      <Box sx={imageUploadContainer} className={values.file ? "uploaded" : undefined}>
        <input
          lang="en"
          onChange={handleReadFile}
          className="file"
          id="file"
          type="file"
          name="file"
          accept=".txt,.pdf,.doc,.docx"
        />
        {values.file ? <PreviewScreen file={values.file} /> : <UploadPaceholder />}
      </Box>
    </>
  );
};

export default UploadScreen;
