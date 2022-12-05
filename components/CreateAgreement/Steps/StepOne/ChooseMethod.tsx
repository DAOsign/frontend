import React from "react";
import { Container, Flex, Text } from "theme-ui";
import { card } from "../../styles";
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
      <Flex sx={{ justifyContent: "space-between" }}>
        <Container
          sx={card}
          onClick={() => {
            animateContainer();
            setPublic(true);
          }}
        >
          <div style={{ width: "50px", height: "50px", margin: "0 auto" }}>
            <Icon width="50px" height="50px" src={iconsObj.publicIcon} />
          </div>
          <Text sx={{ variant: "text.largeTextBold", mt: "20px" }}>Public</Text>
          <Text sx={{ variant: "text.overscript", mt: "20px", maxWidth: "160px" }}>
            Accessed Publicly based on sharing opionts
          </Text>
        </Container>
        <Container
          sx={card}
          onClick={() => changeValue("agreementPrivacy", PRIVACY_PRIVATE)}
          className={values.agreementPrivacy === PRIVACY_PRIVATE ? "active" : undefined}
        >
          <div style={{ width: "50px", height: "50px", margin: "0 auto" }}>
            <Icon width="50px" height="50px" src={iconsObj.privateIcon} />
          </div>
          <Text sx={{ variant: "text.largeTextBold", mt: "20px" }}>Private</Text>
          <Text sx={{ variant: "text.overscript", mt: "20px", maxWidth: "160px" }}>
            Accessed only by Signers or Observes
          </Text>
        </Container>
      </Flex>
    </motion.main>
  );
}
