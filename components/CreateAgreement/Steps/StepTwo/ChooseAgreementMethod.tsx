import React, { useState } from "react";
import { Container, Text, Box } from "theme-ui";
import Icon from "../../../icon/index";
import { card, primaryTitleItem, rightCard, leftCard, centerCard } from "../../styles";
import iconsObj from "../../../../assets/icons";
import TextEditor from "../../TextEditor/index";
import { useCreateAgreement } from "../../../../hooks/useCreateAgreement";
import { useEditAgreement } from "../../../../hooks/useEditAgreement";
import { withFade } from "../..";
import UploadLocalAgreement from "./UploadLocal";
import { METHOD_ENTER, METHOD_UPLOAD } from "../../../../types";
import FieldErrorMessage from "../../../Form/FieldErrorMessage";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import ModalImportSnapshot from "../../../ModalImportSnapshot";

export default function ChooseAgreementMethod({ page }: { page: string }) {
  const { width } = useWindowDimensions();
  const create = useCreateAgreement();
  const edit = useEditAgreement();
  const { values, changeValue } = page === "create" ? create : edit;
  const [isOpen, setIsOpen] = useState(false);

  const renderMethods = () => {
    switch (values.agreementMethod) {
      case METHOD_ENTER:
        return withFade(
          <>
            <TextEditor page={page} />
            <FieldErrorMessage error={values?.errors?.agreementFile} />
          </>,
          1
        );
      case METHOD_UPLOAD: {
        return withFade(
          <>
            <UploadLocalAgreement page={page} />
            <FieldErrorMessage
              error={values?.errors?.agreementFile}
              sx={values?.file ? { marginBottom: "-45px !important" } : {}}
            />
          </>,
          2
        );
      }
      default:
        return withFade(
          <>
            <Text sx={{ variant: "forms.label", margin: "24px auto 3px 2px" }}>
              Agreement content
            </Text>
            <Container sx={{ height: "242px", position: "relative", mt: "8px" }}>
              <Container
                onClick={() => {
                  changeValue("errors", { ...values.errors, agreementFile: null });
                  changeValue("agreementMethod", METHOD_UPLOAD);
                }}
                sx={leftCard}
              >
                <Box sx={{ maxWidth: "150px", m: "0 auto" }}>
                  <div style={{ width: "50px", height: "50px", margin: "0 auto" }}>
                    <Icon width="50px" height="50px" src={iconsObj.uploadFileIcon} />
                  </div>
                  <Text sx={{ ...primaryTitleItem, mb: "12px", mt: "24px" }}>Upload Agreement</Text>
                  <Text sx={{ variant: "text.smallTextMedium", maxWidth: "160px", opacity: 1 }}>
                    Upload PDF file
                  </Text>
                </Box>
              </Container>
              <Container
                onClick={() => {
                  changeValue("errors", { ...values.errors, agreementFile: null });
                  changeValue("agreementMethod", METHOD_ENTER);
                }}
                sx={centerCard}
              >
                <Box sx={{ maxWidth: "150px", m: "0 auto" }}>
                  <div style={{ width: "50px", height: "50px", margin: "0 auto" }}>
                    <Icon width="50px" height="50px" src={iconsObj.enterAggrementIcon} />
                  </div>
                  <Text sx={{ ...primaryTitleItem, mt: "24px", mb: "8px" }}>Enter Agreement</Text>
                  <Text sx={{ variant: "text.smallTextMedium", maxWidth: "160px", opacity: 1 }}>
                    {
                      //@ts-ignore
                      width > 480
                        ? "Enter Text or Markdown content for the Agreement"
                        : "Accessed only by Signers or Observes"
                    }
                  </Text>
                </Box>
              </Container>
              <Container
                sx={rightCard}
                onClick={() => {
                  setIsOpen(true);
                  //TODO add change value
                  // changeValue("errors", { ...values.errors, agreementPrivacy: null });
                  // changeValue("agreementPrivacy", "");
                  // setPublic(true);
                }}
              >
                <Box sx={{ maxWidth: "150px", m: "0 auto" }}>
                  <div style={{ width: "50px", height: "50px", margin: "0 auto" }}>
                    <Icon width="50px" height="50px" src={iconsObj.snapshotImportIcon} />
                  </div>
                  <Text sx={{ variant: "text.largeTextBold", mt: "20px" }}>
                    Import From Snapshot
                  </Text>
                  <Text sx={{ variant: "text.overscript", mt: "20px", maxWidth: "160px" }}>
                    Import Snapshot proposal using the advantages of AI
                  </Text>
                </Box>
              </Container>
            </Container>
            <FieldErrorMessage error={values?.errors?.agreementFile} />
            {isOpen && <ModalImportSnapshot onExit={() => setIsOpen(false)} isOpen={isOpen} />}
          </>,
          3
        );
    }
  };

  return renderMethods();
}
