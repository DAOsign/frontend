import React, { useCallback } from 'react'
import Icon from '../icon/index'
import { Container, Flex, Text, Button, Box } from 'theme-ui'
import iconsObj from '../../assets/icons';
import {
  secondaryTitleStep,
  primaryTitleItem,
  containerButtons, 
  stepsContainer, 
  leftSideItem, 
  stepNumber, 
  stepStyle, 
  box,
  fW, 
  } from './styles'

interface LeftSideoProp {
    step: number;
    setStep: any;
    title: string;
    methodAgreementAccess:any;
    radioValue: string;
    valueTextEditor: string;
    observers: any;
    signers: any;
  }

export default function LeftSide ({
    methodAgreementAccess, 
    valueTextEditor,
    radioValue,
    observers,
    setStep,
    signers,
    title, 
    step,
  }: LeftSideoProp) {

    

  const value = useCallback(() => {
   return {
      1: !title || !methodAgreementAccess,
      2: radioValue === 'cloud' ? !valueTextEditor : false,
      3: !observers.length || !signers.length
    }
  }, [radioValue, title, methodAgreementAccess, valueTextEditor , observers, signers])
  console.log(observers, !observers.length && !signers.length, step, value()[step] );
  
  return ( <>
    <Container sx={stepsContainer}>
      <Flex sx={{...stepStyle, mt: 0}}>
          <Box sx={stepNumber}>
            { step > 1 
            ? <Icon src={iconsObj.done}/>
            : <Text sx={{variant: 'text.normalTextBold', color: '#fff'}}>1</Text>}
          </Box>
       
          <Container sx={leftSideItem}>
              <Text sx={primaryTitleItem}>Privacy</Text>
              <Text sx={secondaryTitleStep}>Enter title and privacy ot the agreement</Text>
          </Container>
      </Flex>
      <Container sx={box}></Container>
      <Flex sx={stepStyle}>
          <Box sx={{...stepNumber, backgroundColor: (step > 1 ?  '#CA5CF2' : '#EDEDF3')}}>
          {
            step > 2 ? 
            <Icon src={iconsObj.done}/>
            :
            <Text sx={{variant: 'text.normalTextBold', color: '#fff'}}>2</Text>
            }
          </Box>
          <Container sx={leftSideItem}>
              <Text sx={primaryTitleItem}>Content</Text>
              <Text sx={secondaryTitleStep}>Enter agreement content</Text>
          </Container>
      </Flex>
     <Container sx={box}></Container>
      <Flex  sx={stepStyle}>
      <Box sx={{...stepNumber, backgroundColor: (step > 2 ?  '#CA5CF2' : '#EDEDF3')}}>
      <Text sx={{variant: 'text.normalTextBold', color: '#fff'}}>3</Text>
      </Box>
      <Container sx={leftSideItem}>
          <Text sx={primaryTitleItem}>Signers</Text>
          <Text sx={secondaryTitleStep}>Add signers and observers</Text>
      </Container>
      </Flex>
    </Container>
    <Container sx={containerButtons}>
       <Button 
          onClick={() => setStep(step > 1 ? step - 1 : 1 )} 
          sx={{variant: 'buttons.secondary', ...fW, mt:'60px'}} 
          type='button'>{step > 1 ? 'Back' : 'Cancel'}
        </Button>
         <Button 
          sx={{variant: 'buttons.secondary', ...fW, mt:'20px'}} 
          type='button'>Save Draft
        </Button>
        <Button
          disabled={value()[step]}
          onClick={() => setStep(step + 1)}
          sx={{variant: 'buttons.primary', ...fW, mt:'20px'}} 
          type='button'>Next Step
        </Button>
    </Container>
  </>
  );
}

