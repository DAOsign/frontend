import React, { useState } from "react";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import { Container, Flex, Text } from "theme-ui";
import LeftSide from "./LeftSide";
import { rightSide, leftSide, containerSides } from "./styles";

export default function CreateAgreement() {
  const [step, setStep] = useState(1);

  const steps = {
    1: <StepOne />,
    2: <StepTwo />,
    3: <StepThree />,
  };

  return (
    <Flex sx={containerSides}>
      <Container sx={leftSide}>
        <Text sx={{ variant: "text.h2", mb: "40px", display: "inline-block" }}>
          {" "}
          Create New Agreement
        </Text>
        {steps[step]}
      </Container>
      <Container sx={rightSide}>
        <LeftSide step={step} setStep={setStep} />
      </Container>
    </Flex>
  );
}
