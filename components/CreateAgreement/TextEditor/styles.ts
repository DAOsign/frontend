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
  ".backBtn": {
    fontFamily: "InterRegular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "12px",
    color: " #CA5CF2",
    display: "flex",
    lineHeight: "160%",
    alignItems: "center",
    width: "180px",
    justifyContent: "flex-end",
    marginLeft: "auto",
    paddingRight: 0,
    marginRight: 0,
    backgroundColor: "transparent",
    background: "unset",
    height: "30px",
    "&:hover": {
      background: "unset",
      backgroundColor: "transparent",
    },
  },
};

export const btnBack = {
  fontFamily: "InterRegular",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "12px",
  color: " #CA5CF2",
  display: "flex",
  lineHeight: "160%",
  alignItems: "center",
  width: "180px",
  marginLeft: "auto",
  marginRight: 0,
  backgroundColor: "transparent",
  background: "unset",
  pr: 0,
  justifyContent: "flex-end",
  "&:hover": {
    backgroundColor: "transparent",
    background: "unset",
    color: "#AE4FD0",
  },
} as ThemeUIStyleObject;

export default tabStyles;
