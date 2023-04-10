import { ThemeUIStyleObject } from "theme-ui";

export const flexContainer = {
  flexDirection: "column",
  justifyContent: "center",
  margin: "0 auto",
} as ThemeUIStyleObject;

export const overflowContentStyles = {
  overflow: "scroll",
  "&::-webkit-scrollbar": {
    width: 0,
  },
} as ThemeUIStyleObject;

export const mainText = {
  variant: "text.h2",
  fontSize: "28px",
  pl: "60px",
  pr: "60px",
  textAlign: "center",
  pt: "24px",
  "@media screen and (max-width: 1200px)": {
    px: 0,
  },
} as ThemeUIStyleObject;

export const textContainer = {
  variant: "text.smallTextMediumUser",
  pt: "16px",
  textAlign: "center",
} as ThemeUIStyleObject;

export const subBtn = {
  variant: "buttons.primary",
  width: "fit-content",
  m: 0,
  "@media screen and (max-width: 719px)": {
    width: "100%",
    mt: "20px",
  },
} as ThemeUIStyleObject;

export const closeIcon = {
  position: "absolute",
  opacity: "0.5",
  top: "30px",
  right: "30px",
  width: "20px",
  height: "20px",
  cursor: "pointer",
} as ThemeUIStyleObject;

export const containerIcon = {
  backgroundColor: "#F5D549",
  borderRadius: "50%",
  width: "100px",
  p: "20px",
  height: "100px",
  m: "0 auto",
} as ThemeUIStyleObject;

export const input = {
  variant: "forms.input",
  backgroundColor: "#F7F7FB",
  height: "40px",
  borderRadius: "8px",
  width: "100%",
  transition: "border-color 0.3s",
  border: "1px solid transparent",
} as ThemeUIStyleObject;

export const switchContainer = {
  flexDirection: "row-reverse",
  alignItems: "center",
  "& > label": {
    maxWidth: "33px",
    opacity: 1,
    height: "15px",
    ml: "8px",
  },
  "&  .switch": {
    height: "17px !important",
    width: "33px",
    padding: 0,
  },
  "&  .switch  div": {
    width: "19px",
    height: "19px",
  },
  "@media screen and (max-width: 719px)": {
    height: "30px",
  },
} as ThemeUIStyleObject;

export const labelSwitch = {
  fontFamily: "InterMedium",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "160%",
  color: "#212121",
  opacity: 1,
  display: "inline-block",
  ml: "10px",
  height: "26px !important",
  maxWidth: "unset !important",
  "@media screen and (max-width: 480px)": {
    maxWidth: "226px",
  },
} as ThemeUIStyleObject;

export const switchBtn = {
  backgroundColor: "transparent",
  border: "2px solid #EDEDF3",
  "& > div": {
    border: "2px solid #212121",
    top: "-3px",
  },
  "input:checked ~ &": {
    backgroundColor: "transparent",
    border: "2px solid #CA5CF250",
  },
  "input:checked ~ & > div": {
    backgroundColor: "#CA5CF2",
    border: "2px solid #CA5CF2",
  },
} as ThemeUIStyleObject;

export const secondaryTitle = {
  fontFamily: "InterBold",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "160%",
  color: "#212121",
  display: "inline-block",
  my: "33px",
} as ThemeUIStyleObject;

export const icon = {
  rotate: "270deg",
  width: "20px",
  height: "6px",
} as ThemeUIStyleObject;

export const iconInfo = {
  cursor: "pointer",
  height: "24px",
  width: "24px",
  ml: "7px",
} as ThemeUIStyleObject;

export const flexSelect = {
  justifyContent: "space-between",
  cursor: "pointer",
  alignItems: "center",
  height: "40px",
  px: "16px",
  fontFamily: "InterMedium",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: " 160%",
  color: "#212121",
  "&:last-child": {
    borderRadius: "0 0  8px 8px",
  },
} as ThemeUIStyleObject;

export const titleSelect = {
  fontFamily: "InterMedium",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "160%",
  color: "#212121",
} as ThemeUIStyleObject;

export const importingText = {
  fontFamily: "InterBold",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "160%",
  color: "#212121",
} as ThemeUIStyleObject;

export const flexLoader = {
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  pt: "20px",
  pb: "65px",
} as ThemeUIStyleObject;

export const modalBase = {
  width: "756px",
  maxHeight: "90vh",
  pt: "40px",
  pb: "60px",
  px: "78px",
  "@media screen and (max-width: 1200px)": {
    width: "672px",
    px: "36px",
  },
  "@media screen and (max-width: 719px)": {
    width: "90%",
    px: "16px",
  },
  "@media screen and (max-width: 480px)": {
    width: "343px",
  },
} as ThemeUIStyleObject;

export const labelInput = {
  variant: "forms.label",
  ml: "3px",
} as ThemeUIStyleObject;

export const containerSelect = {
  backgroundColor: "#F7F7FB",
  height: "fit-content",
  borderRadius: "8px",
  minHeight: "40px",
  mt: "19px",
  mb: "21px",
} as ThemeUIStyleObject;

export const flexContent = {
  flexDirection: "column",
  display: "flex",
  width: "100%",
} as ThemeUIStyleObject;

export const stylesBtn = {
  flexDirection: "row-reverse",
  mt: "40px",
  "@media screen and (max-width: 719px)": {
    flexDirection: "column-reverse",
  },
} as ThemeUIStyleObject;

export const loadingStylesBtn = {
  mt: "40px",
} as ThemeUIStyleObject;

export const btnCancelLoading = {
  variant: "secondary",
  mr: "auto",
  ml: "auto",
} as ThemeUIStyleObject;

export const btnCancel = {
  variant: "buttons.secondary",
  width: "90px",
  mr: "24px",
  ml: "0",
  "&:hover": {
    background: "unset",
    borderColor: " #AE4FD0",
  },
  "&:focus": {
    background: "unset",
  },
  "@media screen and (max-width: 719px)": {
    width: "100%",
  },
} as ThemeUIStyleObject;

export const labelInputTellMore = {
  ...labelInput,
  maxWidth: "unset",
  mt: "33px",
  "@media screen and (max-width: 480px)": {
    mt: "60px",
  },
} as ThemeUIStyleObject;
