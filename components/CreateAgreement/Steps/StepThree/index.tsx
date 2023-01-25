import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
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
import stylesTooltip from "../../../Header/index.module.css";
import { useEditAgreement } from "../../../../hooks/useEditAgreement";
import { useWeb3 } from "../../../../hooks/useWeb3";
import { useMemo } from "react";
import TagList, { ParticipantType } from "./TagList";
import styles from "./styles";
import VerificationCard from "./VerificationCard";
import FieldErrorMessage from "../../../Form/FieldErrorMessage";
import Lottie from "lottie-react";
import loader from "../../../../img/json/loader.json";

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

const validateUser = (
  value: string,
  userRole: "signer" | "observer",
  addedSigners: { id: number; value: string }[],
  addedObservers: { id: number; value: string }[]
): string | null => {
  let error: string | null = null;
  //TODO add  userAlreadySigner userAlreadyObserver
  // const userAlreadySigner = addedSigners.some(signer => signer?.value === value);
  // const userAlreadyObserver = addedObservers.some(observer => observer?.value === value);

  if (false) {
    error = userRole === "signer" ? "Signer is already added" : "Already exists as Signer";
  } else if (false) {
    error = userRole === "signer" ? "Already exists as Observer" : "Observer is already added";
  } else {
    const isEmail = value.includes("@");
    const isEns = value.includes(".eth");
    const isAddress = value.toLocaleLowerCase().startsWith("0x");
    if (isEmail && !isEns && !isAddress) {
      error = "Invalid value";
    } else if (isEmail) {
      const isValidEmail = String(value)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      if (isValidEmail) {
        error = "Invalid value";
      }
    } else if (isEns) {
      const isValidEns = value.match(
        /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/
      );
      if (!isValidEns) {
        error = "Invalid ENS name";
      }
    } else if (isAddress) {
      const isValidAddress = value.toLocaleLowerCase().match(/^0x[a-fA-F0-9]{40}$/);
      if (!isValidAddress) {
        error = "Invalid wallet address";
      }
    }
  }

  return error;
};

export default function StepThree({ loading, page }: { loading: boolean; page: string }) {
  const create = useCreateAgreement();
  const edit = useEditAgreement();
  const { values, changeValue } = page === "create" ? create : edit;
  const { account } = useWeb3();
  const [checkedVerifications, setCheckedVerifications] = useState<boolean[]>(
    Array(verifications.length).fill(false)
  );

  const signerInputRef = useRef<HTMLInputElement>();
  const observerInputRef = useRef<HTMLInputElement>();

  const addSigner = (value?: string) => {
    if (value && signerInputRef.current) {
      const validationError: string | null = validateUser(
        value,
        "signer",
        values.signers || [],
        values.observers || []
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

  const addObserver = (value?: string) => {
    if (value && observerInputRef.current) {
      const validationError: string | null = validateUser(
        value,
        "observer",
        values.signers,
        values.observers
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
      addObserver(account!.toLocaleUpperCase());
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
                <div style={{ paddingTop: 0 }} className={`${stylesTooltip.tooltip}`}>
                  <button className={`${stylesTooltip.tooltip_button}`}>
                    <Box sx={{ width: "12px", height: "12px", display: "inline-block" }}>
                      <Icon style={{ opacity: 0.5 }} src={iconsObj.infoCircle} />
                    </Box>
                  </button>
                  <div
                    style={{
                      top: "-361%",
                      left: "50%",
                      width: "200px",
                      transform: "translate(-57%, 0)",
                      pointerEvents: "none",
                    }}
                    className={`${stylesTooltip.tooltip_container}`}
                  >
                    <div className={`${stylesTooltip.tooltip_text}`}>
                      Add users that will sign this agreement.
                    </div>
                    <div
                      style={{ marginLeft: "50.5%" }}
                      className={`${stylesTooltip.tooltip_text_buttom}`}
                    ></div>
                  </div>
                </div>
              </Flex>
              {!userAlreadySigner ? (
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
                <div style={{ paddingTop: 0 }} className={`${stylesTooltip.tooltip}`}>
                  <button className={`${stylesTooltip.tooltip_button}`}>
                    <Box sx={{ width: "12px", height: "12px", display: "inline-block" }}>
                      <Icon style={{ opacity: 0.5 }} src={iconsObj.infoCircle} />
                    </Box>
                  </button>
                  <div
                    style={{
                      top: "-85px",
                      left: "50%",
                      width: "200px",
                      transform: "translate(-57%, 0)",
                      pointerEvents: "none",
                    }}
                    className={`${stylesTooltip.tooltip_container}`}
                  >
                    <div className={`${stylesTooltip.tooltip_text}`}>
                      Add users that will be able to see but not sign an agreement.
                    </div>
                    <div
                      style={{ marginLeft: "50.5%" }}
                      className={`${stylesTooltip.tooltip_text_buttom}`}
                    ></div>
                  </div>
                </div>
              </Flex>
              {!userAlreadyObserver ? (
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
                <div style={{ paddingTop: 0 }} className={`${stylesTooltip.tooltip}`}>
                  <button className={`${stylesTooltip.tooltip_button}`}>
                    <Box sx={{ width: "12px", height: "12px", display: "inline-block" }}>
                      <Icon style={{ opacity: 0.5 }} src={iconsObj.infoCircle} />
                    </Box>
                  </button>
                  <div
                    style={{
                      top: "-65px",
                      left: "50%",
                      width: "200px",
                      transform: "translate(-56%, 0)",
                      pointerEvents: "none",
                    }}
                    className={`${stylesTooltip.tooltip_container}`}
                  >
                    <div className={`${stylesTooltip.tooltip_text}`}>
                      Required level of verification. More levels are coming soon.
                    </div>
                    <div
                      style={{ marginLeft: "50.5%" }}
                      className={`${stylesTooltip.tooltip_text_buttom}`}
                    ></div>
                  </div>
                </div>
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
