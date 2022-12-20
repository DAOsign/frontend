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
  "@media screen and (max-width: 768px)": {
    width: "45px",
    height: "45px",
    animation: "dMobile 4s 1 linear",
    right: "43.2%",
  },
} as ThemeUIStyleObject;

const a = {
  position: "absolute",
  right: "30%",
  width: "57px",
  height: "54px",
  animation: "a 4s 1 linear",
  zIndex: 2,
  "@media screen and (max-width: 768px)": {
    width: "45px",
    height: "45px",
    animation: "aMobile 4s 1 linear",
    right: "30%",
  },
} as ThemeUIStyleObject;

const o = {
  right: "14%",
  position: "absolute",
  width: "57px",
  height: "54px",
  animation: "o 4s 1 linear",
  zIndex: 2,
  "@media screen and (max-width: 768px)": {
    width: "45px",
    height: "45px",
    animation: "oMobile 4s 1 linear",
    right: "16%",
  },
} as ThemeUIStyleObject;

const text = {
  height: "30px",
  fontFamily: "InterMedium",
  display: "block",
  left: "36%",
  bottom: "10%",
  fontSize: "23px",
  position: "absolute",
  animation: "text 4s 1 linear",
  "@media screen and (max-width: 768px)": {
    animation: "textMobile 4s 1 linear",
    left: "43%",
    fontSize: "21px",
    bottom: "24px",
  },
} as ThemeUIStyleObject;

const logoWithoutAnimate = {
  width: "130px",
  height: "48px",
  cursor: "pointer",
  "@media screen and (max-width: 768px)": {
    width: "96px",
    height: "36px",
  },
  "@media screen and (max-width: 480px)": {
    width: "86px",
    height: "32px",
  },
} as ThemeUIStyleObject;

const iconLogo = {
  width: "81px",
  height: "100px",
  position: "absolute",
  left: "5%",
  animation: "iconLogo 4s 1 linear",
  "@media screen and (max-width: 768px)": {
    animation: "iconLogoMobile 4s 1 linear",
    width: "65px",
    height: "65px",
    left: "19%",
  },
} as ThemeUIStyleObject;

const animateContainer = {
  position: "relative",
  top: 0,
  animation: "animateLogo 4s 1 linear",
  paddingTop: "80px",
} as ThemeUIStyleObject;

export { animateContainer, container, iconLogo, text, logo, a, d, o, logoWithoutAnimate };
