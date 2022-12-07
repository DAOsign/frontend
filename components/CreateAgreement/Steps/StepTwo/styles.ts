import { ThemeUIStyleObject } from "theme-ui";

export default {
  maxWidth: "440px",
  textAlign: "left",
  ".radio": {
    alignItems: "center",
    "&.disabled": {
      opacity: ".5",
      userSelect: "none",
      pointerEvents: "none",
    },
  },
} as ThemeUIStyleObject;
