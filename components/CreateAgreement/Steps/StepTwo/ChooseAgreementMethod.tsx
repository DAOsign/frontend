import React from "react";
import { Container, Text, Box } from "theme-ui";
import Icon from "../../../icon/index";
import { card, primaryTitleItem, rightCard, leftCard } from "../../styles";
import iconsObj from "../../../../assets/icons";
import TextEditor from "../../TextEditor/index";
import { useCreateAgreement } from "../../../../hooks/useCreateAgreement";
import { withFade } from "../..";
import UploadLocalAgreement from "./UploadLocal";
import { METHOD_ENTER, METHOD_UPLOAD } from "../../../../types";
import FieldErrorMessage from "../../../Form/FieldErrorMessage";

export default function ChooseAgreementMethod() {
  const { values, changeValue } = useCreateAgreement();

  const renderMethods = () => {
    switch (values.agreementMethod) {
      case METHOD_ENTER:
        return withFade(
          <>
            <TextEditor />
            <FieldErrorMessage error={values?.errors?.agreementFile} />
          </>,
          1
        );
      case METHOD_UPLOAD: {
        return withFade(
          <>
            <UploadLocalAgreement />
            <FieldErrorMessage error={values?.errors?.agreementFile} />
          </>,
          2
        );
      }
      default:
        return withFade(
          <>
            <Container sx={{ height: "242px", position: "relative" }}>
              <Container
                onClick={() => {
                  changeValue("errors", { ...values.errors, agreementFile: null });
                  changeValue("agreementMethod", METHOD_UPLOAD);
                }}
                sx={leftCard}
              >
                <Box sx={{ maxWidth: "150px", m: "0 auto" }}>
                  <div style={{ width: "50px", height: "50px", margin: "0 auto" }}>
                    <Icon width="50px" height="50px" src={iconsObj.uploadCloudPrimary} />
                  </div>
                  <Text sx={{ ...primaryTitleItem, mb: "12px", mt: "24px" }}>Upload Agreement</Text>
                  <Text sx={{ variant: "text.smallTextMedium", maxWidth: "160px", opacity: 1 }}>
                    Upload file of a type PDF, DOCX, TXT
                  </Text>
                </Box>
              </Container>

              <Container
                onClick={() => {
                  changeValue("errors", { ...values.errors, agreementFile: null });
                  changeValue("agreementMethod", METHOD_ENTER);
                }}
                sx={rightCard}
              >
                <Box sx={{ maxWidth: "150px", m: "0 auto" }}>
                  <div style={{ width: "50px", height: "50px", margin: "0 auto" }}>
                    <Icon width="50px" height="50px" src={iconsObj.fileSecondarysvg} />
                  </div>
                  <Text sx={{ ...primaryTitleItem, mb: "12px", mt: "24px" }}>Enter Agreement</Text>
                  <Text sx={{ variant: "text.smallTextMedium", maxWidth: "160px", opacity: 1 }}>
                    Enter Text or Markdown content for the Agreement
                  </Text>
                </Box>
              </Container>
            </Container>
            <FieldErrorMessage error={values?.errors?.agreementFile} />
          </>,
          3
        );
    }
  };

  return renderMethods();
}
