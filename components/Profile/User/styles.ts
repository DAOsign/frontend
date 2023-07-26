import { ThemeUIStyleObject } from "theme-ui";

export const userFoto = {
  position: "relative",
  width: "180px",
  height: "180px",
  borderRadius: "50%",
  mr: "40px",
  "@media screen and (max-width: 719px)": {
    width: "120px",
    height: "120px",
  },
} as ThemeUIStyleObject;
