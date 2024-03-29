import { ThemeUIStyleObject } from "theme-ui";

const container = {
  position: "absolute",
  top: "-2px",
  right: 0,
  width: "253px",
  height: "410px",
  background: "#FFFFFF",
  border: "1px solid #EDEDF3",
  boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.08)",
  borderRadius: "12px",
  zIndex: 2,
  padding: "24px 24px 28px 32px",
  cursor: "initial",
  "@media screen and (max-width: 768px)": {
    width: "100%",
    borderTop: "1px solid #EDEDF3",
    maxWidth: "unset",
    height: "calc(100vh - 60px)",
    position: "fixed",
    borderRadius: "0",
    top: "66px",
  },
} as ThemeUIStyleObject;

const conteinerHeader = {
  justifyContent: "space-between",
  alignItems: "center",
  "@media screen and (max-width: 768px)": {
    maxWidth: "160px",
  },
} as ThemeUIStyleObject;

const title = {
  fontFamily: "InterBold",
  fontSize: "20px",
  lineHeight: "24px",
  "@media screen and (max-width: 768px)": {
    fontStyle: "normal",
    fontSize: "28px",
    lineHeight: "120%",
    textAlign: "center",
    color: "#212121",
  },
} as ThemeUIStyleObject;

const secondaryTitle = {
  variant: "text.normalTextBold",
  fontSize: "16px",
  display: "inline-block",
  lineHeight: "25.6px",
  mt: "16px",
  "@media screen and (max-width: 768px)": {
    mt: "24px",
    fontSize: "20px",
    lineHeight: "24px",
  },
} as ThemeUIStyleObject;

const text = {
  variant: "text.smallTextMediumUser",
  fontSize: "14px",
  "@media screen and (max-width: 768px)": {
    fontSize: "16px",
  },
} as ThemeUIStyleObject;

const conteinerCheckbox = {
  alignItems: "center",
  cursor: "pointer",
  "&:hover": {
    opacity: 1,
  },
  "&:focus": {
    opacity: 1,
  },
} as ThemeUIStyleObject;

const icon = {
  width: "24px",
  height: "24px",
  "@media screen and (max-width: 768px)": {
    display: "none",
  },
} as ThemeUIStyleObject;

const iconClose = {
  width: "24px",
  cursor: "pointer",
  height: "24px",
  display: "none",
  "@media screen and (max-width: 768px)": {
    display: "block",
  },
} as ThemeUIStyleObject;

const clear = {
  variant: "buttons.userBtn",
  py: "12px",
  mt: "60px",
  width: "100%",
  color: "#CA5CF2",
  height: "50px",
  display: "none",
  cursor: "pointer",
  "&:hover": {
    color: "#AE4FD0",
  },
  "&:focus": {
    color: "#AE4FD0",
  },
  "@media screen and (max-width: 768px)": {
    display: "block",
    background: "transparent",
    border: "2px solid #CA5CF280",
    "&:hover": {
      color: "#CA5CF2",
      background: "transparent",
      border: "2px solid #AE4FD0",
    },
    "&:focus": {
      background: "transparent",
      color: "#CA5CF2",
      border: "2px solid #AE4FD0",
    },
  },
} as ThemeUIStyleObject;

export {
  conteinerCheckbox,
  conteinerHeader,
  secondaryTitle,
  iconClose,
  container,
  title,
  clear,
  icon,
  text,
};
