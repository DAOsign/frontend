import React, { useEffect, useState } from "react";
import { Flex, Text, Button, Box, Container, Link, Spinner } from "theme-ui";
import {
  secondaryTitle,
  arrowContainer,
  containerProof,
  btnContainer,
  closeIcon,
  mainText,
  text,
  box,
  iconContainer,
} from "./styles";
import { Portal } from "../Portal/Portal";
import { ModalBase } from "../ModalBase/ModalBase";

import dynamic from "next/dynamic";
import { AgreementSignProof } from "../../modules/graphql/gql/graphql";
import { getFileFromIPFS } from "../../modules/rest";
import { formatAddress, onCopyClick, formatStoredAddress } from "../../utils/formats";
import { AGREEMENT_PROOF, IDENTITY_PROOF } from "../ViewAgreement/AgreementInformation";
import CopyIcon from "../CopyIcon";
import {  tableAddressCell } from "../ViewAgreement/styles";
import Tooltip from "../Tooltip";
import CloseIcon from "../IconComponent/CloseIcon";
import { notifSuccess } from "../../utils/notification";
import LinkIcon from "../IconComponent/LincIcon";
import ArrowLeftPink from "../ArrowLeftPink";
import {
  bg,
  flexContent,
  modalBase,
} from "../ModalImportSnapshot/styles";

const ReactJson = dynamic(() => import("react-json-view"), { ssr: false });

//TODO move to envs
const IPFS_GATEWAY_URL = `${process.env.NEXT_PUBLIC_PINATA_GATEWAY}/ipfs`;

interface Props {
  isOpen: boolean;
  onExit: () => void;
  title: string;
  proof: { cid: string; signature?: string; blockchainStored?: string } | AgreementSignProof;
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

  const nameTitle = () => {
    if (title === AGREEMENT_PROOF) return "Agreement";
    if (title === IDENTITY_PROOF) return "Authority";
    return "Signature";
  };

  const handleShowDetails = async () => {
    setShowDetails(prev => !prev);
  };

  const handleCopyIPFSProofLink = (link: string) => {
    onCopyClick(link);
    notifSuccess("Link to IPFS Proof Copied");
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
    <Portal sx={bg} isOpen={isOpen && !!proof} onClose={onClose}>
      <ModalBase height='auto' sx={modalBase}>
        <Flex sx={flexContent}>
          <Box onClick={onClose} sx={closeIcon}>
            <CloseIcon />
          </Box>
          <Text sx={mainText}>Proof-of-{nameTitle()}</Text>
          <Flex sx={{...box, justifyContent: 'space-between'}}>
            <Flex>
              <Box>
                <Text sx={secondaryTitle}>Proof of {nameTitle()}</Text>
              </Box>
              <Link
                  onClick={() =>
                      window.open(`${IPFS_GATEWAY_URL}/${proof.cid}`, "_blank", "noreferrer")
                  }
              >
                <Flex sx={{ alignItems: "center", cursor: "pointer" }}>
                  <Text sx={text}>{formatAddress(proof?.cid || "")}</Text>
                  <Box sx={iconContainer}>
                    <LinkIcon />
                  </Box>
                </Flex>
              </Link>
              <Flex
                  className="signature_icon"
                  sx={{...tableAddressCell, marginLeft: '8px'}}
                  onClick={() => handleCopyIPFSProofLink(`ipfs://${proof.cid}`)}
              >
                <Tooltip top="-45px" left="-115px" title={`ipfs://${proof.cid}`}>
                  <Box sx={{ cursor: "pointer" }}></Box>
                </Tooltip>
                <Box sx={iconContainer}>
                  <CopyIcon />
                </Box>
              </Flex>
            </Flex>

            <Box >
              {loading ? (
                <Spinner width="20px" />
              ) : (
                <Box onClick={handleShowDetails} sx={arrowContainer}>
                  <ArrowLeftPink />
                </Box>
              )}
            </Box>
          </Flex>
          {proof?.blockchainStored && (
            <Flex sx={{ ...box, mt: "12px" }}>
              <Box>
                <Text sx={secondaryTitle}>Blockchain</Text>
              </Box>
              <Link onClick={() => window.open(proof.blockchainStored!, "_blank", "noreferrer")}>
                <Flex sx={{ alignItems: "center", cursor: "pointer" }}>
                  <Text sx={text}>{formatStoredAddress(proof?.blockchainStored)}</Text>
                  <Box sx={iconContainer}>
                    <LinkIcon />
                  </Box>
                </Flex>
              </Link>
            </Flex>
          )}
          {showDetails && proofJSON ? (
            <>
              <Container sx={containerProof}>
                <ReactJson src={proofJSON} name={null} />
              </Container>
              {/*<Box*/}
              {/*  sx={{ ...proofPadding, bottom: title !== AGREEMENT_PROOF ? "113px" : "30px" }}*/}
              {/*></Box>*/}
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
