import React from "react";
import { Flex, Box, Text, Input, Button } from 'theme-ui'
import iconsObj from "../assets/icons";
import Icon from "./icon";

export default function Footer() {
  return (
  <div style={{marginTop: '135px', paddingLeft: '120px', paddingRight: '120px'}}>
    <Flex sx={{justifyContent: 'space-between' }}>
       <Box  sx={{ flex: '1 1 1 auto', position:'relative'}}>
         <Text sx={{variant: 'text.normalTextBold', display: 'inline-block', mb: '8px'}}>Get the latest updates</Text>
         <Input placeholder="Your Email" sx={{variant: 'forms.input'}} />
         <div style={{position: 'absolute', top: '47px', right: '17px', opacity: 0.5}}>
           <Icon src={iconsObj.send}/>
         </div>
       </Box>
       <Box>
         <Text sx={{variant: 'text.normalTextBold', display: 'inline-block', mb: '12px'}}>DaoSign</Text>
         <Text sx={{variant: 'text.smallTextMedium', display: 'block', mb: '4px'}}>About</Text>
         <Text sx={{variant: 'text.smallTextMedium', display: 'block'}}>Terms of Service</Text>
       </Box>
       <Box>
         <Text sx={{variant: 'text.normalTextBold', display: 'inline-block', mb: '12px'}}>Resources</Text>
         <Text sx={{variant: 'text.smallTextMedium', display: 'block', mb: '4px'}}>GitHub</Text>
         <Text sx={{variant: 'text.smallTextMedium', display: 'block', mb: '4px'}}>Discussion</Text> 
         <Text sx={{variant: 'text.smallTextMedium', display: 'block'}}>Support</Text>
       </Box>
       <Box>
         <Text sx={{variant: 'text.normalTextBold', display: 'inline-block', mb: '12px'}}>Join Community</Text>
         <Flex  sx={{justifyContent: 'space-between', opacity: 0.5, mb: '25px' }}>
           <Icon src={iconsObj.github}/>
           <Icon src={iconsObj.twitter}/>
           <Icon src={iconsObj.facebook}/>
           <Icon src={iconsObj.world}/>
           <Icon src={iconsObj.telegram}/>
         </Flex>
         <Button sx={{variant: 'buttons.secondary' }} type="button">About Us</Button>
       </Box>
    </Flex>
    <Text  sx={{
        fontSize: '12px', 
        fontWeight: 400, 
        lineHeight: '160%', 
        color: '#212121'
        }}>© Copywriting 2022. Created with ❤️ by 
      <a href="#" style={{color: '#CA5CF2', display: 'inline-block', marginLeft: '5px'}}>CIDT</a>
    </Text>
  </div>
  );
}
