import { ThemeUIStyleObject } from "theme-ui";

const menuContainer = {
  position: "absolute",
  height: "100vh",
  backgroundColor: "inherit",
  width: "100%",
  zIndex: 3,
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
  cursor: "pointer",
  "&:hover > svg > path": {
    stroke: "#AE4FD0",
  },
} as ThemeUIStyleObject;

const fotoContainer = {
  width: "343px",
  m: "0 auto",
  minHeight: "390px",
  background: "#FFFFFF",
  border: "1px solid #EDEDF3",
  borderRadius: "12px",
  height: "412px",
  p: "16px 16px 24px 16px",
  boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.08)",
  position: "absolute",
  "&.visible": {
    position: "fixed",
    animation: "headerDesctop 0.2s 1 linear",
    right: "36px",
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

const btnLogaut = {
  variant: "buttons.grey",
  mt: "39px",
  // position: "absolute",
  border: "none",
  width: "100%",
  color: "#CA5CF2",
  height: "45px",
  pt: 0,
  pb: 0,
  textAlign: "center",
  "&:hover": {
    border: "none",
    backgroundColor: "#FFFFFF",
    background: "unset",
    color: "#AE4FD0",
  },
  "&:hover > div > svg > path ": {
    stroke: "#AE4FD0",
  },
  "&:focus": {
    opacity: 1,
    border: "none",
    backgroundColor: "#FFFFFF",
    background: "unset",
  },
} as ThemeUIStyleObject;

const iconLogOut = {
  width: "18px",
  height: "18px",
  position: "absolute",
  left: "calc(50% - 48px)",
  bottom: "24px",
  "&:hover > svg > path": {
    stroke: "#AE4FD0",
  },
} as ThemeUIStyleObject;

const foto = {
  width: "80px",
  height: "80px",
  m: 0,
  borderRadius: "50%",
} as ThemeUIStyleObject;

export { menuContainer, fotoContainer, foto, copyIcon, btnLogaut, iconLogOut };
