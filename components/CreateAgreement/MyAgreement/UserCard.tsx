import React from "react";
import {Container,Box, Text,Button,Flex} from 'theme-ui';
import iconsObj from "../../../assets/icons";
import Icon from '../../icon'
import {formatAddress} from '../../../utils/formats'
import {iconSetting, container,iconExit, userFoto,text,normalTextBoldGreen} from './styles'


export default function UserCard({address}: any){
    console.log(address);
    
    return (
  <Container sx ={container}>
   <Box sx={iconSetting}>
     <Icon src={iconsObj.iconSetting}/>
   </Box>
   <Box sx={iconExit}>
     <Icon src={iconsObj.iconExit}/>
   </Box>
   <Container sx ={userFoto}></Container>
   <Text sx={{ variant: 'text.largeTextBold', display:'block', textAlign:'center'}}>Ralph Edwards</Text>
   <Flex sx={{justifyContent:'center',marginBottom:'24px', mt:'4px'}}>
   <Text sx={{variant: 'text.smallTextMediumUser'}}>
    {formatAddress(address)}
    </Text>
    <Box sx={{marginLeft:'5px'}}>
     <Icon src={iconsObj.iconSix}/>
   </Box>
    </Flex>
    <Container sx={{pl:'74px',pr:'74px',maxHeight:'129px', position:'relative'}}>
    <Box sx={{mb:'15px'}}>
     <Icon src={iconsObj.ellipseGreen}/>
     </Box>
     <Container sx={text}>
     <Text sx={{variant: 'text.overscript'}}>Verification</Text>
     <Text sx={{variant: 'text.overscript'}}>Score</Text>
     <Text sx={normalTextBoldGreen}>Good</Text>
     </Container>
     </Container>
   <Container>
       <Button sx={{variant: 'buttons.userBtn',opacity: 1}}>Imporove Your Score</Button>
   </Container>
   </Container>
)
}