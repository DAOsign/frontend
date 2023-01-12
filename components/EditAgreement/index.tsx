import React, { useEffect, useState } from "react";
import StepOne from "../CreateAgreement/Steps/StepOne";
import StepTwo from "../CreateAgreement/Steps/StepTwo";
import StepThree from "../CreateAgreement/Steps/StepThree";
import { Container, Flex, Text } from "theme-ui";
import NavPanel from "../CreateAgreement/NavPanel";
import { useEditAgreement } from "../../hooks/useEditAgreement";
import { rightSide, leftSide, containerSides, title } from "../CreateAgreement/styles";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/router";
import { agreementById } from "../../modules/graphql/queries";
import {
  PRIVACY_PRIVATE,
  PRIVACY_PUBLIC_WITH_LINK,
  PRIVACY_PUBLIC_PROOF_ONLY,
  PRIVACY_PUBLIC_PUBLISHED,
} from "../../types";
import { useQuery } from "urql";

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  enter: { opacity: 0.5 },
};
export const withFade = (component: React.ReactElement, key: number | string) => {
  return (
    <motion.main
      key={key}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ type: "linear" }}
    >
      {component}
    </motion.main>
  );
};

export default function EditAgreement({ page }: { page: string }) {
  const { query } = useRouter();
  const [step, setStep] = useState(query?.step ? Number(query.step) : 0);
  const [transitioned, setTransitioned] = useState(false);
  const { values, changeValue } = useEditAgreement();
  const [loading, setLoading] = useState(false);
  const [{ data, fetching: agreementsLoading, error }] = useQuery({
    // @ts-ignore
    query: agreementById,
    variables: { agreementId: query?.id ? Number(query.id) : 64 },
  });
  useEffect(() => {
    if (!!data) {
      const valuesEditAgreemnt = [
        "agreementLocation",
        "agreementPrivacy",
        "agreementMethod",
        "textEditorValue",
        "agreementHash",
        "filePath",
        "observers",
        "signers",
        "title",
        "file",
      ];

      valuesEditAgreemnt.map(el => {
        switch (el) {
          case "title":
            //@ts-ignore
            changeValue(el, !!data?.agreement.title ? data?.agreement.title : "");
            return;
            break;
          case "agreementPrivacy":
            //@ts-ignore
            if (data?.agreement?.agreementPrivacy.name === "Private") {
              changeValue(el, PRIVACY_PRIVATE);
              return;
            }
            //@ts-ignore
            if (data?.agreement?.agreementPrivacy.name === "Proof Only") {
              changeValue(el, PRIVACY_PUBLIC_PROOF_ONLY);
              return;
            }
            //@ts-ignore
            if (data?.agreement?.agreementPrivacy.name === "Published") {
              changeValue(el, PRIVACY_PUBLIC_PUBLISHED);
              return;
            }
            //@ts-ignore
            if (data?.agreement?.agreementPrivacy.name === "With Link") {
              changeValue(el, PRIVACY_PUBLIC_WITH_LINK);
              return;
            }
          case "textEditorValue":
            //@ts-ignore
            changeValue(el, !!data?.agreement.content ? data?.agreement.content : "");
            return;
          case "agreementLocation":
            changeValue(
              el,
              //@ts-ignore
              !!data?.agreement.agreementLocation ? data?.agreement.agreementLocation : "Cloud"
            );
            return;
          case "observers":
            //@ts-ignore
            const observsValue: any = data?.agreement?.observers?.map(value => {
              return { value: value?.email || value?.wallet?.address };
            });
            //@ts-ignore
            changeValue(el, observsValue);
            return;
          case "signers":
            //@ts-ignore
            const signersValue: any = data?.agreement?.signers?.map((value: any) => {
              return { value: !!value?.email ? value?.email : value?.wallet?.address };
            });
            //@ts-ignore
            changeValue(el, signersValue);
            return;
          default:
            break;
        }
      });
    }
  }, [data]);

  const steps = {
    1: withFade(
      <StepOne page={page} animateContainer={() => setTransitioned(val => !val)} />,
      step
    ),
    2: withFade(<StepTwo page={page} />, step),
    3: withFade(<StepThree page={page} loading={loading} />, step),
  };

  return (
    <Flex sx={containerSides}>
      <Container sx={leftSide} className={transitioned ? "transition" : ""}>
        <Text sx={title}>Edit Agreement</Text>
        {values && steps[step]}
      </Container>
      <Container sx={rightSide}>
        <NavPanel page={page} setLoading={setLoading} />
      </Container>
    </Flex>
  );
}
