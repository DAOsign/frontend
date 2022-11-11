import React from "react";
import { Flex, Box, Text, Input, Button } from 'theme-ui'
import iconsObj from "../assets/icons";
import Icon from "./icon";

export default function Logo({margin = '0 auto'}) {
  return (
  <div style={{maxWidth: '150px', margin}}>
    <Flex sx={{justifyContent: 'space-between' , cursor: 'pointer' }}>
       <Box>
         <Icon src={iconsObj.logoIcon}/>
       </Box>
       <Box sx={{ml: '15px'}}>
         <Flex>
           <Icon src={iconsObj.dLogo}/>
           <Icon src={iconsObj.aLogo}/>
           <Icon src={iconsObj.oLogo}/>
         </Flex>
         <Text color="#CA5CF2" sx={{transform: 'matrix(1, 0, 0, -1, 0, 0)'}}>sign</Text>
       </Box>
   </Flex>
  </div>
  );
}
