<<<<<<< HEAD
import React, { useState } from "react";
import UserCard from "./UserCard";
import { Flex, Button, Text, Container } from "theme-ui";
import { title, containerSides, noContent } from "./styles";
import Icon from "../icon/index";
import iconsObj from "../../assets/icons";

export default function MyAgreement({ address }: any) {
  return (
    <Flex sx={containerSides}>
      <UserCard address={address} />
      <Container>
        <Flex>
          <Text sx={title}>My Agreement</Text>
          <Button sx={{ variant: "buttons.primary", ml: "auto", mr: 0 }} type="button">
            + New Agreement
          </Button>
        </Flex>
        <Container sx={{ textAlign: "center" }}>
          <Flex sx={noContent}>
            <Icon src={iconsObj.portfile} />
          </Flex>
          <Text sx={{ variant: "text.normalTextBold" }}>{`You don't have any agreements yet`}</Text>
        </Container>
      </Container>
    </Flex>
  );
}
=======
import React ,{useState}from "react"
import UserCard from './UserCard'
import {Flex,Button,Text, Container} from 'theme-ui'
import {title,containerSides, noContent} from './styles'
import Icon from '../icon/index'
import iconsObj from "../../assets/icons"


export default function  MyAgreement ({address} : any){
    return (
      <Flex sx={containerSides}>
        <UserCard address={address}/>
        <Container>
          <Flex >
              <Text sx={title}>My Agreement</Text>
              <Button         
                sx={{variant: 'buttons.primary', ml: 'auto', mr: 0}} 
                type='button'>+ New Agreement
            </Button>
          </Flex>
          <Container sx={{textAlign: 'center'}}>
              <Flex sx={noContent}>
                  <Icon  src={iconsObj.portfile}/>
              </Flex>
              <Text sx={{variant: 'text.normalTextBold'}}>{`You don't have any agreements yet`}</Text>
          </Container>
        </Container>
      </Flex>
    )
}
>>>>>>> 3cd6dc35758ab2c422d2171a3e30abd7cdcd9291
