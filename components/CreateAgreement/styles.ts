import { ThemeUIStyleObject } from "theme-ui";
const containerSides = {
  maxWidth: "1200px",
  justifyContent: "center",
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
  height: "280px",
  mb: "2px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media screen and (max-width: 768px)": {
    width: "124px",
    height: "46px",
    border: "2px solid #EDEDF3",
    borderRadius: "80px",
    mt: "10px",
  },
  "&.uploaded": {
    borderStyle: "solid",
  },
  "[id='proxy-renderer']": {
    overflow: "hidden",
  },
  "[id='txt-renderer']": {
    p: "10px",
  },
  "[id='pdf-controls']": {
    display: "none",
  },
  "[id='pdf-renderer']": {
    overflow: "hidden",
    background: "silver",
  },
  "[id='pdf-page-wrapper']": {
    margin: "0",
  },
  ".react-pdf__Document": {
    m: "0 auto",
  },
} as ThemeUIStyleObject;

export const previewContainer = {
  height: "100%",
  width: "100%",
  ".preview": {
    overflow: "hidden",
    borderRadius: "12px",
    height: "100%",
  },
} as ThemeUIStyleObject;

const uploadText = {
  variant: "text.smallTextMedium",
  display: "block",
  opacity: 1,
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
  "&:nth-of-type(3)": {
    opacity: "0.5",
    pointerEvents: "none",
  },
  "@media screen and (max-width: 768px)": {
    "&:nth-of-type(3)": {
      display: "none",
    },
  },
} as ThemeUIStyleObject;

const leftSide = {
  maxWidth: "756px",
  minHeight: "550px",
  transition: ".3s all",
  background: "#FFFFFF",
  ml: 0,
  mr: "20px",
  border: "1px solid #EDEDF3",
  borderRadius: "12px",
  paddingX: "100px",
  paddingBottom: "60px",
  paddingTop: "60px",
  maxHeight: "fit-content",
  "&.transition": {
    maxHeight: "795px",
  },
  "@media screen and (max-width: 1200px)": {
    width: "100%",
    maxWidth: "672px",
    paddingX: "100px",
    borderBottom: "none",
    minHeight: "300px",
    borderRadius: "12px 12px 0 0",
    mx: "auto",
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
  ml: "20px",
  mr: 0,
  maxHeight: "636px",
  paddingBottom: "32px",
  paddingTop: "52px",
  "@media screen and (max-width: 1200px)": {
    width: "100%",
    mx: "auto",
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
  height: "490px",
  px: "32px",
  py: "24px",
  position: "relative",
  "@media screen and (max-width: 768px)": {
    maxWidth: "343px",
    paddingX: "16px",
    pb: "40px",
    pt: 0,
  },
} as ThemeUIStyleObject;

const card = {
  textAlign: "center",
  position: "absolute",
  border: "2px solid #F7F7FB",
  borderRadius: "8px",
  px: "24px",
  pt: "20px",
  pb: "27px",
  maxWidth: "210px",
  m: 0,
  cursor: "pointer",
  minHeight: "230px",
  height: "232px",
  transition: ".3s all",
  "@media screen and (max-width: 768px)": {
    maxWidth: "150px",
    px: "12px",
  },
  "&.active": {
    borderColor: "pink",
  },
} as ThemeUIStyleObject;

const rightCard = {
  ...card,
  cursor: "pointer",
  right: 0,
  width: "210px",
  height: "232px",
  maxWidth: "210px",
  transitionProperty: "all",
  transitionDuration: "300ms",
  "@media screen and (min-width: 768px)": {
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
} as ThemeUIStyleObject;

const leftCard = {
  ...card,
  cursor: "pointer",
  left: 0,
  width: "210px",
  height: "232px",
  maxWidth: "210px",
  transitionProperty: "all",
  transitionDuration: "300ms",
  "@media screen and (min-width: 768px)": {
    "&:hover": {
      transform: "scale(1.02)",
    },
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
  cursor: "pointer",
  transitionProperty: "all",
  transitionDuration: "300ms",
  transition: ".3s all",
  gap: "10px",
  "@media screen and (min-width: 768px)": {
    "&:hover": {
      transform: "scale(1.01)",
    },
  },
  "&.active": {
    borderColor: "pink",
  },
} as ThemeUIStyleObject;

const inputCreactAgreement = {
  backgroundColor: "#F7F7FB",
  borderRadius: "8px",
  width: "100%",
  transition: "border-color 0.3s",
  border: "2px solid transparent",
} as ThemeUIStyleObject;

const inputCreateAgreementError = {
  backgroundColor: "inherit",
  borderColor: theme => `${theme?.colors?.red || "red"} !important`,
  outline: "none",
} as ThemeUIStyleObject;

const inputCreateAgreementWithRightButton = {
  paddingRight: "41px",
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
  "&:hover": {
    background: "unset",
    backgroundColor: "transparent",
  },
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
};

const plus = {
  position: "absolute",
  right: "12px",
  top: "35px",
  cursor: "pointer",
  width: "24px",
  m: "0 auto",
  zIndex: 1,
} as ThemeUIStyleObject;

const btnBack = {
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
  },
} as ThemeUIStyleObject;

const textLoading = {
  textAlign: "center",
  fontFamily: "InterMedium",
  fontStyle: "normal",
  display: "block",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "160%",
  width: "200px",
  m: "0 auto",
  color: "#212121",
} as ThemeUIStyleObject;

const delBtn = {
  fontFamily: "InterBold",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "160%",
  textAlign: "center",
  color: "#CA5CF2",
  opacity: "0.5",
  backgroundColor: "inherit",
  mt: "20px",
  "&:hover": {
    backgroundColor: "inherit",
    opacity: 1,
    background: "unset",
  },
} as ThemeUIStyleObject;

export {
  inputCreactAgreement,
  inputCreateAgreementWithRightButton,
  inputCreateAgreementError,
  imageUploadContainer,
  secondaryTitleStep,
  containerButtons,
  primaryTitleItem,
  uploadTextMobile,
  secondaryTitle,
  stepsContainer,
  containerSides,
  leftSideItem,
  textLoading,
  stepNumber,
  container,
  itemRadio,
  uploadText,
  stepStyle,
  rightCard,
  rightSide,
  uploadBtn,
  leftCard,
  leftSide,
  btnBack,
  delBtn,
  card,
  title,
  item,
  plus,
  flex,
  box,
  fW,
};
