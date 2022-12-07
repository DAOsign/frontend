import React from "react";
import { Container, Box } from "theme-ui";
import { AnimatePresence } from "framer-motion";

import AgreementMethod from "./ChooseAgreementMethod";
import AgreementLocationRadioButtons from "./AgreementLocationButtons";
import styles from "./styles";

export default function StepTwo() {
  return (
    <Container sx={styles}>
      <AgreementLocationRadioButtons />
      <Box>
        <AnimatePresence mode="wait">
          <AgreementMethod />
        </AnimatePresence>
      </Box>
    </Container>
  );
}
