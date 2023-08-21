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

export const confirmBtn = {
  mt: "40px",
  width: "110px",
} as ThemeUIStyleObject;

export const cancelBtn = {
  mt: "20px",
  mx: "auto",
  textAlign: "center",
  color: "#CA5CF2",
  cursor: "pointer",
  fontFamily: "InterBold",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  opacity: 0.5,
  transition: "opacity 0.3s",
  "&:hover": {
    opacity: 1,
  },
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

export const spinnerContainer = {
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
} as ThemeUIStyleObject;

export const deletingText = {
  marginTop: "10px",
} as ThemeUIStyleObject;
