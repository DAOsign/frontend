import { ThemeUIStyleObject } from "theme-ui";

export default {
  width: "550px",
  height: "390px",
  background: "rgba(255, 255, 255, 0.24)",
  backdropFilter: "blur(6px)",
  borderRadius: "10px",
  paddingTop: "32px",
  paddingX: "80px",
  textAlign: "center",
  button: {
    mb: "12px",
    "&:last-of-type": {
      mb: "40px",
    },
  },
} as ThemeUIStyleObject;
