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
    maxHeight: '515px',
    paddingTop: '52px',
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
    minHeight: '230px',
} as ThemeUIStyleObject;

const item = {
    border: '2px solid #F7F7FB', 
    borderRadius: '8px', 
    pl:'20px', 
    py: '20px',
    m: 0,
} as ThemeUIStyleObject;



export {
    rightSide,
    leftSide,
    card,
    item
}