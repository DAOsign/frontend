import { ThemeUIStyleObject } from "theme-ui";

const container = {
  animation: 'connect 6s 1 linear',
  width: '387px',
  mt: '50px',
  background: "rgba(255, 255, 255, 0.24)",
  backdropFilter: "blur(6px)",
  borderRadius: "10px",
  paddingTop: "32px",
  paddingX: "60px",
  textAlign: "center",
  pb: '28px',
  button: {
    mb: "12px",
    "&:last-of-type": {
      mb: "40px",
    },
  },
  '@media screen and (max-width: 720px)': {
    width: '343px',
    paddingX: '59px'
  }
} as ThemeUIStyleObject;

const title = {
  variant: "text.h3", 
  mb: "40px",  
  fontSize: '32px',
  '@media screen and (max-width: 720px)': {
    variant: "text.h2", 
    fontSize: '27px',
   } 
} as ThemeUIStyleObject;

export {
  container,
  title
}