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
  flexDirection: 'column'
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
    m: '0  0 0 auto'
  }
 } as ThemeUIStyleObject;

 const improveBtn = { 
  variant: 'buttons.userBtn', 
  opacity: 1 , 
  height: '46px',
 } as ThemeUIStyleObject;

 const improveBtnContainer = { 
  '@media screen and (max-width: 1200px)': {
    position: 'absolute',
    bottom: '24px',
    left: '168px',
    width: 'unset'
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

export  {
  normalTextBoldGreen,
  improveBtnContainer,
  percentContainer,
  containerSides,
  infoContainer,
  fotoContainer,
  improveBtn,
  container,
  noContent,
  userFoto,
  iconExit,
  title,
  text,
}