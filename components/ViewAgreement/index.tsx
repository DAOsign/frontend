import React, { useEffect, useMemo } from "react";
import { Box, Button, Flex } from "theme-ui";
import { useRouter } from "next/router";
import { useQuery } from "urql";

import { agreementById } from "../../modules/graphql/queries";
import {
  backContainer,
  backIcon,
  container,
  errorBackButton,
  errorContainer,
  errorMessage,
  mainData,
  title,
} from "./styles";
import iconsObj from "../../assets/icons";
import Icon from "../icon";
import { toAgreementWithParticipants } from "../../utils/typeUtils";
import { useWeb3 } from "../../hooks/useWeb3";
import { areWalletsEqual } from "../../utils/wallet";
import { notifError } from "../../utils/notification";
import { AgreementInformation } from "./AgreementInformation";
import { AgreementLabels } from "./AgreementLabels";
import { AgreementSignersList } from "./AgreementSignersList";
import { AgreementObserversList } from "./AgreementObserversList";
import { AgreementContentPreview } from "./AgreementContentPreview";

export const ViewAgreement = () => {
  const { push, query } = useRouter();
  const { agreementId } = query;
  const idIsWrong = !!agreementId && !Number(agreementId);

  const { account } = useWeb3();

  const [{ data, error: getAgreementError }] = useQuery({
    query: agreementById,
    variables: { agreementId: Number(agreementId) },
    pause: !agreementId || idIsWrong,
    requestPolicy: "network-only",
  });

  const agreement = useMemo(
    () => (data?.agreement ? toAgreementWithParticipants(data.agreement as any) : null),
    [data]
  );

  // TODO: compare by user, not wallet
  const userIsAuthor = useMemo<boolean>(
    () => areWalletsEqual(account, agreement?.authorWalletAddress),
    [account, agreement?.authorWalletAddress]
  );

  useEffect(() => {
    if (
      getAgreementError &&
      getAgreementError.message &&
      !getAgreementError.message.includes("Access denied")
    ) {
      notifError(getAgreementError?.message || "Failed to get agreement from server");
      console.error("[GetAgreementById]", getAgreementError.message);
    }
  }, [getAgreementError]);

  const handleBack = () => {
    push("/");
  };

  return (
    <Flex sx={container}>
      {idIsWrong || getAgreementError ? (
        <Flex sx={errorContainer}>
          <Box sx={errorMessage}>
            {idIsWrong ? "Agreement ID is not valid" : "You can't view this agreement"}
          </Box>
          <Button onClick={handleBack} sx={errorBackButton}>
            Go Back
          </Button>
        </Flex>
      ) : (
        <>
          <Flex sx={mainData}>
            <Flex onClick={handleBack} sx={backContainer}>
              <Box sx={backIcon}>
                <Icon src={iconsObj.arrowNarrowLeft} />
              </Box>
              <Box>Back</Box>
            </Flex>
            <Box sx={title}>{agreement?.title}</Box>
            <AgreementLabels
              agreementStatus={agreement?.agreementStatus}
              agreementPrivacy={agreement?.agreementPrivacy}
              isWaitingForMySignature={agreement?.isWaitingForMySignature || false}
            />
            <AgreementContentPreview
              textContent={agreement?.content}
              filePath={agreement?.agreementFile?.filePath}
              fileIpfsHash={agreement?.agreementFile?.agreementHash}
              agreementLocation={agreement?.agreementLocation}
              agreementPrivacy={agreement?.agreementPrivacy}
            />
            <AgreementSignersList signers={agreement?.signers || []} />
            <AgreementObserversList observers={agreement?.observers || []} />
          </Flex>
          <AgreementInformation
            agreementId={Number(agreementId)}
            agreementStatus={agreement?.agreementStatus}
            agreementPrivacy={agreement?.agreementPrivacy}
            agreementLocation={agreement?.agreementLocation}
            createdAt={agreement?.createdAt}
            isWaitingForMySignature={agreement?.isWaitingForMySignature || false}
            userIsAuthor={userIsAuthor}
            authorWalletAddress={agreement?.authorWalletAddress}
          />
        </>
      )}
    </Flex>
  );
};
