import { ThemeUIStyleObject } from "theme-ui";

const menuContainer = {
  position: "absolute",
  height: "100vh",
  backgroundColor: "inherit",
  width: "100%",
  zIndex: 2,
  top: 0,
  left: 0,
  overflow: "hidden",
  pt: "90px",
  "&.visible": {
    display: "block",
  },
  "&.close": {
    display: "none",
  },
} as ThemeUIStyleObject;

const copyIcon = {
  marginLeft: "5px",
  width: "10px",
  opacity: 0.5,
  height: "10px",
  "&:hover": {
    opacity: 1,
  },
} as ThemeUIStyleObject;

const fotoContainer = {
  width: "292px",
  m: "0 auto",
  background: "#FFFFFF",
  border: "1px solid #EDEDF3",
  borderRadius: "12px",
  p: "16px 16px 16px 24px",
  position: "absolute",
  "&.visible": {
    position: "fixed",
    animation: "headerDesctop 0.2s 1 linear",
    right: "20px",
  },
  "&.close": {
    animation: "headerDesctopClose 0.3s 1 linear",
    right: "-100%",
  },
  "@media screen and (max-width: 768px)": {
    margin: "0 0 0 auto",
    "&.visible": {
      position: "fixed",
      animation: "headerMobile 0.2s 1 linear",
      right: "50%",
      transform: "translate(50%, 0)",
    },
    "&.close": {
      animation: "headerMobileClose 0.3s 1 linear",
      right: "-100%",
    },
  },
} as ThemeUIStyleObject;

const foto = {
  width: "60px",
  height: "60px",
  m: 0,
  borderRadius: "50%",
} as ThemeUIStyleObject;

export { menuContainer, fotoContainer, foto, copyIcon };
