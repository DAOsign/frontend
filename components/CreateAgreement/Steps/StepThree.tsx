import React, { useState } from "react";
import { Container, Flex, Input, Text, Button } from "theme-ui";
import { inputCreactAgreement } from "../styles";
import { uniqueId } from "../../../utils/formats";
import iconsObj from "../../../assets/icons";
import Icon from "../../icon";
import { useCreateAgreement } from "../../../hooks/useCreateAgreement";

export default function StepThree() {
  const { state, setStateCreateAgreement } = useCreateAgreement();
  const items = (array: any, name: string) => {
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
              <Icon style={{ opacity: 0.5 }} width="13px" height="11px" src={iconsObj.plusCircle} />
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

  const onDelete = (el: any, name: string) => {
    if (name === "signers") {
      //@ts-ignore
      setSigners(signers.filter(e => e.id !== el.id));
    } else {
      //@ts-ignore
      setObservers(observers.filter(e => e.id !== el.id));
    }
  };

  return (
    <Container sx={{ maxWidth: "440px", textAlign: "left" }}>
      <Flex>
        <Text sx={{ variant: "forms.label", ml: "3px", maxWidth: "unset" }}>
          Signers (ENS name, adderes or email)
          <Icon width="12px" height="12px" style={{ opacity: 0.5 }} src={iconsObj.infoCircle} />
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
      </Flex>
      <Input
        value={state.signersValue}
        onChange={e => setStateCreateAgreement("signersValue", e.target.value)}
        sx={{ variant: "forms.input", ...inputCreactAgreement, mb: "8px" }}
      />
      {items(state.signers, "x")}
      <Flex sx={{ mt: "24px" }}>
        <Text sx={{ variant: "forms.label", ml: "3px", maxWidth: "unset" }}>
          Observers (ENS name or adderess)
          <Icon width="12px" height="12px" style={{ opacity: 0.5 }} src={iconsObj.infoCircle} />
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
