import { ThemeUIStyleObject } from "theme-ui";

export default {
  maxWidth: "440px",
  textAlign: "left",
  "&>div": {
    minHeight: "115px",
  },
  input: {
    outline: "none",
    border: "2px solid transparent",
    transition: ".3s all",
    "&.error": {
      borderColor: "red",
    },
  },
} as ThemeUIStyleObject;
