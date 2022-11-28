import { ThemeUIStyleObject } from "theme-ui";

const footer = {
  marginTop: "135px",
  px: "15px",
  "@media screen and (min-width: 1024px)": {
    paddingLeft: "120px",
    paddingRight: "120px",
  },
  "@media screen and (min-width: 768px)": {
    paddingLeft: "100px",
    paddingRight: "100px",
  },
} as ThemeUIStyleObject;

const container = {
  justifyContent: "space-between",
  flexDirection: "row",
  pb: "36px",
  "@media screen and (max-width: 1024px)": {
    flexDirection: "column",
  },
} as ThemeUIStyleObject;

const leftSide = {
  flex: "1 1 1 auto",
  position: "relative",
  "@media screen and (max-width: 768px)": {
    textAlign: "center",
  },
} as ThemeUIStyleObject;

const rightSide = {
  width: "60%",
  justifyContent: "space-around",
  "@media screen and (max-width: 1024px)": {
    mt: "50px",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  "@media screen and (max-width: 768px)": {
    mt: "40px",
    textAlign: "center",
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
} as ThemeUIStyleObject;

const footerText = {
  "@media screen and (max-width: 1024px)": {
    display: "none",
  },
} as ThemeUIStyleObject;

const inputFooter = {
  variant: "forms.input",
  width: "100%",
  minWidth: "340px",
  "@media screen and (max-width: 1024px)": {
    minWidth: "unset",
    maxWidth: "520px",
  },
  "@media screen and (max-width: 768px)": {
    m: "0 auto",
  },
} as ThemeUIStyleObject;

const socialTitle = {
  variant: "text.normalTextBold",
  display: "inline-block",
  mb: "12px",
  "@media screen and (max-width: 768px)": {
    mt: "40px",
  },
} as ThemeUIStyleObject;

const iconContainer = {
  maxWidth: "170px",
  justifyContent: "space-between",
  opacity: 0.5,
  m: "0 auto 25px",
  "@media screen and (max-width: 768px)": {
    m: "0 auto 36px",
  },
} as ThemeUIStyleObject;

const aboutUs = {
  variant: "buttons.secondary",
  "@media screen and (max-width: 768px)": {
    width: "100%",
  },
} as ThemeUIStyleObject;

const iconEmail = {
  position: "absolute",
  top: "47px",
  right: "17px",
  opacity: 0.5,
  "@media screen and (max-width: 1024px)": {
    left: "480px",
  },
  "@media screen and (max-width: 768px)": {
    width: "50px",
    left: "70%",
  },
} as ThemeUIStyleObject;

export {
  iconContainer,
  socialTitle,
  inputFooter,
  footerText,
  container,
  rightSide,
  iconEmail,
  leftSide,
  aboutUs,
  footer,
};
