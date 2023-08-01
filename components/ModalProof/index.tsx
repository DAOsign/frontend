import React, { useEffect, useState } from "react";
import { Flex, Text, Button, Box, Container, Link, Spinner } from "theme-ui";
import Icon from "../icon/index";
import iconsObj from "../../assets/icons";
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
  hideOnMobile,
} from "./styles";
import { Portal } from "../Portal/Portal";
import { ModalBase } from "../ModalBase/ModalBase";

import dynamic from "next/dynamic";
import { AgreementSignProof } from "../../modules/graphql/gql/graphql";
import { getFileFromIPFS } from "../../modules/rest";
import { formatAddress } from "../../utils/formats";
import { AGREEMENT_PROOF, AUTHORITY_PROOF } from "../ViewAgreement/AgreementInformation";

const ReactJson = dynamic(() => import("react-json-view"), { ssr: false });

//TODO move to envs
const IPFS_GATEWAY_URL = `${process.env.NEXT_PUBLIC_PINATA_GATEWAY}/ipfs`;

interface Props {
  isOpen: boolean;
  onExit: () => void;
  title: string;
  proof: { cid: string; signature?: string } | AgreementSignProof;
}

export default function ModalProof({ isOpen, onExit, title, proof }: Props) {
  const [showDetails, setShowDetails] = useState(false);
  const [{ proofJSON, loading }, setProofJSON] = useState<{
    proofJSON: Record<string, any> | undefined;
    loading: boolean;
  }>({
    loading: true,
    proofJSON: undefined,
  });

  const nameTite = () => {
    if (title === AGREEMENT_PROOF) return "Agreement";
    if (title === AUTHORITY_PROOF) return "Identity";
    return "Signature";
  };

  const handleShowDetails = async () => {
    setShowDetails(prev => !prev);
  };

  useEffect(() => {
    if (proof && proof.cid) {
      getFileFromIPFS(proof!.cid!).then(proof => {
        setProofJSON({ loading: false, proofJSON: proof });
      });
    }
  }, [proof]);

  const onClose = () => {
    setShowDetails(false);
    onExit();
  };
  return (
    <Portal isOpen={isOpen && !!proof} onClose={onClose}>
      <ModalBase height={"fit-content"} width={undefined}>
        <Flex sx={container}>
          <Box onClick={onClose} sx={closeIcon}>
            <Icon src={iconsObj.xClose} />
          </Box>
          <Text sx={mainText}>Proof-of-{nameTite()}</Text>
          <Flex sx={box}>
            <Box>
              <Text sx={secondaryTitle}>Proof of {nameTite()}</Text>
            </Box>
            <Link
              onClick={() =>
                window.open(`${IPFS_GATEWAY_URL}/${proof.cid}`, "_blank", "noreferrer")
              }
            >
              <Flex sx={{ alignItems: "center", cursor: "pointer" }}>
                <Text sx={text}>{showDetails ? proof?.cid : formatAddress(proof?.cid || "")}</Text>
                <Box sx={linkContainer}>
                  <Icon src={iconsObj.link} />
                </Box>
              </Flex>
            </Link>
            <Box sx={hideOnMobile}>
              {loading ? (
                <Spinner width="20px" />
              ) : (
                <Box onClick={handleShowDetails} sx={arrowContainer}>
                  <Icon src={iconsObj.arrowLeftPink} />
                </Box>
              )}
            </Box>
          </Flex>
          {showDetails && proofJSON ? (
            <>
              <Container sx={containerProof}>
                <ReactJson src={proofJSON} name={null} />
              </Container>
              <Box
                sx={{ ...proofPadding, bottom: title !== AGREEMENT_PROOF ? "113px" : "30px" }}
              ></Box>
            </>
          ) : null}
          {title !== AGREEMENT_PROOF && proof.cid && (
            <a
              href={`https://signator.io/view?ipfs=${proof?.cid}`}
              target="_blank"
              rel="noreferrer"
            >
              <Button sx={btnContainer}>Verify on Signator.io</Button>
            </a>
          )}
        </Flex>
      </ModalBase>
    </Portal>
  );
}
