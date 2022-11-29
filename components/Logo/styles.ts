import { ThemeUIStyleObject } from "theme-ui";

const container = {
  animation: "logo 6s 1 linear",
} as ThemeUIStyleObject;

const logo = {} as ThemeUIStyleObject;

const d = {
  right: "46.2%",
  position: "absolute",
  width: "54px",
  height: "54px",
  animation: "d 6s 1 linear",
  zIndex: 2,
} as ThemeUIStyleObject;

const a = {
  position: "absolute",
  right: "28%",
  width: "54px",
  height: "54px",
  animation: "a 6s 1 linear",
  zIndex: 2,
} as ThemeUIStyleObject;

const o = {
  right: "11%",
  position: "absolute",
  width: "54px",
  height: "54px",
  animation: "o 6s 1 linear",
  zIndex: 2,
} as ThemeUIStyleObject;

const text = {
  left: "38%",
  bottom: "23%",
  position: "absolute",
  animation: "text 6s 1 linear",
} as ThemeUIStyleObject;

const iconLogo = {
  width: "75px",
  position: "absolute",
  left: "5%",
  animation: "iconLogo 6s 1 linear",
} as ThemeUIStyleObject;

const animateContainer = {
  position: "relative",
  top: 0,
  animation: "animateLogo 6s 1 linear",
} as ThemeUIStyleObject;

export { animateContainer, container, iconLogo, text, logo, a, d, o };
