import { ThemeUIStyleObject } from "theme-ui";

const errorMessage = {
  fontFamily: "InterRegular",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "160%",
  color: "#FF5269",
  ml: "20px",
  mt: "4px",
} as ThemeUIStyleObject;

const footer = {
  marginTop: "124px",
  left: "50%",
  bottom: 0,
  px: "120px",
  maxWidth: "1900px",
  width: "100%",
  pb: "20px",
  animation: "footer 4s 1 linear",
  "@media screen and (max-width: 1200px)": {
    px: "120px",
  },
  "@media screen and (max-width: 720px)": {
    maxWidth: "520px",
    px: 0,
  },
  "@media screen and (min-width: 1200px)": {
    position: "relative",
    left: "50%",
    bottom: 0,
    mx: 0,
    transform: "translate(-50%, 0)",
  },
} as ThemeUIStyleObject;

const footerItem = {
  variant: "text.smallTextMedium",
  display: "block",
  mb: "4px",
  cursor: "pointer",
  "&:hover": {
    color: "#CA5CF2",
    opacity: "1",
  },
} as ThemeUIStyleObject;

const container = {
  justifyContent: "space-between",
  flexDirection: "row",
  pb: "36px",
  "@media screen and (max-width: 1200px)": {
    flexDirection: "column",
  },
} as ThemeUIStyleObject;

const leftSide = {
  flex: "1 1 1 auto",
  position: "relative",
  "@media screen and (max-width: 720px)": {
    textAlign: "center",
  },
  "@media screen and (max-width: 600px)": {
    maxWidth: "343px",
    ml: "auto",
    mr: "auto",
  },
} as ThemeUIStyleObject;

const rightSide = {
  width: "60%",
  justifyContent: "space-between",
  "@media screen and (max-width: 1200px)": {
    mt: "50px",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  "@media screen and (max-width: 720px)": {
    mt: "40px",
    textAlign: "center",
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
} as ThemeUIStyleObject;

const footerText = {
  display: "flex",
  fontFamily: "InterRegular",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: " 160%",
  color: "#212121",
  alignItems: "baseline",
  "@media screen and (max-width: 1024px)": {
    justifyContent: "center",
    pl: 0,
  },
} as ThemeUIStyleObject;

const inputFooter = {
  variant: "forms.input",
  width: "100%",
  opacity: "1",
  background: "rgba(255, 255, 255, 0.24)",
  backdropFilter: "blur(6px)",
  minWidth: "340px",
  pr: "40px",
  textOverflow: "ellipsis",
  "@media screen and (max-width: 1024px)": {
    minWidth: "unset",
  },
  "@media screen and (max-width: 720px)": {
    m: "0 auto",
    minWidth: "303px",
  },
} as ThemeUIStyleObject;

const socialTitle = {
  variant: "text.normalTextBold",
  display: "inline-block",
  mb: "12px",
  "@media screen and (max-width: 720px)": {
    mt: "40px",
  },
} as ThemeUIStyleObject;

const iconContainer = {
  height: "30px",
  maxWidth: "170px",
  justifyContent: "space-between",
  m: "0 auto 25px",
  "@media screen and (max-width: 720px)": {
    m: "0 auto 36px",
  },
} as ThemeUIStyleObject;

const aboutUs = {
  variant: "buttons.secondary",
  cursor: "pointer",
  "&:hover": {
    color: "#AE4FD0",
    borderColor: "#AE4FD0",
    backgroundColor: "transparent",
    background: "unset",
  },
  "@media screen and (max-width: 720px)": {
    width: "100%",
    maxWidth: "303px",
  },
} as ThemeUIStyleObject;

const iconEmail = {
  position: "absolute",
  width: "15px",
  height: "15px",
  top: "52px",
  right: "17px",
  opacity: 0.5,
  cursor: "pointer",
} as ThemeUIStyleObject;

const icon = {
  height: 24,
  width: 24,
  opacity: 0.5,
  cursor: "pointer",
  "&:hover": {
    opacity: 1,
  },
  "&:hover > svg > path": {
    stroke: "#CA5CF2",
  },
} as ThemeUIStyleObject;

const iconFooter = {
  width: "12px",
  height: "10px",
  mr: "4px",
  ml: "4px",
} as ThemeUIStyleObject;

export {
  iconContainer,
  errorMessage,
  socialTitle,
  inputFooter,
  footerText,
  iconFooter,
  footerItem,
  container,
  rightSide,
  iconEmail,
  leftSide,
  aboutUs,
  footer,
  icon,
};
