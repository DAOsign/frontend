
import { ThemeUIStyleObject } from "theme-ui";

const container = {
    backgroundImage: 'url(../../img/svg/calendar.svg)',
    animation: 'logo 6s 1 linear',
} as ThemeUIStyleObject;

const logo = {
} as ThemeUIStyleObject;

const d = {
    width: '54px',
    height: '54px', 
   animation: 'd 6s 1 linear',
} as ThemeUIStyleObject;

const a = {
    width: '54px',
    height: '54px', 
    animation: 'a 6s 1 linear',
 } as ThemeUIStyleObject;

const o = {
    width: '54px',
    height: '54px', 
    animation: 'o 6s 1 linear',
 } as ThemeUIStyleObject;


const text = {
    transform: 'matrix(1, 0, 0, -1, 0, 0)',
    animation: 'text 6s 1 linear',
} as ThemeUIStyleObject;

export {
    container,
    text,
    logo,
    a,
    d,
    o
}
  