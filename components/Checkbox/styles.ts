import { ThemeUIStyleObject } from "theme-ui";
const checkboxContainer = {
  width: "15px",
  height: "15px",
  position: "absolute",
  zIndex: 1,
  left: "2px",
  backgroundColor: "#ffffff",
  borderRadius: "3px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    border: "1.8px solid #212121",
    opacity: 1,
  },
} as ThemeUIStyleObject;

export { checkboxContainer };
