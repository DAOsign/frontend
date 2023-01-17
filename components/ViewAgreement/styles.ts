import { ThemeUIStyleObject } from "theme-ui";

const container = {
  maxWidth: "1200px",
  margin: "40px auto 0",
  textAlign: "center",
  rowGap: "20px",
  columnGap: "40px",
  "@media screen and (max-width: 1200px)": {
    flexDirection: "column",
    mt: "270px",
  },
  "@media screen and (max-width: 768px)": {
    flexDirection: "column",
    mt: "220px",
  },
} as ThemeUIStyleObject;

const card = {
  background: "white",
  position: "relative",
  border: "1px solid #EDEDF3",
  flexDirection: "column",
  borderRadius: "12px",
} as ThemeUIStyleObject;

const mainData = {
  minWidth: "756px",
  width: "756px",
  flexDirection: "column",
  textAlign: "left",
} as ThemeUIStyleObject;

const briefInformation = {
  ...card,
  width: "364px",
  padding: "28px 32px",
  height: "fit-content",
} as ThemeUIStyleObject;

const backContainer = {
  fontFamily: "InterMedium",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "160%",

  alignItems: "center",

  cursor: "pointer",
  opacity: "0.5",

  columnGap: "6px",

  transition: "opacity 0.3s",

  "&:hover": {
    opacity: 1,
  },
} as ThemeUIStyleObject;

const backIcon = {
  width: "18px",
} as ThemeUIStyleObject;

const buttonsContainer = {
  flexDirection: "column",
  rowGap: "20px",
  marginTop: "24px",
} as ThemeUIStyleObject;

const btnBase = {
  fontFamily: "InterBold",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "160%",
  transition: "backgroundColor 0.3s, background 0.3s, color 0.3s, opacity: 0.3s, border 0.3s",
  width: "100%",
} as ThemeUIStyleObject;

const btnPrimary = {
  ...btnBase,
  background: "#CA5CF2",
  borderRadius: "40px",
  color: "white",
  padding: "12px 5px",
  "&:hover": {
    opacity: 1,
  },
} as ThemeUIStyleObject;

const btnSecondary = {
  ...btnBase,
  border: "2px solid #CA5CF280",
  borderRadius: "80px",
  backgroundColor: "white",
  color: "#CA5CF2",
  padding: "10px 5px",
  "&:hover": {
    border: "2px solid #CA5CF2",
    background: "white",
    color: "#CA5CF2",
  },
  "&:focus": {
    outline: "none",
    background: "white",
    color: "#CA5CF2",
    border: "2px solid #CA5CF2",
  },
} as ThemeUIStyleObject;

const deleteAgreementBtn = {
  width: "100%",
  textAlign: "center",
  cursor: "pointer",
  fontFamily: "InterBold",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "160%",
  color: "#CA5CF2",
  height: "fit-content",
  borderRadius: 0,
  opacity: 0.5,
  transition: "opacity 0.3s",
  "&:hover": {
    opacity: 1,
  },
} as ThemeUIStyleObject;

const title = {
  fontFamily: "InterBold",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "32px",
  lineHeight: "120%",
  color: "#212121",
  marginTop: "13px",
  lineBreak: "anywhere",
} as ThemeUIStyleObject;

const labelsContainer = {
  justifyContent: "space-between",
  marginTop: "24px",
  "@media screen and (max-width: 768px)": {
    justifyContent: "initial",
    flexDirection: "column",
    rowGap: "32px",
  },
} as ThemeUIStyleObject;

const labelsRow = {
  columnGap: "12px",
  height: "32px",
} as ThemeUIStyleObject;

const baseLabel = {
  height: "100%",
  padding: "5px 14px",
  fontFamily: "InterBold",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "14px",
  borderRadius: "52px",
  color: "#212121",
  backgroundColor: "white",
  alignItems: "center",
  justifyContent: "center",
  columnGap: "5px",
} as ThemeUIStyleObject;

const labelIcon = {
  width: "18px",
} as ThemeUIStyleObject;

const greyLabel = {
  ...baseLabel,
  backgroundColor: "#D8D8E2",
  color: "white",
} as ThemeUIStyleObject;

const greyLabelWithHover = {
  ...greyLabel,
  transition: "all 0.3s",
  cursor: "pointer",
  userSelect: "none",
  "&:hover": {
    color: "white",
    backgroundColor: "#212121",
  },
} as ThemeUIStyleObject;

const blueLabel = {
  ...baseLabel,
  backgroundColor: "#5051F2",
  color: "white",
} as ThemeUIStyleObject;

const yellowLabel = {
  ...baseLabel,
  backgroundColor: "#F5D549",
  color: "white",
} as ThemeUIStyleObject;

const greenLabel = {
  ...baseLabel,
  backgroundColor: "#44F268",
  color: "white",
} as ThemeUIStyleObject;

const needSigningIcon = {
  width: "32px",
  height: "32px",
  backgroundColor: "red",
  borderRadius: "50%",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
} as ThemeUIStyleObject;

const errorContainer = { flexDirection: "column", margin: "30px auto 0" } as ThemeUIStyleObject;

const errorMessage = {
  fontFamily: "InterBold",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "32px",
  lineHeight: "120%",
  color: "#212121",
} as ThemeUIStyleObject;

const errorBackButton = { marginTop: "30px" } as ThemeUIStyleObject;

const briefInformationHeader = {
  justifyContent: "space-between",
  fontFamily: "InterBold",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "120%",
} as ThemeUIStyleObject;

const briefInformationData = {
  width: "100%",
  marginTop: "16px",
  flexDirection: "column",
  rowGap: "4px",
} as ThemeUIStyleObject;

const informationRow = {
  justifyContent: "space-between",
  color: "#212121",
  fontFamily: "InterMedium",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "160%",
  width: "100%",
} as ThemeUIStyleObject;

const informationRowName = {
  opacity: 0.5,
} as ThemeUIStyleObject;

const informationRowValue = {
  paddingLeft: "5px",
  lineBreak: "anywhere",
} as ThemeUIStyleObject;

export {
  container,
  card,
  mainData,
  briefInformation,
  buttonsContainer,
  btnBase,
  btnPrimary,
  btnSecondary,
  deleteAgreementBtn,
  backContainer,
  backIcon,
  title,
  labelsContainer,
  labelsRow,
  baseLabel,
  labelIcon,
  greyLabel,
  greyLabelWithHover,
  blueLabel,
  yellowLabel,
  greenLabel,
  errorContainer,
  errorMessage,
  errorBackButton,
  briefInformationHeader,
  briefInformationData,
  informationRow,
  informationRowName,
  informationRowValue,
  needSigningIcon,
};
