/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useMemo, useState } from "react";
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

import { useQuery } from "urql";
import { privacyValueByName } from "./utils";
import { METHOD_ENTER, METHOD_UPLOAD } from "../../types";

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
function shouldRequestEditData(agreementId: number | string) {
  if (!agreementId) return false;
  if (typeof window !== "undefined") {
    const editItem = localStorage?.getItem("editAgreement") as any;

    // console.log("editItem", JSON.parse(editItem).agreementId, agreementId.toString());
    const res = !editItem || JSON.parse(editItem).agreementId !== agreementId.toString();
    // console.log("shouldRequest", res);
    return res;
  }
}

export default function EditAgreement({ page }: { page: string }) {
  const { query } = useRouter();
  const [step, setStep] = useState(query?.step ? Number(query.step) : 0);
  const [transitioned, setTransitioned] = useState(false);
  const agreementId = Number(query.id);
  const { values, changeValue } = useEditAgreement();
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [{ data, fetching: agreementsLoading, error }] = useQuery({
    // @ts-ignore
    query: agreementById,
    variables: { agreementId: agreementId },
    pause: !shouldRequestEditData(agreementId),
  });

  useEffect(() => {
    if (!!data?.agreement) {
      console.log("GOT DATA", data?.agreement);

      changeValue("agreementId", data?.agreement?.agreementId || "");

      changeValue("title", data?.agreement?.title || "");
      const agreementPrivacy = privacyValueByName(data?.agreement?.agreementPrivacy?.name);
      changeValue("agreementPrivacy", agreementPrivacy);

      changeValue("agreementLocation", data?.agreement?.agreementLocation?.name || "");

      changeValue("agreementMethod", data?.agreement?.content ? METHOD_ENTER : METHOD_UPLOAD);
      if (data?.agreement?.content) {
        changeValue("textEditorValue", data?.agreement?.content || "");
      }

      const observers: any = data?.agreement?.observers?.map(value => {
        return { value: value?.ens?.name || value?.email || value?.wallet?.address };
      });
      changeValue("observers", observers);

      const signers: any = data?.agreement?.signers?.map((value: any) => {
        return { value: value?.ens?.name || value?.email || value?.wallet?.address };
      });
      changeValue("signers", signers);
    }
    setLoaded(true);
  }, [data]);

  const steps = useMemo(() => {
    return {
      1: withFade(
        <StepOne page={page} animateContainer={() => setTransitioned(val => !val)} />,
        step
      ),
      2: withFade(<StepTwo page={page} />, step),
      3: withFade(<StepThree page={page} loading={loading} />, step),
    };
  }, []);

  return (
    <Flex sx={containerSides}>
      <Container sx={leftSide} className={transitioned ? "transition" : ""}>
        <Text sx={title}>Edit Agreement</Text>
        {loaded && values && steps[step]}
      </Container>
      <Container
        sx={{
          ...rightSide,
          "@media screen and (max-width: 768px)": {
            maxWidth: "343px",
            paddingX: "16px",
            pb: "40px",
            pt: !values.file ? "0" : "95px",
          },
        }}
      >
        <NavPanel page={page} setLoading={setLoading} />
      </Container>
    </Flex>
  );
}
