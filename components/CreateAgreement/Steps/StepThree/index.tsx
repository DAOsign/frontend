import React, { useRef, useState } from "react";
import { Container, Flex, Input, Text, Button, Box } from "theme-ui";
import { inputCreactAgreement, plus } from "../../styles";
import { uniqueId } from "../../../../utils/formats";
import iconsObj from "../../../../assets/icons";
import Icon from "../../../icon";
import { useCreateAgreement } from "../../../../hooks/useCreateAgreement";
import { useWeb3 } from "../../../../hooks/useWeb3";
import { useMemo } from "react";

export default function StepThree() {
  const { values, changeValue } = useCreateAgreement();
  const { account } = useWeb3();
  const items = (array: any, name: "signers" | "observers") => {
    return (
      <Flex sx={{ flexWrap: "wrap", gap: "4px" }}>
        {array.map((el: any) => {
          return (
            <Box
              onClick={() => onDelete(el, name)}
              sx={{
                variant: "buttons.itemsBtn",
                p: "5px 9px 5px 14px",
                width: "fit-content",
                gap: "4px",
              }}
              key={el.id}
            >
              <Text
                sx={{
                  fontFamily: "InterRegular",
                }}
              >
                {el.value}
              </Text>
              <Box sx={{ width: "13px", height: "11px" }}>
                <Icon style={{ opacity: 0.5 }} src={iconsObj.plusCircle} />
              </Box>
            </Box>
          );
        })}
      </Flex>
    );
  };

  const signerInputRef = useRef<HTMLInputElement>();
  const observerInputRef = useRef<HTMLInputElement>();

  const addSigner = (value?: string) => {
    if (value && signerInputRef.current) {
      changeValue("signers", [...values.signers, { value: value, id: uniqueId() }]);
      signerInputRef.current.value = "";
    }
  };

  const addObserver = (value?: string) => {
    if (value && observerInputRef.current) {
      changeValue("observers", [...values.observers, { value: value, id: uniqueId() }]);
      observerInputRef.current.value = "";
    }
  };

  const addMe = (to: "signers" | "observers") => {
    if (!values[to].map(a => a.value).includes(account!)) {
      changeValue(to, [...values[to], { value: account, id: uniqueId() }]);
    }
  };

  const onDelete = (el: any, key: "signers" | "observers") => {
    changeValue(key, [...values[key].filter(e => e.id !== el.id)]);
  };

  const userAlreadySigner = useMemo(
    () => !values.signers.map(a => a.value).includes(account!),
    [values.signers, account]
  );

  const userAlreadyObserver = useMemo(
    () => !values.observers.map(a => a.value).includes(account!),
    [values.observers, account]
  );

  return (
    <Container sx={{ maxWidth: "440px", textAlign: "left" }}>
      <Box sx={{ minHeight: "115px" }}>
        <Flex sx={{ position: "relative" }}>
          <Text sx={{ variant: "forms.label", ml: "3px", maxWidth: "unset" }}>
            Signers (ENS name, adderes or email)
            <Box sx={{ width: "12px", height: "12px", display: "inline-block" }}>
              <Icon style={{ opacity: 0.5 }} src={iconsObj.infoCircle} />
            </Box>
          </Text>
          <Button
            onClick={() => addMe("signers")}
            className={userAlreadySigner ? "disabled" : ""}
            sx={{
              variant: "buttons.back",
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
          sx={{ variant: "forms.input", ...inputCreactAgreement, mb: "8px" }}
        />

        {items(values.signers, "signers")}
      </Box>
      <Box sx={{ minHeight: "115px" }}>
        <Flex sx={{ mt: "24px", position: "relative" }}>
          <Text sx={{ variant: "forms.label", ml: "3px", maxWidth: "unset" }}>
            Observers (ENS name or adderess)
            <Box sx={{ width: "12px", height: "12px", display: "inline-block" }}>
              <Icon width="12px" height="12px" style={{ opacity: 0.5 }} src={iconsObj.infoCircle} />
            </Box>
          </Text>
          <Button
            onClick={() => addMe("observers")}
            className={userAlreadyObserver ? "disabled" : ""}
            sx={{
              variant: "buttons.back",
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
          sx={{ variant: "forms.input", ...inputCreactAgreement, mb: "8px" }}
        />
        {items(values.observers, "observers")}
      </Box>
    </Container>
  );
}
