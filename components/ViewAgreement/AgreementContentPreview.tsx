import React from "react";
import {
  contentCard,
  contentHiddenContainer,
  contentHiddenIconInnerWrapper,
  contentHiddenIconWrapper,
  contentHiddenMessage,
  contentTitle,
} from "./styles";
import { Box, Flex, ThemeUIStyleObject } from "theme-ui";
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

interface Props {
  textContent?: string;
  filePath?: string;
  fileIpfsHash?: string;
  agreementLocation: AgreementLocation | undefined;
  agreementPrivacy: AgreementPrivacy | string | undefined;
}

export const AgreementContentPreview = ({
  textContent,
  filePath,
  fileIpfsHash,
  agreementLocation,
  agreementPrivacy,
}: Props) => {
  const isContentHidden =
    agreementPrivacy === PRIVACY_PUBLIC_PROOF_ONLY ||
    agreementPrivacy === PRIVACY_PUBLIC_PROOF_ONLY_FULL_NAME;

  const textContentExtraStyles: ThemeUIStyleObject = isContentHidden
    ? {}
    : textContent
    ? { paddingBottom: "64px" }
    : { paddingBottom: "32px" };

  return (
    <Flex sx={{ ...contentCard, ...textContentExtraStyles }}>
      <Box sx={contentTitle}>Agreement</Box>
      {isContentHidden ? (
        <Flex sx={contentHiddenContainer}>
          <Box sx={contentHiddenMessage}>Agreement Content is Hidden by Privacy Settings</Box>
          <Box sx={contentHiddenIconWrapper}>
            <Box sx={contentHiddenIconInnerWrapper}>
              <Icon src={iconsObj.closedEye} />
            </Box>
          </Box>
        </Flex>
      ) : agreementLocation && (filePath || fileIpfsHash) ? (
        <AgreementUploadedFilePreview
          agreementLocation={agreementLocation}
          filePath={filePath}
          fileIpfsHash={fileIpfsHash}
        />
      ) : textContent ? (
        <AgreementTextMarkdownPreview textContent={textContent} />
      ) : null}
    </Flex>
  );
};
