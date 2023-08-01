import { ThemeUIStyleObject } from "theme-ui";

const container = {
  position: "fixed",
  left: "50%",
  transform: "translate(-50%, 50%)",
  maxWidth: "600px",
  height: "450px",
  borderRadius: "12px",
  backgroundColor: "white",
} as ThemeUIStyleObject;

const flexContainer = {
  flexDirection: "column",
  justifyContent: "center",
} as ThemeUIStyleObject;

const mainText = {
  variant: "text.h2",
  pl: "60px",
  pr: "60px",
  textAlign: "center",
  pt: "24px",
} as ThemeUIStyleObject;

const textContainer = {
  variant: "text.smallTextMediumUser",
  p: "16px",
  textAlign: "center",
} as ThemeUIStyleObject;

const btnContainer = {
  width: "170px",
} as ThemeUIStyleObject;

const secondText = {
  variant: "text.smallTextMediumUser",
  textAlign: "center",
  pt: "32px",
  color: "#CA5CF2",
  cursor: "pointer",
  width: "150px",
  margin: "0 auto",
  "&:hover": {
    color: "#AE4FD0",
  },
  "&:focus": {
    color: "#AE4FD0",
  },
} as ThemeUIStyleObject;

const closeIcon = {
  opacity: "0.5",
  ml: "auto",
  mr: "30px",
  width: "20px",
  cursor: "pointer",
  height: "20px",
} as ThemeUIStyleObject;

const bg = {
  width: "100%",
  position: "fixed",
  top: 0,
  height: "100vh",
  backgroundColor: "#00000090",
} as ThemeUIStyleObject;

const containerIcon = {
  backgroundColor: "#F5D549",
  borderRadius: "50%",
  width: "100px",
  p: "20px",
  height: "100px",
  m: "0 auto",
} as ThemeUIStyleObject;

export {
  flexContainer,
  textContainer,
  containerIcon,
  btnContainer,
  secondText,
  container,
  closeIcon,
  mainText,
  bg,
};
