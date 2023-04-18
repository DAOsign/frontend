import React from "react";
import { Container, Input, Text } from "theme-ui";
import { inputCreactAgreement, inputCreateAgreementError } from "../../styles";
import { useCreateAgreement } from "../../../../hooks/useCreateAgreement";
import FieldErrorMessage from "../../../Form/FieldErrorMessage";
import AgreementMethod from "../StepTwo/ChooseAgreementMethod";
import { useEditAgreement } from "../../../../hooks/useEditAgreement";

export interface Props {
  page: string;
}
export interface PublicProps extends Props {
  setPublic: any;
}

export default function StepOne({ page }: Props) {
  const create = useCreateAgreement();
  const edit = useEditAgreement();
  const { values, changeValue } = page === "create" ? create : edit;

  const titleInputErrorStyles = values?.errors?.title ? inputCreateAgreementError : {};

  return (
    <Container sx={{ maxWidth: "600px", textAlign: "left" }}>
      {!values?.agreementMethod ? (
        <>
          <Text sx={{ variant: "forms.label", ml: "3px" }}>Title *</Text>
          <Input
            value={values.title}
            onChange={e => changeValue("title", e.target.value)}
            sx={{ variant: "forms.input", ...inputCreactAgreement, ...titleInputErrorStyles }}
          />{" "}
        </>
      ) : null}
      <FieldErrorMessage error={values?.errors?.title} />
      <AgreementMethod page={page} />
    </Container>
  );
}
