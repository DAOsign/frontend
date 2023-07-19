import { ThemeUIStyleObject } from "theme-ui";

const tabStyles: ThemeUIStyleObject = {
  mb: "40px",
  "@media screen and (max-width: 1200px)": {
    mb: "0",
  },
  ".w-md-editor-aree::-webkit-scrollbar": {
    width: 0,
  },
  ".w-md-editor-preview::-webkit-scrollbar": {
    width: 0,
  },
  ".w-md-editor-content:-webkit-scrollbar": {
    width: 0,
  },
  ".editor wmde-markdown-var.w-md-editor.w-md-editor-show-preview::-webkit-scrollbar": {
    width: 0,
  },
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
      pl: "20px",
      pr: "20px",
      "&:hover": {
        color: "#AE4FD0",
      },
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
  ".support > div": {
    alignItems: "center",
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
    "&:hover, &:focus": {
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
  color: "#CA5CF2",
  display: "flex",
  lineHeight: "160%",
  alignItems: "center",
  width: "fit-content !important",
  marginLeft: "auto",
  pb: 0,
  marginRight: 0,
  backgroundColor: "transparent",
  background: "unset",
  px: "0 !important",
  justifyContent: "flex-end",
  "&:hover, &:focus": {
    backgroundColor: "transparent",
    background: "unset",
  },
  "@media screen and (max-width: 580px)": {
    position: "absolute",
    right: 0,
    paddingTop: 0,
    top: "-3px",
  },
} as ThemeUIStyleObject;

export const icon = {
  width: "20px",
  height: "20px",
  mr: "5px",
} as ThemeUIStyleObject;

export const expandBtn = {
  ...btnBack,
  fontFamily: "InterBold",
  fontWeight: 700,
  fontSize: "14px",
  mr: "12px",
  mb: "5px",
  opacity: 0.7,
  "&:disabled": {
    cursor: "no-drop",
  },
  "&:hover, &:focus": {
    backgroundColor: "transparent",
    background: "unset",
    opacity: 1,
  },
  "@media screen and (max-width: 580px)": {
    position: "static",
    width: "fit-content !important",
  },
} as ThemeUIStyleObject;

export const footerText = {
  variant: "text.overscript",
  opacity: 0.5,
  ml: "4px",
} as ThemeUIStyleObject;

export const labelDesc = {
  variant: "forms.label",
  display: "inline-block",
  mr: "5px",
  "@media screen and (max-width: 480px)": {
    display: "none",
  },
} as ThemeUIStyleObject;

export const enterAgreement = {
  variant: "forms.label",
  display: "inline-block",
  mr: "5px",
  mb: "8px",
  "@media screen and (max-width: 480px)": {
    mb: "5px",
  },
} as ThemeUIStyleObject;

export const containerEnter = { minWidth: "140px" } as ThemeUIStyleObject;

export default tabStyles;
