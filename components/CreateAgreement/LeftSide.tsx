import React from 'react'
import Icon from '../icon/index'
import { Container, Flex, Input, Text, Button, Box } from 'theme-ui'
import iconsObj from '../../assets/icons';
import {stepNumber, leftSideItem, fW} from './styles'


interface LeftSideoProp {
    step: number;
    setStep: any;
  }

export default function LeftSide (prop: LeftSideoProp) {
  return ( <><Flex>
    <Box sx={stepNumber}>
      { prop.step > 1 
      ? <Icon src={iconsObj.done}/>
      : <Text sx={{variant: 'text.normalTextBold', color: '#fff'}}>1</Text>}
    </Box>
    <Container sx={leftSideItem}>
        <Text sx={{variant: 'text.largeTextBold'}}>Privacy</Text>
        <Text sx={{variant: 'text.overscript',  opacity: 0.5}}>Enter title and privacy ot the agreement</Text>
    </Container>
    </Flex>
    <Flex sx={{mt: '56px', alignItems: 'center'}}>
    <Box sx={{...stepNumber, backgroundColor: (prop.step > 1 ?  '#CA5CF2' : '#EDEDF3')}}>
     {
       prop.step > 2 ? 
       <Icon src={iconsObj.done}/>
       :
       <Text sx={{variant: 'text.normalTextBold', color: '#fff'}}>2</Text>
      }
    </Box>
    <Container sx={leftSideItem}>
        <Text sx={{variant: 'text.largeTextBold'}}>Content</Text>
        <Text sx={{variant: 'text.overscript', opacity: 0.5}}>Enter agreement content</Text>
    </Container>
    </Flex>
    <Flex  sx={{mt: '56px', alignItems: 'center'}}>
    <Box sx={{...stepNumber, backgroundColor: (prop.step > 2 ?  '#CA5CF2' : '#EDEDF3')}}>
    <Text sx={{variant: 'text.normalTextBold', color: '#fff'}}>3</Text>
    </Box>
    <Container sx={leftSideItem}>
        <Text sx={{variant: 'text.largeTextBold'}}>Signers</Text>
        <Text sx={{variant: 'text.overscript', opacity: 0.5}}>Add signers and observers</Text>
    </Container>
    </Flex>
    <Button 
       onClick={() => prop.setStep(prop.step - 1)} 
       sx={{variant: 'buttons.secondary', ...fW, mt:'60px'}} 
       type='button'>{prop.step > 1 ? 'Back' : 'Cancel'}
    </Button>
    {prop.step === 2 && <Button 
       sx={{variant: 'buttons.secondary', ...fW, mt:'20px'}} 
       type='button'>Save Draft
    </Button>}
    <Button 
       onClick={() => prop.setStep(prop.step + 1)}
       sx={{variant: 'buttons.primary', ...fW, mt:'20px'}} 
       type='button'>Next Step
    </Button>
  </>
  );
}

