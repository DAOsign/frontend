import { ThemeUIStyleObject } from "theme-ui";

export const container = {
  flexDirection: "column",
  justifyContent: "flex-start",
  margin: "0 auto",
  width: "100%",
  p: "24px 24px 32px 24px",
} as ThemeUIStyleObject;

export const proofPadding = {
  height: "20px",
  backgroundColor: "#F7F7FB",
  borderRadius: "0 0 8px 8px",
  position: "absolute",
  width: "452px",
} as ThemeUIStyleObject;

export const mainText = {
  variant: "text.h2",
  fontSize: "20px",
  pl: "60px",
  pr: "60px",
  textAlign: "center",
  mb: "24px",
} as ThemeUIStyleObject;

export const closeIcon = {
  position: "absolute",
  opacity: "0.5",
  top: "30px",
  right: "30px",
  width: "20px",
  height: "20px",
  cursor: "pointer",
} as ThemeUIStyleObject;

export const btnContainer = {
  variant: "buttons.secondary",
  width: "100%",
  mt: "32px",
  "&:hover": {
    color: "#AE4FD0",
    borderColor: "#AE4FD0",
    backgroundColor: "transparent",
    background: "unset",
  },
  "&:focus": {
    color: "#AE4FD0",
    borderColor: "#AE4FD0",
    backgroundColor: "transparent",
    background: "unset",
  },
} as ThemeUIStyleObject;

export const secondaryTitle = {
  fontFamily: "InterRegular",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "160%",
  color: "#212121",
  opacity: "0.5",
  mr: "10px",
} as ThemeUIStyleObject;

export const text = {
  fontFamily: "InterMedium",
  fontEeight: 500,
  fontSize: "14px",
  lineHeight: "160%",
  mr: "5px",
  color: "#212121;",
} as ThemeUIStyleObject;

export const box = {
  background: "#F7F7FB",
  border: "2px solid #F7F7FB",
  borderRadius: "8px",
  height: "60px",
  p: "20px 20px",
  alignItems: "center",
} as ThemeUIStyleObject;

export const linkContainer = {
  width: "14px",
  height: "14px",
  opacity: "0.7",
  cursor: "pointer",
  "&:hover": { opacity: 1 },
} as ThemeUIStyleObject;

export const arrowContainer = {
  width: "20px",
  height: "20px",
  rotate: "270deg",
  ml: "auto",
  cursor: "pointer",
} as ThemeUIStyleObject;

export const containerProof = {
  maxHeight: "500px",
  overflow: "scroll",
  borderTop: "1px solid #D8D8E2",
  backgroundColor: "#F7F7FB",
  borderRadius: "0 0 8px 8px",
  padding: "20px",
} as ThemeUIStyleObject;
