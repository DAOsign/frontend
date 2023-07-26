import { ThemeUIStyleObject } from "theme-ui";

export const container = {
  flexDirection: "column",
  // pl: "215px",
} as ThemeUIStyleObject;

export const walletContainer = {
  pb: "5px",
} as ThemeUIStyleObject;

export const userName = {
  variant: "text.h2",
  display: "block",
  textAlign: "center",
  pb: "8px",
  "@media screen and (max-width: 1200px)": {
    textAlign: "left",
  },
} as ThemeUIStyleObject;

export const title = {
  variant: "text.overscript",
  width: "55px",
} as ThemeUIStyleObject;

export const subTitle = {
  variant: "text.smallTextMediumUser",
  width: "400px",
} as ThemeUIStyleObject;
subTitle;
