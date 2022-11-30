import React, { useCallback } from "react";
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

interface LeftSideoProp {
  step: number;
  setStep: any;
}

export default function LeftSide({ setStep, step }: LeftSideoProp) {
  const { state } = useCreateAgreement();

  const value = useCallback(() => {
    return {
      1: !state.title || !state.agreementPrivacy,
      2: state.agreementLocation === "cloud" ? !state.textEditorValue : false,
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
        <Button
          disabled={value()[step]}
          onClick={() => setStep(step + 1)}
          sx={{ variant: "buttons.primary", ...fW, mt: "20px" }}
          type="button"
        >
          Next Step
        </Button>
      </Container>
    </>
  );
}
