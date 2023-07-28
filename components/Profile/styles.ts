import { ThemeUIStyleObject } from "theme-ui";

export const profileSection = {
  maxWidth: "1440px",
  margin: "80px auto 0",
  pl: "140px",
  pr: "140px",
  backgroundColor: "#F7F7FB",
} as ThemeUIStyleObject;

export const infoSection = {
  pl: "40px",
  backgroundColor: "#F7F7FB",
} as ThemeUIStyleObject;

export const userFoto = {
  position: "relative",
  width: "180px",
  height: "180px",
  borderRadius: "50%",
  "@media screen and (max-width: 719px)": {
    width: "120px",
    height: "120px",
  },
} as ThemeUIStyleObject;

export const container = {
  flexDirection: "column",
} as ThemeUIStyleObject;

export const walletContainer = {
  pt: "40px",
  pb: "10px",
} as ThemeUIStyleObject;

export const userName = {
  variant: "text.h2",
  display: "block",
  textAlign: "center",
  pb: "16px",
  "@media screen and (max-width: 1200px)": {
    textAlign: "left",
  },
} as ThemeUIStyleObject;

export const infoContainer = {
  pb: "13px",
} as ThemeUIStyleObject;

export const title = {
  variant: "text.overscript",
} as ThemeUIStyleObject;

export const titleVerif = {
  variant: "text.normalTextBold",
} as ThemeUIStyleObject;

export const subTitle = {
  variant: "text.smallTextMediumUser",
  width: "400px",
} as ThemeUIStyleObject;

export const btnUserFoto = {
  variant: "buttons.userBtn",
  height: "46px",
  padding: "10px 22px",
  mt: "24px",
} as ThemeUIStyleObject;

export const badges = {
  variant: "text.normalTextBold",
  display: "block",
  pr: "24px",
} as ThemeUIStyleObject;

export const references = {
  variant: "text.normalTextBold",
  display: "block",
  opacity: "0.5",
};
