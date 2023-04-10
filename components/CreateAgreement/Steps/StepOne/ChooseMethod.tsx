import React from "react";
import { Container, Flex, Text, Box } from "theme-ui";
import {
  rightCard,
  leftCard,
  itemsContentMethod,
  secondaryTextMethod,
  titleMethodCard,
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
          sx={{
            ...leftCard,
            width: "290px",
            height: "218px",
            maxWidth: "300px",
            "@media screen and (max-width: 719px)": {
              width: "48%",
              height: "189px",
              minHeight: "unset",
            },
          }}
          onClick={() => {
            changeValue("errors", { ...values.errors, agreementPrivacy: null });
            changeValue("agreementPrivacy", "");
            animateContainer();
            setPublic(true);
          }}
        >
          <Box sx={itemsContentMethod}>
            <div style={{ width: "50px", height: "50px", margin: "0 auto" }}>
              <Icon width="50px" height="50px" src={iconsObj.publicIcon} />
            </div>
            <Box>
              <Text sx={titleMethodCard}>Public</Text>
              <Text sx={secondaryTextMethod}>Accessed Publicly based on sharing options</Text>
            </Box>
          </Box>
        </Container>
        <Container
          sx={{
            ...rightCard,
            width: "290px",
            height: "218px",
            maxWidth: "300px",
            "@media screen and (max-width: 719px)": {
              width: "48%",
              height: "189px",
              minHeight: "unset",
            },
          }}
          onClick={() => changeValue("agreementPrivacy", PRIVACY_PRIVATE)}
          className={values?.agreementPrivacy === PRIVACY_PRIVATE ? "active" : undefined}
        >
          <Box sx={itemsContentMethod}>
            <div style={{ width: "50px", height: "50px", margin: "0 auto" }}>
              <Icon width="50px" height="50px" src={iconsObj.privateIcon} />
            </div>
            <Text sx={titleMethodCard}>Private</Text>
            <Text sx={secondaryTextMethod}>Accessed only by Signers or Observes</Text>
          </Box>
        </Container>
      </Container>
    </motion.main>
  );
}
