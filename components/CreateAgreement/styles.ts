import { ThemeUIStyleObject } from "theme-ui";
const containerSides = {
  maxWidth: "1200px",
  justifyContent: "space-between",
  margin: "40px auto 0",
  textAlign: "center",
  "@media screen and (max-width: 1200px)": {
    flexDirection: "column",
    mt: "270px",
  },
  "@media screen and (max-width: 768px)": {
    flexDirection: "column",
    mt: "220px",
  },
} as ThemeUIStyleObject;

const primaryTitleItem = {
  variant: "text.largeTextBold",
  "@media screen and (max-width: 768px)": {
    variant: "text.smallTextBold",
  },
} as ThemeUIStyleObject;

const imageUploadContainer = {
  textAlign: "center",
  border: "1px dashed #D8D8E2",
  borderRadius: "12px",
  position: "relative",
  width: "440px",
  height: "140px",
  "@media screen and (max-width: 768px)": {
    width: "124px",
    height: "46px",
    border: "2px solid #EDEDF3",
    borderRadius: "80px",
    mt: "10px",
  },
} as ThemeUIStyleObject;

const uploadText = {
  variant: "text.smallTextMedium",
  display: "block",
  opacity: 1,
  mt: "48px",
  "@media screen and (max-width: 768px)": {
    display: "none",
  },
} as ThemeUIStyleObject;

const uploadTextMobile = {
  display: "none",
  "@media screen and (max-width: 768px)": {
    display: "inline-block",
    mt: "10px",
    variant: "text.normalTextBold",
  },
} as ThemeUIStyleObject;

const itemRadio = {
  justifyContent: "space-between",
  width: "inherit",
  opacity: 1,
  display: "flex",
  alignItem: "center",
  "&:nth-child(3)": {
    opacity: "0.5",
    pointerEvents: "none",
  },
  "@media screen and (max-width: 768px)": {
    "&:nth-child(3)": {
      display: "none",
    },
  },
} as ThemeUIStyleObject;

const leftSide = {
  maxWidth: "672px",
  minHeight: "550px",
  background: "#FFFFFF",
  border: "1px solid #EDEDF3",
  borderRadius: "12px",
  paddingX: "128px",
  paddingBottom: "60px",
  paddingTop: "60px",
  "@media screen and (max-width: 1200px)": {
    width: "100%",
    maxWidth: "672px",
    paddingX: "100px",
    borderBottom: "none",
    minHeight: "300px",
    borderRadius: "12px 12px 0 0",
  },
  "@media screen and (max-width: 768px)": {
    maxWidth: "343px",
    paddingX: "16px",
    minHeight: "300px",
  },
} as ThemeUIStyleObject;

const title = {
  variant: "text.h2",
  mb: "40px",
  display: "inline-block",
  "@media screen and (max-width: 768px)": {
    variant: "text.h4",
  },
} as ThemeUIStyleObject;

const rightSide = {
  maxWidth: "364px",
  minHeight: "550px",
  background: "#FFFFFF",
  border: "1px solid #EDEDF3",
  borderRadius: "12px",
  paddingX: "25px",
  maxHeight: "590px",
  paddingBottom: "32px",
  paddingTop: "52px",
  "@media screen and (max-width: 1200px)": {
    width: "100%",
    maxWidth: "672px",
    paddingX: "100px",
    borderTop: "none",
    borderRadius: "0 0 12px 12px",
    height: "initial",
    minHeight: "unset",
    pb: "72px",
    pt: 0,
  },
  "@media screen and (max-width: 768px)": {
    maxWidth: "343px",
    paddingX: "16px",
    pb: "40px",
    pt: 0,
  },
} as ThemeUIStyleObject;

const container = {
  border: "2px solid #F7F7FB",
  borderRadius: "8px",
  px: "32px",
  py: "24px",
  "@media screen and (max-width: 768px)": {
    maxWidth: "343px",
    paddingX: "16px",
    pb: "40px",
    pt: 0,
  },
} as ThemeUIStyleObject;

const card = {
  textAlign: "center",
  border: "2px solid #F7F7FB",
  borderRadius: "8px",
  px: "24px",
  pt: "20px",
  pb: "27px",
  maxWidth: "210px",
  m: 0,
  cursor: "pointer",
  minHeight: "230px",
  "@media screen and (max-width: 768px)": {
    maxWidth: "150px",
    px: "12px",
  },
} as ThemeUIStyleObject;

const flex = {
  display: "flex",
  alignItems: "center",
} as ThemeUIStyleObject;

const leftSideItem = {
  textAlign: "left",
  maxWidth: "230px",
  ml: "16px",
  "@media screen and (max-width: 1200px)": {
    ml: 0,
    textAlign: "center",
    mt: "12px",
  },
} as ThemeUIStyleObject;

const item = {
  border: "2px solid #F7F7FB",
  borderRadius: "8px",
  pl: "20px",
  py: "20px",
  m: 0,
  mb: "10px",
  alignItems: "start",
} as ThemeUIStyleObject;

const inputCreactAgreement = {
  backgroundColor: "#F7F7FB",
  borderRadius: "8px",
  width: "100%",
} as ThemeUIStyleObject;

const secondaryTitle = {
  variant: "text.overscript",
  display: "block",
  opacity: 1,
} as ThemeUIStyleObject;

const stepNumber = {
  backgroundColor: "#CA5CF2",
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  textAlign: "center",
  paddingTop: "13px",
} as ThemeUIStyleObject;

const fW = {
  width: "100%",
};

const containerButtons = {
  "@media screen and (max-width: 1200px)": {
    "& > button:first-child": {
      mt: 0,
    },
  },
} as ThemeUIStyleObject;

const secondaryTitleStep = {
  variant: "text.overscript",
  opacity: 0.5,
  "@media screen and (max-width: 1200px)": {
    maxWidth: "128px",
  },
  "@media screen and (max-width: 768px)": {
    maxWidth: "88px",
  },
} as ThemeUIStyleObject;

const stepsContainer = {
  "@media screen and (max-width: 1200px)": {
    position: "absolute",
    width: "100%",
    maxWidth: "672px",
    height: "202px",
    alignItems: "center",
    top: "104px",
    display: "flex",
    transform: "translate(-50%, 0)",
    left: "50%",
    backgroundColor: "#FFFFFF",
    border: "1px solid #EDEDF3",
    borderRadius: "12px",
    justifyContent: "space-around",
  },
  "@media screen and (max-width: 768px)": {
    width: "100%",
    maxWidth: "343px",
    height: "179px",
    padding: "0 5px",
  },
} as ThemeUIStyleObject;

const stepStyle = {
  // mt: '56px',
  alignItems: "center",
  textAlign: "left",
  "@media screen and (max-width: 1200px)": {
    mt: 0,
    flexDirection: "column",
    textAlign: "center",
  },
  "@media screen and (max-width: 768px)": {
    height: "100%",
    pt: "24px",
  },
} as ThemeUIStyleObject;

const uploadBtn = {
  "@media screen and (max-width: 768px)": {
    position: "absolute",
    right: 0,
    top: "30px",
  },
} as ThemeUIStyleObject;

const box = {
  width: "100px",
  height: "32px",
  borderLeft: "2px dashed #EDEDF3",
  borderTop: "none",
  margin: "12px 25px 12px",

  "@media screen and (max-width: 1200px)": {
    width: "15%",
    margin: "0 0 40px",
    borderTop: "2px dashed #EDEDF3",
    borderLeft: "none",
  },
} as ThemeUIStyleObject;

export {
  inputCreactAgreement,
  imageUploadContainer,
  secondaryTitleStep,
  containerButtons,
  primaryTitleItem,
  uploadTextMobile,
  secondaryTitle,
  stepsContainer,
  containerSides,
  leftSideItem,
  stepNumber,
  container,
  itemRadio,
  uploadText,
  stepStyle,
  rightSide,
  uploadBtn,
  leftSide,
  card,
  title,
  item,
  flex,
  box,
  fW,
};