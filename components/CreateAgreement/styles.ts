import { ThemeUIStyleObject } from "theme-ui";
const containerSides = {
    maxWidth: '1200px', 
    justifyContent: 'space-between', 
    margin: '40px auto 0', 
    textAlign: 'center',
    '@media screen and (max-width: 1200px)': {
        flexDirection: 'column',
        mt: '270px'
       },
} as ThemeUIStyleObject;

const leftSide = {
    maxWidth: '776px',
    minHeight: '550px',
    background: '#FFFFFF',
    border: '1px solid #EDEDF3',
    borderRadius: '12px',
    paddingX :'128px',
    paddingBottom: '60px',
    paddingTop: '60px',
    '@media screen and (max-width: 1200px)': {
       maxWidth: '672px',
       paddingX :'100px',
       borderBottom: 'none',
       borderRadius: '12px 12px 0 0'
       },
} as ThemeUIStyleObject;

const rightSide = {
    maxWidth: '360px',
    minHeight: '550px',
    background: '#FFFFFF',
    border: '1px solid #EDEDF3',
    borderRadius: '12px',
    paddingX: '25px',
    maxHeight: '590px',
    paddingBottom: '32px',
    paddingTop: '52px',
    '@media screen and (max-width: 1200px)': {
        maxWidth: '672px',
        width: '100%',
        paddingX :'100px',
        borderTop: 'none',
        borderRadius: '0 0 12px 12px',
        height: 'initial',
        minHeight: 'unset',
        pb: '72px',
        pt: 0
        },
} as ThemeUIStyleObject;

const container = {
    border: '2px solid #F7F7FB', 
    borderRadius: '8px', 
    px: '32px',
    py: '24px'
} as ThemeUIStyleObject;

const card = {
    textAlign: 'center', 
    border: '2px solid #F7F7FB', 
    borderRadius: '8px', 
    px:'24px', 
    pt: '20px', 
    pb: '27px',
    maxWidth: '210px',
    m: 0,
    cursor: 'pointer',
    minHeight: '230px',
} as ThemeUIStyleObject;

const flex = {
    display: 'flex',
    alignItems: 'center'
} as ThemeUIStyleObject;

const leftSideItem = {
    textAlign: 'left', 
    maxWidth: '230px', 
    ml: '16px',
    '@media screen and (max-width: 1200px)': {
        ml: 0,
        textAlign: 'center',
        mt: '12px'
    },
} as ThemeUIStyleObject;

const item = {
    border: '2px solid #F7F7FB', 
    borderRadius: '8px', 
    pl:'20px', 
    py: '20px',
    m: 0,
    mb: '10px',
    alignItems: 'start'

} as ThemeUIStyleObject;

const inputCreactAgreement  = {
    backgroundColor: '#F7F7FB', 
    borderRadius: '8px',
    width: '100%'
} as ThemeUIStyleObject;

const secondaryTitle = {
  variant: 'text.overscript',
  display: 'block',
  opacity: 1, 
} as ThemeUIStyleObject;

const stepNumber = {
    backgroundColor: '#CA5CF2', 
    width:'48px', 
    height:'48px', 
    borderRadius: '50%', 
    textAlign: 'center', 
    paddingTop: '13px'
  } as ThemeUIStyleObject;

const fW = {
    width:  '100%'
}

const containerButtons = {
  '@media screen and (max-width: 1200px)': {
    '& > button:first-child' : {
        mt: 0
       }
     },
} as ThemeUIStyleObject;

const secondaryTitleStep = {
    variant: 'text.overscript',  
    opacity: 0.5,
    '@media screen and (max-width: 1200px)': {
        maxWidth: '128px'
       },
} as ThemeUIStyleObject;

const stepsContainer = {
  '@media screen and (max-width: 1200px)': {
      position: 'absolute',
      maxWidth: '672px',
      width: '100%',
      height: '202px',
      alignItems: 'center',
      top: '104px',
      display: 'flex',
      transform: 'translate(-50%, 0)',
      left: '50%',
      backgroundColor: '#FFFFFF',
      border: '1px solid #EDEDF3',
      borderRadius: '12px',
      justifyContent: 'space-around'
    },
} as ThemeUIStyleObject;

const stepStyle = {
    mt: '56px', 
    alignItems: 'center',
    textAlign: 'left',
    '@media screen and (max-width: 1200px)': {
       mt: 0,
       flexDirection: 'column',
       textAlign: 'center'
      },
} as ThemeUIStyleObject;

export {
    inputCreactAgreement,
    secondaryTitleStep,
    containerButtons,
    secondaryTitle,
    stepsContainer,
    containerSides,
    leftSideItem,
    stepNumber,
    container,
    stepStyle,
    rightSide,
    leftSide,
    card,
    item,
    flex,
    fW
}