import React, { useEffect, useState } from "react";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import { Container, Flex, Text } from "theme-ui";
import LeftSide from "./LeftSide";
import { rightSide, leftSide, containerSides, title } from "./styles";

export default function CreateAgreement() {
  const [titleInput, setTitleInput] = useState("");
  const [step, setStep] = useState(1);
  const [valueTextEditor, setvalueTextEditor] = useState<string>("");
  const [signersValue, setSignersValue] = useState("");
  const [observersValue, setObserversValue] = useState("");
  const [methodAgreementAccess, setMethodAgreementAccess] = useState("");
  const [radioValue, setRdioValue] = useState("cloud");
  const [fileInput, setFileInput] = useState<any>();
  const [signers, setSigners] = useState<Array<{ value: string; id: number }>>([]);
  const [observers, setObservers] = useState<Array<{ value: string; id: number }>>([]);

  const steps = {
    1: (
      <StepOne
        setMethodAgreementAccess={setMethodAgreementAccess}
        methodAgreementAccess={methodAgreementAccess}
        setTitle={setTitleInput}
        title={titleInput}
      />
    ),
    2: (
      <StepTwo
        setvalueTextEditor={setvalueTextEditor}
        valueTextEditor={valueTextEditor}
        setFileInput={setFileInput}
        setRdioValue={setRdioValue}
        radioValue={radioValue}
        fileInput={fileInput}
      />
    ),
    3: (
      <StepThree
        setObserversValue={setObserversValue}
        setSignersValue={setSignersValue}
        observersValue={observersValue}
        signersValue={signersValue}
        setObservers={setObservers}
        setSigners={setSigners}
        observers={observers}
        signers={signers}
      />
    ),
  };

  return (
    <Flex sx={containerSides}>
      <Container sx={leftSide}>
        <Text sx={title}> Create New Agreement</Text>
        {steps[step]}
      </Container>
      <Container sx={rightSide}>
        <LeftSide
          methodAgreementAccess={methodAgreementAccess}
          valueTextEditor={valueTextEditor}
          radioValue={radioValue}
          observers={observers}
          title={titleInput}
          setStep={setStep}
          signers={signers}
          step={step}
        />
      </Container>
    </Flex>
  );
}
