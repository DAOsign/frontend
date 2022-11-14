import React, {useState} from "react";
import { Container, Flex, Text, Radio, Label, Box } from 'theme-ui'
import Icon from '../../icon/index'
import {card} from '../styles'
import iconsObj from "../../../assets/icons";

export default function StepOne() {
   const [radioValue, setRdioValue] = useState('')

  return (
    <Container sx={{maxWidth: '440px', textAlign: 'left'}}>
      <Text sx={{variant: 'forms.label', mr: 'auto', display: 'block', maxWidth: '150px', mb: '5px'}}>
        Agreement location <Icon width='12px' height='12px' style={{opacity: 0.5}} src={iconsObj.infoCircle}/>
      </Text>
      <Box  as='form'
        onSubmit={(e) => e.preventDefault()}>
      <Flex>
       <Label sx={{opacity: 1, maxWidth: '100px'}}  onClick={() => setRdioValue('cloud')}>
          <Icon width='16px'  className="radio" src={radioValue === 'cloud' ? iconsObj.radioOn : iconsObj.radioOff}/>
          <Radio sx={{boxShadow: 'none'}} name='letter' value='cloud'/> <Text sx={{ml: '5px', variant: 'text.normalTextMedium'}}>Cloud</Text>
        </Label>
        <Label sx={{opacity: 1}}  onClick={() => setRdioValue('publicIPFS')}> 
           <Icon  width='16px' className="radio" src={radioValue === 'publicIPFS' ? iconsObj.radioOn : iconsObj.radioOff}/>
           <Radio name='letter' /> <Text sx={{ml: '5px', variant: 'text.normalTextMedium'}} >Public IPFS</Text>
        </Label>
        <Label sx={{opacity: 1}}  onClick={() => setRdioValue('privateIPFS')}>
           <Icon width='16px'  className="radio" src={radioValue === 'privateIPFS' ? iconsObj.radioOn : iconsObj.radioOff}/>
           <Radio  name='letter'/> <Text sx={{ml: '5px', variant: 'text.normalTextMedium'}}>Private IPFS</Text>
        </Label>
        <Label  sx={{opacity: 1, maxWidth: '65px'}}  onClick={() => setRdioValue('local')}>
           <Icon width='16px' className="radio" src={radioValue === 'local' ? iconsObj.radioOn : iconsObj.radioOff}/>
           <Radio name='letter' /> <Text sx={{ml: '5px', variant: 'text.normalTextMedium'}}>Local</Text>
        </Label>
      </Flex>
      </Box>
      <Text sx={{variant: 'forms.label', display: 'inline-block', mt: '24px'}}>Agreement description</Text>
      <Flex sx={{justifyContent: 'space-between'}}> 
        <Container sx={{...card, cursor: 'pointer'}}>
            <div style={{width: '50px', height: '50px', margin: '0 auto'}}>
                <Icon width='50px' height='50px' src={iconsObj.uploadCloudPrimary}/>
            </div>
            <Text sx={{variant: 'text.h4', lineHeight: '120%', mt:'20px', display: 'block'}}>Upload Agreement</Text>
            <Text sx={{variant: 'text.smallTextMedium', lineHeight: '22.4px', margin:'20px auto 0', maxWidth: '160px', display: 'block', opacity: 1}}>
               Upload file of a type PDF, DOCX, TXT
            </Text>
        </Container>
        <Container sx={{...card, cursor: 'pointer'}}>
            <div style={{width: '50px', height: '50px', margin: '0 auto'}}>
                <Icon width='50px' height='50px' src={iconsObj.fileSecondarysvg}/>
            </div>
            <Text sx={{variant: 'text.h4', lineHeight: '120%', mt:'20px', display: 'block'}}>Enter Agreement</Text>
            <Text sx={{variant: 'text.smallTextMedium', lineHeight: '22.4px', margin:'20px auto 0', maxWidth: '160px' , display: 'block', opacity: 1}}>
                Enter Text or Markdown content for the Agreement
            </Text>
        </Container>
      </Flex>
    </Container>
  );
}
