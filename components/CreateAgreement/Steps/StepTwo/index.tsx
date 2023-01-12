import React from "react";
import { Container, Box } from "theme-ui";
import { AnimatePresence } from "framer-motion";

import AgreementMethod from "./ChooseAgreementMethod";
import AgreementLocationRadioButtons from "./AgreementLocationButtons";
import styles from "./styles";

export default function StepTwo({ page }: { page: string }) {
  return (
    <Container sx={styles}>
      <AgreementLocationRadioButtons page={page} />
      <Box>
        <AnimatePresence mode="wait">
          <AgreementMethod page={page} />
        </AnimatePresence>
      </Box>
    </Container>
  );
}
