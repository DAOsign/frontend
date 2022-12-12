import { ThemeUIStyleObject } from "theme-ui";

export const verificationCardStyles: ThemeUIStyleObject = {
  p: "15px 19px 21px",
  position: "relative",
  width: "210px",
  border: "1px solid #EDEDF3",
  borderRadius: "12px",
  cursor: "pointer",
  ".card_head": {
    display: "flex",
    color: "dark",
    mb: "13px",
    span: {
      color: "inherit",
      fontFamily: "InterMedium",
    },
    ".tooltip": {
      position: "absolute",
      top: "10px",
      right: "10px",
      opacity: ".5",
      width: "20px",
      height: "20px",
      zIndex: "100",
    },
  },
  ".card_body": {
    ".image_container": {
      width: "60px",
      height: "60px",
      m: "0 auto",
      mb: "12px",
    },
    ".description": {
      textAlign: "center",
    },
  },
};

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
