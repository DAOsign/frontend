import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Box, Button, Flex } from "theme-ui";
import { useRouter } from "next/router";
import { useMutation, useQuery, useClient } from "urql";

import {
  agreementById,
  getAgreementFileProofData as getAgreementFileProofDataRequest,
  getAgreementSignProofData as getAgreementSignProofDataRequest,
} from "../../modules/graphql/queries";
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
import ModalAddObservers from "../../components/ModalAddObserver";

import useSignAgreement from "../../hooks/useSignAgreement";

export const ViewAgreement = () => {
  const { push, query } = useRouter();
  const { agreementId } = query;
  const idIsWrong = !!agreementId && !Number(agreementId);
  const [isOpen, setIsOpen] = useState(false);
  const client = useClient();

  const [agreement, setAgreement] = useState<ReturnType<
    typeof toAgreementWithParticipants
  > | null>();

  const { account } = useWeb3();

  // TODO: compare by user, not wallet
  const userIsAuthor = useMemo<boolean>(
    () => areWalletsEqual(account, agreement?.authorWalletAddress),
    [account, agreement?.authorWalletAddress]
  );

  const { makeProofOfAuthority, makeProofOfSignature } = useSignAgreement(Number(agreementId));

  useEffect(() => {
    if (agreementId) {
      refetchAgreement();
    }
  }, [agreementId]);

  const refetchAgreement = useCallback(async () => {
    return await client
      .query(agreementById, { agreementId: Number(agreementId) }, { requestPolicy: "network-only" })
      .toPromise()
      .then(res => {
        const agr = res.data?.agreement;

        //@ts-ignore
        if (agr) setAgreement(toAgreementWithParticipants(agr)); //eslint-disable-line
        if (res?.error) {
          const errorMsg = res?.error.message;
          notifError(errorMsg || "Failed to get agreement from server");
          // eslint-disable-next-line no-console
          console.error("[GetAgreementById]", errorMsg);
        }
      });
  }, [agreementId]);

  const onSetAgreementReadyToSign = async () => {
    return makeProofOfAuthority().then(async () => {
      await refetchAgreement();
    });
  };

  const onSignAgreement = async () => {
    return makeProofOfSignature().then(async () => {
      await refetchAgreement();
    });
  };

  const handleBack = () => {
    push("/");
  };

  return (
    <Flex sx={container}>
      {idIsWrong ? (
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
          {agreement && (
            <AgreementInformation
              agreement={agreement}
              agreementId={Number(agreementId)}
              agreementStatus={agreement?.agreementStatus}
              agreementPrivacy={agreement?.agreementPrivacy}
              agreementLocation={agreement?.agreementLocation}
              createdAt={agreement?.createdAt}
              isWaitingForMySignature={agreement?.isWaitingForMySignature || false}
              userIsAuthor={userIsAuthor}
              setIsOpen={setIsOpen}
              authorWalletAddress={agreement?.authorWalletAddress}
              onSetAgreementReadyToSign={onSetAgreementReadyToSign}
              onSignAgreement={onSignAgreement}
            />
          )}
        </>
      )}
      <ModalAddObservers onExit={() => setIsOpen(false)} isOpen={isOpen} />
    </Flex>
  );
};
