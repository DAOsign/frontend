import { ThemeUIStyleObject } from "theme-ui";

const leftSide = {
    maxWidth: '776px',
    minHeight: '550px',
    background: '#FFFFFF',
    border: '1px solid #EDEDF3',
    borderRadius: '12px',
    paddingX :'128px',
    paddingBottom: '60px',
    paddingTop: '60px'
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
    ml: '16px'
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

export {
    inputCreactAgreement,
    secondaryTitle,
    leftSideItem,
    container,
    stepNumber,
    rightSide,
    leftSide,
    card,
    item,
    flex,
    fW
}