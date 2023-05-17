import React, { useState } from "react";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import { METHOD_IMPORT_SHAPSHOT } from "../../types";
import { Container, Flex, Text } from "theme-ui";

import { useCreateAgreement } from "../../hooks/useCreateAgreement";
import { useEditAgreement } from "../../hooks/useEditAgreement";

import ModalImportSnapshot from "../ModalImportSnapshot";
import NavPanel from "./NavPanel";
import {
  navContainerOptionsIsVisible,
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
import ProposalImportOptions from "./Steps/StepOne/ProposalImportOptions";

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

  const [transitioned, setTransitioned] = useState(false);
  const [loading, setLoading] = useState(false);
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
  const optionsIsVisible =
    step === 1 && method === METHOD_IMPORT_SHAPSHOT && !!values.textEditorValue;

  return (
    <Flex sx={containerSides} className="containerSides">
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
          "@media screen and (max-width: 375px)": {
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
