/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from "react";
import {
  contentCard,
  contentHiddenContainer,
  contentHiddenIconInnerWrapper,
  contentHiddenIconWrapper,
  contentHiddenMessage,
  contentTitle,
  noObserversMessage,
} from "./styles";
import { Box, Container, Text, Flex, ThemeUIStyleObject } from "theme-ui";
import {
  AgreementLocation,
  AgreementPrivacy,
  PRIVACY_PUBLIC_PROOF_ONLY,
  PRIVACY_PUBLIC_PROOF_ONLY_FULL_NAME,
} from "../../types";
import { AgreementUploadedFilePreview } from "./AgreementUploadedFilePreview";
import { AgreementTextMarkdownPreview } from "./AgreementTextMarkdownPreview";
import Icon from "../icon";
import iconsObj from "../../assets/icons";
import { noContent } from "../AgreementsList/styles";
import { toAgreementWithParticipants } from "../../utils/typeUtils";
import { useWeb3 } from "../../hooks/useWeb3";

interface Props {
  agreement?: ReturnType<typeof toAgreementWithParticipants> | null;
  textContent?: string;
  filePath?: string;
  fileIpfsHash?: string;
  agreementLocation: AgreementLocation | undefined;
  agreementPrivacy: AgreementPrivacy | string | undefined;
}

export const AgreementContentPreview = ({
  agreementLocation,
  agreementPrivacy,
  fileIpfsHash,
  textContent,
  agreement,
  filePath,
}: Props) => {
  const { account } = useWeb3();

  const isAllowedToSeeContent = useMemo(() => {
    const isProofOnly =
      agreementPrivacy === PRIVACY_PUBLIC_PROOF_ONLY ||
      agreementPrivacy === PRIVACY_PUBLIC_PROOF_ONLY_FULL_NAME;
    if (!isProofOnly) return true;
    const userAddress = account?.toLowerCase();
    const userIsSigner = agreement?.signers.some(s => s.wallet?.address === userAddress);
    if (userIsSigner) return true;
    const userIsObserver = agreement?.observers.some(s => s.wallet?.address === userAddress);

    if (userIsObserver) return true;

    return false;
  }, [agreement, account]);

  const textContentExtraStyles: ThemeUIStyleObject = isAllowedToSeeContent
    ? {}
    : textContent
    ? { paddingBottom: "64px" }
    : { paddingBottom: "32px" };

  return (
    <Flex sx={{ ...contentCard, ...textContentExtraStyles }}>
      <Box sx={contentTitle}>Agreement</Box>
      {!isAllowedToSeeContent ? (
        <Flex sx={contentHiddenContainer}>
          <Box sx={contentHiddenMessage}>Agreement Content is Hidden by Privacy Settings</Box>
          <Box sx={contentHiddenIconWrapper}>
            <Box sx={contentHiddenIconInnerWrapper}>
              <Icon src={iconsObj.closedEye} />
            </Box>
          </Box>
        </Flex>
      ) : textContent ? (
        <AgreementTextMarkdownPreview textContent={textContent} />
      ) : agreementLocation && (filePath || fileIpfsHash) ? (
        <AgreementUploadedFilePreview
          agreementLocation={agreementLocation}
          fileIpfsHash={fileIpfsHash}
          filePath={filePath}
        />
      ) : (
        <div>
          <Container sx={{ textAlign: "center", pt: "32px", pb: "72px" }}>
            <Flex sx={{ justifyContent: "center" }}>
              <Box sx={{ width: "80px", height: "80px", m: "20px auto 12px" }}>
                <Icon src={iconsObj.whitoutUser} />
              </Box>
            </Flex>
            <Text sx={{ ...noObserversMessage }}>{`The agreement has no content yet`}</Text>
          </Container>
        </div>
      )}
    </Flex>
  );
};
