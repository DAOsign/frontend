import { ThemeUIStyleObject } from "theme-ui";

const container = {
  background: "white",
  position: "relative",
  border: "3px solid #EDEDF3",
  flexDirection: "column",
  borderRadius: "12px",
  width: "275px",
  minWidth: "275px",
  height: "430px",
  marginRight: "20px",
  "@media screen and (max-width: 1200px)": {
    flexDirection: "row",
    width: "100%",
    height: "172px",
    py: "24px",
    mb: "32px",
    mx: "auto",
    pl: "24px",
    pr: "60px",
  },
  "@media screen and (max-width: 768px)": {
    width: "100%",
    minWidth: "343px",
    flexDirection: "column",
    minHeight: "292px",
    px: "16px",
  },
} as ThemeUIStyleObject;
const iconPlus = {
  width: "24px",
  height: "24px",
  ml: "20px",
  "@media screen and (max-width: 768px)": {
    m: "0 auto",
  },
} as ThemeUIStyleObject;

const iconExit = {
  position: "absolute",
  paddingTop: "19px",
  right: "19px",
  width: "18px",
  height: "18px",
  opasity: "0.5",
  "@media screen and (max-width: 1200px)": {
    pt: "0",
  },
} as ThemeUIStyleObject;

const userFoto = {
  width: "124px",
  height: "124px",
  left: "76px",
  top: "28px",
  mt: "28px",
  mb: "12px",
  backgroundColor: "grey",
  border: "grey",
  borderRadius: "50%",
  "@media screen and (max-width: 1200px)": {
    m: 0,
  },
  "@media screen and (max-width: 768px)": {
    width: "80px",
    height: "80px",
  },
} as ThemeUIStyleObject;

const text = {
  position: "absolute",
  textAlign: "center",
  maxWidth: "64px",
  left: "50%",
  top: "34px",
  transform: "translate(-43%,0)",
} as ThemeUIStyleObject;

const normalTextBoldGreen = {
  fontFamily: "InterBold",
  fontWeight: 700,
  lineHeight: "25.6px",
  fontSize: "16px",
  color: "#44F268",
} as ThemeUIStyleObject;

const title = {
  variant: "text.h3",
  fontSize: "32px",
} as ThemeUIStyleObject;

const containerSides = {
  maxWidth: "1200px",
  justifyContent: "space-between",
  margin: "0 auto 0",
  paddingTop: "20px",
  "@media screen and (max-width: 1200px)": {
    flexDirection: "column",
    px: "24px",
  },
  "@media screen and (max-width: 768px)": {
    flexDirection: "column",
    px: "16px",
  },
} as ThemeUIStyleObject;

const noContent = {
  width: "146px",
  height: "146px",
  backgroundColor: "#fff",
  borderRadius: "50%",
  margin: "0 auto",
  justifyContent: "center",
  alignItems: "center",
  mt: "90px",
  mb: "12px",
} as ThemeUIStyleObject;

const percentContainer = {
  position: "relative",
  textAlign: "center",
  width: "130px",
  height: "130px",
  "@media screen and (max-width: 1200px)": {
    m: "0  0 0 auto",
    bottom: "5px",
  },
  "@media screen and (max-width: 768px)": {
    m: "0  auto 0 ",
    bottom: "5px",
    width: "100px",
    height: "100px",
  },
} as ThemeUIStyleObject;

const improveBtn = {
  variant: "buttons.userBtn",
  opacity: 1,
  height: "46px",
  px: "45px",
  "@media screen and (max-width: 768px)": {
    maxWidth: "unset",
    width: "90%",
  },
} as ThemeUIStyleObject;

const improveBtnContainer = {
  "@media screen and (max-width: 1200px)": {
    position: "absolute",
    bottom: "24px",
    left: "168px",
    width: "unset",
  },
  "@media screen and (max-width: 768px)": {
    position: "absolute",
    bottom: "24px",
    left: "50%",
    transform: "translate(-50%, 0)",
    width: "100%",
  },
} as ThemeUIStyleObject;

const infoContainer = {
  flexDirection: "column",
  minWidth: "195px",
  "@media screen and (max-width: 1200px)": {
    mt: "12px",
  },
} as ThemeUIStyleObject;

const fotoContainer = {
  flexDirection: "column",
  "@media screen and (max-width: 1200px)": {
    flexDirection: "row",
  },
} as ThemeUIStyleObject;

const inputMyAgreement = {
  backgroundColor: "#FFFFFF",
  borderRadius: "62px",
  width: "345px",
  pl: "48px",
  opacity: 1,
  variant: "text.normalTextMedium",
  "@media screen and (max-width: 768px)": {
    maxWidth: "unset",
    width: "100%",
  },
} as ThemeUIStyleObject;

const headerContainer = {
  flexDirection: "row",
  position: "relative",
  alignItems: "baseline",
  mt: "38px",
  "@media screen and (max-width: 768px)": {
    flexDirection: "column",
    position: "static",
  },
} as ThemeUIStyleObject;

const agreementConteiner = {
  mt: "23px",
  flexDirection: "column",
  background: "white",
  border: "1px solid #EDEDF3",
  borderRadius: "12px",
  p: "20px 24px 20px 24px",
} as ThemeUIStyleObject;

const iconMenuAgreement = {
  ml: "16px",
  width: "32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "32px",
  borderRadius: "50%",
  backgroundColor: "#EDEDF3",
  textAlign: "center",
  padding: "0",
  cursor: "poiner",
} as ThemeUIStyleObject;

const agrBtnBase = {
  py: "0",
  px: "16",
  height: "32px",
  borderRadius: "52px",
  fontFamily: "InterBold",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "14px",
  lineHeight: "160%",
  textAlign: "center",
  width: "initial",
  "@media screen and (max-width: 768px)": {
    mx: 0,
    mb: "16px",
  },
} as ThemeUIStyleObject;

const greyAgrBtn = {
  ...agrBtnBase,
  background: "#EDEDF3",
  color: "#212121",
} as ThemeUIStyleObject;

const blueAgrBtn = {
  ...agrBtnBase,
  background: "#5051F2",
  color: "#ffffff",
} as ThemeUIStyleObject;

const textContainer = {
  justifyContent: "center",
  border: "1px solid #EDEDF3",
  borderRadius: "62px",
  height: "51px",
  ml: "auto",
  cursor: "pointer",
  alignItems: "center",
  position: "relative",
  maxWidth: "160px",
  "@media screen and (max-width: 768px)": {
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #EDEDF3",
    borderRadius: "62px",
    height: "50px",
    mt: "10px",
    width: "100%",
    maxWidth: "unset",
    position: "static",
  },
} as ThemeUIStyleObject;

const btnText = {
  display: "inline-block",
  ml: "10px",
  "@media screen and (max-width: 768px)": {
    display: "none",
  },
} as ThemeUIStyleObject;

const btn = {
  variant: "buttons.primary",
  alignItems: "center",
  display: "flex",
  ml: "auto",
  mr: 0,
  p: 0,
  "@media screen and (max-width: 768px)": {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  },
} as ThemeUIStyleObject;

const headerItem = {
  justifyContent: "space-between",
  "@media screen and (max-width: 768px)": {
    flexDirection: "column-reverse",
  },
} as ThemeUIStyleObject;

const filterItem = {
  background: "#EDEDF3",
  borderRadius: "90px",
  alignItems: "center",
  pl: "14px",
  height: "32px",
  ml: "8px",
  pr: "10px",
  mt: "16px",
} as ThemeUIStyleObject;

const delBth = {
  width: "13px",
  height: "13px",
  display: "block",
  borderRadius: "50%",
  border: "1px solid black",
  ml: "5px",
  cursor: "pointer",
} as ThemeUIStyleObject;

const titleItem = {
  display: "block",
  variant: "text.smallTextBold",
} as ThemeUIStyleObject;

const searchContainer = {
  position: "relative",
  width: "346px",
  "@media screen and (max-width: 768px)": {
    width: "100%",
  },
} as ThemeUIStyleObject;

const iconSearchContainer = {
  position: "absolute",
  left: "20px",
  width: "20px",
  height: "20px",
  zIndex: 1,
  opacity: 0.5,
  top: "50%",
  transform: "translate(0, -50%)",
} as ThemeUIStyleObject;

export {
  normalTextBoldGreen,
  improveBtnContainer,
  iconSearchContainer,
  agreementConteiner,
  iconMenuAgreement,
  inputMyAgreement,
  percentContainer,
  searchContainer,
  headerContainer,
  containerSides,
  infoContainer,
  fotoContainer,
  textContainer,
  improveBtn,
  greyAgrBtn,
  filterItem,
  blueAgrBtn,
  headerItem,
  titleItem,
  container,
  iconPlus,
  noContent,
  iconExit,
  userFoto,
  btnText,
  delBth,
  title,
  text,
  btn,
};
