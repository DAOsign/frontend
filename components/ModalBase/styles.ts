import { ThemeUIStyleObject } from "theme-ui";

export const modalContainer = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
  px: ["16px", "32px"],
  // minHeight: "466px",
  borderRadius: "12px",
  backgroundColor: "white",
  border: "1px solid #EDEDF3",
  "&::-webkit-scrollbar": {
    width: 0,
  },
} as ThemeUIStyleObject;
