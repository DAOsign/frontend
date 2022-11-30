import React, { useCallback } from "react";
import { useRouter } from "next/router";
import Icon from "../icon/index";
import { Container, Flex, Text, Button, Box } from "theme-ui";
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

interface LeftSideoProp {
  step: number;
  setStep: any;
}

export default function LeftSide({ setStep, step }: LeftSideoProp) {
  const { state } = useCreateAgreement();
  const { push } = useRouter();
  const value = useCallback(() => {
    return {
      1: !state.title || !state.agreementPrivacy,
      2: state.agreementLocation === "Cloud" ? !state.textEditorValue : false,
      3: !state.observers.length || !state.signers.length,
    };
  }, [
    state.agreementLocation,
    state.agreementPrivacy,
    state.textEditorValue,
    state.observers,
    state.signers,
    state.title,
  ]);
  const [{ fetching: addingAgreement }, addAgreement] = useMutation(addAgreementMutation);

  const handleCreateAgreement = async () => {
    await addAgreement({
      title: state.title,
      agreementLocation: state.agreementLocation,
      content: JSON.stringify(state.textEditorValue),
      agreementPrivacy: state.agreementPrivacy,
      signers: state.signers.map(s => s.value),
      observers: state.observers.map(o => o.value),
    }).then(res => {
      if (res.error) {
        console.error(res.error);
      }
      if (res.data?.addAgreement?.title) {
        push("/agreements");
      }
    });
  };

  return (
    <>
      <Container sx={stepsContainer}>
        <Flex sx={{ ...stepStyle, mt: 0 }}>
          <Box sx={stepNumber}>
            {step > 1 ? (
              <Icon src={iconsObj.done} />
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
              <Icon src={iconsObj.done} />
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
        <Button
          onClick={() => setStep(step > 1 ? step - 1 : 1)}
          sx={{ variant: "buttons.secondary", ...fW, mt: "60px" }}
          type="button"
        >
          {step > 1 ? "Back" : "Cancel"}
        </Button>
        <Button sx={{ variant: "buttons.secondary", ...fW, mt: "20px" }} type="button">
          Save Draft
        </Button>
        {step === 3 ? (
          <Button
            onClick={handleCreateAgreement}
            disabled={addingAgreement}
            variant="primary"
            sx={{ ...fW, mt: "20px" }}
            type="button"
          >
            Create Agreement
          </Button>
        ) : (
          <Button
            disabled={value()[step]}
            onClick={() => setStep(step + 1)}
            sx={{ variant: "buttons.primary", ...fW, mt: "20px" }}
            type="button"
          >
            Next Step
          </Button>
        )}
      </Container>
    </>
  );
}
