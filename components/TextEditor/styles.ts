import { ThemeUIStyleObject } from "theme-ui";

const tabStyles: ThemeUIStyleObject = {
  ".tabsContainer": {
    display: "flex",
    borderTopRightRadius: "8px",
    borderTopLeftRadius: "8px",
    justifyContent: "flex-start",
    bg: "greyPrimary",
    borderBottom: "1px solid #D8D8E2",
    WebkitBorderTopLeftRadius: "8px",
    WebkitBorderTopRightRadius: "8px",
    overflow: "hidden",
    button: {
      opacity: ".5",
      transition: ".3s all",
    },
    "button.active": {
      opacity: "1",
      bg: "greyPrimary",
    },
    "button:first-of-type": {
      borderRight: "1px solid #D8D8E2",
    },
  },
  ".support": {
    backgroundColor: "#EDEDF3",
    borderRadius: "0 0 8px 8px",
    height: "32px",
    alignItems: "center",
    pl: "12px",
  },
  ".wmde-markdown": {
    background: "none",
  },
};

export default tabStyles;
