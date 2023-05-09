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
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {
  Agreement,
  STATUS_READY_TO_SIGN,
  PRIVACY_PRIVATE,
  STATUS_DRAFT,
  STATUS_PARTIALLY_SIGNED,
  STATUS_SIGNED,
} from "../../types";
import { formatAgreementCreationDate, formatAgreementStatus } from "../../utils/formats";
import SignatureIcon from "../icon/editable/SignatureIcon";
import { greenLabel, yellowLabel } from "../ViewAgreement/styles";

export default function AgreementItem({
  agreementPrivacy,
  agreementStatus,
  agreementUri,
  observers,
  signers,
  title,
  isWaitingForMySignature,
  createdAt,
  signProofAmount,
}: Agreement) {
  const { width } = useWindowDimensions();
  const titleTooltip = (value: string) => {
    // Agreement Privacy: Public, published.
    if (value === "Private") {
      return "Agreement Privacy: Private";
    } else if (value === "With Link") {
      return "Agreement Privacy: Anyone With Link";
    } else if (value === "Published") {
      return `Agreement Privacy: Public, published `;
    } else {
      return `Agreement Privacy: ${value} `;
    }
  };

  const statusSx = () => {
    switch (agreementStatus) {
      case STATUS_READY_TO_SIGN:
        return blueAgrLabel;
      case STATUS_DRAFT:
        return greyAgrLabel;
      case STATUS_PARTIALLY_SIGNED:
        return yellowLabel;
      case STATUS_SIGNED:
        return greenLabel;
      default:
        return greyAgrLabel;
    }
  };

  return (
    <NextLink href={`/agreement/${agreementUri}`}>
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
                  //@ts-ignore
                  left={width < 720 ? "166% " : "63%"}
                  top="-45px"
                  height="0"
                >
                  <Box sx={needSigningIcon}>
                    <SignatureIcon />
                  </Box>
                </Tooltip>
              ) : null}
              <Tooltip
                top="-46px"
                height="0"
                left="58%"
                transform={"translate(-60%, -3%)"}
                title={"Agreement Status"}
                minWidth="135px"
              >
                <Box sx={statusSx()}>{formatAgreementStatus(agreementStatus)}</Box>
              </Tooltip>
              <Flex sx={iconMenuAgreement}>
                <Tooltip
                  top="-68px"
                  height="0"
                  //@ts-ignore
                  left={width < 720 ? "151% " : "65%"}
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
              pb: "16px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "30px",
            }}
          >
            {title}
          </Box>
          <Flex sx={{ flexWrap: "wrap" }}>
            <Box sx={{ mr: "20px", pb: "12px" }}>
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
              <Text sx={{ variant: "text.smallTextMediumUser", ...titleSigners }}>
                {signers.length}
              </Text>
            </Box>
            <Box sx={{ mr: "20px", pb: "12px" }}>
              <Text
                sx={{ variant: "text.smallTextMedium", opacity: "0.5", mr: "4px", ...titleSigners }}
              >
                Signed:
              </Text>
              <Text sx={{ variant: "text.smallTextMediumUser", ...titleSigners }}>
                {signProofAmount}
              </Text>
            </Box>
            <Box sx={{ mr: "20px", pb: "12px" }}>
              <Text
                sx={{ variant: "text.smallTextMedium", opacity: "0.5", mr: "4px", ...titleSigners }}
              >
                Observers:
              </Text>
              <Text sx={{ variant: "text.smallTextMediumUser", ...titleSigners }}>
                {observers.length}
              </Text>
            </Box>
            <Box sx={{ ...titleSigners, mr: "20px", pb: "12px" }}>
              <Text
                sx={{
                  variant: "text.smallTextMedium",
                  opacity: "0.5",
                  mr: "6px",
                }}
              >
                Access:
              </Text>
              <Text sx={{ variant: "text.smallTextMediumUser", ...titleSigners }}>
                {
                  //@ts-ignore
                  agreementPrivacy !== "With Link" ? agreementPrivacy : "Anyone With Link"
                }
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Link>
    </NextLink>
  );
}
