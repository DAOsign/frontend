import React, { useRef, useState } from "react";
import { Container, Flex, Input, Text, Button, Box } from "theme-ui";
import {
  inputCreactAgreement,
  inputCreateAgreementError,
  inputCreateAgreementWithRightButton,
  plus,
  textLoading,
} from "../../styles";
import { uniqueId } from "../../../../utils/formats";
import iconsObj from "../../../../assets/icons";
import Icon from "../../../icon";
import { useCreateAgreement } from "../../../../hooks/useCreateAgreement";
import { useEditAgreement } from "../../../../hooks/useEditAgreement";
import { useWeb3 } from "../../../../hooks/useWeb3";
import { useMemo } from "react";
import TagList, { ParticipantType } from "./TagList";
import styles from "./styles";
import VerificationCard from "./VerificationCard";
import FieldErrorMessage from "../../../Form/FieldErrorMessage";
import Lottie from "lottie-react";
import loader from "../../../../img/json/loader.json";
import Tooltip from "../../../Tooltip";
import { validateAddress, validateEnsDomains } from "./validationUtils";
import { useLock } from "../../../../hooks/useLock";

interface VerificationInfo {
  title: string;
  img: Icon;
  description: string;
}

const verifications: VerificationInfo[] = [
  {
    title: "Anonymus",
    img: iconsObj.verificationAnonymous,
    description: "Wallet Address",
  },
  // {
  //   title: "Pseudonymous",
  //   img: iconsObj.verificationPseudonymous,
  //   description: "Name, Email address, ENS",
  // },
  // {
  //   title: "Digital Identify",
  //   img: iconsObj.verificationDigital,
  //   description: "Social Network Verification",
  // },
  // {
  //   title: "Real Identify",
  //   img: iconsObj.verificationReal,
  //   description: "Real world assets verification",
  // },
  // {
  //   title: "Notarized Identity",
  //   img: iconsObj.verificationNotarized,
  //   description: "KYC verification",
  // },
];

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

  if (!isEns && !isAddress) {
    return "Invalid value";
  }

  return null;
};

export default function StepThree({ loading, page }: { loading: boolean; page: string }) {
  const create = useCreateAgreement();
  const edit = useEditAgreement();
  const { values, changeValue } = page === "create" ? create : edit;
  const { account, resolveEns } = useWeb3();

  const [checkedVerifications, setCheckedVerifications] = useState<boolean[]>(
    Array(verifications.length).fill(false)
  );

  const signerInputRef = useRef<HTMLInputElement>();
  const observerInputRef = useRef<HTMLInputElement>();

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

  const onDelete = (el: any, key: ParticipantType) => {
    changeValue(key, [...values[key].filter(e => e.value !== el.value)]);
  };

  const onChangeSignerInputValue: React.ChangeEventHandler<HTMLInputElement> = e => {
    changeValue("errors", { ...values.errors, signers: null });
  };

  const onChangeObserverInputValue: React.ChangeEventHandler<HTMLInputElement> = e => {
    changeValue("errors", { ...values.errors, observers: null });
  };

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

  const signersInputErrorStyles = values?.errors?.signers ? inputCreateAgreementError : {};
  const observersInputErrorStyles = values?.errors?.observers ? inputCreateAgreementError : {};

  return (
    <Container sx={styles}>
      {!loading ? (
        <>
          {" "}
          <Box>
            <Flex
              sx={{ position: "relative", justifyContent: "space-between", alignItems: "center" }}
            >
              <Flex sx={{ alignItems: "center" }}>
                <Text
                  sx={{ variant: "forms.label", ml: "3px", maxWidth: "unset", minHeight: "25px" }}
                >
                  Signers (ENS name or address)
                </Text>
                <Tooltip
                  title="Add users that will sign this agreement."
                  transform="translate(-57%, 0)"
                  minWidth="200px"
                  height="0"
                  top="-361%"
                  left="71%"
                >
                  <Box sx={{ width: "12px", height: "12px", display: "inline-block" }}>
                    <Icon style={{ opacity: 0.5 }} src={iconsObj.infoCircle} />
                  </Box>
                </Tooltip>
              </Flex>
              {!userAlreadySigner && !userAlreadyObserver ? (
                <Button
                  onClick={() => addMe("signers")}
                  className={userAlreadySigner ? "disabled" : ""}
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
                onClick={() => addSigner(signerInputRef.current?.value.toLocaleLowerCase())}
                sx={plus}
              >
                <svg
                  className="iconPlus"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M12 5V19M5 12H19"
                      stroke="#CA5CF2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
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
                  sx={{ variant: "forms.label", ml: "3px", maxWidth: "unset", minHeight: "25px" }}
                >
                  Observers (ENS name or adderess)
                </Text>
                <Tooltip
                  title="Add users that will be able to see but not sign an agreement."
                  transform="translate(-57%, 0)"
                  minWidth="200px"
                  height="0"
                  top="-85px"
                  left="71%"
                >
                  <Box sx={{ width: "12px", height: "12px", display: "inline-block" }}>
                    <Icon style={{ opacity: 0.5 }} src={iconsObj.infoCircle} />
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
                <svg
                  className="iconPlus"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M12 5V19M5 12H19"
                      stroke="#CA5CF2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
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
                    ml: "3px",
                    maxWidth: "unset",
                    minHeight: "25px",
                  }}
                >
                  Required Signed Verifications
                </Text>
                <Tooltip
                  title="Required level of verification. More levels are coming soon."
                  transform="translate(-56%, 0)"
                  minWidth="200px"
                  top="-65px"
                  left="65%"
                  height="0"
                >
                  <Box sx={{ width: "12px", height: "12px", display: "inline-block" }}>
                    <Icon style={{ opacity: 0.5 }} src={iconsObj.infoCircle} />
                  </Box>
                </Tooltip>
              </Flex>
            </Flex>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {verifications.map((verification, index) => (
                <VerificationCard
                  key={verification.title}
                  {...verification}
                  disabled={verification.title === "Anonymus"}
                  checked={checkedVerifications[index] || verification.title === "Anonymus"}
                  onClick={() => {
                    setCheckedVerifications(prevState => [
                      ...prevState.slice(0, index),
                      !prevState[index],
                      ...prevState.slice(index + 1),
                    ]);
                  }}
                />
              ))}
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Lottie
            style={{ height: "60px", marginBottom: "52px" }}
            animationData={loader}
            loop={true}
          />
          <Text sx={textLoading}> loading... </Text>
        </>
      )}
    </Container>
  );
}
