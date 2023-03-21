import React, { useEffect, useState, useRef } from "react";
import { Container, Flex, Input, Text, Button, Box } from "theme-ui";
import {
  inputCreactAgreement,
  inputCreateAgreementError,
  inputCreateAgreementWithRightButton,
  textLoading,
  plus,
} from "../../styles";
import {
  PRIVACY_PUBLIC_PROOF_ONLY,
  PRIVACY_PUBLIC_PUBLISHED,
  PRIVACY_PUBLIC_WITH_LINK,
} from "../../../../types";
import ChooseMethod from "../StepOne/ChooseMethod";
import Lottie from "lottie-react";
import PublicMethod from "../StepOne/ChoosePublicMethod";
import { useCreateAgreement } from "../../../../hooks/useCreateAgreement";
import { useEditAgreement } from "../../../../hooks/useEditAgreement";
import loader from "../../../../img/json/loader.json";
import FieldErrorMessage from "../../../Form/FieldErrorMessage";
import AgreementLocationRadioButtons from "../StepTwo/AgreementLocationButtons";
// import styles from "./styles";

export type AnimateContainer = () => void;

export interface Props {
  animateContainer: AnimateContainer;
  page: string;
  loading: any;
}

export interface PublicProps extends Props {
  setPublic: any;
}

const defaultIsPublic = (agreementPrivacy: string) => {
  return [PRIVACY_PUBLIC_PROOF_ONLY, PRIVACY_PUBLIC_PUBLISHED, PRIVACY_PUBLIC_WITH_LINK].some(
    p => p === agreementPrivacy
  );
};

export default function StepThree({ page, animateContainer, loading }: Props) {
  const create = useCreateAgreement();
  const edit = useEditAgreement();
  const { values, changeValue } = page === "create" ? create : edit;
  const [isPublic, setIsPublic] = useState(defaultIsPublic(values.agreementPrivacy));
  const initiated = useRef(false);

  useEffect(() => {
    if (true) {
      initiated.current = true;

      if (defaultIsPublic(values.agreementPrivacy)) {
        animateContainer();
        setIsPublic(isPublic);
      }
    }
    return () => {
      initiated.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  return (
    <Container>
      {!loading ? (
        <>
          <AgreementLocationRadioButtons page={page} />
          <Text sx={{ variant: "forms.label", margin: "24px auto 3px 2px", textAlign: "left" }}>
            Agreement privacy
          </Text>
          {!isPublic ? (
            <ChooseMethod
              animateContainer={animateContainer}
              setPublic={setIsPublic}
              loading={loading}
              page={page}
            />
          ) : (
            <PublicMethod page={page} animateContainer={animateContainer} setPublic={setIsPublic} />
          )}
          <FieldErrorMessage error={values?.errors.agreementPrivacy} />
        </>
      ) : (
        <>
          <Lottie
            style={{ height: "60px", marginBottom: "52px" }}
            animationData={loader}
            loop={true}
          />
          <Text sx={textLoading}> loading... </Text>
        </>
      )}
    </Container>
  );
}
