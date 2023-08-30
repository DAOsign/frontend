import { ThemeUIStyleObject } from "theme-ui";

export const background = {
  position: "absolute",
  height: "100%",
  zIndex: 99,
  width: "100%",
  top: 0,
  left: 0,
  backgroundColor: "#21212180",
} as ThemeUIStyleObject;

export const popup = {
  zIndex: 2,
  borderRadius: "12px",
  border: "1px solid #EDEDF3",
  maxWidth: "500px",
  width: "90%",
  height: "max-content",
  backgroundColor: "#FFFFFF",
  top: "20%",
  left: "50%",
  transform: "translate(-50%,0)",
  position: "absolute",
  "@media screen and (max-width: 480px)": {
    p: "60px 20px",
  },
} as ThemeUIStyleObject;

export const xClose = {
  position: "absolute",
  top: "24px",
  right: "24px",
  marginLeft: "auto",
  width: "20px",
  cursor: "pointer",
  "&:hover > svg > path": {
    stroke: "#AE4FD0",
  },
} as ThemeUIStyleObject;

export const iconCopy = {
  marginLeft: "5px",
  cursor: "pointer",
  "&:hover > svg > path": {
    stroke: "#AE4FD0",
  },
} as ThemeUIStyleObject;

export const button = {
  borderRadius: "52px",
  background: "green",
  width: "87px",
  maxHeight: "37px",
  fontSize: "14px",
  padding: "5px 16px",
  mb: "12px",
} as ThemeUIStyleObject;

export const titlePopup = {
  variant: "text.h2",
  mb: "8px",
  "@media screen and (max-width: 375px)": {
    variant: "text.h4",
  },
} as ThemeUIStyleObject;

export const cardContainer = {
  width: "344px",
  height: "114px",
  borderRadius: "12px",
  border: "1px solid var(--grey-2, #EDEDF3)",
} as ThemeUIStyleObject;

export const socialTitle = {
  pl: "4px",
  variant: "text.largeTextBold",
  fontStyle: "normal",
} as ThemeUIStyleObject;

export const link = {
  color: "pink",
  display: "flex",
  alignItems: "center",
  pt: "16px",
  cursor: "pointer",
} as ThemeUIStyleObject;

export const cardBtn = {
  p: "12px 24px",
  width: "fit-content",
} as ThemeUIStyleObject;

export const userFoto = {
  position: "relative",
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  mt: "30px",
  mb: "53px",
  "@media screen and (max-width: 375px)": {
    width: "120px",
    height: "120px",
  },
} as ThemeUIStyleObject;

export const cardInput = {
  borderRadius: "10px",
  mb: "24px",
  background: "#EDEDF3",
  width: "100%",
} as ThemeUIStyleObject;

// =========== EmailVerificationModal =================
export const titleEmail = {
  variant: "text.h2",
  mb: "16px",
  "@media screen and (max-width: 375px)": {
    variant: "text.h4",
  },
} as ThemeUIStyleObject;

export const resentBtn = {
  color: "#CA5CF2",
  background: "transparent",
  border: "none",
  width: "fit-content",
  height: "fit-content",
  variant: "normalTextMedium",
  p: "0",
  m: "0 auto 0 0",
} as ThemeUIStyleObject;

export const formEmail = {
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: "60px",
} as ThemeUIStyleObject;

// ========= SuccessModal =============
export const greenArrow = {
  width: "100px",
  height: "100px",
  mb: "24px",
} as ThemeUIStyleObject;
