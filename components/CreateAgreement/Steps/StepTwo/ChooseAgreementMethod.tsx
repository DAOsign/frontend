import React, { useEffect, useState } from "react";
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
  initialStateProposal,
} from "../../../../modules/createAgreementProvider";
import { useEditAgreement } from "../../../../hooks/useEditAgreement";
import { isEmpty } from "../../../../utils/common";
import { withFade } from "../..";
import UploadLocalAgreement from "./UploadLocal";
import { METHOD_ENTER, METHOD_UPLOAD, METHOD_IMPORT_SHAPSHOT } from "../../../../types";
import FieldErrorMessage from "../../../Form/FieldErrorMessage";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import ModalImportSnapshot from "../../../ModalImportSnapshot";
import ModalAttention from "../../../ModalAttention";

export default function ChooseAgreementMethod({
  setMethod,
  method,
  page,
}: {
  setMethod: React.Dispatch<React.SetStateAction<string>>;
  method: string;
  page: string;
}) {
  const { width } = useWindowDimensions();
  const create = useCreateAgreement();
  const edit = useEditAgreement();
  const { values, changeValue } = page === "create" ? create : edit;
  const [isOpen, setIsOpen] = useState(false);
  const [modalAttention, setModalAttention] = useState({ isOpen: false, method: "" });

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

  useEffect(() => {
    if (
      values.agreementMethod === METHOD_IMPORT_SHAPSHOT &&
      values.textEditorValue &&
      !!values.agreementId
    ) {
      setMethod(METHOD_IMPORT_SHAPSHOT);
    }
  }, []);

  const chengeMethod = (name: keyof CreationState, method: string, beforeModal: boolean) => {
    const validateRes = validateTitle();
    if (beforeModal) {
      setModalAttention({ isOpen: false, method });
      changeValue("filePath", "");
      changeValue("textEditorValue", "");
      changeValue("proposal", initialStateProposal);
      changeValue("file", undefined);
      changeValue("errors", { ...values.errors, agreementFile: null });
    }
    if (
      values.agreementMethod !== "" &&
      values.agreementMethod !== method &&
      !beforeModal &&
      validateRes
    ) {
      setModalAttention({ isOpen: true, method });
      return;
    }
    if (validateRes) {
      changeValue("agreementMethod", modalAttention.method);
      if (method === METHOD_IMPORT_SHAPSHOT && !values.textEditorValue) {
        setIsOpen(true);
        changeValue(name, method);
        return;
      }
      changeValue(name, method);
      setMethod(method);
    }
  };

  const getBorderCard = (method: string) => {
    return {
      border:
        values.agreementMethod === method ? "2px solid #CA5CF2!important" : "2px solid #EDEDF3",
      "&:hover": {
        border:
          values.agreementMethod === method ? "2px solid #CA5CF2!important" : "2px solid #EDEDF3",
      },
    };
  };
  const renderMethods = () => {
    switch (method) {
      case METHOD_IMPORT_SHAPSHOT:
        return withFade(
          <>
            <TextEditor handleChooseAnotherMethod={() => setMethod("")} page={page} />
            <FieldErrorMessage error={values?.errors?.agreementFile} />
          </>,
          0
        );
      case METHOD_ENTER:
        return withFade(
          <>
            <TextEditor handleChooseAnotherMethod={() => setMethod("")} page={page} />
            <FieldErrorMessage error={values?.errors?.agreementFile} />
          </>,
          1
        );
      case METHOD_UPLOAD: {
        return withFade(
          <>
            <UploadLocalAgreement handleChooseAnotherMethod={() => setMethod("")} page={page} />
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
                onClick={() => chengeMethod("agreementMethod", METHOD_UPLOAD, false)}
                sx={{
                  ...leftCard,
                  ...getBorderCard(METHOD_UPLOAD),
                }}
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
                onClick={() => chengeMethod("agreementMethod", METHOD_ENTER, false)}
                sx={{ ...centerCard, ...getBorderCard(METHOD_ENTER) }}
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
                sx={{ ...rightCard, ...getBorderCard(METHOD_IMPORT_SHAPSHOT) }}
                onClick={() => chengeMethod("agreementMethod", METHOD_IMPORT_SHAPSHOT, false)}
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
              <ModalImportSnapshot
                onExit={() => setIsOpen(false)}
                setMethod={setMethod}
                isOpen={isOpen}
                page={page}
              />
            )}
            {modalAttention.isOpen && (
              <ModalAttention
                onSubmit={() => chengeMethod("agreementMethod", modalAttention.method, true)}
                onExit={() => setModalAttention({ isOpen: false, method: "" })}
                isOpen={modalAttention.isOpen}
                method={values.agreementMethod}
              />
            )}
          </>,
          3
        );
    }
  };

  return renderMethods();
}
