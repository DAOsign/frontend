import React, { useState } from "react";
import { useRouter } from "next/router";
import Icon from "../icon/index";
import { Container, Flex, Text, Button, Box, ButtonProps } from "theme-ui";
import { useCreateAgreement } from "../../hooks/useCreateAgreement";
import iconsObj from "../../assets/icons";
import {
  secondaryTitleStep,
  primaryTitleItem,
  containerButtons,
  stepsContainer,
  leftSideItem,
  stepNumber,
  stepStyle,
  box,
  fW,
} from "./styles";
import { useMutation } from "urql";
import { addAgreementMutation } from "../../modules/graphql/mutations";
import { METHOD_ENTER, METHOD_UPLOAD } from "../../types";
import { clearDraft, CreateAgreementFieldErrors } from "../../modules/createAgreementProvider";
import { isEmpty } from "../../utils/common";
import { useWeb3 } from "../../hooks/useWeb3";
import ModalAuthorNotAdded from "../ModalAuthorNotAdded/ModalAuthorNotAdded";

export default function NavPanel() {
  const { values, changeValue } = useCreateAgreement();
  const { push, query } = useRouter();
  const { account } = useWeb3();

  const step = query?.step ? Number(query.step) : 1;

  const [isAuthorNotAddedPopupVisible, setIsAuthorNotAddedPopupVisible] = useState<boolean>(false);

  const validateFields = (isSavingDraft: boolean = false): boolean => {
    const errors: CreateAgreementFieldErrors = {};
    let extraError: string | null = null;

    if (isSavingDraft) {
      if (!values.title) {
        errors.title = "Title can not be blank";
      }
      if (!values.agreementPrivacy) {
        errors.agreementPrivacy = "Agreement Privacy is a required selection";
      }
    } else {
      switch (step) {
        case 1:
          if (!values.title) {
            errors.title = "Title can not be blank";
          }
          if (!values.agreementPrivacy) {
            errors.agreementPrivacy = "Agreement Privacy is a required selection";
          }
          break;
        case 2:
          if (!values.agreementMethod) {
            errors.agreementFile = "Agreement Description is a required selection";
          } else if (values.agreementMethod === METHOD_ENTER && !values.textEditorValue) {
            errors.agreementFile = "Agreement entry is required";
          } else if (values.agreementMethod === METHOD_UPLOAD && !values.agreementHash) {
            errors.agreementFile = "Agreement file upload is required";
          } else if (!values.textEditorValue && !values.agreementHash) {
            errors.agreementFile = "Agreement Description is a required selection";
          }
          break;
        case 3:
          if (!values.signers.length) {
            errors.signers = "At least one signer is required";
          }
          if (!values.observers.length) {
            errors.observers = "At least one observer is required";
          }
          if (
            !values.signers?.some(signer => signer.value === account) &&
            !values.observers?.some(observer => observer.value === account)
          ) {
            extraError = "Should add yourself as signer or observer";
            setIsAuthorNotAddedPopupVisible(true);
          }
          break;
      }
    }
    changeValue("errors", errors);

    return isEmpty(errors) && !extraError;
  };

  const [{ fetching: addingAgreement }, addAgreement] = useMutation(addAgreementMutation);

  const handleCreateAgreement = async (isReadyToSign: boolean = true) => {
    await addAgreement({
      title: values.title,
      agreementLocation: values.agreementLocation || null,
      content:
        values.agreementMethod === METHOD_ENTER && values.textEditorValue
          ? JSON.stringify(values.textEditorValue)
          : "",
      agreementPrivacy: values.agreementPrivacy || null,
      signers: values.signers.map(s => s.value),
      observers: values.observers.map(o => o.value),
      agreementHash: values.agreementHash,
      agreementFilePath: values.filePath,
      isReadyToSign,
    }).then(res => {
      if (res.error) {
        //console.error(res.error);
      }
      if (res.data?.addAgreement?.title) {
        clearDraft();
        push("/agreements");
      }
    });
  };

  const handleSaveDraft = async () => {
    const areFieldsValid = validateFields(true);
    if (areFieldsValid) {
      return handleCreateAgreement(false);
    }
  };

  const handleNextStep = () => {
    push({ query: { step: step + 1 } }, undefined, { shallow: true });
  };
  const handlePrevStep = () => {
    push({ query: { step: step > 1 ? step - 1 : 1 } }, undefined, { shallow: true });
  };

  const handleCancel = () => {
    push("/");
  };

  const ForwardButton = () => {
    const isFinishButton = step === 3;
    const props: ButtonProps = {
      variant: "primary",
      sx: { ...fW, mt: "20px" },
      type: "button",
      onClick: () => {
        const areFieldsValid = validateFields();
        if (areFieldsValid) {
          if (isFinishButton) {
            handleCreateAgreement();
          } else {
            handleNextStep();
          }
        }
      },
      disabled: isFinishButton ? addingAgreement : false,
    };
    return <Button {...props}>{isFinishButton ? "Create Agreement" : "Next Step"}</Button>;
  };

  const BackwardButton = () => {
    const isCancelButton = step <= 1;
    const props: ButtonProps = {
      onClick: isCancelButton ? handleCancel : handlePrevStep,
      sx: { ...fW, mt: "60px" },
      variant: "secondary",
      type: "button",
    };
    return <Button {...props}>{isCancelButton ? "Cancel" : "Back"}</Button>;
  };

  return (
    <>
      <Container sx={stepsContainer}>
        <Flex sx={{ ...stepStyle, mt: 0 }}>
          <Box sx={stepNumber}>
            {step > 1 ? (
              <Box sx={{ width: "24px", height: "24px", m: "0 auto" }}>
                <Icon src={iconsObj.done} />
              </Box>
            ) : (
              <Text sx={{ variant: "text.normalTextBold", lineHeight: "0", color: "#fff" }}>1</Text>
            )}
          </Box>

          <Container sx={leftSideItem}>
            <Text sx={primaryTitleItem}>Privacy</Text>
            <Text sx={secondaryTitleStep}>Enter title and privacy ot the agreement</Text>
          </Container>
        </Flex>
        <Container sx={box}></Container>
        <Flex sx={stepStyle}>
          <Box sx={{ ...stepNumber, backgroundColor: step > 1 ? "#CA5CF2" : "#EDEDF3" }}>
            {step > 2 ? (
              <Box sx={{ width: "20px", height: "20px", m: "0 auto" }}>
                <Icon src={iconsObj.done} />
              </Box>
            ) : (
              <Text sx={{ variant: "text.normalTextBold", lineHeight: "0", color: "#fff" }}>2</Text>
            )}
          </Box>
          <Container sx={leftSideItem}>
            <Text sx={primaryTitleItem}>Content</Text>
            <Text sx={secondaryTitleStep}>Enter agreement content</Text>
          </Container>
        </Flex>
        <Container sx={box}></Container>
        <Flex sx={stepStyle}>
          <Box sx={{ ...stepNumber, backgroundColor: step > 2 ? "#CA5CF2" : "#EDEDF3" }}>
            <Text sx={{ variant: "text.normalTextBold", lineHeight: "0", color: "#fff" }}>3</Text>
          </Box>
          <Container sx={leftSideItem}>
            <Text sx={primaryTitleItem}>Signers</Text>
            <Text sx={secondaryTitleStep}>Add signers and observers</Text>
          </Container>
        </Flex>
      </Container>
      <Container sx={containerButtons}>
        <BackwardButton />
        <Button
          variant="secondary"
          sx={{ ...fW, mt: "20px" }}
          type="button"
          onClick={handleSaveDraft}
          disabled={addingAgreement}
        >
          Save Draft
        </Button>
        <ForwardButton />
      </Container>
      <ModalAuthorNotAdded
        isOpen={isAuthorNotAddedPopupVisible}
        onExit={() => setIsAuthorNotAddedPopupVisible(false)}
      />
    </>
  );
}
