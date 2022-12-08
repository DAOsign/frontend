import { Text } from "theme-ui";

import { uploadText, uploadTextMobile } from "../../../../styles";

const UploadPaceholder = () => (
  <>
    <Text sx={uploadText}>
      Upload Agreement file using Drag & Drop <br /> or
      <span style={{ color: "#CA5CF2" }}> Choose File</span>
    </Text>
    <Text sx={uploadTextMobile}>Choose File</Text>
  </>
);

export default UploadPaceholder;
