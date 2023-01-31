import React from "react";
import { Flex, Text, Box, Link } from "theme-ui";
import NextLink from "next/link";
import Icon from "../icon/index";
import iconsObj from "../../assets/icons";
import Tooltip from "../Tooltip";

import {
  agreementConteinerRelative,
  agreementConteiner,
  iconMenuAgreement,
  greyAgrLabel,
  headerItem,
  blueAgrLabel,
  agreementLabels,
  needSigningIcon,
  titleSigners,
} from "./styles";
import { Agreement, STATUS_READY_TO_SIGN, PRIVACY_PRIVATE } from "../../types";
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
  const titleTooltip = (value: string) => {
    if (value === "Private") {
      return "Agreement Privacy: Private";
    } else if (value === "With Link") {
      return "Agreement Privacy: Anyone With Link";
    } else {
      return `Agreement Privacy: ${value} `;
    }
  };
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
                <Tooltip
                  title="Your signature is missing"
                  transform="translate(-58%, -3%)"
                  minWidth="170px"
                  left="63%"
                  top="-45px"
                  height="0"
                >
                  <Box sx={needSigningIcon}>
                    <SignatureIcon />
                  </Box>
                </Tooltip>
              ) : null}
              <Box sx={agreementStatus === STATUS_READY_TO_SIGN ? blueAgrLabel : greyAgrLabel}>
                {formatAgreementStatus(agreementStatus)}
              </Box>
              <Flex sx={iconMenuAgreement}>
                <Tooltip
                  top="-68px"
                  height="0"
                  // ""
                  left="65%"
                  transform={
                    //@ts-ignore
                    agreementPrivacy !== "With Link"
                      ? "translate(-60%, -3%)"
                      : "translate(-60%, -3%)"
                  }
                  title={titleTooltip(agreementPrivacy)}
                  minWidth={
                    //@ts-ignore
                    agreementPrivacy !== "With Link" ? "135px" : "135px"
                  }
                >
                  <Box sx={{ width: "20px", height: "20px" }}>
                    {agreementPrivacy === PRIVACY_PRIVATE ? (
                      <Icon src={iconsObj.privateIcon} />
                    ) : (
                      <Icon src={iconsObj.publicIcon} />
                    )}
                  </Box>
                </Tooltip>
              </Flex>
            </Flex>
          </Flex>
          <Box
            sx={{
              variant: "text.largeTextBold",
              pt: "12px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "30px",
            }}
          >
            {title}
          </Box>
          <Flex sx={{ flexWrap: "wrap" }}>
            <Text
              sx={{
                variant: "text.smallTextMedium",
                opacity: "0.5",
                mr: "6px",
                ...titleSigners,
              }}
            >
              Signers:
            </Text>
            <Text sx={{ variant: "text.smallTextMediumUser", mr: "20px", ...titleSigners }}>
              {signers.length}
            </Text>
            <Text
              sx={{ variant: "text.smallTextMedium", opacity: "0.5", mr: "6px", ...titleSigners }}
            >
              Signed:
            </Text>
            <Text sx={{ variant: "text.smallTextMediumUser", mr: "20px", ...titleSigners }}>0</Text>
            <Text
              sx={{ variant: "text.smallTextMedium", opacity: "0.5", mr: "6px", ...titleSigners }}
            >
              Observers:
            </Text>
            <Text sx={{ variant: "text.smallTextMediumUser", mr: "20px", ...titleSigners }}>
              {observers.length}
            </Text>
            {agreementPrivacy !== PRIVACY_PRIVATE ? (
              <Box sx={titleSigners}>
                <Text
                  sx={{
                    variant: "text.smallTextMedium",
                    opacity: "0.5",
                    mr: "6px",
                  }}
                >
                  Access:
                </Text>
                <Text sx={{ variant: "text.smallTextMediumUser", mr: "20px", ...titleSigners }}>
                  {
                    //@ts-ignore
                    agreementPrivacy !== "With Link" ? agreementPrivacy : "Anyone With Link"
                  }
                </Text>
              </Box>
            ) : null}
          </Flex>
        </Flex>
      </Link>
    </NextLink>
  );
}
