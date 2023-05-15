import React from "react";
import { Flex, Text, Box, Button } from "theme-ui";
import Icon from "../../../icon/index";
import { uploadBtn, labelUpload, containerUpload, backBtn, uploadHeader } from "../../styles";
import iconsObj from "../../../../assets/icons";
import { useCreateAgreement } from "../../../../hooks/useCreateAgreement";
import { useEditAgreement } from "../../../../hooks/useEditAgreement";
import Upload from "./Upload";

export default function UploadLocalAgreement({
  page,
  handleChooseAnotherMethod,
}: {
  page: string;
  handleChooseAnotherMethod: () => void;
}) {
  const create = useCreateAgreement();
  const edit = useEditAgreement();
  const { values } = page === "create" ? create : edit;

  return (
    <Flex sx={{ ...containerUpload, mt: "0" }}>
      <Flex
        sx={{
          ...uploadHeader,
          "@media screen and (max-width: 720px)": {
            mb: !values.file ? "31px" : "8px",
          },
        }}
      >
        <Text sx={labelUpload}>Upload agreement *</Text>
        <Button onClick={handleChooseAnotherMethod} sx={uploadBtn}>
          <Box sx={{ width: "20px" }}>
            <Icon style={{ display: "block" }} src={iconsObj.arrowLeftPink} />
          </Box>
          <Text sx={backBtn}>Choose another method</Text>
        </Button>
      </Flex>
      <Upload page={page} />
    </Flex>
  );
}
