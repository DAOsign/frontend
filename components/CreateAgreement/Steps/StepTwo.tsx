import React, {useState} from "react";
import { Container, Flex, Text, Radio, Label, Box } from 'theme-ui'
import Icon from '../../icon/index'
import {card, flex} from '../styles'
import iconsObj from "../../../assets/icons";

const agreementLocations = [{
  name: 'Cloud',
  value: 'cloud',
},
{
  name: 'Public IPFS',
  value: 'publicIPFS',
},
{
  name: 'Private IPFS',
  value: 'privateIPFS',
},
{
  name: 'Local',
  value: 'local',
}]

export default function StepOne() {
   const [radioValue, setRdioValue] = useState('')

  return (
    <Container sx={{maxWidth: '440px', textAlign: 'left'}}>
      <Text sx={{variant: 'forms.label', mr: 'auto', display: 'block', maxWidth: '150px', mb: '5px'}}>
        Agreement location <Icon width='12px' height='12px' style={{opacity: 0.5}} src={iconsObj.infoCircle}/>
      </Text>
      <Box  as='form'
        onSubmit={(e) => e.preventDefault()}>
      <Flex sx={{mb: '24px', justifyContent: 'space-between'}}>
        {agreementLocations.map(el => {
          return <Label 
            key={el?.name} 
            sx={{
              justifyContent: 'space-between',
              width: 'inherit', 
              opacity: 1, 
              ...flex, 
            }}  
            onClick={() => setRdioValue(el.value)}>
          <Icon width='16px' src={radioValue === el.value ? iconsObj.radioOn : iconsObj.radioOff}/>
          <Radio 
             sx={{boxShadow: 'none'}} 
             name='letter' value={el.value}/> 
             <Text sx={{ml: '5px', variant: 'text.normalTextMedium'}}>{el.name}</Text>
        </Label>
        })}
      </Flex>
      </Box>
      <Text sx={{variant: 'forms.label'}}>Agreement description</Text>
      <Flex sx={{justifyContent: 'space-between'}}> 
        <Container sx={{...card, cursor: 'pointer'}}>
            <div style={{width: '50px', height: '50px', margin: '0 auto'}}>
                <Icon width='50px' height='50px' src={iconsObj.uploadCloudPrimary}/>
            </div>
            <Text sx={{variant: 'text.largeTextBold', lineHeight: '120%', mt:'24px', mb:'20px'}}>Upload Agreement</Text>
            <Text sx={{variant: 'text.smallTextMedium', maxWidth: '160px', opacity: 1}}>
               Upload file of a type PDF, DOCX, TXT
            </Text>
        </Container>
        <Container sx={{...card, cursor: 'pointer'}}>
            <div style={{width: '50px', height: '50px', margin: '0 auto'}}>
                <Icon width='50px' height='50px' src={iconsObj.fileSecondarysvg}/>
            </div>
            <Text sx={{variant: 'text.largeTextBold', mb:'20px',  mt:'24px'}}>Enter Agreement</Text>
            <Text sx={{variant: 'text.smallTextMedium', maxWidth: '160px' , opacity: 1}}>
                Enter Text or Markdown content for the Agreement
            </Text>
        </Container>
      </Flex>
    </Container>
  );
}
