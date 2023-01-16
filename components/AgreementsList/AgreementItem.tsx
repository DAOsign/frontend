import React from "react";
import { Flex, Text, Box, Button, Link } from "theme-ui";
import NextLink from "next/link";
import Icon from "../icon/index";
import iconsObj from "../../assets/icons";
import {
  agreementConteinerRelative,
  agreementConteiner,
  iconMenuAgreement,
  greyAgrBtn,
  headerItem,
  blueAgrBtn,
} from "./styles";
import {
  Agreement,
  STATUS_READY_TO_SIGN,
  PRIVACY_PRIVATE,
  PRIVACY_PUBLIC_WITH_LINK,
  PRIVACY_PUBLIC_PROOF_ONLY,
  PRIVACY_PUBLIC_PUBLISHED,
} from "../../types";

export default function AgreementItem({
  agreementPrivacy,
  agreementStatus,
  agrementId,
  observers,
  signers,
  title,
}: Agreement) {
  return (
    <NextLink href={`/edit/${agrementId}?step=1`}>
      <Link sx={agreementConteinerRelative}>
        <Flex sx={agreementConteiner}>
          <Flex sx={headerItem}>
            <Flex sx={{ alignItems: "center" }}>
              <Box sx={{ width: "12px", height: "12px", opacity: "0.5", ml: "5px" }}>
                <Icon style={{ cursor: "pointer" }} src={iconsObj.calendar} />
              </Box>
              <Text sx={{ variant: "text. smallTextMedium", opacity: "0.5", ml: "6px" }}>
                Created:{" "}
              </Text>
              <Text sx={{ variant: "text.smallTextMediumUser", ml: "5px" }}>data</Text>
            </Flex>
            <Flex>
              <Button sx={agreementStatus === STATUS_READY_TO_SIGN ? blueAgrBtn : greyAgrBtn}>
                {agreementStatus}
              </Button>
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
            <Text sx={{ variant: "text. smallTextMedium", opacity: "0.5", mr: "6px" }}>
              Signers:
            </Text>
            <Text sx={{ variant: "text.smallTextMediumUser", mr: "20px" }}>{signers.length}</Text>
            <Text sx={{ variant: "text. smallTextMedium", opacity: "0.5", mr: "6px" }}>
              Signed:
            </Text>
            <Text sx={{ variant: "text.smallTextMediumUser", mr: "20px" }}>0</Text>
            <Text sx={{ variant: "text. smallTextMedium", opacity: "0.5", mr: "6px" }}>
              Observers:
            </Text>
            <Text sx={{ variant: "text.smallTextMediumUser", mr: "20px" }}>{observers.length}</Text>
            {agreementPrivacy !== PRIVACY_PRIVATE ? (
              <>
                <Text sx={{ variant: "text. smallTextMedium", opacity: "0.5", mr: "6px" }}>
                  Access:
                </Text>
                <Text sx={{ variant: "text.smallTextMediumUser", mr: "20px" }}>
                  {
                    //@ts-ignore
                    agreementPrivacy !== "With Link" ? agreementPrivacy : "Anyone With Link"
                  }
                </Text>
              </>
            ) : null}
          </Flex>
        </Flex>
        <div style={{ height: "20px" }}></div>
      </Link>
    </NextLink>
  );
}
