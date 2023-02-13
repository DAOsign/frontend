import React, { useState, useMemo, useRef } from "react";
import { Flex, Text, Button, Box, Input } from "theme-ui";
import Icon from "../icon/index";
import { useWeb3 } from "../../hooks/useWeb3";
import {
  plus,
  inputCreactAgreement,
  inputCreateAgreementWithRightButton,
} from "../CreateAgreement/styles";
import TagList, { ParticipantType } from "../CreateAgreement/Steps/StepThree/TagList";
import { uniqueId } from "../../utils/formats";
import iconsObj from "../../assets/icons";
import FieldErrorMessage from "../Form/FieldErrorMessage";
import {
  flexContainer,
  closeIcon,
  mainText,
  btnCancel,
  content,
  container,
  btnApply,
  inputAddObs,
  btnModalContainer,
} from "./styles";
import { Portal } from "../Portal/Portal";
import { ModalBase } from "../ModalBase/ModalBase";
import Tooltip from "../../components/Tooltip";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {
  validateAddress,
  validateEnsDomains,
} from "../CreateAgreement/Steps/StepThree/validationUtils";

interface Props {
  isOpen: boolean;
  onExit: () => void;
}

export default function ModalAddObservers({ isOpen, onExit }: Props) {
  const [observers, setObservers] = useState<{ id: number; value: string }[]>([]);
  const [signers, setSigners] = useState([]);
  const observerInputRef = useRef<HTMLInputElement>();
  const { width } = useWindowDimensions();
  const { account } = useWeb3();
  const [error, setError] = useState<string | null | undefined>();

  const onChangeObserverInputValue: React.ChangeEventHandler<HTMLInputElement> = e => {
    setError(null);
  };

  const onDelete = (el: any) => {
    setObservers(observers?.filter(e => e?.id !== el?.id));
  };

  const userAlreadyObserver = useMemo(
    () =>
      observers?.some(
        //@ts-ignore
        observer => observer?.value?.toLocaleLowerCase() === account?.toLocaleLowerCase()
      ),
    [observers, account]
  );

  const validateUser = (
    value: string,
    userRole: "signer" | "observer",
    addedSigners: { id: number; value: string }[],
    addedObservers: { id: number; value: string }[]
  ): string | null => {
    const userAlreadySigner = addedSigners.some(signer => signer?.value === value);
    const userAlreadyObserver = addedObservers.some(observer => observer?.value === value);

    if (userAlreadySigner) {
      return userRole === "signer" ? "Signer is already added" : "Already exists as Signer";
    }

    if (userAlreadyObserver) {
      return userRole === "signer" ? "Already exists as Observer" : "Observer is already added";
    }

    const isEns = value?.includes(".eth");
    const isAddress = value?.startsWith("0x");
    if (!isEns && !isAddress) {
      return "Invalid value";
    }

    if (isEns) {
      const res = validateEnsDomains(value);
      if (res) return res;
    }

    if (isAddress) {
      const res = validateAddress(value);
      if (res) return res;
    }

    return null;
  };

  const addMe = () => {
    addObserver(account!.toLocaleLowerCase());
  };

  const addObserver = (value?: string) => {
    if (value && observerInputRef.current) {
      const validationError: string | null = validateUser(value, "observer", signers, observers);
      if (validationError) {
        setError(validationError);
        return;
      }
      setObservers([...observers, { value: value.toLocaleLowerCase(), id: uniqueId() }]);
      observerInputRef.current.value = "";
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, type: ParticipantType) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      //@ts-ignore
      const value = e.target.value;
      addObserver(value);
    }
  };

  return (
    <Portal isOpen={isOpen}>
      <ModalBase
        //@ts-ignore
        width={width >= 1200 ? "756px" : width >= 720 ? "672px" : "343px"}
        height="fit-content"
      >
        <Flex sx={flexContainer}>
          <Box onClick={onExit} sx={closeIcon}>
            <Icon src={iconsObj.xClose} />
          </Box>
          <Text sx={mainText}>Edit Observers</Text>
          <Box sx={content}>
            <Flex sx={container}>
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
              {!userAlreadyObserver ? (
                <Button
                  onClick={() => addMe()}
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
                sx={{
                  ...plus,
                  "@media screen and (max-width: 720px)": {
                    top: "33px",
                    width: "17px",
                  },
                }}
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
                // ...observersInputErrorStyles,
                mb: "8px",
                ...inputAddObs,
              }}
            />
          </Box>
          <Box
            sx={{
              "@media screen and (max-width: 720px)": {
                pl: "16px",
                pr: "16px",
              },
            }}
          >
            <FieldErrorMessage error={error} isAbsolutePosition={false} />
          </Box>
          <TagList items={observers} type="observers" onDelete={onDelete} />
          <Flex sx={btnModalContainer}>
            <Button onClick={onExit} sx={btnCancel}>
              Cancel
            </Button>
            <Button sx={btnApply}>Apply</Button>
          </Flex>
        </Flex>
      </ModalBase>
    </Portal>
  );
}
