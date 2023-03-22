import React from "react";
import { Flex, Text, Box, Button } from "theme-ui";
import Icon from "../../../icon/index";
import { uploadBtn, labelUpload, containerUpload } from "../../styles";
import iconsObj from "../../../../assets/icons";
import { useCreateAgreement } from "../../../../hooks/useCreateAgreement";
import { useEditAgreement } from "../../../../hooks/useEditAgreement";
import Upload from "./Upload";

export default function UploadLocalAgreement({ page }: { page: string }) {
  const create = useCreateAgreement();
  const edit = useEditAgreement();
  const { changeValue, values } = page === "create" ? create : edit;

  const handleChooseAnotherMethod = () => {
    changeValue("agreementMethod", "");
    changeValue("filePath", "");
    changeValue("textEditorValue", "");
    changeValue("file", undefined);
  };

  return (
    <Flex
      sx={{
        ...containerUpload,
        mt: "24px",
        //@ts-ignore
        "@media screen and (max-width: 768px)": {
          flexDirection: !values.file ? "row-reverse" : "column !important",
          alignItems: !values.file ? "center" : "",
          justifyContent: "space-between",
        },
      }}
    >
      <Flex
        sx={{
          height: "20px",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Text
          sx={{
            ...labelUpload,
            "@media screen and (max-width: 768px)": {
              display: !values.file ? "none" : "block",
            },
          }}
        >
          Upload agreement
        </Text>
        <Button
          onClick={handleChooseAnotherMethod}
          sx={{
            variant: "buttons.back",
            ...uploadBtn,
          }}
        >
          <Box sx={{ width: "14px" }}>
            <Icon style={{ display: "block" }} src={iconsObj.arrowLeftPink} />
          </Box>
          <Text
            sx={{
              display: "block",
              "&:hover": {
                color: "#AE4FD0",
              },
            }}
          >
            Choose another method
          </Text>
        </Button>
      </Flex>
      <Upload page={page} />
    </Flex>
  );
}
