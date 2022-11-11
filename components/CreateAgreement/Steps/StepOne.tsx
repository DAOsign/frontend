import React, {useState} from "react";
import { Container, Flex, Input, Text } from 'theme-ui'
import iconsObj from "../../../assets/icons";
import Icon from "../../icon";
import {leftSide, card} from "../styles";


export default function StepOne() {
const [step, setStep] = useState(true)
  return (
   <Container sx={leftSide}>
    <Text sx={{variant: 'text.h2'}}>
      Create New Agreement
    </Text>
    <Text sx={{variant: 'forms.label', display: 'block', marginRight: 'auto', textAlign: 'left', ml: '3px', mt: '40px'}}>Title</Text>
    <Input sx={{variant: 'forms.input', backgroundColor: '#F7F7FB', width: '100%', borderRadius: '8px'}}/>
    <Text sx={{variant: 'forms.label', display: 'block', marginRight: 'auto', textAlign: 'left', margin:'24px 0 3px 2px'}}>Agreement privacy</Text>
    {
      step ?
      <Flex> 
        <Container sx={card}>
            <div style={{width: '50px', height: '50px', margin: '0 auto'}}>
                <Icon width='50px' height='50px' src={iconsObj.publicIcon}/>
            </div>
            <Text sx={{variant: 'text.h4', lineHeight: '120%', mt:'20px', display: 'block'}}>Public</Text>
            <Text sx={{variant: 'text.smallTextMedium', lineHeight: '22.4px', margin:'20px auto 0', maxWidth: '160px', display: 'block', opacity: 1}}>
                  Accessed Publicly based on sharing opionts
            </Text>
        </Container>
        <Container sx={{...card, ml: '20px'}}>
            <div style={{width: '50px', height: '50px', margin: '0 auto'}}>
                <Icon width='50px' height='50px' src={iconsObj.privateIcon}/>
            </div>
            <Text sx={{variant: 'text.h4', lineHeight: '120%', mt:'20px', display: 'block'}}>Private</Text>
            <Text sx={{variant: 'text.smallTextMedium', lineHeight: '22.4px', margin:'20px auto 0', maxWidth: '160px' , display: 'block', opacity: 1}}>
                  Accessed only by Signers or Observes
            </Text>
        </Container>
      </Flex>
      : null
    }
  
   </Container>

  );
}
