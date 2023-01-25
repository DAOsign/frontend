import React from "react";
import { Flex, Text, Box, Button, Link } from "theme-ui";
import NextLink from "next/link";
import Icon from "../icon/index";
import iconsObj from "../../assets/icons";
import styles from "../Header/index.module.css";

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
                <div style={{ paddingTop: 0 }} className={`${styles.tooltip}`}>
                  <button className={`${styles.tooltip_button}`}>
                    <Box sx={needSigningIcon}>
                      <SignatureIcon />
                    </Box>
                  </button>
                  <div
                    style={{
                      top: "-48px",
                      left: "50%",
                      transform: "translate(-58%, -3%)",
                      pointerEvents: "none",
                      minWidth: "170px",
                    }}
                    className={`${styles.tooltip_container}`}
                  >
                    <div
                      style={{ justifyContent: "center", pointerEvents: "none" }}
                      className={`${styles.tooltip_text}`}
                    >
                      Your signature is missing
                    </div>
                    <div
                      style={{ marginLeft: "50.5%", pointerEvents: "none" }}
                      className={`${styles.tooltip_text_buttom}`}
                    ></div>
                  </div>
                </div>
              ) : null}
              <Box sx={agreementStatus === STATUS_READY_TO_SIGN ? blueAgrLabel : greyAgrLabel}>
                {formatAgreementStatus(agreementStatus)}
              </Box>
              <Flex sx={iconMenuAgreement}>
                <div style={{ paddingTop: 0 }} className={`${styles.tooltip}`}>
                  <button style={{ height: "35px" }} className={`${styles.tooltip_button}`}>
                    <Box sx={{ width: "20px", height: "20px" }}>
                      {agreementPrivacy === PRIVACY_PRIVATE ? (
                        <Icon src={iconsObj.privateIcon} />
                      ) : (
                        <Icon src={iconsObj.publicIcon} />
                      )}
                    </Box>
                  </button>
                  <div
                    style={{
                      top: "-48px",
                      left: "50%",
                      transform:
                        //@ts-ignore
                        agreementPrivacy !== "With Link"
                          ? "translate(-65%, 0px)"
                          : "translate(-60%, -3%)",
                      pointerEvents: "none",
                      //@ts-ignore
                      minWidth: agreementPrivacy !== "With Link" ? "85px" : "130px",
                    }}
                    className={`${styles.tooltip_container}`}
                  >
                    <div
                      style={{ justifyContent: "center", pointerEvents: "none" }}
                      className={`${styles.tooltip_text}`}
                    >
                      {
                        //@ts-ignore
                        agreementPrivacy !== "With Link" ? agreementPrivacy : "Anyone With Link"
                      }
                    </div>
                    <div
                      style={{ marginLeft: "50.5%", pointerEvents: "none" }}
                      className={`${styles.tooltip_text_buttom}`}
                    ></div>
                  </div>
                </div>
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
      </Link>
    </NextLink>
  );
}
