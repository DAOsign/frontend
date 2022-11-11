import { ThemeUIStyleObject } from "theme-ui";

const leftSide = {
    maxWidth: '776px',
    minHeight: '550px',
    background: '#FFFFFF',
    border: '1px solid #EDEDF3',
    borderRadius: '12px',
    paddingX :'128px',
    paddingTop: '60px'
} as ThemeUIStyleObject;

const rightSide = {
    maxWidth: '360px',
    minHeight: '550px',
    background: '#FFFFFF',
    border: '1px solid #EDEDF3',
    borderRadius: '12px',
    paddingX: '25px',
    paddingTop: '52px',
} as ThemeUIStyleObject;

const card = {
    textAlign: 'center', 
    border: '2px solid #F7F7FB', 
    borderRadius: '8px', 
    px:'24px', 
    pt: '20px', 
    pb: '27px',
    minHeight: '230px',
} as ThemeUIStyleObject;

export {
    leftSide,
    rightSide,
    card
}