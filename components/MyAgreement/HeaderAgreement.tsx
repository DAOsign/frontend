import React from 'react'
import { Container, Flex,Input,Text } from 'theme-ui'
import {inputMyAgreement,headerContainer,textContainer} from './styles'



export default function  HeaderAgreement (){
   return (      
     <Flex sx ={headerContainer}>
        <Input sx={{variant: 'forms.input', ...inputMyAgreement}}/>
         <Container>
          <Flex sx={textContainer}>
           <Text sx={{variant:'text.normalTextMedium', opacity: '0.5'}}>Filter by:</Text>
             <Text>All</Text>
         </Flex>
        </Container>
     </Flex>                                                                                                                                                                                                                                                                                                                                                                                                                                                       
   )
}
