import React, { useState } from "react";
import { Container, Flex, Input, Text, Button, Box } from "theme-ui";
import { inputCreactAgreement, plus } from "../styles";
import { uniqueId } from "../../../utils/formats";
import iconsObj from "../../../assets/icons";
import Icon from "../../icon";
import { useCreateAgreement } from "../../../hooks/useCreateAgreement";

export default function StepThree() {
  const { state, setStateCreateAgreement } = useCreateAgreement();
  const items = (array: any, name: "signers" | "observers") => {
    return (
      <Flex>
        {array.map((el: any) => {
          return (
            <Button
              onClick={() => onDelete(el, name)}
              sx={{ variant: "buttons.itemsBtn" }}
              key={el.id}
            >
              <Text sx={{ mr: "3px" }}>{el.value}</Text>
              <Box sx={{ width: "13px", height: "11px" }}>
                <Icon style={{ opacity: 0.5 }} src={iconsObj.plusCircle} />
              </Box>
            </Button>
          );
        })}
      </Flex>
    );
  };

  const onSubmit = (name: string) => {
    if (name === "signers") {
      if (state.signersValue) {
        setStateCreateAgreement("signers", [
          ...state.signers,
          { value: state.signersValue, id: uniqueId() },
        ]);
      }
    } else {
      if (state.observersValue) {
        setStateCreateAgreement("observers", [
          ...state.observers,
          { value: state.observersValue, id: uniqueId() },
        ]);
      }
    }
  };

  const onDelete = (el: any, key: "signers" | "observers") => {
    setStateCreateAgreement(key, [...state[key].filter(e => e.id !== el.id)]);
  };

  return (
    <Container sx={{ maxWidth: "440px", textAlign: "left" }}>
      <Flex sx={{ position: "relative" }}>
        <Text sx={{ variant: "forms.label", ml: "3px", maxWidth: "unset" }}>
          Signers (ENS name, adderes or email)
          <Box sx={{ width: "12px", height: "12px", display: "inline-block" }}>
            <Icon style={{ opacity: 0.5 }} src={iconsObj.infoCircle} />
          </Box>
        </Text>
        <Button
          onClick={() => onSubmit("signers")}
          sx={{
            variant: "buttons.back",
            justifyContent: "flex-end",
            height: "25px",
            width: "initial",
          }}
        >
          Add Me{" "}
        </Button>
        <Box onClick={() => onSubmit("signers")} sx={plus}>
          <Icon width="24px" height="24px" style={{ opacity: 0.5 }} src={iconsObj.pinkPlus} />
        </Box>
      </Flex>
      <Input
        value={state.signersValue}
        onChange={e => setStateCreateAgreement("signersValue", e.target.value)}
        sx={{ variant: "forms.input", ...inputCreactAgreement, mb: "8px" }}
      />
      {items(state.signers, "signers")}
      <Flex sx={{ mt: "24px", position: "relative" }}>
        <Text sx={{ variant: "forms.label", ml: "3px", maxWidth: "unset" }}>
          Observers (ENS name or adderess)
          <Box sx={{ width: "12px", height: "12px", display: "inline-block" }}>
            <Icon width="12px" height="12px" style={{ opacity: 0.5 }} src={iconsObj.infoCircle} />
          </Box>
        </Text>
        <Button
          onClick={() => onSubmit("observers")}
          sx={{
            variant: "buttons.back",
            justifyContent: "flex-end",
            height: "25px",
            width: "initial",
          }}
        >
          Add Me{" "}
        </Button>
        <Box onClick={() => onSubmit("observers")} sx={plus}>
          <Icon width="24px" height="24px" style={{ opacity: 0.5 }} src={iconsObj.pinkPlus} />
        </Box>
      </Flex>
      <Input
        value={state.observersValue}
        onChange={e => setStateCreateAgreement("observersValue", e.target.value)}
        sx={{ variant: "forms.input", ...inputCreactAgreement, mb: "8px" }}
      />
      {items(state.observers, "observers")}
    </Container>
  );
}
