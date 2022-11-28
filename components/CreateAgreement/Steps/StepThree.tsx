import React, { useState } from "react";
import { Container, Flex, Input, Text, Button } from "theme-ui";
import { card, item, inputCreactAgreement, secondaryTitle, container } from "../styles";
import { uniqueId } from "../../../utils/formats";
import iconsObj from "../../../assets/icons";
import Icon from "../../icon";

export default function StepThree() {
  const [signers, setSigners] = useState<Array<{ value: string; id: number }>>([]);
  const [signersValue, setSignersValue] = useState("");
  const [observers, setObservers] = useState<Array<{ value: string; id: number }>>([]);
  const [observersValue, setObserversValue] = useState("");

  console.log(signers, observers);

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
      if (signersValue) setSigners([...signers, { value: signersValue, id: uniqueId() }]);
      setSignersValue("");
    } else {
      if (observersValue) setObservers([...observers, { value: observersValue, id: uniqueId() }]);
      setObserversValue("");
    }
  };

  const onDelete = (el: any, name: string) => {
    if (name === "signers") {
      setSigners(signers.filter((e) => e.id !== el.id));
    } else {
      setObservers(observers.filter((e) => e.id !== el.id));
    }
  };

  return (
<<<<<<< HEAD
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
        value={signersValue}
        onChange={(e) => setSignersValue(e.target.value)}
        sx={{ variant: "forms.input", ...inputCreactAgreement, mb: "8px" }}
      />
      {items(signers, "signers")}
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
        value={observersValue}
        onChange={(e) => setObserversValue(e.target.value)}
        sx={{ variant: "forms.input", ...inputCreactAgreement, mb: "8px" }}
      />
      {items(observers, "observers")}
    </Container>
=======
    <Container sx={{maxWidth: '440px', textAlign: 'left'}}>
    <Flex>
      <Text sx={{variant: 'forms.label', ml: '3px', maxWidth: 'unset'}}>Signers (ENS name, adderes or email)
        <Icon width='12px' height='12px' style={{opacity: 0.5}} src={iconsObj.infoCircle}/>
      </Text>
      <Button onClick={() => onSubmit('signers')} sx={{variant: 'buttons.back', justifyContent: 'flex-end', height: '25px', width: 'initial'}}>Add Me </Button>
    </Flex>
    <Input 
       value={signersValue}
       onChange={(e) => setSignersValue(e.target.value)} 
       sx={{variant: 'forms.input', ...inputCreactAgreement, mb: '8px'}}/>
    {items(signers, 'signers')}
    <Flex sx={{mt: '24px'}}>
      <Text sx={{variant: 'forms.label', ml: '3px', maxWidth: 'unset'}}>Observers (ENS name or adderess)
        <Icon width='12px' height='12px' style={{opacity: 0.5}} src={iconsObj.infoCircle}/>
      </Text>
      <Button onClick={() => onSubmit('observers')} sx={{variant: 'buttons.back', justifyContent: 'flex-end', height: '25px', width: 'initial'}}>Add Me </Button>
    </Flex>
    <Input 
       value={observersValue}
       onChange={(e) => setObserversValue(e.target.value)} 
       sx={{variant: 'forms.input', ...inputCreactAgreement, mb: '8px'}}/>
    {items(observers, 'observers')}
 </Container>
>>>>>>> 3cd6dc35758ab2c422d2171a3e30abd7cdcd9291
  );
}
