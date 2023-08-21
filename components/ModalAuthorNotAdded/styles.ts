import { ThemeUIStyleObject } from "theme-ui";

export const flexContainer = {
  flexDirection: "column",
  justifyContent: "center",
  margin: "0 auto",
} as ThemeUIStyleObject;

export const mainText = {
  variant: "text.h2",
  pl: "60px",
  pr: "60px",
  textAlign: "center",
  pt: "24px",
} as ThemeUIStyleObject;

export const textContainer = {
  variant: "text.smallTextMediumUser",
  pt: "16px",
  textAlign: "center",
} as ThemeUIStyleObject;

export const btnContainer = {
  mt: "40px",
  width: "110px",
} as ThemeUIStyleObject;

export const closeIcon = {
  position: "absolute",
  opacity: "0.5",
  top: "30px",
  right: "30px",
  width: "20px",
  height: "20px",
  cursor: "pointer",
  "&:hover": {
    opacity: "1",
  },
} as ThemeUIStyleObject;

export const containerIcon = {
  backgroundColor: "#F5D549",
  borderRadius: "50%",
  width: "100px",
  p: "20px",
  height: "100px",
  m: "0 auto",
} as ThemeUIStyleObject;

export const cancelBtn = {
  variant: "buttons.secondary",
  width: "90px",
  border: "none",
  margin: "5px auto 0",
  textAlign: "center",
  opacity: 0.7,
  px: 0,
  "&:hover, &:focus": {
    background: "unset",
    border: "none",
    opacity: 1,
  },
  "@media screen and (max-width: 719px)": {
    width: "100%",
  },
} as ThemeUIStyleObject;
