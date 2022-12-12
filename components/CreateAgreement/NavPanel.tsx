import React, { useCallback, useMemo } from "react";
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
import { METHOD_ENTER } from "../../types";
import { clearDraft } from "../../modules/createAgreementProvider";

export default function NavPanel() {
  const { values } = useCreateAgreement();
  const { push, query } = useRouter();

  const step = query?.step ? Number(query.step) : 1;

  const nextStepDisabled = useMemo(() => {
    switch (step) {
      case 1:
        return !values.title || !values.agreementPrivacy;
      case 2:
        return values.agreementMethod === METHOD_ENTER
          ? !values.textEditorValue
          : !values.agreementHash;
      case 3:
        return !values.observers.length || !values.signers.length;
    }
  }, [step, values]);

  const [{ fetching: addingAgreement }, addAgreement] = useMutation(addAgreementMutation);

  const handleCreateAgreement = async () => {
    await addAgreement({
      title: values.title,
      agreementLocation: values.agreementLocation,
      content:
        values.agreementMethod === METHOD_ENTER ? JSON.stringify(values.textEditorValue) : "",
      agreementPrivacy: values.agreementPrivacy,
      signers: values.signers.map(s => s.value),
      observers: values.observers.map(o => o.value),
      agreementHash: values.agreementHash,
      agreementFilePath: values.filePath,
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
      onClick: isFinishButton ? handleCreateAgreement : handleNextStep,
      disabled: isFinishButton ? addingAgreement : nextStepDisabled,
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
              <Text sx={{ variant: "text.normalTextBold", color: "#fff" }}>1</Text>
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
              <Text sx={{ variant: "text.normalTextBold", color: "#fff" }}>2</Text>
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
            <Text sx={{ variant: "text.normalTextBold", color: "#fff" }}>3</Text>
          </Box>
          <Container sx={leftSideItem}>
            <Text sx={primaryTitleItem}>Signers</Text>
            <Text sx={secondaryTitleStep}>Add signers and observers</Text>
          </Container>
        </Flex>
      </Container>
      <Container sx={containerButtons}>
        <BackwardButton />
        <Button variant="secondary" sx={{ ...fW, mt: "20px" }} type="button">
          Save Draft
        </Button>
        <ForwardButton />
      </Container>
    </>
  );
}
