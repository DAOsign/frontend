import React from "react";
import { Container, Flex, Text, Box, Button } from "theme-ui";
import Icon from "../../../icon/index";
import { uploadBtn } from "../../styles";
import iconsObj from "../../../../assets/icons";
import { useCreateAgreement } from "../../../../hooks/useCreateAgreement";
import { useEditAgreement } from "../../../../hooks/useEditAgreement";
import Upload from "./Upload";

export default function UploadLocalAgreement({ page }: { page: string }) {
  const create = useCreateAgreement();
  const edit = useEditAgreement();
  const { changeValue } = page === "create" ? create : edit;

  return (
    <Container>
      <Flex sx={{ alignItems: "center", position: "relative" }}>
        <Text sx={{ variant: "forms.label", minWidth: "200px" }}>Upload agreement</Text>
        <Button
          onClick={() => {
            changeValue("agreementMethod", "");
          }}
          sx={{ variant: "buttons.back", ...uploadBtn }}
        >
          <Box sx={{ width: "14px" }}>
            <Icon style={{ display: "block" }} src={iconsObj.arrowLeftPink} />
          </Box>
          <Text sx={{ display: "block" }}>Choose another method</Text>
        </Button>
      </Flex>
      <Upload page={page} />
    </Container>
  );
}
