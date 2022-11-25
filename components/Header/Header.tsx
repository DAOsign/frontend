import React, {useState} from "react";
import { Container, Flex, Text, Button } from 'theme-ui'
import iconsObj from "../../assets/icons";
import {formatAddress} from '../../utils/formats'
import {container, addresContainer, iconMenu} from './styles'
import Icon from "../icon";
import {Logo} from "../Logo/Logo";


export default function Header({address, visible, setVisible}: any) {

  return (
  <Container sx={container}>
    <Flex sx={{justifyContent: 'space-between' }}>
      <Logo margin='0 0 auto 0'/>
      <Flex sx={{alignItems: 'center', flexDirection: 'row'}}>
        <Button type="button" sx={{...iconMenu, display: 'block'} }> 
          <Icon src={iconsObj.Bell}/>
        </Button>
        <Flex sx={addresContainer}>
            <div style={{width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#000', marginRight: '8px'}}></div>
            <Text>
              {formatAddress(address)}
            </Text>
        </Flex>
        <Button onClick={() => setVisible(!visible)} type="button" sx={iconMenu}>
          {visible ?
          <Icon src={iconsObj.xClose}/> :
          <Icon src={iconsObj.menu}/>
          }
        </Button>
      </Flex>
    </Flex>
  </Container>
  );
}
