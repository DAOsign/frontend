import { ThemeUIStyleObject } from "theme-ui";

export const flexContainer = {
  flexDirection: "column",
  justifyContent: "center",
  margin: "0 auto",
} as ThemeUIStyleObject;

export const mainText = {
  variant: "text.h2",
  fontSize: "28px",
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
} as ThemeUIStyleObject;

export const containerIcon = {
  backgroundColor: "#F5D549",
  borderRadius: "50%",
  width: "100px",
  p: "20px",
  height: "100px",
  m: "0 auto",
} as ThemeUIStyleObject;

export const input = {
  variant: "forms.input",
  backgroundColor: "#F7F7FB",
  height: "40px",
  borderRadius: "8px",
  width: "100%",
  transition: "border-color 0.3s",
  border: "2px solid transparent",
} as ThemeUIStyleObject;

export const switchContainer = {
  flexDirection: "row-reverse",
  alignItems: "center",
  mt: "21px",
  "& > label": {
    maxWidth: "33px",
    opacity: 1,
    height: "15px",
    ml: "8px",
  },
  "&  .switch": {
    height: "17px !important",
    width: "33px",
    padding: 0,
  },
  "&  .switch  div": {
    width: "19px",
    height: "19px",
  },
} as ThemeUIStyleObject;

export const labelSwitch = {
  fontFamily: "InterMedium",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "160%",
  color: "#212121",
  opacity: 1,
  display: "inline-block",
  ml: "10px",
  height: "26px !important",
  maxWidth: "unset !important",
} as ThemeUIStyleObject;

export const switchBtn = {
  backgroundColor: "transparent",
  border: "2px solid #EDEDF3",
  "& > div": {
    border: "2px solid #212121",
    top: "-3px",
  },
  "input:checked ~ &": {
    backgroundColor: "transparent",
    border: "2px solid #CA5CF250",
  },
  "input:checked ~ & > div": {
    backgroundColor: "#CA5CF2",
    border: "2px solid #CA5CF2",
  },
} as ThemeUIStyleObject;

export const secondaryTitle = {
  fontFamily: "InterBold",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "160%",
  color: "#212121",
  display: "inline-block",
  my: "33px",
} as ThemeUIStyleObject;

export const icon = {
  width: "20px",
  height: "6px",
  rotate: "270deg",
} as ThemeUIStyleObject;

export const flexSelect = {
  justifyContent: "space-between",
  cursor: "pointer",
  alignItems: "center",
  height: "40px",
} as ThemeUIStyleObject;

export const titleSelect = {
  fontFamily: "InterMedium",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "160%",
  color: "#212121",
} as ThemeUIStyleObject;

export const importingText = {
  fontFamily: "InterBold",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "160%",
  color: "#212121",
} as ThemeUIStyleObject;

export const flexLoader = {
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  pt: "20px",
  pb: "65px",
} as ThemeUIStyleObject;

export const modalBase = {
  width: ["80%", "756px"],
  pt: "40px",
  pb: "60px",
  px: "78px",
} as ThemeUIStyleObject;

export const labelInput = {
  variant: "forms.label",
  ml: "3px",
} as ThemeUIStyleObject;

export const containerSelect = {
  backgroundColor: "#F7F7FB",
  height: "fit-content",
  borderRadius: "8px",
  minHeight: "40px",
  mt: "19px",
  px: "16px",
} as ThemeUIStyleObject;

export const flexContent = {
  flexDirection: "column",
  display: "flex",
  width: "100%",
} as ThemeUIStyleObject;
