import { ThemeUIStyleObject } from "theme-ui";

const footer = {
  marginTop: "135px",
  position: "absolute",
  bottom: 0,
  px: "120px",
  pb: "20px",
  animation: "footer 4s 1 linear",
  "@media screen and (max-width: 1200px)": {
    paddingLeft: "100px",
    marginTop: "90px",
    paddingRight: "100px",
  },
  "@media screen and (max-width: 768px)": {
    paddingLeft: "15px",
    paddingRight: "15px",
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
  justifyContent: "space-between",
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
  display: "flex",
  alignItems: "baseline",
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
  height: "30px",
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
  cursor: "pointer",
  "&:hover": {
    color: "#CA5CF290",
    borderColor: "#CA5CF290",
  },
  "@media screen and (max-width: 768px)": {
    width: "100%",
  },
} as ThemeUIStyleObject;

const iconEmail = {
  position: "absolute",
  width: "30px",
  height: "30px",
  top: "44px",
  right: "17px",
  opacity: 0.5,
  cursor: "pointer",
  "@media screen and (max-width: 1024px)": {
    left: "480px",
  },
  "@media screen and (max-width: 768px)": {
    width: "30px",
    left: "70%",
  },
} as ThemeUIStyleObject;

const icon = {
  height: 24,
  width: 24,
  cursor: "pointer",
  "& .first": {
    zIndex: "1",
  },
  "&:hover .first ": {
    display: "none",
  },
  "& .second": {
    display: "none",
    zIndex: "1",
  },
  "&:hover .second": {
    display: "block",
  },
} as ThemeUIStyleObject;

const iconFooter = {
  width: "10px",
  height: "10px",
  mr: "4px",
  ml: "4px",
} as ThemeUIStyleObject;
export {
  iconContainer,
  socialTitle,
  inputFooter,
  footerText,
  iconFooter,
  container,
  rightSide,
  iconEmail,
  leftSide,
  aboutUs,
  footer,
  icon,
};
