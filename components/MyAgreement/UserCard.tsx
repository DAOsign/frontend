import React from "react";
<<<<<<< HEAD
import { Container, Box, Text, Button, Flex } from "theme-ui";
import iconsObj from "../../assets/icons";
import Icon from "../icon";
import { formatAddress } from "../../utils/formats";
import {
  improveBtnContainer,
  normalTextBoldGreen,
  percentContainer,
  fotoContainer,
  infoContainer,
  improveBtn,
  container,
  userFoto,
  iconExit,
  text,
} from "./styles";

export default function UserCard({ address }: any) {
  console.log(address);

  return (
    <Flex sx={container}>
      <Box sx={iconExit}>
        <Icon style={{ cursor: "pointer" }} src={iconsObj.iconExit} />
      </Box>
      <Flex sx={fotoContainer}>
        <Container sx={userFoto}></Container>
        <Flex sx={infoContainer}>
          <Text
            sx={{
              variant: "text.largeTextBold",
              display: "block",
              textAlign: "center",
            }}
          >
            Ralph Edwards
          </Text>
          <Flex sx={{ justifyContent: "center", marginBottom: "24px", mt: "4px" }}>
            <Text sx={{ variant: "text.smallTextMediumUser" }}>{formatAddress(address)}</Text>
            <Box sx={{ marginLeft: "5px" }}>
              <Icon style={{ cursor: "pointer" }} src={iconsObj.iconSix} />
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Container sx={percentContainer}>
        <Box sx={{ mb: "15px" }}>
          <Icon src={iconsObj.ellipseGreen} />
          {/* <Icon src={iconsObj.greyPercent}/> */}
        </Box>
        <Container sx={text}>
          <Text sx={{ variant: "text.overscript", opacity: "0.5" }}>Verification Score</Text>
          <Text sx={normalTextBoldGreen}>Good</Text>
        </Container>
      </Container>
      <Container sx={improveBtnContainer}>
        <Button sx={improveBtn}>Imporove Your Score</Button>
      </Container>
    </Flex>
  );
}
=======
import {Container,Box, Text,Button,Flex} from 'theme-ui';
import iconsObj from "../../assets/icons";
import Icon from '../icon'
import {formatAddress} from '../../utils/formats'
import {
  improveBtnContainer,
  normalTextBoldGreen, 
  percentContainer, 
  fotoContainer,
  infoContainer, 
  improveBtn, 
  container, 
  userFoto,
  iconExit, 
  text,
} from './styles'


export default function UserCard({address}: any){
    console.log(address);
    
    return (
  <Flex sx={container}>
    <Box sx={iconExit}>
     <Icon style={{cursor: 'pointer'}} src={iconsObj.iconExit}/>
    </Box>
    <Flex sx={fotoContainer}>
       <Container sx={userFoto}></Container>
       <Flex sx={infoContainer}>
        <Text sx={{ variant: 'text.largeTextBold', display:'block', textAlign:'center'}}>Ralph Edwards</Text>
            <Flex sx={{justifyContent:'center',marginBottom:'24px', mt:'4px'}}>
              <Text sx={{variant: 'text.smallTextMediumUser'}}>{formatAddress(address)}</Text>
                <Box sx={{marginLeft:'5px'}}>
                    <Icon style={{cursor: 'pointer'}} src={iconsObj.iconSix}/>
                </Box>
            </Flex>
        </Flex>
    </Flex>
      <Container sx={percentContainer}>
        <Box sx={{mb:'15px'}}>
          <Icon src={iconsObj.ellipseGreen}/>
          {/* <Icon src={iconsObj.greyPercent}/> */}
        </Box>
        <Container sx={text}>
          <Text sx={{variant: 'text.overscript', opacity: '0.5'}}>Verification Score</Text>
          <Text sx={normalTextBoldGreen}>Good</Text>
        </Container>
     </Container>
    <Container sx={improveBtnContainer}>
       <Button sx={improveBtn} >Imporove Your Score</Button>
    </Container>
   </Flex>
)
}
>>>>>>> 3cd6dc35758ab2c422d2171a3e30abd7cdcd9291
