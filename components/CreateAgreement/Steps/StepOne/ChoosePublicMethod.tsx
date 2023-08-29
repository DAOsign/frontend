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
  hidden: { opacity: 1, y: 80, transition: { duration: 0.5 } },
  enter: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 1, x: 0, y: 80, transition: { duration: 0.5 } },
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
        <Flex sx={{ alignItems: "center", pb: "16px" }}>
          <Text sx={{ variant: "text.largeTextBold" }}>Public</Text>
          <Button
            onClick={() => {
              setPublic(false);
              animateContainer();
              changeValue("agreementPrivacy", "");
            }}
            sx={btnBack}
          >
            <Box sx={{ width: "18px" }}>
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
          <Container sx={{ textAlign: "left", m: "0", pr: "5px" }}>
            <Text sx={{ variant: "text.smallTextBold", mb: "3px" }}>Published</Text>
            <Text sx={secondaryTitle}>
              Available on{" "}
              <NextLink href={"/"} passHref legacyBehavior prefetch={false}>
                <Link
                  sx={{ variant: "text.linkUnderline", "&:hover": { color: "#AE4FD0" } }}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={event => {
                    event.stopPropagation();
                  }}
                >
                  Signer Profile
                </Link>
              </NextLink>{" "}
              with all content and proofs visible to Public users
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
          <Container sx={{ textAlign: "left", m: "0" }}>
            <Text sx={{ variant: "text.smallTextBold", mb: "3px" }}>Proof Only</Text>
            <Text sx={secondaryTitle}>
              Available on{" "}
              <NextLink href={"/"} passHref legacyBehavior prefetch={false}>
                <Link
                  sx={{ variant: "text.linkUnderline", "&:hover": { color: "#AE4FD0" } }}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={event => {
                    event.stopPropagation();
                  }}
                >
                  Signer Profile
                </Link>
              </NextLink>{" "}
              with proofs, but agreement content is NOT visible to Public users (only to Signers or
              Observers)
            </Text>
          </Container>
        </Flex>
        <Flex
          sx={{ ...item, mb: 0 }}
          onClick={() => changeValue("agreementPrivacy", PRIVACY_PUBLIC_WITH_LINK)}
          className={values.agreementPrivacy === PRIVACY_PUBLIC_WITH_LINK ? "active" : undefined}
        >
          <Box sx={{ width: "20px" }}>
            <Icon src={iconsObj.ink} />
          </Box>
          <Container sx={{ textAlign: "left", m: "0" }}>
            <Text sx={{ variant: "text.smallTextBold", mb: "3px" }}>Anyone with Link</Text>
            <Text sx={secondaryTitle}>
              Available with all content and proofs visible to Public users with Agreement Link, but
              NOT published on{" "}
              <NextLink href={"/"} passHref legacyBehavior prefetch={false}>
                <Link
                  sx={{ variant: "text.linkUnderline", "&:hover": { color: "#AE4FD0" } }}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={event => {
                    event.stopPropagation();
                  }}
                >
                  Signer Profile
                </Link>
              </NextLink>
            </Text>
          </Container>
        </Flex>
      </Container>
    </motion.main>
  );
}
