import { ThemeUIStyleObject } from "theme-ui";

const container = {
  width: "100%",
  height: "80px",
  paddingLeft: "40px",
  paddingRight: "40px",
  backgroundColor: "#FFFFFF",
  paddingTop: "16px",
  position: "fixed",
  top: 0,
  zIndex: 10,
} as ThemeUIStyleObject;

const addresContainer = {
  alignItems: "center",
  backgroundColor: "#F7F7FB",
  height: "44px",
  paddingX: "12px",
  borderRadius: "80px",
  ml: "20px",
  cursor: "pointer",
  "@media screen and (max-width: 768px)": {
    display: "none",
  },
} as ThemeUIStyleObject;

const iconMenu = {
  display: "none",
  ml: "16px",
  width: "42px",
  height: "42px",
  borderRadius: "50%",
  backgroundColor: "#F7F7FB",
  textAlign: "center",
  padding: 0,
  cursor: "poiner",
  "@media screen and (max-width: 768px)": {
    display: "block",
  },
} as ThemeUIStyleObject;

export { addresContainer, container, iconMenu };
