import React from 'react'
import Icon from '../icon/index'
import { Container, Flex, Text, Button, Box } from 'theme-ui'
import iconsObj from '../../assets/icons';
import {
   stepNumber, 
   leftSideItem, 
   fW, 
   containerButtons, 
   stepsContainer, 
   stepStyle, 
   secondaryTitleStep
  } from './styles'


interface LeftSideoProp {
    step: number;
    setStep: any;
  }

export default function LeftSide (prop: LeftSideoProp) {
  return ( <>
    <Container sx={stepsContainer}>
      <Flex sx={{...stepStyle, mt: 0}}>
          <Box sx={stepNumber}>
            { prop.step > 1 
            ? <Icon src={iconsObj.done}/>
            : <Text sx={{variant: 'text.normalTextBold', color: '#fff'}}>1</Text>}
          </Box>
          <Container sx={leftSideItem}>
              <Text sx={{variant: 'text.largeTextBold'}}>Privacy</Text>
              <Text sx={secondaryTitleStep}>Enter title and privacy ot the agreement</Text>
          </Container>
      </Flex>
      <Flex sx={stepStyle}>
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
              <Text sx={secondaryTitleStep}>Enter agreement content</Text>
          </Container>
      </Flex>
      <Flex  sx={stepStyle}>
      <Box sx={{...stepNumber, backgroundColor: (prop.step > 2 ?  '#CA5CF2' : '#EDEDF3')}}>
      <Text sx={{variant: 'text.normalTextBold', color: '#fff'}}>3</Text>
      </Box>
      <Container sx={leftSideItem}>
          <Text sx={{variant: 'text.largeTextBold'}}>Signers</Text>
          <Text sx={secondaryTitleStep}>Add signers and observers</Text>
      </Container>
      </Flex>
    </Container>
    <Container sx={containerButtons}>
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
    </Container>
  </>
  );
}

