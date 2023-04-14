import React from "react";
import { Container, Flex, Text, Box } from "theme-ui";
import {
  itemsContentMethod,
  secondaryTextMethod,
  titleMethodCard,
  leftCardMethod,
  rightCardMethod,
} from "../../styles";
import { useCreateAgreement } from "../../../../hooks/useCreateAgreement";
import { useEditAgreement } from "../../../../hooks/useEditAgreement";
import iconsObj from "../../../../assets/icons";
import Icon from "../../../icon";

import { PRIVACY_PRIVATE, PublicProps } from "../../../../types";
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
          sx={leftCardMethod}
          onClick={() => {
            changeValue("errors", { ...values.errors, agreementPrivacy: null });
            changeValue("agreementPrivacy", "");
            animateContainer();
            setPublic(true);
          }}
        >
          <Box sx={itemsContentMethod}>
            <div className="iconMethod" style={{ width: "50px", height: "50px", margin: "0 auto" }}>
              <Icon width="50px" height="50px" src={iconsObj.publicIcon} />
            </div>
            <Box>
              <Text className="titleMethodCard" sx={titleMethodCard}>
                Public
              </Text>
              <Text sx={secondaryTextMethod}>Accessed Publicly based on sharing options</Text>
            </Box>
          </Box>
        </Container>
        <Container
          sx={rightCardMethod}
          onClick={() => changeValue("agreementPrivacy", PRIVACY_PRIVATE)}
          className={values?.agreementPrivacy === PRIVACY_PRIVATE ? "active" : undefined}
        >
          <Box sx={itemsContentMethod}>
            <div className="iconMethod" style={{ width: "50px", height: "50px", margin: "0 auto" }}>
              <Icon width="50px" height="50px" src={iconsObj.privateIcon} />
            </div>
            <Text className="titleMethodCard" sx={titleMethodCard}>
              Private
            </Text>
            <Text sx={secondaryTextMethod}>Accessed only by Signers or Observes</Text>
          </Box>
        </Container>
      </Container>
    </motion.main>
  );
}
