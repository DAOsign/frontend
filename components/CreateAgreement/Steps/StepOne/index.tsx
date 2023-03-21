import React, { useEffect, useRef, useState } from "react";
import { Container, Input, Text } from "theme-ui";
import { inputCreactAgreement, inputCreateAgreementError } from "../../styles";
import { useCreateAgreement } from "../../../../hooks/useCreateAgreement";
import {
  PRIVACY_PUBLIC_PROOF_ONLY,
  PRIVACY_PUBLIC_PUBLISHED,
  PRIVACY_PUBLIC_WITH_LINK,
} from "../../../../types";
import ChooseMethod from "./ChooseMethod";
import PublicMethod from "./ChoosePublicMethod";
import FieldErrorMessage from "../../../Form/FieldErrorMessage";
import AgreementMethod from "../StepTwo/ChooseAgreementMethod";
import { useEditAgreement } from "../../../../hooks/useEditAgreement";

export interface Props {
  page: string;
}
export interface PublicProps extends Props {
  setPublic: any;
}
const defaultIsPublic = (agreementPrivacy: string) => {
  return [PRIVACY_PUBLIC_PROOF_ONLY, PRIVACY_PUBLIC_PUBLISHED, PRIVACY_PUBLIC_WITH_LINK].some(
    p => p === agreementPrivacy
  );
};

export default function StepOne({ page }: Props) {
  const create = useCreateAgreement();
  const edit = useEditAgreement();
  const { values, changeValue } = page === "create" ? create : edit;
  // const [isPublic, setIsPublic] = useState(defaultIsPublic(values.agreementPrivacy));
  // const initiated = useRef(false);

  // useEffect(() => {
  //   if (true) {
  //     initiated.current = true;
  //     if (defaultIsPublic(values.agreementPrivacy)) {
  //       animateContainer();
  //       setIsPublic(isPublic);
  //     }
  //   }
  //   return () => {
  //     initiated.current = false;
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [values]);
  console.log(values);

  const titleInputErrorStyles = values?.errors?.title ? inputCreateAgreementError : {};

  return (
    <Container sx={{ maxWidth: "600px", textAlign: "left" }}>
      <Text sx={{ variant: "forms.label", ml: "3px" }}>Title</Text>
      <Input
        value={values.title}
        onChange={e => changeValue("title", e.target.value)}
        sx={{ variant: "forms.input", ...inputCreactAgreement, ...titleInputErrorStyles }}
      />
      <FieldErrorMessage error={values?.errors?.title} />
      {/* <Box> */}
      <AgreementMethod page={page} />
      {/* </Box> */}
      {/* <AgreementLocationRadioButtons page={page} /> */}
      {/* {!isPublic ? (
        <ChooseMethod page={page} animateContainer={animateContainer} setPublic={setIsPublic} />
      ) : (
        <PublicMethod page={page} animateContainer={animateContainer} setPublic={setIsPublic} />
      )} */}
    </Container>
  );
}
