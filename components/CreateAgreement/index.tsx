import React, { useState } from "react";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import { Container, Flex, Text } from "theme-ui";
import NavPanel from "./NavPanel";
import { rightSide, leftSide, containerSides, title } from "./styles";
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
  const [step, setStep] = useState(query?.step ? Number(query.step) : 0);
  const [transitioned, setTransitioned] = useState(false);
  const [loading, setLoading] = useState(false);
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
        <Text sx={title}>Create New Agreement</Text>
        {steps[step]}
      </Container>
      <Container sx={rightSide}>
        <NavPanel page={page} setLoading={setLoading} />
      </Container>
    </Flex>
  );
}
