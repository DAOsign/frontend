import { ThemeUIStyleObject } from "theme-ui";

const container = {
  animation: "logo 4s 1 linear",
} as ThemeUIStyleObject;

const logo = {} as ThemeUIStyleObject;

const d = {
  right: "47%",
  position: "absolute",
  width: "57px",
  height: "54px",
  animation: "d 4s 1 linear",
  zIndex: 2,
} as ThemeUIStyleObject;

const a = {
  position: "absolute",
  right: "30%",
  width: "57px",
  height: "54px",
  animation: "a 4s 1 linear",
  zIndex: 2,
} as ThemeUIStyleObject;

const o = {
  right: "14%",
  position: "absolute",
  width: "57px",
  height: "54px",
  animation: "o 4s 1 linear",
  zIndex: 2,
} as ThemeUIStyleObject;

const text = {
  height: "30px",
  display: "block",
  left: "36%",
  bottom: "10%",
  fontSize: "23px",
  position: "absolute",
  animation: "text 4s 1 linear",
} as ThemeUIStyleObject;

const iconLogo = {
  width: "75px",
  height: "100px",
  position: "absolute",
  left: "5%",
  animation: "iconLogo 4s 1 linear",
} as ThemeUIStyleObject;

const animateContainer = {
  position: "relative",
  top: 0,
  animation: "animateLogo 4s 1 linear",
  paddingTop: "80px",
} as ThemeUIStyleObject;

export { animateContainer, container, iconLogo, text, logo, a, d, o };
