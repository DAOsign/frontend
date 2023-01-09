import React, { useState } from "react";
import { useRouter } from "next/router";
import Icon from "../icon/index";
import { Box, Button, ButtonProps, Container, Flex, Spinner, Text } from "theme-ui";
import { useCreateAgreement } from "../../hooks/useCreateAgreement";
import iconsObj from "../../assets/icons";
import {
  box,
  containerButtons,
  fW,
  leftSideItem,
  primaryTitleItem,
  secondaryTitleStep,
  stepNumber,
  stepsContainer,
  stepStyle,
} from "./styles";
import { useMutation } from "urql";
import { saveAgreementMutation } from "../../modules/graphql/mutations";
import { LOCATION_CLOUD, LOCATION_PUBLIC_IPFS, METHOD_ENTER, METHOD_UPLOAD } from "../../types";
import {
  clearDraft,
  CreateAgreementFieldErrors,
  CreationState,
} from "../../modules/createAgreementProvider";
import { isEmpty } from "../../utils/common";
import { useWeb3 } from "../../hooks/useWeb3";
import ModalAuthorNotAdded from "../ModalAuthorNotAdded/ModalAuthorNotAdded";
import { calculateIpfsHash } from "../../utils/ipfs";
import { uploadFile, uploadToIpfs } from "../../modules/rest";
import { notifError } from "../../utils/notification";

const FILE_UPLOAD_ERROR_DEFAULT_MESSAGE = "Failed to upload file";

export default function NavPanel({ setLoading }: { setLoading: any }) {
  const { values, changeValue } = useCreateAgreement();
  const { push, query } = useRouter();
  const { account } = useWeb3();

  const step = query?.step ? Number(query.step) : 1;

  const [isLoadingNextStep, setIsLoadingNextStep] = useState<boolean>(false);
  const [isAuthorNotAddedPopupVisible, setIsAuthorNotAddedPopupVisible] = useState<boolean>(false);

  const validateFields = (values: CreationState, isSavingDraft: boolean = false): boolean => {
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

  const uploadNewFile = async (
    file: File
  ): Promise<{ filePath?: string; agreementHash?: string; error?: any }> => {
    let calculatedIpfsHash: any;
    try {
      const hash = await calculateIpfsHash(file);
      if (hash) {
        changeValue("agreementHash", hash);
        calculatedIpfsHash = hash;
      }
    } catch (error) {
      return { error };
    }

    if (values.agreementLocation === LOCATION_PUBLIC_IPFS) {
      const uploadResult = await uploadToIpfs(file);
      if (!uploadResult.IpfsHash) {
        return { error: uploadResult };
      }
      return { agreementHash: calculatedIpfsHash };
    }

    if (values.agreementLocation === LOCATION_CLOUD) {
      try {
        const res = await uploadFile(file);
        if (res && "fileLink" in res) {
          changeValue("filePath", res.fileLink);
          return { filePath: res.fileLink, agreementHash: calculatedIpfsHash };
        } else {
          return { error: res };
        }
      } catch (error) {
        return { error };
      }
    }

    return { error: { message: "Invalid agreement location" } };
  };

  const [{ fetching: savingAgreement }, saveAgreement] = useMutation(saveAgreementMutation);

  const handleCreateAgreement = async (isReadyToSign: boolean = true) => {
    await saveAgreement({
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
      if (res.data?.saveAgreement?.title) {
        clearDraft();
        push("/agreements");
      }
    });
  };

  const handleSaveDraft = async () => {
    const areFieldsValid = validateFields(values, true);
    if (areFieldsValid) {
      return handleCreateAgreement(false);
    }
  };

  const handleNextStep = () => {
    push({ query: { step: step + 1 } }, undefined, { shallow: true });
  };
  const handlePrevStep = () => {
    if (step === 1 && (!values.filePath || !values.agreementHash)) {
      changeValue("file", undefined);
    }
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
      onClick: async () => {
        if (isLoadingNextStep) return;

        setIsLoadingNextStep(true);
        setLoading(true);
        try {
          let uploadedFileData: { filePath?: string; agreementHash?: string; error?: any } = {};
          if (step === 2 && values.file && (!values.filePath || !values.agreementHash)) {
            uploadedFileData = await uploadNewFile(values.file);
            if (!uploadedFileData || uploadedFileData.error) {
              console.error(uploadedFileData.error || new Error(FILE_UPLOAD_ERROR_DEFAULT_MESSAGE));
              notifError(uploadedFileData.error.message || FILE_UPLOAD_ERROR_DEFAULT_MESSAGE);
              return;
            }
          }

          const areFieldsValid = validateFields({ ...values, ...uploadedFileData });
          if (areFieldsValid) {
            if (isFinishButton) {
              await handleCreateAgreement();
            } else {
              handleNextStep();
            }
          }
        } catch (error) {
          console.error(error);
          notifError(error?.message || FILE_UPLOAD_ERROR_DEFAULT_MESSAGE);
        } finally {
          setLoading(false);
          setIsLoadingNextStep(false);
        }
      },
      disabled: isLoadingNextStep || savingAgreement,
    };
    return (
      <Button {...props}>
        {isLoadingNextStep ? (
          <Spinner size={12} color="#ffffff" />
        ) : isFinishButton ? (
          "Create Agreement"
        ) : (
          "Next Step"
        )}
      </Button>
    );
  };

  const BackwardButton = () => {
    const isCancelButton = step <= 1;
    const props: ButtonProps = {
      onClick: isCancelButton ? handleCancel : handlePrevStep,
      sx: { ...fW, mt: "60px" },
      variant: "secondary",
      type: "button",
      disabled: isLoadingNextStep || savingAgreement,
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
          disabled={isLoadingNextStep || savingAgreement}
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
