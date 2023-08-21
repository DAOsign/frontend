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
import Tooltip from "../Tooltip";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {
  validateAddress,
  validateEnsDomains,
} from "../CreateAgreement/Steps/StepThree/validationUtils";
import CloseIcon from "../IconComponent/CloseIcon";
import { toAgreementWithParticipants } from "../../utils/typeUtils";
import { useMutation } from "urql";
import { editObservers as editObserversMutation } from "../../modules/graphql/mutations";
import { notifError, notifSuccess } from "../../utils/notification";

interface Props {
  agreement: ReturnType<typeof toAgreementWithParticipants>;
  isOpen: boolean;
  onExit: () => void;
  onSuccess?: () => Promise<void>;
}

export default function ModalEditObservers({ agreement, isOpen, onExit, onSuccess }: Props) {
  const [observers, setObservers] = useState<{ id: number; value: string }[]>(
    agreement.observers.map((o, i) => ({ id: i, value: o.ens?.name || o.wallet!.address! }))
  );

  const observerInputRef = useRef<HTMLInputElement>();
  const { width } = useWindowDimensions();
  const { account } = useWeb3();
  const [error, setError] = useState<string | null | undefined>();
  const [{ fetching: loading }, editObservers] = useMutation(editObserversMutation);

  const signers = useMemo(() => agreement.signers.map(s => s.wallet?.address!), [agreement]);

  const onChangeObserverInputValue: React.ChangeEventHandler<HTMLInputElement> = e => {
    setError(null);
  };

  const onDelete = (el: any) => {
    setObservers(observers?.filter(e => e?.id !== el?.id));
  };

  const userAlreadyObserver = useMemo(
    () => observers?.some(observer => observer?.value?.toLowerCase() === account?.toLowerCase()),
    [observers, account]
  );

  const userAlreadySigner = useMemo(
    () => signers.some(signer => signer === account?.toLowerCase()),
    [signers, account]
  );

  const validateObserver = (value: string): string | undefined => {
    if (signers.some(signer => signer === value)) {
      return "Already exists as Signer";
    }

    if (observers.some(observer => observer?.value === value)) {
      return "Observer is already added";
    }

    const isEns = value?.includes(".eth");
    const isAddress = value?.startsWith("0x");
    if (!isEns && !isAddress) {
      return "Invalid value";
    }

    if (isEns) {
      return validateEnsDomains(value);
    }

    if (isAddress) {
      return validateAddress(value);
    }
  };

  const addMe = () => {
    handleAddObserver(account!.toLocaleLowerCase());
  };

  const handleAddObserver = (value?: string) => {
    if (value && observerInputRef.current) {
      const validationError = validateObserver(value.toLowerCase());

      if (validationError) {
        setError(validationError);
        return;
      }
      setObservers([...observers, { value: value.toLowerCase(), id: uniqueId() }]);
      observerInputRef.current.value = "";
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, type: ParticipantType) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      //@ts-ignore
      const value = e.target.value;
      handleAddObserver(value);
    }
  };

  const handleSubmit = () => {
    editObservers({
      agreementId: agreement.agreementId,
      observers: observers.map(o => o.value),
    }).then(({ data, error }) => {
      if (error) {
        error?.graphQLErrors?.map(e => notifError(e.message));
        return;
      }
      notifSuccess("Observers edited");
      onSuccess && onSuccess();
      onExit();
    });
  };

  return (
    <Portal isOpen={isOpen} onClose={onExit}>
      <ModalBase
        //@ts-ignore
        width={width >= 1200 ? "756px" : width >= 720 ? "672px" : "343px"}
        height="fit-content"
      >
        <Flex sx={flexContainer}>
          <Box onClick={onExit} sx={closeIcon}>
            <CloseIcon />
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
              {!userAlreadyObserver && !userAlreadySigner ? (
                <Button
                  onClick={() => addMe()}
                  className={userAlreadyObserver && userAlreadySigner ? "'disabled'" : ""}
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
                onClick={() =>
                  handleAddObserver(observerInputRef.current?.value.toLocaleLowerCase())
                }
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
            <Button sx={btnApply} onClick={handleSubmit} disabled={loading}>
              Apply
            </Button>
          </Flex>
        </Flex>
      </ModalBase>
    </Portal>
  );
}
