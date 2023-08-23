import { ThemeUIStyleObject } from "theme-ui";

export const bg = {
  position: "fixed",
  overflow: "auto",
  height: "100%",
  width: "100%",
} as ThemeUIStyleObject;

export const flexContainer = {
  flexDirection: "column",
  justifyContent: "center",
  margin: "0 auto",
} as ThemeUIStyleObject;

export const overflowContentStyles = {
  "&::-webkit-scrollbar": {
    width: 0,
  },
} as ThemeUIStyleObject;

export const itemOption = {
  overflow: "auto",
  pt: "9px",
  "&::-webkit-scrollbar": {
    width: "0 !important",
  },
} as ThemeUIStyleObject;

export const inputSearch = {
  width: "93%",
  height: "40px",
  left: 0,
  pl: "16px",
  borderRadius: " 8px",
  position: "absolute",
  fontFamily: "InterMedium",
  fontWeight: 500,
  fontSize: "16px",
  opacity: 1,
  lineHeight: "160%",
  background: "#F7F7FB",
  color: "#212121",
  top: 0,
  zIndex: 1,
  ml: "auto",
  border: "none",
  "&:hover": {
    border: "none",
  },
  "&:placeholder": {
    fontFamily: "InterMedium",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "160%",
    color: "#212121",
    opacity: "0.5",
  },
  "@media screen and (max-width: 480px)": {
    width: "85%",
  },
} as ThemeUIStyleObject;

export const mainText = {
  variant: "text.h2",
  fontSize: "28px",
  pl: "60px",
  pr: "60px",
  textAlign: "center",
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
  top: "24px",
  right: "24px",
  width: "24px",
  height: "24px",
  cursor: "pointer",
  "&:hover": {
    opacity: "1",
  },
  "@media screen and (max-width: 480px)": {
    top: "12px",
    right: "12px",
    width: "20px",
    height: "20px",
  },
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
  opacity: 1,
  width: "100%",
  pl: "16px",
  transition: "border-color 0.3s",
  border: "1px solid transparent",
  "&::placeholder": {
    fontFamily: "InterMedium",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "160%",
    color: "#212121 !important",
    opacity: "0.5 !important",
  },
} as ThemeUIStyleObject;

export const switchContainer = {
  flexDirection: "row-reverse",
  alignItems: "center",
  position: "relative",
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
  "@media screen and (max-width: 480px)": {
    alignItems: "center",
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
    maxWidth: "226px !important",
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
    transform: "translateX(60%) !important",
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
  "@media screen and (max-width: 480px)": {
    mt: "56px",
  },
} as ThemeUIStyleObject;

export const icon = {
  rotate: "270deg",
  width: "20px",
  height: "6px",
  ml: "auto",
} as ThemeUIStyleObject;

export const iconInfo = {
  cursor: "pointer",
  height: "24px",
  width: "24px",
  ml: "7px",
  pt: "4px",
} as ThemeUIStyleObject;

export const iconInfoEnableTransform = {
  cursor: "pointer",
  height: "24px",
  width: "24px",
  ml: "7px",
  pt: "3px",
  "@media screen and (max-width: 480px)": {
    position: "absolute",
    top: "13px",
    right: 0,
  },
} as ThemeUIStyleObject;

export const flexSelect = {
  justifyContent: "space-between",
  cursor: "pointer",
  alignItems: "center",
  height: "40px",
  px: "16px",
  position: "relative",
  zIndex: 2,
  fontFamily: "InterMedium",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: " 160%",
  transform: "translate3d(1px, 1px, 0)",
  color: "#212121",
} as ThemeUIStyleObject;

export const titleSelect = {
  fontFamily: "InterMedium",
  width: "95%",
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
  pt: "40px",
  pb: "60px",
  px: "78px",
  backgroundColor: "#FFFFFF",
  top: "60px",
  position: "absolute",
  transform: "translate(-50%, 0)",
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
  zIndex: 1,
  borderRadius: "8px",
  minHeight: "40px",
  mt: "19px",
  mb: "21px",
  position: "relative",
  "& > .settingImportSnapshotProposal": {
    position: "absolute",
    backgroundColor: "#F7F7FB",
    borderRadius: "8px",
    zIndex: 3,
    top: "0",
    width: "100%",
    "& > .settingImportSnapshotProposal > .itemSelect": {
      borderRadius: 0,
    },
  },
} as ThemeUIStyleObject;

export const flexContent = {
  flexDirection: "column",
  display: "flex",
  width: "100%",
} as ThemeUIStyleObject;

export const flexSelectItem = {
  ...flexSelect,
  "&:hover": {
    backgroundColor: "#D8D8E2",
    alignItems: "center",
  },
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
    mt: "24px",
  },
} as ThemeUIStyleObject;
