import React, {useState} from "react";
import { Container, Flex, Input, Text, Button, IconButton } from 'theme-ui'
import iconsObj from "../../../assets/icons";
import Icon from "../../icon";
import {leftSide, card, item} from "../styles";



export default function StepOne() {
const [step, setStep] = useState(true)
  return (
    <Container sx={{maxWidth: '440px'}}>
    <Text sx={{variant: 'forms.label', display: 'block', marginRight: 'auto', textAlign: 'left', ml: '3px'}}>Title</Text>
    <Input sx={{variant: 'forms.input', backgroundColor: '#F7F7FB', width: '100%', borderRadius: '8px'}}/>
    <Text sx={{variant: 'forms.label', display: 'block', marginRight: 'auto', textAlign: 'left', margin:'24px 0 3px 2px'}}>Agreement privacy</Text>
    {step ?
      <Flex sx={{justifyContent: 'space-between'}}> 
        <Container sx={{...card, cursor: 'pointer'}}onClick={() => setStep(!step)}>
            <div style={{width: '50px', height: '50px', margin: '0 auto'}}>
                <Icon width='50px' height='50px' src={iconsObj.publicIcon}/>
            </div>
            <Text sx={{variant: 'text.h4', lineHeight: '120%', mt:'20px', display: 'block'}}>Public</Text>
            <Text sx={{variant: 'text.smallTextMedium', lineHeight: '22.4px', margin:'20px auto 0', maxWidth: '160px', display: 'block', opacity: 1}}>
                  Accessed Publicly based on sharing opionts
            </Text>
        </Container>
        <Container sx={{...card, cursor: 'pointer'}}>
            <div style={{width: '50px', height: '50px', margin: '0 auto'}}>
                <Icon width='50px' height='50px' src={iconsObj.privateIcon}/>
            </div>
            <Text sx={{variant: 'text.h4', lineHeight: '120%', mt:'20px', display: 'block'}}>Private</Text>
            <Text sx={{variant: 'text.smallTextMedium', lineHeight: '22.4px', margin:'20px auto 0', maxWidth: '160px' , display: 'block', opacity: 1}}>
                  Accessed only by Signers or Observes
            </Text>
        </Container>
      </Flex>
      : 
      <Container sx={{border: '2px solid #F7F7FB', borderRadius: '8px', px: '32px', py: '24px'}}>
       <Flex sx={{alignItems: 'center'}}> 
          <Text sx={{variant: 'text.largeTextBold'}}>Public</Text> 
          <Button onClick={() => setStep(!step)} sx={{variant: 'buttons.back', border: 'unset', color: '#CA5CF2', width: '165px'}}>
             <Icon style={{display: 'block'}} src={iconsObj.arrowLeftPink}/>
             <Text sx={{display: 'block'}}>Choose another privacy</Text>
          </Button>
       </Flex>
       <Flex sx={{ alignItems: 'start', ...item,  mb: '10px'}}>
          <Icon src={iconsObj.globe}/>
          <Container sx={{textAlign: 'left', maxWidth: '290px', ml: '6px'}}>
              <Text sx={{variant: 'text.smallTextMedium', fontWeight: 700, opacity: 1, display: 'block', mb: '3px'}}>Published</Text>
              <Text sx={{variant: 'text.secondary', opacity: 1, display: 'block'}}>Public and available on the your 
              <Text sx={{cursor: 'pointer'}} color="#CA5CF2">public signature profile</Text>
              </Text>
          </Container>
       </Flex>
       <Flex sx={{ alignItems: 'start', ...item, mb: '10px'}}>
          <Icon src={iconsObj.proofSecondary}/>
          <Container sx={{textAlign: 'left', maxWidth: '295px', ml: '6px'}}>
              <Text sx={{variant: 'text.smallTextMedium', fontWeight: 700, opacity: 1, display: 'block', mb: '3px'}}>Proof  Only</Text>
              <Text sx={{variant: 'text.secondary', opacity: 1, display: 'block'}}>
                Public Proof of Agreement available on your Public signature profile, but agreement content is hidden.
              </Text>
          </Container>
       </Flex>
       <Flex sx={{ alignItems: 'start', ...item}}>
          <Icon src={iconsObj.ink}/>
          <Container sx={{textAlign: 'left', maxWidth: '290px', ml: '6px'}}>
              <Text sx={{variant: 'text.smallTextMedium', fontWeight: 700, opacity: 1, display: 'block', mb: '3px'}}>Anyone with Link</Text>
              <Text sx={{variant: 'text.secondary', opacity: 1, display: 'block'}}>Public, but only available with an 
              <Text sx={{cursor: 'pointer'}} color="#CA5CF2">agreement share link</Text>
               </Text>
          </Container>
       </Flex>
      </Container>
       }
    </Container>

  );
}
