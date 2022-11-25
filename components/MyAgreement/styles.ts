import { ThemeUIStyleObject } from "theme-ui";

const container = {
background:'white',
position:'relative',
border: '3px solid #EDEDF3',
flexDirection: 'column',
borderRadius:'12px',
width: '275px',
minWidth: '275px',
height:'430px',
marginRight:'20px',
'@media screen and (max-width: 1200px)': {
  maxWidth:'672px',
  flexDirection: 'row',
  width: '100%',
  height:'172px',
  py: '24px',
  mb:'32px',
  mx: 'auto',
  pl: '24px',
  pr: '60px'
},
'@media screen and (max-width: 768px)': {
  width: '100%',
  minWidth: '343px',
  flexDirection: 'column',
  minHeight: '292px',
  px: '16px'
}
} as ThemeUIStyleObject;

const iconExit = {  
 position:'absolute',
 paddingTop:'19px',
 right:'19px',
 width:'18px',
 height:'18px',
 opasity:'0.5',
 '@media screen and (max-width: 1200px)': {
    pt: '0'
}
} as ThemeUIStyleObject;

const userFoto = {  
  width: '124px', 
  height: '124px',
  left: '76px',
  top: '28px',
  mt:'28px',
  mb:'12px',
  backgroundColor: 'grey',
  border:'grey',
  borderRadius: '50%',
  '@media screen and (max-width: 1200px)': {
      m: 0
  },
  '@media screen and (max-width: 768px)': {
    width: '80px', 
    height: '80px',
  }
} as ThemeUIStyleObject;

 const text = {
  position:'absolute',
  textAlign: 'center',
  maxWidth: '64px',
  left: '50%',
  top: '34px',
  transform: 'translate(-43%,0)',
 } as ThemeUIStyleObject;

 const  normalTextBoldGreen = {
  fontFamily: 'InterBold',
  fontWeight: 700,
  lineHeight: '25.6px',
  fontSize: '16px',
  color: '#44F268',
  } as ThemeUIStyleObject;

 const title = {
  variant: "text.h3", 
  fontSize: '32px',
 } as ThemeUIStyleObject;

 const containerSides = {
  maxWidth: '1200px', 
  justifyContent: 'space-between',
  margin: '46px auto 0', 
  '@media screen and (max-width: 1200px)': {
      flexDirection: 'column',
      px: '24px'
  }
 } as ThemeUIStyleObject;

 const noContent = {
  width: '146px', 
  height: '146px', 
  backgroundColor: '#fff', 
  borderRadius: '50%', 
  margin: '0 auto',
  justifyContent: 'center', 
  alignItems: 'center',
  mt: '90px',
  mb: '12px'
 } as ThemeUIStyleObject;

 const percentContainer = { 
  position: 'relative',
  textAlign: 'center',
  width: '130px',
  height: '130px',
  '@media screen and (max-width: 1200px)': {
    m: '0 auto 0',
    bottom: '5px'
  }
 } as ThemeUIStyleObject;

 const improveBtn = { 
  variant: 'buttons.userBtn', 
  opacity: 1 , 
  height: '46px',
  '@media screen and (max-width: 768px)':  {
   maxWidth: 'unset',
   width: '90%'
   }
 } as ThemeUIStyleObject;

 const improveBtnContainer = { 
  '@media screen and (max-width: 1200px)': {
    position: 'absolute',
    bottom: '24px',
    left: '168px',
    width: 'unset',
  },
  '@media screen and (max-width: 768px)':  {
    position: 'absolute',
    bottom: '24px',
    left: '50%',
    transform: 'translate(-50%, 0)',
    width: '100%',
   }
 } as ThemeUIStyleObject;

const infoContainer = {
  flexDirection: 'column', 
  minWidth: '195px',
  '@media screen and (max-width: 1200px)': {
     mt: '12px'
  }
} as ThemeUIStyleObject;
 
const fotoContainer = {
   flexDirection: 'column',
   '@media screen and (max-width: 1200px)': {
     flexDirection :'row',

 }
} as ThemeUIStyleObject;

const inputMyAgreement  = {
  backgroundColor: '#FFFFFF', 
  borderRadius: '62px',
  width: '345px',

} as ThemeUIStyleObject;

const headerContainer  = {
  flexDirection:'row',
  alignItems:'baseline',
  mt:'38px',

  '@media screen and (max-width: 768px)': {
   flexDirection:'column'
  },
 
} as ThemeUIStyleObject;

const agreementConteiner ={
   mt:'23px',
   flexDirection:'column', 
   background:'white', 
   border:'1px solid #EDEDF3',
   borderRadius:'12px',
   p:'20px 24px 20px 24px'

} as ThemeUIStyleObject;

const iconMenuAgreement ={
  display: 'none',
   ml: '16px',
   width: '32px',
   height: '32px',
   borderRadius:'50%',
   backgroundColor: '#EDEDF3',
   textAlign:'center', 
   padding: '4px 0 0 0',
   cursor: 'poiner',
   '@media screen and (max-width: 768px)': {
    display: 'block'
   },

} as ThemeUIStyleObject;

const greyAgrBtn = {
   padding:'0',
   width: '63px',
   height: '32px',
   background: '#EDEDF3',
   borderRadius: '52px',
   fontFamily: 'InterBold',
   fontStyle: 'normal',
   fontWeight: 700,
   fontSize: '14px',
   lineHeight: '160%',
   textAlign: 'center',
   color: '#212121',
  } as ThemeUIStyleObject;

  const textContainer = {
    justifyContent:'flex-end',
    '@media screen and (max-width: 768px)': {
     justifyContent: 'center',
     alignItems:'center',
     border:'1px solid #EDEDF3',
     borderRadius:'62px',
     height:'50px',
     mt:'10px'

     },
  } as ThemeUIStyleObject;

  const newAgreementBtn ={

  }


export  {
  normalTextBoldGreen,
  improveBtnContainer,
  agreementConteiner,
  iconMenuAgreement,
  inputMyAgreement,
  percentContainer,
  headerContainer,
  containerSides,
  infoContainer,
  fotoContainer,
  textContainer,
  improveBtn,
  container,
  greyAgrBtn,
  noContent,
  userFoto,
  iconExit,
  title,
  text,
}