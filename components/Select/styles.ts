import { ThemeUIStyleObject } from "theme-ui";

export const arrow = {
  rotate: "270deg",
  height: "20px",
  width: "fit-content",
  ml: "auto",
  transition: ".3s all",
  transformOrigin: "center center",
  cursor: "pointer",
} as ThemeUIStyleObject;

export const arrowOpen = { ...arrow, rotate: "90deg" } as ThemeUIStyleObject;

export const option = {
  display: "flex",
  justifyContent: "space-between",
  cursor: "pointer",
  alignItems: "center",
  height: "40px",
  px: "16px",
  position: "relative",
  zIndex: 2,
  fontFamily: "InterMedium",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: " 160%",
  transform: "translate3d(1px, 1px, 0)",
  color: "#212121",
  transition: ".3s all",
  "&:hover": {
    backgroundColor: "#D8D8E2",
  },
} as ThemeUIStyleObject;

const menuPadding = 18;
//boxShadow: "0px 4px 32px rgba(33, 33, 33, 0.16)",

export const menu = {
  position: "absolute",
  overflow: "hidden",
  width: "100%",
  height: "0",
  background: "#F7F7FB",
  zIndex: 1,
  boxShadow: "0px 4px 32px rgba(33, 33, 33, 0.16)",
  clipPath: "inset(0px -32px -32px -32px)",
  transition: ".3s all",
  //paddingY: `${menuPadding}px`,
} as ThemeUIStyleObject;

export const menuOpen = (itemLength: number) =>
  ({
    ...menu,
    paddingY: menuPadding,
    height: `${itemLength * 40 + menuPadding * 2}px`,
  } as ThemeUIStyleObject);

export const selected = {
  display: "flex",
  zIndex: 10,
  alignItems: "center",
  bg: "#F7F7FB",
  padding: "7px 10px 7px 16px",
  cursor: "pointer",
} as ThemeUIStyleObject;
