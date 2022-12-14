import React, { useEffect, useRef, useState } from "react";
import { Container, Input, Text } from "theme-ui";
import { inputCreactAgreement, inputCreateAgreementError } from "../../styles";
import { useCreateAgreement } from "../../../../hooks/useCreateAgreement";

import { AnimatePresence } from "framer-motion";
import {
  PRIVACY_PUBLIC_PROOF_ONLY,
  PRIVACY_PUBLIC_PUBLISHED,
  PRIVACY_PUBLIC_WITH_LINK,
} from "../../../../types";
import ChooseMethod from "./ChooseMethod";
import PublicMethod from "./ChoosePublicMethod";
import FieldErrorMessage from "../../../Form/FieldErrorMessage";

export type AnimateContainer = () => void;

export interface Props {
  animateContainer: AnimateContainer;
}
export interface PublicProps extends Props {
  setPublic: any;
}

export default function StepOne({ animateContainer }: Props) {
  const { values, changeValue } = useCreateAgreement();
  const [isPublic, setIsPublic] = useState(false);

  const initiated = useRef(false);

  useEffect(() => {
    if (!initiated.current) {
      initiated.current = true;
      const isPublic = [
        PRIVACY_PUBLIC_PROOF_ONLY,
        PRIVACY_PUBLIC_PUBLISHED,
        PRIVACY_PUBLIC_WITH_LINK,
      ].some(p => p === values.agreementPrivacy);

      if (isPublic) {
        animateContainer();
        setIsPublic(isPublic);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const titleInputErrorStyles = values?.errors?.title ? inputCreateAgreementError : {};

  return (
    <Container sx={{ maxWidth: "440px", textAlign: "left" }}>
      <Text sx={{ variant: "forms.label", ml: "3px" }}>Title</Text>
      <Input
        value={values.title}
        onChange={e => changeValue("title", e.target.value)}
        sx={{ variant: "forms.input", ...inputCreactAgreement, ...titleInputErrorStyles }}
      />
      <FieldErrorMessage error={values?.errors?.title} />
      <Text sx={{ variant: "forms.label", margin: "24px auto 3px 2px" }}>Agreement privacy</Text>

      <AnimatePresence initial={false}>
        {!isPublic ? (
          <ChooseMethod animateContainer={animateContainer} setPublic={setIsPublic} />
        ) : (
          <PublicMethod animateContainer={animateContainer} setPublic={setIsPublic} />
        )}
      </AnimatePresence>
      <FieldErrorMessage error={values?.errors?.agreementPrivacy} />
    </Container>
  );
}
