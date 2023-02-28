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
  "@media screen and (max-width: 768px)": {
    px: "36px",
    height: "66px",
  },
  "@media screen and (max-width: 480px)": {
    paddingRight: "12px",
    paddingLeft: "16px",
  },
} as ThemeUIStyleObject;

const addresContainer = {
  alignItems: "center",
  backgroundColor: "#F7F7FB",
  height: "44px",
  paddingX: "12px",
  borderRadius: "80px",
  ml: "20px",
  fontFamily: "InterMedium",
  fontStyle: "normal",
  fontWeight: 400,
  cursor: "pointer",
  "@media screen and (max-width: 768px)": {
    display: "none",
  },
} as ThemeUIStyleObject;

const iconMenu = {
  variant: "buttons.itemsBtn",
  display: "none",
  ml: "16px",
  width: "42px",
  height: "42px",
  borderRadius: "50%",
  backgroundColor: "#F7F7FB",
  background: "#F7F7FB",
  textAlign: "center",
  padding: 0,
  cursor: "poiner",
  "@media screen and (max-width: 768px)": {
    display: "block",
  },
  "&:hover": { backgroundColor: "#F7F7FB" },
  "&:focus": { backgroundColor: "#F7F7FB" },
} as ThemeUIStyleObject;

const identiconIcon = {
  width: "24px",
  height: "24px",
  marginRight: "8px",
} as ThemeUIStyleObject;

const iconBell = {
  width: "24px",
  height: "24px",
  m: "0 auto",
} as ThemeUIStyleObject;

const containerBtn = {
  alignItems: "center",
  flexDirection: "row",
  "@media screen and (max-width: 768px)": {
    width: "126px",
  },
} as ThemeUIStyleObject;
export { addresContainer, container, iconMenu, identiconIcon, iconBell, containerBtn };
