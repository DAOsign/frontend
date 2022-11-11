import React from 'react'
import StepOne from './Steps/StepOne'
import {Button, Container, Flex, Text } from 'theme-ui'
import {rightSide} from './styles'

export default function CreateAgreement() {
    return (
       <Flex sx={{maxWidth: '1200px', justifyContent: 'space-between', margin: '40px auto 0', textAlign: 'center' }}>
         <StepOne />
         <Container sx={rightSide}>
           <Flex>
                <div style={{ backgroundColor: '#CA5CF2', width:'48px', height:'48px', borderRadius: '50%', textAlign: 'center', paddingTop: '13px'}}>
                <Text sx={{variant: 'text.normalTextBold', color: '#fff'}}>1</Text>
                </div>
                <Container sx={{textAlign: 'left', maxWidth: '230px', ml: '16px'}}>
                    <Text sx={{variant: 'text.largeTextBold', display: 'block'}}>Privacy</Text>
                    <Text sx={{variant: 'text.secondary',  display: 'block'}}>Enter title and privacy ot the agreement</Text>
                </Container>
           </Flex>
           <Flex sx={{mt: '56px', alignItems: 'center'}}>
                <div style={{ backgroundColor: '#CA5CF2', width:'48px', height:'48px', borderRadius: '50%', textAlign: 'center', paddingTop: '13px'}}>
                <Text sx={{variant: 'text.normalTextBold', color: '#fff'}}>2</Text>
                </div>
                <Container sx={{textAlign: 'left', maxWidth: '230px', ml: '16px'}}>
                    <Text sx={{variant: 'text.largeTextBold', display: 'block'}}>Content</Text>
                    <Text sx={{variant: 'text.secondary',  display: 'block'}}>Enter agreement content</Text>
                </Container>
           </Flex>
           <Flex  sx={{mt: '56px', alignItems: 'center'}}>
                <div style={{ backgroundColor: '#CA5CF2', width:'48px', height:'48px', borderRadius: '50%', textAlign: 'center', paddingTop: '13px'}}>
                <Text sx={{variant: 'text.normalTextBold', color: '#fff'}}>3</Text>
                </div>
                <Container sx={{textAlign: 'left', maxWidth: '230px', ml: '16px'}}>
                    <Text sx={{variant: 'text.largeTextBold', display: 'block'}}>Signers</Text>
                    <Text sx={{variant: 'text.secondary',  display: 'block'}}>Add signers and observers</Text>
                </Container>
           </Flex>
           <Button sx={{variant: 'buttons.secondary', width: '100%', mt:'60px'}} type='button'>Cancel</Button>
           <Button sx={{variant: 'buttons.primary', width: '100%', mt:'20px'}} type='button'>Next Step</Button>
         </Container>
       </Flex>
    )
  }
  