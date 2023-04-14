import { Text, Box, Flex } from "theme-ui";
import iconsObj from "../../../../../../assets/icons";
import Icon from "../../../../../icon";

import { uploadText, uploadTextMobile, iconUpload } from "../../../../styles";

const UploadPaceholder = () => (
  <Flex sx={{ flexDirection: "column" }}>
    <Box sx={iconUpload}>
      <Icon src={iconsObj.uploadIcon} />
    </Box>
    <Text sx={uploadText}>
      Upload Agreement file using Drag & Drop or <br />
      <span className="chooseFileText">Choose File</span>
    </Text>
    <Text sx={uploadTextMobile}>Choose File</Text>
  </Flex>
);

export default UploadPaceholder;
