import React, { useRef, useMemo, useState } from "react";
import { Container, Flex, Input, Text, Button, Box } from "theme-ui";
import {
  inputCreateAgreementWithRightButton,
  inputCreateAgreementError,
  inputCreactAgreement,
  labelSigners,
  addMeBtn,
  plus,
} from "../../styles";
import { validateAddress, validateEmail, validateEnsDomains } from "../StepThree/validationUtils";
import { useCreateAgreement } from "../../../../hooks/useCreateAgreement";
import { useEditAgreement } from "../../../../hooks/useEditAgreement";
import FieldErrorMessage from "../../../Form/FieldErrorMessage";
import TagList, { ParticipantType } from "../StepThree/TagList";
import VerificationCard from "../StepThree/VerificationCard";
import { useWeb3 } from "../../../../hooks/useWeb3";
import { uniqueId } from "../../../../utils/formats";
import Tooltip from "../../../Tooltip";

import iconsObj from "../../../../assets/icons";
import Icon from "../../../icon";
import { PlusIcon } from "./svg";
import styles from "./styles";
import { notifComingSoon } from "../../../../utils/notification";
import { createUserByEmail, sendInvitationEmail } from "../../../agreements/helpers";
import { sendEmailVerificationLinkMutation } from "../../../../modules/graphql/mutations";
import { useMutation } from "urql";

interface VerificationInfo {
  title: string;
  img: Icon;
  description: string;
}

const isEmail = (x: string) => x?.includes("@");

const verifications: VerificationInfo[] = [
  {
    title: "Anonymous",
    img: iconsObj.verificationAnonymous,
    description: "Wallet Address",
  },
  {
    title: "Pseudonymous",
    img: iconsObj.verificationPseudonymous,
    description: "Name, Email address, ENS",
  },
  {
    title: "Digital Identity",
    img: iconsObj.verificationDigital,
    description: "Social Network Verification",
  },
  {
    title: "Real Identity",
    img: iconsObj.verificationReal,
    description: "Real world assets verification",
  },
  {
    title: "Notarized Identity",
    img: iconsObj.verificationNotarized,
    description: "KYC verification",
  },
];

export default function StepTwo({ page }: { page: string }) {
  const create = useCreateAgreement();
  const edit = useEditAgreement();
  const { values, changeValue } = page === "create" ? create : edit;
  const { account, resolveEns } = useWeb3();
  const [, sendEmailVerificationLinkRequest] = useMutation(sendEmailVerificationLinkMutation);

  const signersInputErrorStyles = values?.errors?.signers ? inputCreateAgreementError : {};
  const observersInputErrorStyles = values?.errors?.observers ? inputCreateAgreementError : {};

  const [checkedVerifications, setCheckedVerifications] = useState<boolean[]>(
    Array(verifications.length).fill(false)
  );
  const userAlreadySigner = useMemo(
    () =>
      values?.signers?.some(
        signer => signer?.value.toLocaleLowerCase() === account?.toLocaleLowerCase()
      ),
    [values.signers, account]
  );

  const userAlreadyObserver = useMemo(
    () =>
      values?.observers?.some(
        observer => observer.value.toLocaleLowerCase() === account?.toLocaleLowerCase()
      ),
    [values.observers, account]
  );

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, type: ParticipantType) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      //@ts-ignore
      const value = e.target.value;
      if (type === "observers") {
        addObserver(value.toLocaleLowerCase());
      }
      if (type === "signers") {
        addSigner(value.toLocaleLowerCase());
      }
    }
  };
  const signerInputRef = useRef<HTMLInputElement>();
  const observerInputRef = useRef<HTMLInputElement>();

  const onDelete = (el: any, key: ParticipantType) => {
    changeValue(key, [...values[key].filter(e => e.value !== el.value)]);
  };

  const onChangeSignerInputValue: React.ChangeEventHandler<HTMLInputElement> = e => {
    changeValue("errors", { ...values.errors, signers: null });
  };

  const onChangeObserverInputValue: React.ChangeEventHandler<HTMLInputElement> = e => {
    changeValue("errors", { ...values.errors, observers: null });
  };

  const validateUser = async (
    value: string,
    userRole: "signer" | "observer",
    addedSigners: { id: number; value: string }[],
    addedObservers: { id: number; value: string }[],
    ensResolveFn?: (name: string) => Promise<string | null | undefined>
  ): Promise<string | null> => {
    const userAlreadySigner = addedSigners.some(signer => signer?.value === value);
    const userAlreadyObserver = addedObservers.some(observer => observer?.value === value);

    if (userAlreadySigner) {
      return userRole === "signer" ? "Signer is already added" : "Already exists as Signer";
    }

    if (userAlreadyObserver) {
      return userRole === "signer" ? "Already exists as Observer" : "Observer is already added";
    }

    const isEns = value?.includes(".eth");
    if (isEns) {
      const error = validateEnsDomains(value);
      if (error) return error;
      return !ensResolveFn
        ? null
        : ensResolveFn(value).then(address => (address ? null : "No ENS registered"));
    }

    const isAddress = value?.startsWith("0x");
    if (isAddress) {
      const error = validateAddress(value);
      if (error) return error;
    }

    if (isEmail(value)) {
      const error = validateEmail(value);
      if (error) return error;
    }

    if (!isEns && !isAddress && !isEmail(value)) {
      return "Invalid value";
    }

    return null;
  };

  const addSigner = async (value?: string) => {
    if (value && signerInputRef.current) {
      const validationError: string | null = await validateUser(
        value,
        "signer",
        values.signers || [],
        values.observers || [],
        resolveEns
      );
      if (validationError) {
        changeValue("errors", { ...values.errors, signers: validationError });
        return;
      }

      if (isEmail(value)) {
        await sendEmailVerificationLinkRequest({
          email: value,
          isSigner: true,
          agreementTitle: values.title,
        });
      }

      changeValue("signers", [
        ...values.signers,
        { value: value.toLocaleLowerCase(), id: uniqueId() },
      ]);
      signerInputRef.current.value = "";
    }
  };

  const addObserver = async (value?: string) => {
    if (value && observerInputRef.current) {
      const validationError: string | null = await validateUser(
        value,
        "observer",
        values.signers,
        values.observers,
        resolveEns
      );
      if (validationError) {
        changeValue("errors", { ...values.errors, observers: validationError });
        return;
      }

      if (isEmail(value)) {
        await sendEmailVerificationLinkRequest({
          email: value,
          isSigner: false,
          agreementTitle: values.title,
        });
      }

      changeValue("observers", [
        ...values.observers,
        { value: value.toLocaleLowerCase(), id: uniqueId() },
      ]);
      observerInputRef.current.value = "";
    }
  };

  const addMe = (to: "signers" | "observers") => {
    if (to === "signers") {
      addSigner(account!.toLocaleLowerCase());
    } else {
      addObserver(account!.toLocaleLowerCase());
    }
  };

  return (
    <Container sx={styles}>
      <>
        <Box>
          <Flex
            sx={{ position: "relative", justifyContent: "space-between", alignItems: "center" }}
          >
            <Flex sx={{ alignItems: "center" }}>
              <Text sx={labelSigners}>Signers (ENS name, Ethereum address, or email) *</Text>
              <Tooltip
                title="Add users that will sign this agreement."
                transform="translate(-57%, 0)"
                minWidth="200px"
                height="0"
                top="-420%"
                left="92%"
              >
                <Box sx={{ width: "12px", height: "12px", display: "inline-block" }}>
                  <Icon src={iconsObj.infoCircle} />
                </Box>
              </Tooltip>
            </Flex>
            {!userAlreadySigner && !userAlreadyObserver ? (
              <Button
                onClick={() => addMe("signers")}
                className={userAlreadySigner ? "disabled" : ""}
                variant="link"
                sx={addMeBtn}
              >
                Add Me
              </Button>
            ) : null}
            <Box
              onClick={() => addSigner(signerInputRef.current?.value.toLocaleLowerCase())}
              sx={plus}
            >
              <PlusIcon />
            </Box>
          </Flex>
          <Input
            //@ts-ignore
            ref={signerInputRef}
            onKeyDown={e => onKeyDown(e, "signers")}
            onChange={onChangeSignerInputValue}
            sx={{
              variant: "forms.input",
              ...inputCreactAgreement,
              ...inputCreateAgreementWithRightButton,
              ...signersInputErrorStyles,
              mb: "8px",
            }}
          />
          <FieldErrorMessage error={values?.errors?.signers} isAbsolutePosition={false} />
          <TagList items={values.signers} type="signers" onDelete={onDelete} />
        </Box>
        <Box>
          <Flex
            sx={{
              mt: "24px",
              position: "relative",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Flex sx={{ alignItems: "center" }}>
              <Text
                sx={{
                  variant: "forms.label",
                  ml: "3px",
                  mr: "5px",
                  maxWidth: "unset",
                  minHeight: "25px",
                }}
              >
                Observers (ENS name, Ethereum adderess, or email){" "}
              </Text>
              <Tooltip
                title="Add users that will be able to see but not sign an agreement."
                transform="translate(-57%, 0)"
                minWidth="200px"
                height="0"
                top="-66px"
                left="92%"
              >
                <Box sx={{ width: "12px", height: "12px", display: "inline-block" }}>
                  <Icon src={iconsObj.infoCircle} />
                </Box>
              </Tooltip>
            </Flex>
            {!userAlreadySigner && !userAlreadyObserver ? (
              <Button
                onClick={() => addMe("observers")}
                className={userAlreadyObserver ? "'disabled'" : ""}
                variant="link"
                sx={{
                  justifyContent: "flex-end",
                  height: "25px",
                  width: "initial",
                  "&:hover": {
                    color: "#AE4FD0",
                  },
                }}
              >
                Add Me
              </Button>
            ) : null}
            <Box
              onClick={() => addObserver(observerInputRef.current?.value.toLocaleLowerCase())}
              sx={plus}
            >
              <PlusIcon />
            </Box>
          </Flex>
          <Input
            //@ts-ignore
            ref={observerInputRef}
            onChange={onChangeObserverInputValue}
            onKeyDown={e => onKeyDown(e, "observers")}
            sx={{
              variant: "forms.input",
              ...inputCreactAgreement,
              ...inputCreateAgreementWithRightButton,
              ...observersInputErrorStyles,
              mb: "8px",
            }}
          />
          <FieldErrorMessage error={values?.errors?.observers} isAbsolutePosition={false} />
          <TagList items={values.observers} type="observers" onDelete={onDelete} />
        </Box>
        <Box sx={{ mt: "10px" }}>
          <Flex
            sx={{
              position: "relative",
              alignItems: "center",
            }}
          >
            <Flex sx={{ alignItems: "center" }}>
              <Text
                sx={{
                  variant: "forms.label",
                  maxWidth: "unset",
                  minHeight: "25px",
                  ml: "3px",
                  mr: "5px",
                }}
              >
                Required Signed Verifications
              </Text>
              <Tooltip
                title="Required level of verification. More levels are coming soon."
                transform="translate(-55.5%, 0)"
                minWidth="200px"
                top="-65px"
                left="65%"
                height="0"
              >
                <Box sx={{ width: "12px", height: "12px", display: "inline-block" }}>
                  <Icon src={iconsObj.infoCircle} />
                </Box>
              </Tooltip>
            </Flex>
          </Flex>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {verifications.map((verification, index) => (
              <VerificationCard
                key={verification.title}
                {...verification}
                disabled={false}
                checked={verification.title === "Anonymous" || checkedVerifications[index]}
                onClick={() => {
                  if (!checkedVerifications[index] && verification.title !== "Anonymous") {
                    notifComingSoon(`${verification.title} Verification is coming soon`);
                  }
                }}
              />
            ))}
          </Box>
        </Box>
      </>
    </Container>
  );
}
