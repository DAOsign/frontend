import { ThemeUIStyleObject } from "theme-ui";

export const btnCancel = {
  variant: "buttons.primary",
  width: "100px",
  cursor: "pointer",
  "&:hover": {
    opacity: 1,
  },
} as ThemeUIStyleObject;

export default {
  position: "absolute",
  width: "500px",
  left: "50%",
  transform: "translate(-50%, 150px)",
  height: "307px",
  background: "white",
  backdropFilter: "blur(6px)",
  borderRadius: "10px",
  paddingTop: "32px",
  paddingY: "60px",
  textAlign: "center",
} as ThemeUIStyleObject;
