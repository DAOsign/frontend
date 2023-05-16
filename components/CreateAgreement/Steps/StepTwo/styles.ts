import { ThemeUIStyleObject } from "theme-ui";

export default {
  maxWidth: "600px",
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

export const nameItem = {
  fontFamily: "InterBold",
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "120%",
  cursor: "pointer",
  color: "#212121",
  ml: "16px",
} as ThemeUIStyleObject;

export const itemLocation = {
  justifyContent: "center",
  position: "relative",
  borderRadius: "8px",
  cursor: "pointer",
  width: "290px",
  height: "96px",
  "&:hover": {
    border: "2px solid #D8D8E2",
  },
  "@media screen and (max-width: 768px)": {
    height: "191px",
  },
} as ThemeUIStyleObject;
