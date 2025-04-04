import React, { useEffect, useState, useRef } from "react";
import { Container, Text, Flex, Label, Switch, Box } from "theme-ui";
import { textLoading } from "../../styles";
import {
  PRIVACY_PUBLIC_PROOF_ONLY,
  PRIVACY_PUBLIC_PUBLISHED,
  PRIVACY_PUBLIC_WITH_LINK,
  Props,
} from "../../../../types";
import ChooseMethod from "../StepOne/ChooseMethod";
import Lottie from "lottie-react";
import PublicMethod from "../StepOne/ChoosePublicMethod";
import { useCreateAgreement } from "../../../../hooks/useCreateAgreement";
import { labelSwitch, switchBtn, switchContainer } from "../../../ModalImportSnapshot/styles";
import { useEditAgreement } from "../../../../hooks/useEditAgreement";
import loader from "../../../../img/json/loader.json";
import FieldErrorMessage from "../../../Form/FieldErrorMessage";
import AgreementLocationRadioButtons from "../StepTwo/AgreementLocationButtons";
import CustomSelect from "../../../CustomSelect";
import {networkOptions} from "../../../../constants/common";

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
  const [checked, setChecked] = useState(Boolean(values.storeOnBlockchain));
  const initiated = useRef(false);

  useEffect(() => {
    initiated.current = true;

    if (defaultIsPublic(values.agreementPrivacy)) {
      animateContainer();
      setIsPublic(isPublic);
    }
    return () => {
      initiated.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  useEffect(() => {
    if (checked && values.storeOnBlockchain) {
      changeValue("storeOnBlockchain", values.storeOnBlockchain);
    } else {
      changeValue("storeOnBlockchain", checked ? 1 : null);
    }
  }, [checked, values.storeOnBlockchain]);

  return (
    <Container sx={{ pb: "24px" }}>
      {!loading ? (
        <>
          <Text
            sx={{
              variant: "forms.label",
              fontFamily: "InterRegular",
              margin: "0 auto 2px 2px",
              textAlign: "left",
            }}
          >
            Agreement privacy *
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
          <AgreementLocationRadioButtons page={page} />
          <FieldErrorMessage error={values?.errors.agreementLocation} />
          <Box>
            <Flex sx={{ ...switchContainer, width: "fit-content", mt: "45px", mb: "40px" }}>
              <Label htmlFor="storeBlockchain" sx={labelSwitch}>
                Store Proofs on Blockchain
              </Label>
              <Switch
                onChange={e => {
                  setChecked(e.target.checked);
                }}
                id="storeBlockchain"
                disabled={false}
                className="switch"
                checked={checked}
                sx={switchBtn}
              />
            </Flex>
            {
              values.storeOnBlockchain && (
                <CustomSelect
                  selected={networkOptions.find(o => o.value === values.storeOnBlockchain)!}
                  label={"Network"}
                  options={networkOptions}
                  onChange={option => changeValue("storeOnBlockchain", option.value)}
                />
              ) /* || (
              <Select
                options={networkOptions}
                selected={networkOptions.find(o => o.value === values.storeOnBlockchain)!}
                onSelect={option => changeValue("storeOnBlockchain", option.value)}
              />
            ) */
            }
          </Box>
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
