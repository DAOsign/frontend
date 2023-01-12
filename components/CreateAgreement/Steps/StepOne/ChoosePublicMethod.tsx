import React from "react";
import NextLink from "next/link";
import { Container, Flex, Text, Button, Box, Link } from "theme-ui";
import { item, secondaryTitle, container, btnBack } from "../../styles";
import { useCreateAgreement } from "../../../../hooks/useCreateAgreement";
import { useEditAgreement } from "../../../../hooks/useEditAgreement";
import iconsObj from "../../../../assets/icons";
import Icon from "../../../icon";

import { motion, Variants } from "framer-motion";
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
  page: string;
}

const variants: Variants = {
  hidden: { opacity: 1, y: 200 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 1, x: 0, y: 200 },
};

export default function PublicMethod({ animateContainer, setPublic, page }: PublicProps) {
  const create = useCreateAgreement();
  const edit = useEditAgreement();
  const { values, changeValue } = page === "create" ? create : edit;
  return (
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
            sx={btnBack}
          >
            <Box sx={{ width: "14px" }}>
              <Icon style={{ display: "block" }} width="14px" src={iconsObj.arrowLeftPink} />
            </Box>
            <Text sx={{ display: "block" }}>Choose another privacy</Text>
          </Button>
        </Flex>
        <Flex
          sx={item}
          onClick={() => changeValue("agreementPrivacy", PRIVACY_PUBLIC_PUBLISHED)}
          className={values.agreementPrivacy === PRIVACY_PUBLIC_PUBLISHED ? "active" : undefined}
        >
          <Box sx={{ width: "20px" }}>
            <Icon width="100%" height="100%" src={iconsObj.globe} />
          </Box>
          <Container sx={{ textAlign: "left", maxWidth: "290px", m: "0", pr: "5px" }}>
            <Text sx={{ variant: "text.smallTextBold", mb: "3px" }}>Published</Text>
            <Text sx={secondaryTitle}>
              Public and available on the your{" "}
              <NextLink href={"/"} passHref legacyBehavior prefetch={false}>
                <Link
                  sx={{ variant: "text.linkUnderline" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={event => {
                    event.stopPropagation();
                  }}
                >
                  public signature profile
                </Link>
              </NextLink>
            </Text>
          </Container>
        </Flex>
        <Flex
          sx={item}
          onClick={() => changeValue("agreementPrivacy", PRIVACY_PUBLIC_PROOF_ONLY)}
          className={values.agreementPrivacy === PRIVACY_PUBLIC_PROOF_ONLY ? "active" : undefined}
        >
          <Box sx={{ width: "20px" }}>
            <Icon src={iconsObj.proofSecondary} />
          </Box>
          <Container sx={{ textAlign: "left", maxWidth: "295px", m: "0" }}>
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
          <Box sx={{ width: "20px" }}>
            <Icon src={iconsObj.ink} />
          </Box>
          <Container sx={{ textAlign: "left", maxWidth: "290px", m: "0" }}>
            <Text sx={{ variant: "text.smallTextBold", mb: "3px" }}>Anyone with Link</Text>
            <Text sx={secondaryTitle}>
              Public, but only available with an{" "}
              <NextLink href={"/"} passHref legacyBehavior prefetch={false}>
                <Link
                  sx={{ variant: "text.linkUnderline" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={event => {
                    event.stopPropagation();
                  }}
                >
                  agreement share link
                </Link>
              </NextLink>
            </Text>
          </Container>
        </Flex>
      </Container>
    </motion.main>
  );
}
