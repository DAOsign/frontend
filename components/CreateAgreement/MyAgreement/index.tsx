import React ,{useState}from "react"
import UserCard from './UserCard'
import {Container, Flex,Button,Text} from 'theme-ui'
import {title,containerSides} from './styles'


export default function  MyAgreement (){
    const [address, setAddres] = useState<string>('');
    return (
      <Flex sx={containerSides}>
        <UserCard address={address}/>
         <Container sx={{display:'flex'}}>
            <Text sx={title}>My Agreement</Text>
            <Button         
              sx={{variant: 'buttons.primary'}} 
              type='button'>+ New Agreement
           </Button>
         </Container>
      </Flex>
    )
}