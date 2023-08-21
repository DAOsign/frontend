import { useState } from "react";
import { Box, Button, Flex, Spinner, Text } from "theme-ui";
import iconsObj from "../../assets/icons";
import { notifError } from "../../utils/notification";
import { textContainer } from "../AgreementsList/styles";
import Icon from "../icon";
import { ModalBase } from "../ModalBase/ModalBase";
import {
  flexContainer,
  closeIcon,
  containerIcon,
  mainText,
  btnContainer,
} from "../ModalIpfsWarning/styles";
import CloseIcon from "../CloseIcon";
import ModalSignStatus from "../ModalSignStatus";
import { Portal } from "../Portal/Portal";

interface Props {
  isOpen: boolean;
  onSubmit: () => Promise<any>;
  onExit: () => any;
}

export default function ModalReadyToSign({ isOpen, onSubmit, onExit }: Props) {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (loading) return;
    setLoading(true);

    await onSubmit().then(success => {
      setSuccess(success);
    });
    setLoading(false);
  };

  return success ? (
    <ModalSignStatus
      isOpen={isOpen}
      onExit={onExit}
      content={<p>You have successfully generated Proof-of-Identity</p>}
      error={false}
    />
  ) : (
    <Portal isOpen={isOpen} onClose={onExit}>
      <ModalBase height="auto" sx={{ py: "32px", width: ["80%", "500px"] }}>
        <Flex sx={{ display: "flex", flexDirection: "column" }}>
          <Box onClick={onExit} sx={closeIcon}>
            <CloseIcon />
          </Box>
          <Box sx={containerIcon}>
            <Icon width={"44px"} height={"44px"} src={iconsObj.frame} />
          </Box>
          <Text sx={{ ...mainText, mb: "20px" }}>Note</Text>
          <Text sx={{ textAlign: "center" }}>
            If you change the status of the agreement to Ready to Sign you will not be able to edit
            its content anymore.
          </Text>
          <Button
            onClick={handleSubmit}
            sx={{ ...btnContainer, mb: "8px", width: "165px" }}
            disabled={loading}
          >
            {loading ? <Spinner size={16} color="white" /> : "Continue"}
          </Button>
          <Button onClick={onExit} variant="secondary" sx={{ border: "none" }}>
            Cancel
          </Button>
        </Flex>
      </ModalBase>
    </Portal>
  );
}
