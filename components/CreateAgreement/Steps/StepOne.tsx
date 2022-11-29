import React, { useEffect, useState } from "react";
import { Container, Flex, Input, Text, Button } from "theme-ui";
import { card, item, inputCreactAgreement, secondaryTitle, container } from "../styles";
import iconsObj from "../../../assets/icons";
import Icon from "../../icon";

export default function StepOne({
  title,
  setTitle,
  methodAgreementAccess,
  setMethodAgreementAccess,
}: any) {
  const [step, setStep] = useState(false);
  return (
    <Container sx={{ maxWidth: "440px", textAlign: "left" }}>
      <Text sx={{ variant: "forms.label", ml: "3px" }}>Title</Text>
      <Input
        value={title}
        onChange={e => setTitle(e.target.value)}
        name="form"
        sx={{ variant: "forms.input", ...inputCreactAgreement }}
      />
      <Text sx={{ variant: "forms.label", margin: "24px auto 3px 2px" }}>Agreement privacy</Text>
      {methodAgreementAccess !== "public" || step
        ? chooseMethod(setMethodAgreementAccess, setStep, step)
        : publicMethod(step, setStep)}
    </Container>
  );
}

const chooseMethod = (setMethodAgreementAccess: any, stepStep: any, step: boolean) => {
  return (
    <Flex sx={{ justifyContent: "space-between" }}>
      <Container
        sx={card}
        onClick={() => {
          setMethodAgreementAccess("public");
          stepStep(!step);
        }}
      >
        <div style={{ margin: "0 auto" }}>
          <Icon width="50px" height="50px" src={iconsObj.publicIcon} />
        </div>
        <Text sx={{ variant: "text.largeTextBold", mt: "20px" }}>Public</Text>
        <Text sx={{ variant: "text.overscript", mt: "20px", maxWidth: "160px" }}>
          Accessed Publicly based on sharing opionts
        </Text>
      </Container>
      <Container sx={card} onClick={() => setMethodAgreementAccess("private")}>
        <div style={{ width: "50px", height: "50px", margin: "0 auto" }}>
          <Icon width="50px" height="50px" src={iconsObj.privateIcon} />
        </div>
        <Text sx={{ variant: "text.largeTextBold", mt: "20px" }}>Private</Text>
        <Text sx={{ variant: "text.overscript", mt: "20px", maxWidth: "160px" }}>
          Accessed only by Signers or Observes
        </Text>
      </Container>
    </Flex>
  );
};

const publicMethod = (step: boolean, setStep: any) => {
  return (
    <Container sx={container}>
      <Flex sx={{ alignItems: "center" }}>
        <Text sx={{ variant: "text.largeTextBold" }}>Public</Text>
        <Button onClick={() => setStep(!step)} sx={{ variant: "buttons.back" }}>
          <Icon style={{ display: "block" }} src={iconsObj.arrowLeftPink} />
          <Text sx={{ display: "block" }}>Choose another privacy</Text>
        </Button>
      </Flex>
      <Flex sx={item}>
        <Icon src={iconsObj.globe} />
        <Container sx={{ textAlign: "left", maxWidth: "290px", ml: "6px", pr: "5px" }}>
          <Text sx={{ variant: "text.smallTextBold", mb: "3px" }}>Published</Text>
          <Text sx={secondaryTitle}>
            Public and available on the your{" "}
            <Text sx={{ variant: "text.link" }}>public signature profile</Text>
          </Text>
        </Container>
      </Flex>
      <Flex sx={item}>
        <Icon src={iconsObj.proofSecondary} />
        <Container sx={{ textAlign: "left", maxWidth: "295px", ml: "6px" }}>
          <Text sx={{ variant: "text.smallTextBold", mb: "3px" }}>Proof Only</Text>
          <Text sx={secondaryTitle}>
            Public Proof of Agreement available on your Public signature profile, but agreement
            content is hidden.
          </Text>
        </Container>
      </Flex>
      <Flex sx={item}>
        <Icon src={iconsObj.ink} />
        <Container sx={{ textAlign: "left", maxWidth: "290px", ml: "6px" }}>
          <Text sx={{ variant: "text.smallTextBold", mb: "3px" }}>Anyone with Link</Text>
          <Text sx={secondaryTitle}>
            Public, but only available with an{" "}
            <Text sx={{ variant: "text.link" }}>agreement share link</Text>
          </Text>
        </Container>
      </Flex>
    </Container>
  );
};
