import React from "react";
import { Container, Flex, Text, Button, Box } from "theme-ui";
import { item, secondaryTitle, container } from "../../styles";
import { useCreateAgreement } from "../../../../hooks/useCreateAgreement";
import iconsObj from "../../../../assets/icons";
import Icon from "../../../icon";

import { AnimatePresence, motion, Variants } from "framer-motion";
import {
  PRIVACY_PUBLIC_PROOF_ONLY,
  PRIVACY_PUBLIC_PUBLISHED,
  PRIVACY_PUBLIC_WITH_LINK,
} from "../../../../types";

export type AnimateContainer = () => void;

export interface Props {
  animateContainer: AnimateContainer;
}
export interface PublicProps extends Props {
  setPublic: any;
}

const variants: Variants = {
  hidden: { opacity: 1, y: 200 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 1, x: 0, y: 200 },
};

export default function PublicMethod({ animateContainer, setPublic }: PublicProps) {
  const { values, changeValue } = useCreateAgreement();
  return (
    <AnimatePresence initial={false}>
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear" }}
      >
        <Container sx={container}>
          <Flex sx={{ alignItems: "center" }}>
            <Text sx={{ variant: "text.largeTextBold" }}>Public</Text>
            <Button
              onClick={() => {
                setPublic(false);
                animateContainer();
                changeValue("agreementPrivacy", "");
              }}
              sx={{ variant: "buttons.back" }}
            >
              <Box sx={{ width: "14px" }}>
                <Icon style={{ display: "block" }} src={iconsObj.arrowLeftPink} />
              </Box>
              <Text sx={{ display: "block" }}>Choose another privacy</Text>
            </Button>
          </Flex>
          <Flex
            sx={item}
            onClick={() => changeValue("agreementPrivacy", PRIVACY_PUBLIC_PUBLISHED)}
            className={values.agreementPrivacy === PRIVACY_PUBLIC_PUBLISHED ? "active" : undefined}
          >
            <Icon src={iconsObj.globe} />
            <Container sx={{ textAlign: "left", maxWidth: "290px", ml: "6px", pr: "5px" }}>
              <Text sx={{ variant: "text.smallTextBold", mb: "3px" }}>Published</Text>
              <Text sx={secondaryTitle}>
                Public and available on the your{" "}
                <Text sx={{ variant: "text.link" }}>public signature profile</Text>
              </Text>
            </Container>
          </Flex>
          <Flex
            sx={item}
            onClick={() => changeValue("agreementPrivacy", PRIVACY_PUBLIC_PROOF_ONLY)}
            className={values.agreementPrivacy === PRIVACY_PUBLIC_PROOF_ONLY ? "active" : undefined}
          >
            <Icon src={iconsObj.proofSecondary} />
            <Container sx={{ textAlign: "left", maxWidth: "295px", ml: "6px" }}>
              <Text sx={{ variant: "text.smallTextBold", mb: "3px" }}>Proof Only</Text>
              <Text sx={secondaryTitle}>
                Public Proof of Agreement available on your Public signature profile, but agreement
                content is hidden.
              </Text>
            </Container>
          </Flex>
          <Flex
            sx={item}
            onClick={() => changeValue("agreementPrivacy", PRIVACY_PUBLIC_WITH_LINK)}
            className={values.agreementPrivacy === PRIVACY_PUBLIC_WITH_LINK ? "active" : undefined}
          >
            <Icon src={iconsObj.ink} />
            <Container sx={{ textAlign: "left", maxWidth: "290px", ml: "6px" }}>
              <Text sx={{ variant: "text.smallTextBold", mb: "3px" }}>Anyone with Link</Text>
              <Text sx={secondaryTitle}>
                Public, but only available with an{" "}
                <Text sx={{ variant: "text.link" }}>agreement share link</Text>
              </Text>
            </Container>
          </Flex>
        </Container>
      </motion.main>
    </AnimatePresence>
  );
}
