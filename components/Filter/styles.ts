import { ThemeUIStyleObject } from "theme-ui";

const container = {
  position: "absolute",
  top: 0,
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
    maxWidth: "unset",
    height: "calc(100vh - 80px)",
    position: "fixed",
    top: "80px",
  },
} as ThemeUIStyleObject;

const conteinerHeader = {
  justifyContent: "space-between",
  alignItems: "center",
} as ThemeUIStyleObject;

const title = {
  fontFamily: "InterBold",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "120%",
  textAlign: "center",
  color: "#212121",
} as ThemeUIStyleObject;

const secondaryTitle = {
  variant: "text.normalTextBold",
  mt: "16px",
  display: "inline-block",
} as ThemeUIStyleObject;

const text = {
  variant: "text.smallTextMediumUser",
} as ThemeUIStyleObject;

const conteinerCheckbox = {
  mt: "8px",
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
  height: "24px",
  display: "none",
  "@media screen and (max-width: 768px)": {
    display: "block",
  },
} as ThemeUIStyleObject;

const clear = {
  variant: "text.normalTextBold",
  mt: "32px",
  color: "#CA5CF2",
  display: "none",
  cursor: "pointer",
  "@media screen and (max-width: 768px)": {
    display: "inline-block",
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
