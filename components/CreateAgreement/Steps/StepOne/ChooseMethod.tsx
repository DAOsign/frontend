import React from "react";
import { Container, Flex, Text, Box } from "theme-ui";
import { rightCard, leftCard, centerCard } from "../../styles";
import { useCreateAgreement } from "../../../../hooks/useCreateAgreement";
import { useEditAgreement } from "../../../../hooks/useEditAgreement";
import iconsObj from "../../../../assets/icons";
import Icon from "../../../icon";

import { PRIVACY_PRIVATE } from "../../../../types";
import { PublicProps } from "../StepThree";
import { motion } from "framer-motion";

const chooseVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function ChooseMethod({ animateContainer, setPublic, page }: PublicProps) {
  const create = useCreateAgreement();
  const edit = useEditAgreement();
  const { values, changeValue } = page === "create" ? create : edit;
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
          sx={{ ...leftCard, width: "290px", height: "218px", maxWidth: "300px" }}
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
              Accessed Publicly based on sharing options
            </Text>
          </Box>
        </Container>
        <Container
          sx={{ ...rightCard, width: "290px", height: "218px", maxWidth: "300px" }}
          onClick={() => changeValue("agreementPrivacy", PRIVACY_PRIVATE)}
          className={values?.agreementPrivacy === PRIVACY_PRIVATE ? "active" : undefined}
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
