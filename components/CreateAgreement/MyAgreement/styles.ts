import { ThemeUIStyleObject } from "theme-ui";

const container = {
background:'white',
position:'relative',
border: '3px solid #EDEDF3',
borderRadius:'12px',
maxWidth: '275px',
height:'430px',
marginRight:'20px',
'@media screen and (max-width: 768px)': {
  maxWidth:'672px',
  height:'100%',
  mb:'32px',
  mr:'0',
}
} as ThemeUIStyleObject;


const iconSetting = {
 position:'absolute',
 left:'19px',
 paddingTop:'19px',
 width:'20px',
 height:'20px',
  
  } as ThemeUIStyleObject;

const iconExit = {  
   position:'absolute',
   paddingTop:'19px',
   right:'19px',
   width:'18px',
   height:'18px',
   opasity:'0.5',
  
   } as ThemeUIStyleObject;

const userFoto = {  
 width: '124px', 
 height: '124px',
 left: '76px',
 top: '28px',
  mt:'28px',
  mb:'12px',
  border:'grey',
   
  } as ThemeUIStyleObject;

 const text ={
  position:'absolute',
  top:'25px',
  left:'105px'

 } as ThemeUIStyleObject;

 const   normalTextBoldGreen ={
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

 const containerSides={
    maxWidth: '1200px', 
    margin: '46px auto 0', 
    '@media screen and (max-width: 768px)': {
        flexDirection: 'column',
    }

 } as ThemeUIStyleObject;
 
export  {containerSides,
         iconSetting,
         container,
         iconExit,
         userFoto,
         text,
         normalTextBoldGreen,
         title}