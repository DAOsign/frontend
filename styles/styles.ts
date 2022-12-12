import { ThemeUIStyleObject } from "theme-ui";

const menuContainer = {
  position: "absolute",
  height: "100vh",
  backgroundColor: "#F7F7FB90",
  width: "100%",
  zIndex: 2,
  top: 0,
  pt: "90px",
  "@media screen and (min-width: 768px)": {
    animation: "headerDesctop 0.3s 1 linear",
    right: "20px",
    margin: "0 0 0 auto",
    backgroundColor: "unset",
  },
} as ThemeUIStyleObject;

const fotoContainer = {
  width: "292px",
  m: "0 auto",
  background: "#FFFFFF",
  border: "1px solid #EDEDF3",
  borderRadius: "12px",
  p: "16px 16px 16px 24px",
  position: "relative",
  animation: "header 0.3s 1 linear",
  "@media screen and (min-width: 768px)": {
    animation: "headerDesctop 0.3s 1 linear",
    right: "20px",
    margin: "0 0 0 auto",
  },
} as ThemeUIStyleObject;

const foto = {
  width: "60px",
  height: "60px",
  m: 0,
  borderRadius: "50%",
  backgroundColor: "grey",
} as ThemeUIStyleObject;

export { menuContainer, fotoContainer, foto };
