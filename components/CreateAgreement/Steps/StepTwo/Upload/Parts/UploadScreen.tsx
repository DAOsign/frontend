import React from "react";
import { Box } from "theme-ui";
import { PreviewScreen, UploadPaceholder } from "./";
import { imageUploadContainer } from "../../../../styles";
import { FileState } from "..";

const UploadScreen = ({
  file,
  setFile,
  readFile,
}: FileState & {
  readFile: (target: EventTarget & HTMLInputElement) => void;
}) => {
  return (
    <>
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
        {file ? <PreviewScreen file={file} setFile={setFile} /> : <UploadPaceholder />}
      </Box>
    </>
  );
};

export default UploadScreen;
