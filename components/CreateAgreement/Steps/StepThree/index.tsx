import React, { useEffect, useState, useRef } from "react";
import { Container, Text, Flex, Label, Switch } from "theme-ui";
import { textLoading } from "../../styles";
import {
  NetworkName,
  PRIVACY_PUBLIC_PROOF_ONLY,
  PRIVACY_PUBLIC_PUBLISHED,
  PRIVACY_PUBLIC_WITH_LINK,
  Props,
  SelectOption,
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
import { networkOptions } from "../../../../utils/mockData";

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

  const changeStoreProofsNetwork = (value: string) => {
    changeValue("storeProofsNetwork", value);
  };

  return (
    <Container>
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
          <Flex sx={{ ...switchContainer, width: "fit-content", mt: "45px", mb: "40px" }}>
            <Label htmlFor="storeBlockchain" sx={labelSwitch}>
              Store Proofs on Blockchain
            </Label>
            <Switch
              onChange={e => {
                changeValue("isStoreProofsOnBlockchain", e.target.checked);
                !e.target.checked && changeValue("storeProofsNetwork", undefined);
              }}
              id="storeBlockchain"
              disabled={false}
              className="switch"
              checked={values.isStoreProofsOnBlockchain}
              sx={switchBtn}
            />
          </Flex>

          {values.isStoreProofsOnBlockchain && (
            <CustomSelect
              value={values.storeProofsNetwork}
              label={"Network"}
              options={networkOptions}
              onChange={changeStoreProofsNetwork}
            />
          )}
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
