import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { Container, Flex, Input, Text, Button, Box } from "theme-ui";
import { inputCreactAgreement, inputCreateAgreementError, plus } from "../../styles";
import { uniqueId } from "../../../../utils/formats";
import iconsObj from "../../../../assets/icons";
import Icon from "../../../icon";
import { useCreateAgreement } from "../../../../hooks/useCreateAgreement";
import { useWeb3 } from "../../../../hooks/useWeb3";
import { useMemo } from "react";
import TagList, { ParticipantType } from "./TagList";
import styles from "./styles";
import VerificationCard from "./VerificationCard";
import FieldErrorMessage from "../../../Form/FieldErrorMessage";

const verifications = [
  {
    title: "Anonymus",
    img: iconsObj.verificationAnonymous,
    description: "Wallet Address",
    checked: true,
  },
  {
    title: "Pseudonymous",
    img: iconsObj.verificationPseudonymous,
    description: "Name, Email address, ENS",
  },
  {
    title: "Digital Identify",
    img: iconsObj.verificationDigital,
    description: "Social Network Verification",
  },
  {
    title: "Real Identify",
    img: iconsObj.verificationReal,
    description: "Real world assets verification",
  },
  {
    title: "Notarized Identity",
    img: iconsObj.verificationNotarized,
    description: "KYC verification",
  },
];

const validateUser = (value: string) => {
  const isEmail = value.includes("@");
  const isEns = value.includes(".eth");
  const isAddress = value.startsWith("0x");
  if (!isEmail && !isEns && !isAddress) {
    return false;
  }
  if (isEmail) {
    return String(value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }
  if (isEns) {
    const match = value.match(
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/
    );
    return match;
  }
  if (isAddress) {
    return value.match(/^0x[a-fA-F0-9]{40}$/);
  }
};

export default function StepThree() {
  const { values, changeValue } = useCreateAgreement();
  const { account } = useWeb3();

  const signerInputRef = useRef<HTMLInputElement>();
  const observerInputRef = useRef<HTMLInputElement>();

  const addSigner = (value?: string) => {
    if (value && signerInputRef.current) {
      if (!validateUser(value)) {
        signerInputRef.current.className = `${signerInputRef.current.className + " error"}`;
        return;
      }
      changeValue("signers", [...values.signers, { value: value, id: uniqueId() }]);
      signerInputRef.current.value = "";
    }
  };

  const addObserver = (value?: string) => {
    if (value && observerInputRef.current) {
      if (!validateUser(value)) {
        observerInputRef.current.className = `${observerInputRef.current.className + " error"}`;
        return;
      }

      changeValue("observers", [...values.observers, { value: value, id: uniqueId() }]);
      observerInputRef.current.value = "";
    }
  };

  const addMe = (to: "signers" | "observers") => {
    if (!values[to].map(a => a.value).includes(account!)) {
      changeValue(to, [...values[to], { value: account, id: uniqueId() }]);
    }
  };

  const onDelete = (el: any, key: ParticipantType) => {
    changeValue(key, [...values[key].filter(e => e.id !== el.id)]);
  };

  const onChangeInputValue: React.ChangeEventHandler<HTMLInputElement> = e => {
    e.target.className = e.target.className.replaceAll("error", "").trim();
  };

  const onChangeSignerInputValue: React.ChangeEventHandler<HTMLInputElement> = e => {
    onChangeInputValue(e);
    changeValue("errors", { ...values.errors, signers: null });
  };

  const onChangeObserverInputValue: React.ChangeEventHandler<HTMLInputElement> = e => {
    onChangeInputValue(e);
    changeValue("errors", { ...values.errors, observers: null });
  };

  const userAlreadySigner = useMemo(
    () => !values.signers.map(a => a.value).includes(account!),
    [values.signers, account]
  );

  const userAlreadyObserver = useMemo(
    () => !values.observers.map(a => a.value).includes(account!),
    [values.observers, account]
  );

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, type: ParticipantType) => {
    if (e.code === "Enter") {
      //@ts-ignore
      const value = e.target.value;
      if (type === "observers") {
        addObserver(value);
      }
      if (type === "signers") {
        addSigner(value);
      }
    }
  };

  const signersInputErrorStyles = values?.errors?.signers ? inputCreateAgreementError : {};
  const observersInputErrorStyles = values?.errors?.observers ? inputCreateAgreementError : {};

  return (
    <Container sx={styles}>
      <Box>
        <Flex sx={{ position: "relative", justifyContent: "space-between", alignItems: "center" }}>
          <Text sx={{ variant: "forms.label", ml: "3px", maxWidth: "unset" }}>
            Signers (ENS name, adderes or email)
            <Box sx={{ width: "12px", height: "12px", display: "inline-block" }}>
              <Icon style={{ opacity: 0.5 }} src={iconsObj.infoCircle} />
            </Box>
          </Text>
          <Button
            onClick={() => addMe("signers")}
            className={userAlreadySigner ? "disabled" : ""}
            variant="link"
            sx={{
              justifyContent: "flex-end",
              height: "25px",
              width: "initial",
            }}
          >
            Add Me
          </Button>
          <Box onClick={() => addSigner(signerInputRef.current?.value)} sx={plus}>
            <Icon width="24px" height="24px" style={{ opacity: 0.5 }} src={iconsObj.pinkPlus} />
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
            ...signersInputErrorStyles,
            mb: "8px",
          }}
        />
        <FieldErrorMessage error={values?.errors?.signers} />
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
          <Text sx={{ variant: "forms.label", ml: "3px", maxWidth: "unset" }}>
            Observers (ENS name or adderess)
            <Box sx={{ width: "12px", height: "12px", display: "inline-block" }}>
              <Icon width="12px" height="12px" style={{ opacity: 0.5 }} src={iconsObj.infoCircle} />
            </Box>
          </Text>
          <Button
            onClick={() => addMe("observers")}
            className={userAlreadyObserver ? "disabled" : ""}
            variant="link"
            sx={{
              justifyContent: "flex-end",
              height: "25px",
              width: "initial",
            }}
          >
            Add Me{" "}
          </Button>
          <Box onClick={() => addObserver(observerInputRef.current?.value)} sx={plus}>
            <Icon width="24px" height="24px" style={{ opacity: 0.5 }} src={iconsObj.pinkPlus} />
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
            ...observersInputErrorStyles,
            mb: "8px",
          }}
        />
        <FieldErrorMessage error={values?.errors?.observers} />
        <TagList items={values.observers} type="observers" onDelete={onDelete} />
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {verifications.map(verification => (
          <VerificationCard key={verification.title} {...verification} />
        ))}
      </Box>
    </Container>
  );
}
