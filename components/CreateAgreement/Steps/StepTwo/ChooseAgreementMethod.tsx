import React, { useEffect, useState } from "react";
import { Container, Text, Box } from "theme-ui";
import Image from "next/image";
import Icon from "../../../icon/index";
import {
  conteinerItems,
  secondaryText,
  itemsContent,
  iconMethod,
  centerCard,
  rightCard,
  leftCard,
  label,
  text,
} from "../../styles";
import iconsObj from "../../../../assets/icons";
import TextEditor from "../../TextEditor/index";
import { useCreateAgreement } from "../../../../hooks/useCreateAgreement";
import {
  CreateAgreementFieldErrors,
  initialStateProposal,
  CreationState,
} from "../../../../modules/createAgreementProvider";
import { useEditAgreement } from "../../../../hooks/useEditAgreement";
import { isEmpty } from "../../../../utils/common";
import { withFade } from "../..";
import UploadLocalAgreement from "./UploadLocal";
import {
  METHOD_IMPORT_SHAPSHOT,
  METHOD_UPLOAD,
  UNITED_STATES,
  METHOD_ENTER,
} from "../../../../types";
import FieldErrorMessage from "../../../Form/FieldErrorMessage";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import ModalAttention from "../../../ModalAttention";

export default function ChooseAgreementMethod({
  setIsOpenModalImport,
  isOpenModalImport,
  setMethod,
  method,
  page,
}: {
  setIsOpenModalImport: React.Dispatch<React.SetStateAction<boolean>>;
  setMethod: React.Dispatch<React.SetStateAction<string>>;
  isOpenModalImport: boolean;
  method: string;
  page: string;
}) {
  const { width } = useWindowDimensions();
  const create = useCreateAgreement();
  const edit = useEditAgreement();
  const { values, changeValue } = page === "create" ? create : edit;
  const [modalAttention, setModalAttention] = useState({ isOpen: false, method: "" });
  const {
    legalJurisdictionCountry,
    legalJurisdictionState,
    snapshotProposalUrl,
    additionalDetails,
    legalJurisdiction,
    enableTransform,
    contractType,
    statementWork,
  } = values.proposal;

  const validateTitle = () => {
    const errors: CreateAgreementFieldErrors = {};
    if (!values.title.trim()) {
      errors.title = "Title can not be blank";
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
      !!values.agreementId &&
      page === "create"
    ) {
      setMethod(METHOD_IMPORT_SHAPSHOT);
    }
  }, [values]);

  const propousalIsEmpty = () => {
    const contractTypeIsEmpty = (contractType && !statementWork) || !contractType;
    const urlIsEmpty =
      (!snapshotProposalUrl && !enableTransform) || (!snapshotProposalUrl && enableTransform);
    const countriesIsEmpty =
      !legalJurisdiction ||
      (legalJurisdiction && !legalJurisdictionCountry) ||
      (legalJurisdiction && legalJurisdictionCountry === UNITED_STATES && !legalJurisdictionState);
    const detailsIsEmpty = !additionalDetails;
    return page === "create"
      ? urlIsEmpty && contractTypeIsEmpty && countriesIsEmpty && detailsIsEmpty
      : urlIsEmpty &&
          contractTypeIsEmpty &&
          countriesIsEmpty &&
          detailsIsEmpty &&
          !values.textEditorValue;
  };

  const validateMethod = () => {
    switch (values.agreementMethod) {
      case METHOD_IMPORT_SHAPSHOT:
        return propousalIsEmpty();
      case METHOD_ENTER:
        return !values.textEditorValue;
      case METHOD_UPLOAD:
        return !values.file && !values.agreementHash && !values.filePath;
      default:
        return false;
    }
  };

  const chengeMethod = (name: keyof CreationState, method: string, beforeModal: boolean) => {
    const isSameMethod = values.agreementMethod !== method;
    const validateRes = validateTitle();
    if (beforeModal) {
      changeValue("textEditorValue", "");
      changeValue("proposal", initialStateProposal);
      changeValue("filePath", "");
      changeValue("errors", { ...values.errors, agreementFile: null });
      changeValue("file", undefined);
      setModalAttention({ isOpen: false, method });
    }
    if (!!values.agreementMethod && isSameMethod && !beforeModal && validateRes) {
      const isEmptyMethods = validateMethod();
      if (!isEmptyMethods) {
        setModalAttention({ isOpen: true, method });
        return;
      }
    }
    if (validateRes) {
      if (method === METHOD_IMPORT_SHAPSHOT && (!values.textEditorValue || beforeModal)) {
        setIsOpenModalImport(true);
        changeValue(name, method);
        return;
      }
      changeValue("agreementMethod", modalAttention.method);
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
            <TextEditor
              handleChooseAnotherMethod={() => setMethod("")}
              setIsOpenModalImport={setIsOpenModalImport}
              page={page}
            />
            <FieldErrorMessage error={values?.errors?.agreementFile} />
          </>,
          0
        );
      case METHOD_ENTER:
        return withFade(
          <>
            <TextEditor
              setIsOpenModalImport={setIsOpenModalImport}
              handleChooseAnotherMethod={() => setMethod("")}
              page={page}
            />
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
