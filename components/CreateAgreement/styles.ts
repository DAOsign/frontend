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
    marginTop: "236px",
  },
} as ThemeUIStyleObject;

export const itemsContentMethod = {
  maxWidth: "150px",
  m: "0 auto",
} as ThemeUIStyleObject;

const primaryTitleItem = {
  variant: "text.largeTextBold",
  "@media screen and (max-width: 768px)": {
    variant: "text.smallTextBold",
  },
} as ThemeUIStyleObject;

export const configurationsTitle = {
  ...primaryTitleItem,
  "@media screen and (max-width: 480px)": {
    position: "relative",
    left: "-10px",
  },
} as ThemeUIStyleObject;

const imageUploadContainer = {
  textAlign: "center",
  border: "1px dashed #D8D8E2",
  borderRadius: "12px",
  position: "relative",
  width: "600px",
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

export const nameFile = {
  fontFamily: "InterMedium",
  fontWeight: "500",
  lineHeight: "160%",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
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
  padding: "10px 16px",
  opacity: 1,
  "@media screen and (max-width: 768px)": {
    display: "none",
  },
} as ThemeUIStyleObject;

const uploadTextMobile = {
  display: "none",
  "@media screen and (max-width: 768px)": {
    display: "inline-block",
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
  paddingX: "78px",
  paddingBottom: "60px",
  paddingTop: "60px",
  maxHeight: "fit-content",
  "&.transition": {
    maxHeight: "795px",
  },
  "@media screen and (max-width: 1200px)": {
    width: "100%",
    maxWidth: "672px",
    paddingX: "36px",
    borderBottom: "none",
    minHeight: "300px",
    borderRadius: "12px 12px 0 0",
    pb: "40px",
    m: " 0 auto !important",
  },
  "@media screen and (max-width: 719px)": {
    width: "90%",
  },
  "@media screen and (max-width: 480px)": {
    maxWidth: "343px",
    paddingX: "16px",
    minHeight: "300px",
    paddingBottom: "40px",
    textAlign: "left",
  },
} as ThemeUIStyleObject;

const title = {
  variant: "text.h2",
  mb: "40px",
  display: "inline-block",
  "@media screen and (max-width: 768px)": {
    variant: "text.h4",
  },
  "@media screen and (max-width: 479px)": {
    variant: "text.h4",
    mb: "28px",
  },
} as ThemeUIStyleObject;

const rightSide = {
  maxWidth: "364px",
  "@media screen and (max-width: 1200px)": {
    width: "100%",
    mx: "auto",
    maxWidth: "672px",
    borderTop: "none",
    borderRadius: "0 0 12px 12px",
    height: "initial",
    minHeight: "unset",
    pb: "72px",
    pt: 0,
  },
  "@media screen and (max-width: 719px)": {
    width: "90%",
  },
} as ThemeUIStyleObject;

export const navContainer = {
  background: "#FFFFFF",
  border: "1px solid #EDEDF3",
  minHeight: "550px",
  borderRadius: "12px",
  paddingX: "52px",
  maxHeight: "636px",
  ml: "20px",
  mr: 0,
  paddingBottom: "32px",
  paddingTop: "52px",
  "@media screen and (max-width: 1200px)": {
    ml: 0,
    border: "1px solid #EDEDF3",
    borderRadius: "0 0 12px 12px",
    borderTop: "none",
    height: "fit-content",
    minHeight: "unset",
    px: "36px",
    paddingTop: "0",
    pb: "72px",
  },
  "@media screen and (max-width: 480px)": {
    px: "16px",
    pb: "40px",
  },
} as ThemeUIStyleObject;

export const importOptions = {
  background: "#FFFFFF",
  border: "1px solid #EDEDF3",
  ml: "20px",
  borderRadius: "12px",
  p: "52px",
  mt: "28px",
  textAlign: "start",
  "& > button": {
    border: "2px solid #CA5CF250",
    backgroundColor: "inherit",
    variant: "secondary",
    color: "#CA5CF2",
    width: "100%",
  },
  "& > button:hover": {
    background: "transparent",
    border: "2px solid #AE4FD0",
    variant: "secondary",
    color: "#CA5CF2",
    width: "100%",
  },
  "@media screen and (max-width: 1200px)": {
    m: "28px auto 0",
  },
} as ThemeUIStyleObject;

export const importOptionsTitle = {
  fontFamily: "InterBold",
  fontWight: 700,
  fontSize: "20px",
  lineHeight: "120%",
  color: "#212121",
} as ThemeUIStyleObject;

export const textInput = {
  border: "none",
  background: "#F7F7FB",
  mb: "60px",
  maxWidth: "260px",
  minWidth: "260px",
  position: "relative",
  "@media screen and (max-width: 1200px)": {
    maxWidth: "100%",
  },
} as ThemeUIStyleObject;

const container = {
  border: "2px solid #F7F7FB",
  borderRadius: "8px",
  height: "fit-content",
  px: "32px",
  py: "24px",
  position: "relative",
  "@media screen and (max-width: 768px)": {
    maxWidth: "343px",
    p: "16px",
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
  height: "248px",
  transition: ".3s all",
  "@media screen and (max-width: 720px)": {
    px: "12px",
  },
  "&.active": {
    borderColor: "pink",
  },
} as ThemeUIStyleObject;

export const conteinerItems = {
  height: "242px",
  position: "relative",
  mt: "8px",
  "@media screen and (max-width: 719px)": {
    height: "360px",
  },
} as ThemeUIStyleObject;

const rightCard = {
  ...card,
  cursor: "pointer",
  right: 0,
  width: "186px",
  height: "248px",
  maxWidth: "210px",
  transitionProperty: "all",
  transitionDuration: "300ms",
  "& > div > div > .rightTitle": { ...primaryTitleItem, variant: "text.largeTextBold", mt: "20px" },
  "@media screen and (min-width: 719px)": {
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  "@media screen and (max-width: 719px)": {
    width: "100%",
    height: "122px",
    maxWidth: "unset",
    minHeight: "unset",
    display: "flex",
    p: "16px",
    bottom: 0,
    "&:hover": {
      transform: "scale(1.02)",
    },
    "& > div > div > .rightTitle": {
      mt: "0 !important",
      mb: "2px !important",
      fontSize: "20px !important",
    },
  },
} as ThemeUIStyleObject;

export const label = { variant: "forms.label", margin: "24px auto 3px 2px" } as ThemeUIStyleObject;

export const iconMethod = {
  width: "50px",
  height: "50px",
  margin: "0 auto",
  "@media screen and (max-width: 719px)": {
    mr: "12px",
    ml: "0",
  },
} as ThemeUIStyleObject;

export const iconNavMenu = {
  width: "24px",
  height: "24px",
  m: "0 auto",
  cursor: "pointer",
} as ThemeUIStyleObject;

export const iconUpload = {
  width: "50px",
  height: "50px",
  m: "0 auto 18px",
  "@media screen and (max-width: 768px)": {
    display: "none",
  },
} as ThemeUIStyleObject;

export const text = {
  "@media screen and (max-width: 719px)": {
    maxWidth: "217px",
  },
} as ThemeUIStyleObject;

export const itemsContent = {
  maxWidth: "150px",
  m: "0 auto",
  "@media screen and (max-width: 719px)": {
    display: "flex",
    maxWidth: "unset",
    width: "100%",
    textAlign: "left",
  },
} as ThemeUIStyleObject;

export const secondaryText = {
  variant: "text.smallTextMedium",
  maxWidth: "160px",
  opacity: 1,
  "@media screen and (max-width: 719px)": {
    m: 0,
  },
} as ThemeUIStyleObject;

const centerCard = {
  ...card,
  left: "50%",
  transform: "translate(-50%, 0)",
  width: "186px",
  transitionProperty: "all",
  transitionDuration: "300ms",
  maxWidth: "210px",
  height: "248px",
  "& > div > div > .centerTitle": {
    ...primaryTitleItem,
    mt: "24px",
    mb: "8px",
  },
  "@media screen and (min-width: 720px)": {
    "&:hover": {
      transform: "translate(-50%, 0) scale(1.02)",
    },
  },
  "@media screen and (max-width: 719px)": {
    width: "100%",
    height: "98px",
    maxWidth: "unset",
    minHeight: "unset",
    left: "0",
    top: "47%",
    p: "16px",
    transform: "translate(0, -50%)",
    "&:hover": {
      transform: "translate(0, -50%) scale(1.02)",
    },
    "& > div > div > .centerTitle": {
      ...primaryTitleItem,
      mt: "0 !important",
      mb: "2px !important",
      fontSize: "20px !important",
    },
  },
} as ThemeUIStyleObject;

const leftCard = {
  ...card,
  cursor: "pointer",
  left: 0,
  width: "186px",
  height: "248px",
  maxWidth: "210px",
  transitionProperty: "all",
  transitionDuration: "300ms",
  "& > div > div >  .leftTitle": {
    ...primaryTitleItem,
    mb: "12px",
    mt: "24px",
  },
  "@media screen and (min-width: 720px)": {
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  "@media screen and (max-width: 719px)": {
    width: "100%",
    height: "98px",
    maxWidth: "unset",
    minHeight: "unset",
    p: "16px",
    "&:hover": {
      transform: "scale(1.02)",
    },
    "& > div > div >  .leftTitle": {
      ...primaryTitleItem,
      mb: "2px !important",
      mt: "0 !important",
      fontSize: "20px !important",
    },
  },
} as ThemeUIStyleObject;

export const secondaryTextMethod = {
  variant: "text.overscript",
  mt: "20px",
  maxWidth: "160px",
  "@media screen and (max-width: 719px)": {
    mt: "8px",
    fontSize: "12px",
    fontFamily: "InterRegular",
  },
} as ThemeUIStyleObject;

const flex = {
  display: "flex",
  alignItems: "center",
} as ThemeUIStyleObject;

export const titleMethodCard = {
  variant: "text.largeTextBold",
  mt: "20px",
  "@media screen and (max-width: 719px)": {
    mt: "12px",
  },
} as ThemeUIStyleObject;

const leftSideItem = {
  textAlign: "left",
  maxWidth: "192px",
  ml: "16px",
  "@media screen and (max-width: 1200px)": {
    ml: 0,
    textAlign: "center",
    mt: "12px",
  },
  "@media screen and (max-width: 480px)": {
    mt: "4px",
    maxWidth: "88px",
  },
} as ThemeUIStyleObject;

const item = {
  border: "2px solid #F7F7FB",
  borderRadius: "8px",
  pl: "20px",
  pr: "16px",
  py: "20px",
  m: 0,
  mb: "10px",
  alignItems: "start",
  cursor: "pointer",
  gap: "10px",
  "&.active": {
    borderColor: "pink",
  },
} as ThemeUIStyleObject;

const inputCreactAgreement = {
  backgroundColor: "#F7F7FB",
  background: "#F7F7FB",
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
  "@media screen and (max-width: 719px)": {
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
    top: "174px",
    display: "flex",
    transform: "translate(-50%, 0)",
    left: "50%",
    backgroundColor: "#FFFFFF",
    border: "1px solid #EDEDF3",
    borderRadius: "12px",
    justifyContent: "space-around",
    px: "70px",
  },
  "@media screen and (max-width: 719px)": {
    padding: "0 16px",
    width: "90%",
    top: "185px",
  },
  "@media screen and (min-width: 560px) and (max-width: 768px)": {
    top: "138px",
  },
  "@media screen and (max-width: 480px)": {
    maxWidth: "343px",
    height: "179px",
    top: "200px",
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
  "@media screen and (max-width: 719px)": {
    height: "100%",
    pt: "24px",
  },
} as ThemeUIStyleObject;

const uploadBtn = {
  variant: "buttons.back",
  fontFamily: "InterRegular",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "12px",
  color: " #CA5CF2",
  display: "flex",
  height: "20px",
  pt: 0,
  lineHeight: "160%",
  alignItems: "center",
  width: "fit-content",
  marginLeft: "auto",
  marginRight: 0,
  backgroundColor: "transparent",
  background: "unset",
  justifyContent: "flex-end",
  "&:hover": {
    background: "unset",
    backgroundColor: "transparent",
  },
  "@media screen and (max-width: 480px)": {
    width: "fit-content",
  },
} as ThemeUIStyleObject;

const box = {
  maxWidth: "147px",
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
  "@media screen and (max-width: 480px)": {
    width: "10%",
  },
};

const plus = {
  position: "absolute",
  right: "12px",
  top: "37px",
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
    color: "#AE4FD0",
  },
  "@media screen and (max-width: 768px)": {
    p: 0,
    height: "20px",
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

const labelUpload = {
  variant: "forms.label",
} as ThemeUIStyleObject;

export const uploadHeader = {
  height: "20px",
  alignItems: "center",
  position: "relative",
  mb: "8px",
  "@media screen and (max-width: 720px)": {
    width: "100%",
  },
} as ThemeUIStyleObject;

const containerUpload = {
  flexDirection: "column",
  mt: "24px",
} as ThemeUIStyleObject;

const removeContainer = {
  variant: "text.normalTextBold",
  fontSize: "12px",
  lineHeight: "160%",
  fontWeight: 700,
  color: "#CA5CF2",
  alignItems: "flex-start",
  cursor: "pointer",
  gap: "4px",
  "&:hover": { color: "#AE4FD0", "& > div > svg > path": { stroke: "#AE4FD0" } },
  "@media screen and (max-width: 768px)": {
    border: "2px solid #CA5CF250",
    width: "107px",
    height: "46px",
    justifyContent: "center",
    borderRadius: "80px",
    color: "#CA5CF2 !important",
    fontSize: "16px",
    alignItems: "center",
    "&:hover": {
      border: "2px solid #AE4FD0",
      "& > div > svg > path": { stroke: "#CA5CF2 !important" },
    },
  },
} as ThemeUIStyleObject;

export const backBtn = {
  display: "block",
  fontFamily: "InterBold",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "14px",
  "&:hover": {
    color: "#AE4FD0",
  },
} as ThemeUIStyleObject;

const flexRemove = {
  gap: "8px",
  alignItems: "center",
} as ThemeUIStyleObject;

const containerFlex = {
  justifyContent: "space-between",
  display: "flex",
  height: "26px",
  gap: "20px",
  mt: "8px",
  "@media screen and (max-width: 768px)": {
    flexDirection: "column",
  },
} as ThemeUIStyleObject;

export const titleBottom = {
  fontFamily: "InterBold",
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "120%",
  textAlign: "center",
  display: "inline-block",
  color: "#212121",
  mt: "40px",
} as ThemeUIStyleObject;

export const labelSigners = {
  variant: "forms.label",
  ml: "3px",
  mr: "5px",
  maxWidth: "unset",
  minHeight: "25px",
} as ThemeUIStyleObject;

export const addMeBtn = {
  justifyContent: "flex-end",
  height: "25px",
  width: "initial",
  "&:hover": {
    color: "#AE4FD0",
  },
} as ThemeUIStyleObject;

export const number = {
  variant: "text.normalTextBold",
  lineHeight: "0",
  color: "#fff",
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
  containerFlex,
  removeContainer,
  containerSides,
  containerUpload,
  leftSideItem,
  textLoading,
  stepNumber,
  flexRemove,
  labelUpload,
  container,
  itemRadio,
  uploadText,
  stepStyle,
  centerCard,
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
