import { ThemeUIStyleObject } from "theme-ui";

export const verificationCardStyles: ThemeUIStyleObject = {
  p: "12px 12px 12px 23px",
  position: "relative",
  width: "100%",
  border: "2px solid #EDEDF3",
  borderRadius: "12px",
  display: "flex",
  justifyContent: "space-between",
  cursor: "pointer",
  alignItems: "flex-start",
  transition: "box-shadow .3s",
  // "@media screen and (max-width: 719px)": {
  //   p: "29px 16px 16px 16px",
  //   alignItems: "flex-start",
  // },
  ".card_head": {
    pt: "8px",
    pb: "6px",
    alignSelf: "flex-start",
  },
  ".card_head > div:first-child": {
    display: "none",
  },
  ".card_body": {
    color: "dark",
    alignSelf: "center",
    py: "6px",
    pr: "10px",
    ml: "38px",
    ".title": {
      fontSize: "16px",
      fontFamily: "InterBold",
      fontWeight: 700,
      lineHeight: "160%",
    },
    ".description": {
      fontSize: "14px",
      fontFamily: "InterMedium",
      fontWeight: 500,
      opacity: "0.5",
      lineHeight: "160%",
    },
  },
  ".card_tail": {
    ml: "16px",
    alignSelf: "center",
    ".image_container": {
      width: "60px",
      height: "60px",
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

export const title = {
  fontFamily: "InterBold",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "14px",
  lineHeight: "160%",
  color: "#212121",
} as ThemeUIStyleObject;

export const iconComingSoon = {
  width: "248px",
  height: "60px",
  "@media screen and (max-width: 719px)": {
    transform: "translate(-50%, 0)",
    position: "absolute",
    bottom: "16px",
    left: "50%",
  },
} as ThemeUIStyleObject;
