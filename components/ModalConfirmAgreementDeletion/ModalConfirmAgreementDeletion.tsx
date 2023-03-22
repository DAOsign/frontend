/* eslint-disable no-console */
import React, { useState } from "react";
import { Flex, Text, Button, Box, Spinner } from "theme-ui";
import Icon from "../icon/index";
import iconsObj from "../../assets/icons";
import {
  flexContainer,
  textContainer,
  confirmBtn,
  containerIcon,
  mainText,
  closeIcon,
  cancelBtn,
  spinnerContainer,
  deletingText,
} from "./styles";
import { Portal } from "../Portal/Portal";
import { ModalBase } from "../ModalBase/ModalBase";
import { useMutation } from "urql";
import { deleteAgreementMutation } from "../../modules/graphql/mutations";
import { notifError, notifSucces } from "../../utils/notification";

interface Props {
  agreementId: number;
  isOpen: boolean;
  onSuccess: () => Promise<void>;
  onExit: () => void;
}

export default function ModalConfirmAgreementDeletion({
  agreementId,
  isOpen,
  onSuccess,
  onExit,
}: Props) {
  const [, deleteAgreement] = useMutation(deleteAgreementMutation);
  const [isDeletingAgreement, setIsDeletingAgreement] = useState<boolean>(false);

  const handleDeleteAgreement = async () => {
    if (isDeletingAgreement) return;

    setIsDeletingAgreement(true);

    try {
      const response = await deleteAgreement({ agreementId: Number(agreementId) });
      if (!response?.error) {
        await onSuccess();
        notifSucces("Agreement was deleted");
        onExit();
      } else {
        notifError(response.error?.message || "Failed to delete agreement");
        console.error("[HandleDeleteAgreement]", response.error);
      }
    } catch (error) {
      notifError(error?.message || "Failed to delete agreement");
      console.error("[HandleDeleteAgreement]", error);
    } finally {
      setIsDeletingAgreement(false);
    }
  };

  return (
    <Portal isOpen={isOpen} onClose={onExit}>
      <ModalBase height="466px" width="500px">
        {isDeletingAgreement ? (
          <Flex sx={spinnerContainer}>
            <Spinner size={60} color="#CA5CF2" />
            <Box sx={deletingText}></Box>
            Deleting agreement...
          </Flex>
        ) : (
          <Flex sx={flexContainer}>
            <Box onClick={onExit} sx={closeIcon}>
              <Icon src={iconsObj.xClose} />
            </Box>
            <Box sx={containerIcon}>
              <Icon width={"44px"} height={"44px"} src={iconsObj.frame} />
            </Box>
            <Text sx={mainText}>Warning</Text>
            <Text sx={textContainer}>
              Are you sure you want to delete this agreement? <br /> Agreement deletion is
              irreversible.
            </Text>
            <Button onClick={handleDeleteAgreement} sx={confirmBtn}>
              Confirm
            </Button>
            <Box onClick={onExit} sx={cancelBtn}>
              Cancel
            </Box>
          </Flex>
        )}
      </ModalBase>
    </Portal>
  );
}
