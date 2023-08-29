/* eslint-disable no-console */
import React, { useState } from "react";
import { useRouter } from "next/router";
import Icon from "../icon/index";
import { Box, Button, ButtonProps, Container, Flex, Spinner, Text } from "theme-ui";
import { useCreateAgreement } from "../../hooks/useCreateAgreement";
import { useEditAgreement } from "../../hooks/useEditAgreement";
import iconsObj from "../../assets/icons";
import {
  configurationsTitle,
  secondaryTitleStep,
  containerButtons,
  primaryTitleItem,
  stepsContainer,
  leftSideItem,
  iconNavMenu,
  stepNumber,
  stepStyle,
  number,
  delBtn,
  box,
  fW,
} from "./styles";
import { useMutation } from "urql";
import { saveAgreementMutation } from "../../modules/graphql/mutations";
import {
  LOCATION_CLOUD,
  LOCATION_PUBLIC_IPFS,
  METHOD_ENTER,
  METHOD_UPLOAD,
  METHOD_IMPORT_SHAPSHOT,
} from "../../types";
import {
  clearDraft,
  clearEdit,
  CreateAgreementFieldErrors,
  CreationState,
} from "../../modules/createAgreementProvider";
import { isEmpty, sleep } from "../../utils/common";
import { useWeb3 } from "../../hooks/useWeb3";
import ModalAuthorNotAdded from "../ModalAuthorNotAdded/ModalAuthorNotAdded";
import { calculateIpfsHash } from "../../utils/ipfs";
import { uploadFile, uploadToIpfs } from "../../modules/rest";
import { notifError } from "../../utils/notification";
import ModalConfirmAgreementDeletion from "../ModalConfirmAgreementDeletion/ModalConfirmAgreementDeletion";
import { getToken } from "../../utils/token";

const FILE_UPLOAD_ERROR_DEFAULT_MESSAGE = "Failed to upload file";

function formatFileUploadErrorMessage(message: string): string {
  if (message.includes("maxFileSize")) {
    return "File should be less than 20 MB";
  }
  return FILE_UPLOAD_ERROR_DEFAULT_MESSAGE;
}

export default function NavPanel({ setLoading, page }: { setLoading: any; page: string }) {
  const create = useCreateAgreement();
  const edit = useEditAgreement();
  const { values, changeValue } = page === "create" ? create : edit;
  const { push, query } = useRouter();
  const { account } = useWeb3();
  const step = query?.step ? Number(query.step) : 1;

  const [isLoadingNextStep, setIsLoadingNextStep] = useState<boolean>(false);
  const [isAuthorNotAddedPopupVisible, setIsAuthorNotAddedPopupVisible] = useState<boolean>(false);

  const [isConfirmAgreementDeletionPopupVisible, setIsConfirmAgreementDeletionPopupVisible] =
    useState<boolean>(false);

  const validateFields = (values: CreationState, isSavingDraft: boolean = false): boolean => {
    const errors: CreateAgreementFieldErrors = {};
    let extraError: string | null = null;

    if (isSavingDraft) {
      if (!values.title) {
        errors.title = "Title can not be blank";
      }
      if (values.title.trim()?.length > 120) {
        errors.title = "Title should be 120 characters max";
      }
    } else {
      switch (step) {
        case 1:
          if (!values.title.trim()) {
            errors.title = "Title can not be blank";
          }
          if (values.title.trim()?.length > 120) {
            errors.title = "Title should be 120 characters max";
          }
          if (!values.agreementMethod) {
            errors.agreementFile = "Agreement content is a required selection";
          } else if (values.agreementMethod === METHOD_ENTER && !values.textEditorValue.trim()) {
            errors.agreementFile = "Agreement content is a required selection";
          } else if (
            values.agreementMethod === METHOD_IMPORT_SHAPSHOT &&
            !values.textEditorValue.trim()
          ) {
            errors.agreementFile = "Agreement content is a required selection";
          } else if (
            values.agreementMethod === METHOD_UPLOAD &&
            !values.agreementHash &&
            !values.filePath
          ) {
            errors.agreementFile = "Agreement file upload is required";
          }
          break;
        case 2:
          if (!values.signers.length) {
            errors.signers = "At least one signer is required";
          }
          if (
            !values.signers?.some(
              signer => signer.value?.toLocaleLowerCase() === account?.toLocaleLowerCase()
            ) &&
            !values.observers?.some(
              observer => observer.value?.toLocaleLowerCase() === account?.toLocaleLowerCase()
            )
          ) {
            extraError = "Should add yourself as signer or observer";
            setIsAuthorNotAddedPopupVisible(true);
          }
          break;
        case 3:
          if (!values.agreementPrivacy) {
            errors.agreementPrivacy = "Agreement Privacy is a required selection";
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

    const token = getToken();

    if (values.agreementLocation === LOCATION_PUBLIC_IPFS) {
      const uploadResult = await uploadToIpfs(token!, file);
      if (!uploadResult.IpfsHash) {
        return { error: uploadResult };
      }
      return { agreementHash: calculatedIpfsHash };
    }

    if (values.agreementLocation === LOCATION_CLOUD) {
      try {
        const res = await uploadFile(token!, file);
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

  const handleCreateAgreement = async (filePath?: string, agreementHash?: string) => {
    await saveAgreement({
      agreementId: query?.id ? String(query.id) : values.agreementId || undefined,
      title: values.title,
      agreementLocation: values.agreementLocation || undefined,
      snapshotProposalUrl: values.proposal?.snapshotProposalUrl,
      content:
        (values.agreementMethod === METHOD_ENTER ||
          values.agreementMethod ||
          METHOD_IMPORT_SHAPSHOT) &&
        values.textEditorValue
          ? values.textEditorValue
          : "",
      agreementPrivacy: values.agreementPrivacy || undefined,
      signers: values.signers.map(s => s.value),
      observers: values.observers.map(o => o.value),
      agreementHash: agreementHash || values.agreementHash,
      agreementFilePath: filePath || values.filePath,
      isReadyToSign: false,
    }).then(res => {
      if (res.error) {
        notifError(res.error.message);
      }
      if (res.data?.saveAgreement?.title) {
        clearDraft();
        clearEdit();
        push(`/agreement/${res.data.saveAgreement.agreementId}`);
        return;
      }
    });
  };

  const handleSaveDraft = async () => {
    const areFieldsValid = validateFields(values, true);
    if (areFieldsValid) {
      const uploadFileData: any = await preuploadFile();
      await handleCreateAgreement(uploadFileData?.filePath, uploadFileData?.agreementHash);
    }
  };

  const handleNextStep = () => {
    page === "create"
      ? push({ query: { step: step + 1 } }, undefined, { shallow: true })
      : push(`/edit/${query.id}?step=${step + 1}`);
  };

  const handlePrevStep = () => {
    if (step === 1 && (!values.filePath || !values.agreementHash)) {
      changeValue("file", undefined);
    }
    page === "create"
      ? push({ query: { step: step > 1 ? step - 1 : 1 } }, undefined, { shallow: true })
      : push(`/edit/${query.id}?step=${step - 1}`);
  };

  const handleCancel = () => {
    push("/");
  };

  const changeStep = (step: number) => {
    const areFieldsValid = validateFields(values, true);
    if ((step === 3 || !areFieldsValid) && page !== "edit") {
      return;
    }
    page === "create"
      ? push({ query: { step } }, undefined, { shallow: true })
      : push(`/edit/${query.id}?step=${step}`);
  };

  const preuploadFile = async () => {
    if (step === 3) return;
    try {
      let uploadedFileData: { filePath?: string; agreementHash?: string; error?: any } = {};
      if (
        values.agreementMethod === METHOD_UPLOAD &&
        values.file &&
        (!values.filePath || !values.agreementHash)
      ) {
        uploadedFileData = await uploadNewFile(values.file);
        if (!uploadedFileData || uploadedFileData.error) {
          console.error(uploadedFileData.error || new Error(FILE_UPLOAD_ERROR_DEFAULT_MESSAGE));
          notifError(
            formatFileUploadErrorMessage(
              uploadedFileData.error?.response?.data?.error ||
                uploadedFileData.error.message ||
                FILE_UPLOAD_ERROR_DEFAULT_MESSAGE
            )
          );
          return;
        }
      } else if (values.agreementMethod === METHOD_ENTER && values.textEditorValue) {
        const encoded = Buffer.from(values.textEditorValue);
        const file = new File([encoded], "agreement.txt", {
          type: "text/plain",
        });
        uploadedFileData = await uploadNewFile(file);
        if (!uploadedFileData || uploadedFileData.error) {
          console.error(uploadedFileData.error || new Error(FILE_UPLOAD_ERROR_DEFAULT_MESSAGE));
          notifError(
            formatFileUploadErrorMessage(
              uploadedFileData.error?.response?.data?.error ||
                uploadedFileData.error.message ||
                FILE_UPLOAD_ERROR_DEFAULT_MESSAGE
            )
          );
          return;
        }
      }
      return uploadedFileData;
    } catch (error) {
      console.error(error);
      notifError(
        formatFileUploadErrorMessage(
          error?.response?.data?.error || error?.message || FILE_UPLOAD_ERROR_DEFAULT_MESSAGE
        )
      );
    }
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
          if (
            step === 1 &&
            values.agreementMethod === METHOD_UPLOAD &&
            values.file &&
            (!values.filePath || !values.agreementHash)
          ) {
            uploadedFileData = await uploadNewFile(values.file);
            if (!uploadedFileData || uploadedFileData.error) {
              console.error(uploadedFileData.error || new Error(FILE_UPLOAD_ERROR_DEFAULT_MESSAGE));
              notifError(
                formatFileUploadErrorMessage(
                  uploadedFileData.error?.response?.data?.error ||
                    uploadedFileData.error.message ||
                    FILE_UPLOAD_ERROR_DEFAULT_MESSAGE
                )
              );
              return;
            }
          } else if (
            step === 1 &&
            (values.agreementMethod === METHOD_ENTER ||
              values.agreementMethod === METHOD_IMPORT_SHAPSHOT) &&
            values.textEditorValue
          ) {
            const encoded = Buffer.from(values.textEditorValue);
            const file = new File([encoded], "agreement.txt", {
              type: "text/plain",
            });
            uploadedFileData = await uploadNewFile(file);
            if (!uploadedFileData || uploadedFileData.error) {
              console.error(uploadedFileData.error || new Error(FILE_UPLOAD_ERROR_DEFAULT_MESSAGE));
              notifError(
                formatFileUploadErrorMessage(
                  uploadedFileData.error?.response?.data?.error ||
                    uploadedFileData.error.message ||
                    FILE_UPLOAD_ERROR_DEFAULT_MESSAGE
                )
              );
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
          notifError(
            formatFileUploadErrorMessage(
              error?.response?.data?.error || error?.message || FILE_UPLOAD_ERROR_DEFAULT_MESSAGE
            )
          );
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
          page === "create" ? (
            "Create Agreement"
          ) : (
            "Update Agreement"
          )
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

  const handleDeleteAgreement = async () => {
    setIsConfirmAgreementDeletionPopupVisible(true);
  };

  const onAgreementDeletionSuccess = async () => {
    // For less screen flickering
    await sleep(500);
    push("/agreements", "/agreements", { shallow: false });
  };

  const optionsIsVisible =
    step === 1 && values.agreementMethod === METHOD_IMPORT_SHAPSHOT && !!values.textEditorValue;

  return (
    <>
      <Container sx={stepsContainer}>
        <Flex
          onClick={() => {
            return step > 1 ? changeStep(1) : null;
          }}
          sx={{
            ...stepStyle,
            mt: 0,
            cursor: step > 1 ? "pointer" : "initial",
          }}
        >
          <Box
            sx={{ ...stepNumber, "&:hover": { backgroundColor: step > 1 ? "#AE4FD0" : "inherit" } }}
          >
            {(step > 1 && page === "create") || page === "edit" ? (
              <Box sx={iconNavMenu}>
                <Icon src={iconsObj.done} />
              </Box>
            ) : (
              <Text sx={number}>1</Text>
            )}
          </Box>

          <Container sx={leftSideItem}>
            <Text sx={primaryTitleItem}>Content</Text>
            <Text sx={secondaryTitleStep}>Enter agreement content</Text>
          </Container>
        </Flex>
        <Container
          sx={{
            ...box,
            "@media screen and (max-width: 1119px)": {
              borderTop: "1px dashed #CA5CF2",
            },
          }}
        ></Container>
        <Flex
          onClick={() => (step > 2 ? changeStep(2) : null)}
          sx={{ ...stepStyle, cursor: step > 2 ? "pointer" : "initial" }}
        >
          <Box sx={{ ...stepNumber, backgroundColor: step > 1 ? "#CA5CF2" : "#EDEDF3" }}>
            {(step > 2 && page === "create") || page === "edit" ? (
              <Box onClick={() => changeStep(2)} sx={iconNavMenu}>
                <Icon src={iconsObj.done} />
              </Box>
            ) : (
              <Text sx={number}>2</Text>
            )}
          </Box>
          <Container sx={leftSideItem}>
            <Text sx={primaryTitleItem}>Signers</Text>
            <Text sx={secondaryTitleStep}>Add signers and observers</Text>
          </Container>
        </Flex>
        <Container
          sx={{
            ...box,
            "@media screen and (max-width: 1119px)": {
              borderTop: step > 2 ? "1px dashed #CA5CF2" : "2px dashed #EDEDF3",
            },
          }}
        ></Container>
        <Flex
          onClick={() => (step > 3 || page === "edit" ? changeStep(3) : null)}
          sx={{ ...stepStyle, cursor: step > 3 || page === "edit" ? "pointer" : "initial" }}
        >
          <Box sx={{ ...stepNumber, backgroundColor: step > 2 ? "#CA5CF2" : "#EDEDF3" }}>
            {(step > 3 && page === "create") || page === "edit" ? (
              <Box sx={iconNavMenu}>
                <Icon src={iconsObj.done} />
              </Box>
            ) : (
              <Text sx={number}>3</Text>
            )}
          </Box>
          <Container
            sx={{
              ...leftSideItem,
              "@media screen and (max-width: 480px)": {
                maxWidth: "120px",
                mt: "4px",
              },
            }}
          >
            <Text sx={configurationsTitle}>Configurations</Text>
            <Text sx={secondaryTitleStep}>Set agreement options</Text>
          </Container>
        </Flex>
      </Container>
      <Container sx={containerButtons}>
        <BackwardButton />
        {step < 3 && (
          <Button
            variant="secondary"
            sx={{ ...fW, mt: "20px" }}
            type="button"
            onClick={handleSaveDraft}
            disabled={isLoadingNextStep || savingAgreement}
          >
            Save Draft
          </Button>
        )}
        <ForwardButton />
        {page === "edit" ? (
          <Button sx={delBtn} onClick={handleDeleteAgreement}>
            Delete Agreement
          </Button>
        ) : null}
      </Container>
      <ModalAuthorNotAdded
        isOpen={isAuthorNotAddedPopupVisible}
        onExit={() => setIsAuthorNotAddedPopupVisible(false)}
      />
      {page === "edit" && query.id ? (
        <ModalConfirmAgreementDeletion
          agreementId={String(query.id)}
          isOpen={isConfirmAgreementDeletionPopupVisible}
          onSuccess={onAgreementDeletionSuccess}
          onExit={() => setIsConfirmAgreementDeletionPopupVisible(false)}
        />
      ) : null}
    </>
  );
}
