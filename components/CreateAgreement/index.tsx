import React, { useState } from "react";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import { METHOD_IMPORT_SHAPSHOT } from "../../types";
import { Container, Flex, Text, Button, Textarea, Spinner } from "theme-ui";
import { refineGeneratedAgreement } from "../../modules/graphql/queries";
import { useCreateAgreement } from "../../hooks/useCreateAgreement";
import { useEditAgreement } from "../../hooks/useEditAgreement";
import { useClient } from "urql";
import NavPanel from "./NavPanel";
import {
  importOptionsTitle,
  containerSides,
  importOptions,
  navContainer,
  rightSide,
  textInput,
  leftSide,
  title,
} from "./styles";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/router";

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

export default function CreateAgreement({ page }: { page: string }) {
  const { query } = useRouter();
  const create = useCreateAgreement();
  const edit = useEditAgreement();
  const { values, changeValue } = page === "create" ? create : edit;
  const [step, setStep] = useState(query?.step ? Number(query.step) : 0);
  const { query: queryClient } = useClient();
  const [optionsValue, setOptionsValue] = useState("");
  const [transitioned, setTransitioned] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingUpdateOptions, setLoadingUpdateOptions] = useState(false);
  const [method, setMethod] = useState("");
  const [isOpenModalImport, setIsOpenModalImport] = useState(false);

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
        <Text sx={title}>Create New Agreement</Text>
        {steps[step]}
      </Container>
      <Container
        sx={{
          ...rightSide,
          "@media screen and (max-width: 480px)": {
            maxWidth: "343px",
            pb: "40px",
          },
        }}
      >
        <Container sx={navContainer}>
          <NavPanel page={page} setLoading={setLoading} />
        </Container>
        {step === 1 &&
          values.agreementMethod === METHOD_IMPORT_SHAPSHOT &&
          !!values.textEditorValue && (
            <Container sx={importOptions}>
              <Text sx={importOptionsTitle}>Proposal Import Options</Text>
              <Text
                sx={{
                  variant: "forms.label",
                  textAlign: "inherit",
                  maxWidth: "unset",
                  minHeight: "25px",
                  ml: "3px",
                  mr: "5px",
                  mt: "20px",
                }}
              >
                Provide additional instructions{" "}
              </Text>
              <Textarea
                disabled={loadingUpdateOptions}
                onChange={e => setOptionsValue(e.target.value)}
                value={optionsValue}
                sx={textInput}
                rows={8}
              />
              <Button
                disabled={!optionsValue || loadingUpdateOptions}
                onClick={updateProposal}
                variant="secondary"
                sx={{ mb: "20px" }}
              >
                {loadingUpdateOptions ? <Spinner size={16} color="pink" /> : " Update Proposal"}
              </Button>
              <Button
                onClick={() => {
                  setMethod("");
                  setIsOpenModalImport(true);
                  changeValue("textEditorValue", "");
                }}
              >
                Reimport From Snapshot
              </Button>
            </Container>
          )}
      </Container>
    </Flex>
  );
}
