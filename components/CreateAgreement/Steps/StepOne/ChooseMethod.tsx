import React from "react";
import { Container, Flex, Text, Box } from "theme-ui";
import { rightCard, leftCard } from "../../styles";
import { useCreateAgreement } from "../../../../hooks/useCreateAgreement";
import iconsObj from "../../../../assets/icons";
import Icon from "../../../icon";

import { PRIVACY_PRIVATE } from "../../../../types";
import { PublicProps } from ".";
import { motion } from "framer-motion";

const chooseVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function ChooseMethod({ animateContainer, setPublic }: PublicProps) {
  const { values, changeValue } = useCreateAgreement();
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={chooseVariants}
      transition={{ type: "linear" }}
    >
      <Container sx={{ position: "relative", height: "242px" }}>
        <Container
          sx={leftCard}
          onClick={() => {
            changeValue("errors", { ...values.errors, agreementPrivacy: null });
            changeValue("agreementPrivacy", "");
            animateContainer();
            setPublic(true);
          }}
        >
          <Box sx={{ maxWidth: "150px", m: "0 auto" }}>
            <div style={{ width: "50px", height: "50px", margin: "0 auto" }}>
              <Icon width="50px" height="50px" src={iconsObj.publicIcon} />
            </div>
            <Text sx={{ variant: "text.largeTextBold", mt: "20px" }}>Public</Text>
            <Text sx={{ variant: "text.overscript", mt: "20px", maxWidth: "160px" }}>
              Accessed Publicly based on sharing opionts
            </Text>
          </Box>
        </Container>
        <Container
          sx={rightCard}
          onClick={() => changeValue("agreementPrivacy", PRIVACY_PRIVATE)}
          className={values.agreementPrivacy === PRIVACY_PRIVATE ? "active" : undefined}
        >
          <Box sx={{ maxWidth: "150px", m: "0 auto" }}>
            <div style={{ width: "50px", height: "50px", margin: "0 auto" }}>
              <Icon width="50px" height="50px" src={iconsObj.privateIcon} />
            </div>
            <Text sx={{ variant: "text.largeTextBold", mt: "20px" }}>Private</Text>
            <Text sx={{ variant: "text.overscript", mt: "20px", maxWidth: "160px" }}>
              Accessed only by Signers or Observes
            </Text>
          </Box>
        </Container>
      </Container>
    </motion.main>
  );
}
