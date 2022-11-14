import React from 'react'
import Icon from '../icon/index'
import { Container, Flex, Input, Text, Button } from 'theme-ui'
import iconsObj from '../../assets/icons';


interface LeftSideoProp {
    step: number;
    setStep: any;
  }

export default function LeftSide (prop: LeftSideoProp) {
  return ( <><Flex>
    <div style={{ backgroundColor: '#CA5CF2', width:'48px', height:'48px', borderRadius: '50%', textAlign: 'center', paddingTop: '13px'}}>
      {
        prop.step > 1 ? 
        <Icon src={iconsObj.done}/>
        :
        <Text sx={{variant: 'text.normalTextBold', color: '#fff'}}>1</Text>
      }
    </div>
    <Container sx={{textAlign: 'left', maxWidth: '230px', ml: '16px'}}>
        <Text sx={{variant: 'text.largeTextBold', display: 'block'}}>Privacy</Text>
        <Text sx={{variant: 'text.secondary',  display: 'block'}}>Enter title and privacy ot the agreement</Text>
    </Container>
    </Flex>
    <Flex sx={{mt: '56px', alignItems: 'center'}}>
    <div style={{ backgroundColor: (prop.step > 1 ?  '#CA5CF2' : '#EDEDF3'), width:'48px', height:'48px', borderRadius: '50%', textAlign: 'center', paddingTop: '13px'}}>
     {
       prop.step > 2 ? 
       <Icon src={iconsObj.done}/>
       :
       <Text sx={{variant: 'text.normalTextBold', color: '#fff'}}>2</Text>
      }
    </div>
    <Container sx={{textAlign: 'left', maxWidth: '230px', ml: '16px'}}>
        <Text sx={{variant: 'text.largeTextBold', display: 'block'}}>Content</Text>
        <Text sx={{variant: 'text.secondary',  display: 'block'}}>Enter agreement content</Text>
    </Container>
    </Flex>
    <Flex  sx={{mt: '56px', alignItems: 'center'}}>
    <div style={{ backgroundColor: (prop.step > 2 ?  '#CA5CF2' : '#EDEDF3'), width:'48px', height:'48px', borderRadius: '50%', textAlign: 'center', paddingTop: '13px'}}>
    <Text sx={{variant: 'text.normalTextBold', color: '#fff'}}>3</Text>
    </div>
    <Container sx={{textAlign: 'left', maxWidth: '230px', ml: '16px'}}>
        <Text sx={{variant: 'text.largeTextBold', display: 'block'}}>Signers</Text>
        <Text sx={{variant: 'text.secondary',  display: 'block'}}>Add signers and observers</Text>
    </Container>
    </Flex>
    <Button onClick={() => prop.setStep(prop.step - 1)} sx={{variant: 'buttons.secondary', width: '100%', mt:'60px'}} type='button'>{prop.step > 1 ? 'Back' : 'Cancel'}</Button>
    <Button onClick={() => prop.setStep(prop.step + 1)} sx={{variant: 'buttons.primary', width: '100%', mt:'20px'}} type='button'>Next Step</Button>
  </>
  );
}

