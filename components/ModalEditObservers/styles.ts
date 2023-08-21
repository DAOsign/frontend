import { ThemeUIStyleObject } from "theme-ui";

export const flexContainer = {
  flexDirection: "column",
  justifyContent: "center",
  margin: "0 auto",
  maxWidth: "unset",
  width: "600px",
  marginTop: "40px",
  marginBottom: "40px",
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
  "@media screen and (max-width: 720px)": {
    display: "none",
  },
} as ThemeUIStyleObject;

export const mainText = {
  variant: "text.h2",
  pl: "60px",
  pr: "60px",
  textAlign: "center",
  pt: "24px",
  "@media screen and (max-width: 720px)": {
    fontSize: "24px",
  },
} as ThemeUIStyleObject;

export const btnCancel = {
  variant: "buttons.secondary",
  width: "90px",
  ml: "auto",
  mr: "20px",
  "&:hover": {
    background: "unset",
    borderColor: " #AE4FD0",
  },
  "&:focus": {
    background: "unset",
  },
  "@media screen and (max-width: 720px)": {
    width: "100%",
  },
} as ThemeUIStyleObject;

export const container = {
  mt: "24px",
  position: "relative",
  justifyContent: "space-between",
  alignItems: "center",
} as ThemeUIStyleObject;

export const btnModalContainer = {
  mt: "40px",
  "@media screen and (max-width: 720px)": {
    flexDirection: "column",
    pl: "16px",
    pr: "16px",
  },
} as ThemeUIStyleObject;

export const btnApply = {
  variant: "buttons.primary",
  width: "90px",
  m: 0,
  "@media screen and (max-width: 720px)": {
    width: "100%",
    mt: "20px",
  },
} as ThemeUIStyleObject;

export const inputAddObs = {
  "@media screen and (max-width: 720px)": {
    height: "40px",
  },
} as ThemeUIStyleObject;

export const content = {
  "@media screen and (max-width: 720px)": {
    pl: "16px",
    pr: "16px",
  },
} as ThemeUIStyleObject;
