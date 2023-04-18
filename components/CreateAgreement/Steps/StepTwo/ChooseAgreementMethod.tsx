import React, { useState } from "react";
import { Container, Text, Box } from "theme-ui";
import Image from "next/image";
import Icon from "../../../icon/index";
import {
  card,
  primaryTitleItem,
  rightCard,
  leftCard,
  label,
  iconMethod,
  centerCard,
  secondaryText,
  itemsContent,
  text,
  conteinerItems,
} from "../../styles";
import iconsObj from "../../../../assets/icons";
import TextEditor from "../../TextEditor/index";
import { useCreateAgreement } from "../../../../hooks/useCreateAgreement";
import {
  CreateAgreementFieldErrors,
  CreationState,
} from "../../../../modules/createAgreementProvider";
import { useEditAgreement } from "../../../../hooks/useEditAgreement";
import { isEmpty } from "../../../../utils/common";
import { withFade } from "../..";
import UploadLocalAgreement from "./UploadLocal";
import { METHOD_ENTER, METHOD_UPLOAD, METHOD_IMPORT_SHAPSHOT } from "../../../../types";
import FieldErrorMessage from "../../../Form/FieldErrorMessage";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import ModalImportSnapshot from "../../../ModalImportSnapshot";

export default function ChooseAgreementMethod({ page }: { page: string }) {
  const { width } = useWindowDimensions();
  const create = useCreateAgreement();
  const edit = useEditAgreement();
  const { values, changeValue } = page === "create" ? create : edit;
  const [isOpen, setIsOpen] = useState(false);

  const validateTitle = () => {
    const errors: CreateAgreementFieldErrors = {};
    if (!values.title.trim()) {
      errors.title = "Tittle can not be blank (spelling mistake)";
    }
    if (values.title.trim()?.length > 120) {
      errors.title = "Title should be 120 characters max";
    }
    changeValue("errors", errors);
    return isEmpty(errors);
  };

  const chengeMethod = (name: keyof CreationState, method: string) => {
    const validateRes = validateTitle();
    if (validateRes) {
      changeValue("errors", { ...values.errors, agreementFile: null });
      if (method === METHOD_IMPORT_SHAPSHOT) {
        setIsOpen(true);
        return;
      }
      changeValue(name, method);
    }
  };

  const renderMethods = () => {
    switch (values.agreementMethod) {
      case METHOD_IMPORT_SHAPSHOT:
        return withFade(
          <>
            <TextEditor page={page} />
            <FieldErrorMessage error={values?.errors?.agreementFile} />
          </>,
          1
        );
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
            <Text sx={label}>Agreement content *</Text>
            <Container sx={conteinerItems}>
              <Container
                onClick={() => chengeMethod("agreementMethod", METHOD_UPLOAD)}
                sx={leftCard}
              >
                <Box sx={itemsContent}>
                  <Box className="iconMethod" sx={iconMethod}>
                    <Icon width="50px" height="50px" src={iconsObj.uploadFileIcon} />
                  </Box>
                  <Box>
                    <Text className="leftTitle">Upload Agreement</Text>
                    <Text sx={secondaryText}>Upload PDF file</Text>
                  </Box>
                </Box>
              </Container>
              <Container
                onClick={() => chengeMethod("agreementMethod", METHOD_ENTER)}
                sx={centerCard}
              >
                <Box sx={itemsContent}>
                  <Box className="iconMethod" sx={iconMethod}>
                    <Icon width="50px" height="50px" src={iconsObj.enterAgreementIcon} />
                  </Box>
                  <Box>
                    <Text className="centerTitle">Enter Agreement</Text>
                    <Text sx={secondaryText}>
                      {!!width && width > 480
                        ? "Enter Text or Markdown content for the Agreement"
                        : "Accessed only by Signers or Observes"}
                    </Text>
                  </Box>
                </Box>
              </Container>
              <Container
                sx={rightCard}
                onClick={() => chengeMethod("agreementMethod", METHOD_IMPORT_SHAPSHOT)}
              >
                <Box sx={itemsContent}>
                  <Box className="iconMethod" sx={iconMethod}>
                    <Image width="50px" height="50px" alt="img" src="/importSnapshotIcon.png" />
                  </Box>
                  <Box sx={text}>
                    <Text className="rightTitle">Import From Snapshot</Text>
                    <Text sx={secondaryText}>
                      Import Snapshot proposal using the advantages of AI
                    </Text>
                  </Box>
                </Box>
              </Container>
            </Container>
            <FieldErrorMessage sx={{ mb: "-35px" }} error={values?.errors?.agreementFile} />
            {isOpen && (
              <ModalImportSnapshot page={page} onExit={() => setIsOpen(false)} isOpen={isOpen} />
            )}
          </>,
          3
        );
    }
  };

  return renderMethods();
}
