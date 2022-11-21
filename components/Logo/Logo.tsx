import React from "react";
import { Flex, Box, Text } from 'theme-ui'
import iconsObj from "../../assets/icons";
import {container, logo, text, d, a, o} from './styles'
import Icon from "../icon";

export default function Logo({margin = '0 auto'}) {
  return (
  <div style={{width: '300px', height: '150px', margin: '0 auto', position: 'relative'}}>
    <Flex sx={{justifyContent: 'center' , cursor: 'pointer' }}>
       <Box>
         <Icon src={iconsObj.logoIcon}/>
       </Box>
       <Box sx={container}>
         <Flex sx={logo}>
           <Box sx={d}><Icon width='100%' height='100%' src={iconsObj.dLogo}/></Box>
           <Box sx={a}><Icon width='100%' height='100%'  src={iconsObj.aLogo}/></Box>
           <Box sx={o}><Icon width='100%' height='100%'  src={iconsObj.oLogo}/></Box>
         </Flex>
         <Text color="#CA5CF2" sx={text}>sign</Text>
       </Box>
   </Flex>
  </div>
  );
}
