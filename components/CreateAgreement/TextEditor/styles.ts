import { ThemeUIStyleObject } from "theme-ui";

const tabStyles: ThemeUIStyleObject = {
  ".tabsContainer": {
    display: "flex",
    borderTopRightRadius: "8px",
    borderTopLeftRadius: "8px",
    justifyContent: "flex-start",
    bg: "#FFFFFF",
    WebkitBorderTopLeftRadius: "8px",
    WebkitBorderTopRightRadius: "8px",
    overflow: "hidden",
    button: {
      transition: ".3s all",
      fontFamily: "InterBold",
      fontWeight: 700,
      fontSize: "14px",
      lineHeight: "160%",
      color: "#CA5CF2",
      opacity: 0.7,
      pl: "20px",
      pr: "20px",
    },
    "button.active": {
      opacity: "1",
      bg: "#F7F7FB",
      fontFamily: "InterBold",
      fontWeight: 700,
      fontSize: "14px",
      lineHeight: "160%",
      color: "#CA5CF2",
      borderRadius: "8px 8px 0 0",
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
  width: "220px",
  marginLeft: "auto",
  pb: 0,
  marginRight: 0,
  backgroundColor: "transparent",
  background: "unset",
  px: "0 !important",
  justifyContent: "flex-end",
  "&:hover": {
    backgroundColor: "transparent",
    background: "unset",
    color: "#AE4FD0",
  },
} as ThemeUIStyleObject;

export const icon = {
  width: "20px",
  height: "20px",
  mr: "5px",
} as ThemeUIStyleObject;

export const iconFileResize = {
  backgroundColor: "inherit",
  pointerEvents: "none",
  position: "absolute",
  cursor: "pointer",
  bottom: "35px",
  right: "5px",
} as ThemeUIStyleObject;

export const foterText = {
  variant: "text.overscript",
  opacity: 0.5,
  ml: "4px",
} as ThemeUIStyleObject;

export const labelDesc = {
  variant: "forms.label",
  display: "inline-block",
  "@media screen and (max-width: 768px)": {
    display: "none",
  },
} as ThemeUIStyleObject;

export const enterAggrement = {
  variant: "forms.label",
  display: "inline-block",
  mr: "5px",
} as ThemeUIStyleObject;

export const containerEnter = { minWidth: "140px" } as ThemeUIStyleObject;

export default tabStyles;
