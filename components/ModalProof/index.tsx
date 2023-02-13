import React, { useState } from "react";
import { Flex, Text, Button, Box, Container, Link } from "theme-ui";
import Icon from "../icon/index";
import iconsObj from "../../assets/icons";
import proof from "./example.json";
import {
  secondaryTitle,
  arrowContainer,
  containerProof,
  linkContainer,
  proofPadding,
  btnContainer,
  closeIcon,
  container,
  mainText,
  text,
  box,
} from "./styles";
import { Portal } from "../Portal/Portal";
import { ModalBase } from "../ModalBase/ModalBase";
import { AGREEMENT_PROOF, AUTHORITY_PROOF } from "../ViewAgreement/InformationRow";
import dynamic from "next/dynamic";

const ReactJson = dynamic(() => import("react-json-view"), { ssr: false });

interface Props {
  isOpen: boolean;
  onExit: () => void;
  title: string;
}

export default function ModalProof({ isOpen, onExit, title }: Props) {
  const [openProof, setOpenProff] = useState(false);

  const nameTite = () => {
    if (title === AGREEMENT_PROOF) return "agreement";
    if (title === AUTHORITY_PROOF) return "authority";
    return "signature";
  };

  const JsonConfig = {
    type: "front end",
    items: [proof],
  };
  return (
    <Portal isOpen={isOpen}>
      <ModalBase height={"fit-content"} width={undefined}>
        <Flex sx={container}>
          <Box onClick={onExit} sx={closeIcon}>
            <Icon src={iconsObj.xClose} />
          </Box>
          <Text sx={mainText}>Proof</Text>
          <Flex sx={box}>
            <Box>
              <Text sx={secondaryTitle}>Proof of {nameTite()}</Text>
            </Box>
            <Link onClick={() => window.open("/proofContent", "_blank")}>
              <Flex sx={{ alignItems: "center", cursor: "pointer" }}>
                <Text sx={text}>#bafk...oowa</Text>
                <Box sx={linkContainer}>
                  <Icon src={iconsObj.link} />
                </Box>
              </Flex>
            </Link>
            <Box onClick={() => setOpenProff(!openProof)} sx={arrowContainer}>
              <Icon src={iconsObj.arrowLeftPink} />
            </Box>
          </Flex>
          {openProof ? (
            <>
              <Container sx={containerProof}>
                <ReactJson src={JsonConfig} />
              </Container>
              <Box
                sx={{ ...proofPadding, bottom: title !== AGREEMENT_PROOF ? "113px" : "30px" }}
              ></Box>
            </>
          ) : null}
          {title !== AGREEMENT_PROOF ? (
            <Link onClick={() => window.open("https://signator.io/", "_blank")}>
              <Button sx={btnContainer}>Verify on Signator.io</Button>
            </Link>
          ) : null}
        </Flex>
      </ModalBase>
    </Portal>
  );
}
