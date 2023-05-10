/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import StepOne from "../CreateAgreement/Steps/StepOne";
import StepTwo from "../CreateAgreement/Steps/StepTwo";
import StepThree from "../CreateAgreement/Steps/StepThree";
import { useClient, useQuery } from "urql";
import { Container, Flex, Text, Textarea, Button, Spinner } from "theme-ui";
import { refineGeneratedAgreement, agreementById } from "../../modules/graphql/queries";
import NavPanel from "../CreateAgreement/NavPanel";
import { useEditAgreement } from "../../hooks/useEditAgreement";
import {
  navContainerOptionsIsVisible,
  importOptionsTitle,
  containerSides,
  importOptions,
  navContainer,
  textInput,
  rightSide,
  leftSide,
  title,
} from "../CreateAgreement/styles";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/router";
import { privacyValueByName } from "./utils";
import {
  METHOD_IMPORT_SHAPSHOT,
  LOCATION_PUBLIC_IPFS,
  LOCATION_CLOUD,
  METHOD_UPLOAD,
  METHOD_ENTER,
} from "../../types";
import ModalImportSnapshot from "../ModalImportSnapshot";
import ProposalImportOptions from "../CreateAgreement/Steps/StepOne/ProposalImportOptions";

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
    const res = !editItem || JSON.parse(editItem).agreementId !== agreementId.toString();
    return res;
  }
}

export default function EditAgreement({ page }: { page: string }) {
  const { query } = useRouter();
  const [step, setStep] = useState(query?.step ? Number(query.step) : 0);
  const [transitioned, setTransitioned] = useState(false);
  const [optionsValue, setOptionsValue] = useState("");
  const agreementId = Number(query.id);
  const { values, changeValue } = useEditAgreement();
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [method, setMethod] = useState("");
  const [isOpenModalImport, setIsOpenModalImport] = useState(false);
  const [loadingUpdateOptions, setLoadingUpdateOptions] = useState(false);
  const { query: queryClient } = useClient();
  const [{ data, fetching: agreementsLoading, error }] = useQuery({
    // @ts-ignore
    query: agreementById,
    variables: { agreementId: agreementId },
    pause: !shouldRequestEditData(agreementId),
  });

  useEffect(() => {
    if (!!data?.agreement) {
      changeValue("agreementId", data?.agreement?.agreementId || "");

      changeValue("title", data?.agreement?.title || "");

      const agreementPrivacy = privacyValueByName(data?.agreement?.agreementPrivacy?.name);
      changeValue("agreementPrivacy", agreementPrivacy);

      const agreementLocation = data?.agreement?.agreementLocation?.name;
      changeValue("agreementLocation", agreementLocation || "");

      if (agreementLocation === LOCATION_PUBLIC_IPFS) {
        changeValue("agreementHash", data?.agreement?.agreementFile?.agreementHash || "");
      }
      if (agreementLocation === LOCATION_CLOUD) {
        changeValue("filePath", data?.agreement?.agreementFile?.filePath);
      }
      changeValue(
        "agreementMethod",
        !!data?.agreement?.snapshotProposalUrl
          ? METHOD_IMPORT_SHAPSHOT
          : data?.agreement?.content
          ? METHOD_ENTER
          : METHOD_UPLOAD
      );

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

  const steps = {
    1: withFade(
      <StepOne
        setIsOpenModalImport={setIsOpenModalImport}
        isOpenModalImport={isOpenModalImport}
        setMethod={setMethod}
        method={method}
        page={page}
      />,
      step
    ),
    2: withFade(<StepTwo page={page} />, step),
    3: withFade(
      <StepThree
        page={page}
        animateContainer={() => setTransitioned(val => !val)}
        loading={loading}
      />,
      step
    ),
  };

  const updateProposal = async () => {
    if (!!optionsValue && !!values.agreementId) {
      setLoadingUpdateOptions(true);
      await queryClient(
        refineGeneratedAgreement,
        {
          agreementId: values.agreementId,
          userRequest: optionsValue,
        },
        { url: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, requestPolicy: "network-only" }
      )
        .toPromise()
        .then(data => {
          if (data?.data?.refineGeneratedAgreement?.text) {
            changeValue("textEditorValue", data?.data?.refineGeneratedAgreement?.text);
          }
        })
        .catch(() => false)
        .finally(() => setLoadingUpdateOptions(false));
    }
    setOptionsValue("");
  };

  const optionsIsVisible =
    step === 1 && values.agreementMethod === METHOD_IMPORT_SHAPSHOT && !!values.textEditorValue;

  return (
    <Flex sx={containerSides}>
      <Container
        sx={{
          ...leftSide,
          "@media screen and (max-width: 720px)": {
            pb: !values.file ? "40px" : "130px !important",
          },
        }}
        className={transitioned ? "transition" : ""}
      >
        <Text sx={title}>Edit Agreement</Text>
        {steps[step]}
      </Container>
      <Container
        sx={{
          ...rightSide,
          "@media screen and (max-width: 1200px)": {
            width: "100%",
            mx: "auto",
            maxWidth: "672px",
            borderTop: "none",
            borderRadius: "0 0 12px 12px",
            height: "initial",
            minHeight: "unset",
            pb: "72px",
            pt: 0,
            display: optionsIsVisible ? "flex" : "inherit",
            flexDirection: optionsIsVisible ? "column-reverse" : "inherit",
          },
          "@media screen and (max-width: 480px)": {
            maxWidth: "343px",
            pb: "0",
          },
        }}
      >
        <Container sx={!optionsIsVisible ? navContainer : navContainerOptionsIsVisible}>
          <NavPanel page={page} setLoading={setLoading} />
        </Container>
        {optionsIsVisible && (
          <ProposalImportOptions page={page} setIsOpenModalImport={setIsOpenModalImport} />
        )}
      </Container>
      {isOpenModalImport && (
        <ModalImportSnapshot
          onExit={() => setIsOpenModalImport(false)}
          isOpen={isOpenModalImport}
          setMethod={setMethod}
          page={page}
        />
      )}
    </Flex>
  );
}
