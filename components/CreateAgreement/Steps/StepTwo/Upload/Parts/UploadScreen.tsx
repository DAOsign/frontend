import React from "react";
import { Box } from "theme-ui";
import { PreviewScreen, UploadPaceholder } from "./";
import { imageUploadContainer } from "../../../../styles";
import { useCreateAgreement } from "../../../../../../hooks/useCreateAgreement";
import { useEditAgreement } from "../../../../../../hooks/useEditAgreement";
import { notifError } from "../../../../../../utils/notification";

const MAX_FILE_MEGABYTES_SIZE = 20;

const UploadScreen = ({ page }: { page: string }) => {
  const create = useCreateAgreement();
  const edit = useEditAgreement();
  const { values, changeValue } = page === "create" ? create : edit;

  const handleReadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    let file = event?.target?.files && (event?.target?.files[0] as File);
    if (file?.size && file?.size > MAX_FILE_MEGABYTES_SIZE * 1024 * 1024) {
      notifError(`File should be less than ${MAX_FILE_MEGABYTES_SIZE} MB`);
      return;
    }

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
          style={{ cursor: !!values.file ? "default" : "pointer" }}
          lang="en"
          disabled={!!values.file}
          onChange={handleReadFile}
          className="file"
          id="file"
          type="file"
          name="file"
          accept=".txt,.pdf"
        />
        {values.file ? <PreviewScreen page={page} file={values.file} /> : <UploadPaceholder />}
      </Box>
    </>
  );
};

export default UploadScreen;
