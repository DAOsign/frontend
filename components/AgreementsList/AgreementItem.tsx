import React from "react";
import { Flex, Text, Box, Button, Link } from "theme-ui";
import NextLink from "next/link";
import Icon from "../icon/index";
import iconsObj from "../../assets/icons";
import {
  agreementConteinerRelative,
  agreementConteiner,
  iconMenuAgreement,
  greyAgrLabel,
  headerItem,
  blueAgrLabel,
  agreementLabels,
  needSigningIcon,
} from "./styles";
import {
  Agreement,
  STATUS_READY_TO_SIGN,
  PRIVACY_PRIVATE,
  PRIVACY_PUBLIC_WITH_LINK,
  PRIVACY_PUBLIC_PROOF_ONLY,
  PRIVACY_PUBLIC_PUBLISHED,
} from "../../types";
import { formatAgreementCreationDate, formatAgreementStatus } from "../../utils/formats";
import SignatureIcon from "../icon/editable/SignatureIcon";

export default function AgreementItem({
  agreementPrivacy,
  agreementStatus,
  agreementId,
  observers,
  signers,
  title,
  isWaitingForMySignature,
  createdAt,
}: Agreement) {
  return (
    <NextLink href={`/agreement/${agreementId}`}>
      <Link sx={agreementConteinerRelative}>
        <Flex sx={agreementConteiner}>
          <Flex sx={headerItem}>
            <Flex sx={{ alignItems: "center", fontSize: "14px" }}>
              <Box sx={{ width: "14px", opacity: "0.5" }}>
                <Icon style={{ cursor: "pointer" }} src={iconsObj.calendar} />
              </Box>
              <Text sx={{ variant: "text.smallTextMedium", opacity: "0.5", ml: "6px" }}>
                Created:
              </Text>
              <Text sx={{ variant: "text.smallTextMediumUser", ml: "5px" }}>
                {formatAgreementCreationDate(createdAt)}
              </Text>
            </Flex>
            <Flex sx={agreementLabels}>
              {isWaitingForMySignature ? (
                <Box sx={needSigningIcon}>
                  <SignatureIcon />
                </Box>
              ) : null}
              <Box sx={agreementStatus === STATUS_READY_TO_SIGN ? blueAgrLabel : greyAgrLabel}>
                {formatAgreementStatus(agreementStatus)}
              </Box>
              <Flex sx={iconMenuAgreement}>
                <Box sx={{ width: "20px", height: "20px" }}>
                  {agreementPrivacy === PRIVACY_PRIVATE ? (
                    <Icon src={iconsObj.privateIcon} />
                  ) : (
                    <Icon src={iconsObj.publicIcon} />
                  )}
                </Box>
              </Flex>
            </Flex>
          </Flex>
          <Text sx={{ variant: "text.largeTextBold", pt: "12px" }}>{title}</Text>
          <Flex sx={{ pt: "8px" }}>
            <Text sx={{ variant: "text.smallTextMedium", opacity: "0.5", mr: "6px" }}>
              Signers:
            </Text>
            <Text sx={{ variant: "text.smallTextMediumUser", mr: "20px" }}>{signers.length}</Text>
            <Text sx={{ variant: "text.smallTextMedium", opacity: "0.5", mr: "6px" }}>Signed:</Text>
            <Text sx={{ variant: "text.smallTextMediumUser", mr: "20px" }}>0</Text>
            <Text sx={{ variant: "text.smallTextMedium", opacity: "0.5", mr: "6px" }}>
              Observers:
            </Text>
            <Text sx={{ variant: "text.smallTextMediumUser", mr: "20px" }}>{observers.length}</Text>
            {agreementPrivacy !== PRIVACY_PRIVATE ? (
              <Box>
                <Text sx={{ variant: "text.smallTextMedium", opacity: "0.5", mr: "6px" }}>
                  Access:
                </Text>
                <Text sx={{ variant: "text.smallTextMediumUser", mr: "20px" }}>
                  {
                    //@ts-ignore
                    agreementPrivacy !== "With Link" ? agreementPrivacy : "Anyone With Link"
                  }
                </Text>
              </Box>
            ) : null}
          </Flex>
        </Flex>
        <div style={{ height: "20px" }}></div>
      </Link>
    </NextLink>
  );
}
