/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Box, Button, Flex } from "theme-ui";
import { useRouter } from "next/router";
import { useClient } from "urql";

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
import { notifError, notifWarning } from "../../utils/notification";
import { AgreementInformation } from "./AgreementInformation";
import { AgreementLabels } from "./AgreementLabels";
import { AgreementSignersList } from "./AgreementSignersList";
import { AgreementObserversList } from "./AgreementObserversList";
import { AgreementContentPreview } from "./AgreementContentPreview";
import ModalEditObservers from "../../components/ModalEditObservers";

import useSignAgreement from "../../hooks/useSignAgreement";
import ModalReadyToSign from "../ModalReadyToSign";

export const ViewAgreement = () => {
  const { push, query } = useRouter();
  const { agreementId } = query;
  const idIsWrong = !!agreementId && !Number(agreementId);
  const [isOpen, setIsOpen] = useState(false);
  const [readyToSignModalOpen, setReadyToSignModalOpen] = useState(false);
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
        const agr: any = res.data?.agreement;
        if (agr) setAgreement(toAgreementWithParticipants(agr));
        if (res?.error) {
          const errorMsg = res?.error.message;
          if (errorMsg.includes("Access denied")) {
            push("/404");
          }
        }
      });
  }, [agreementId]);

  const handleOpenReadyToSignModal = () => {
    const agreementComplete =
      agreement?.agreementLocation &&
      agreement?.agreementPrivacy &&
      agreement?.agreementFile &&
      agreement?.signers?.length > 0;

    if (agreementComplete) {
      setReadyToSignModalOpen(true);
    } else {
      notifWarning(
        "Agreement is not fully completed. Click “Edit Agreement” to complete all steps."
      );
    }
  };

  const onSetAgreementReadyToSign = async () => {
    return makeProofOfAuthority()
      .then(async () => {
        await refetchAgreement();
        return true;
      })
      .catch(e => {
        notifError(e?.message);
        return false;
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
              <Box>Back to Dashboard</Box>
            </Flex>
            <Box sx={title}>{agreement?.title}</Box>
            <AgreementLabels
              agreementTitle={agreement?.title}
              agreementId={String(agreement?.agreementId)}
              agreementStatus={agreement?.agreementStatus}
              agreementPrivacy={agreement?.agreementPrivacy}
              isWaitingForMySignature={agreement?.isWaitingForMySignature || false}
            />
            <AgreementContentPreview
              agreement={agreement}
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
              isWaitingForMySignature={agreement?.isWaitingForMySignature || false}
              onSetAgreementReadyToSign={handleOpenReadyToSignModal}
              authorWalletAddress={agreement?.authorWalletAddress}
              agreementLocation={agreement?.agreementLocation}
              agreementPrivacy={agreement?.agreementPrivacy}
              agreementStatus={agreement?.agreementStatus}
              agreementId={Number(agreementId)}
              onSignAgreement={onSignAgreement}
              createdAt={agreement?.createdAt}
              userIsAuthor={userIsAuthor}
              setIsOpen={setIsOpen}
              agreement={agreement}
            />
          )}
        </>
      )}
      {agreement && isOpen && (
        <ModalEditObservers
          agreement={agreement}
          onExit={() => setIsOpen(false)}
          onSuccess={refetchAgreement}
          isOpen={isOpen}
        />
      )}
      {readyToSignModalOpen && (
        <ModalReadyToSign
          isOpen={readyToSignModalOpen}
          onSubmit={onSetAgreementReadyToSign}
          onExit={() => setReadyToSignModalOpen(false)}
        />
      )}
    </Flex>
  );
};
