import { ThemeUIStyleObject } from "theme-ui";
const profileContainer = {
  maxWidth: "1440px",
  margin: "80px auto 0",
  backgroundColor: "#F7F7FB",
  "@media screen and (max-width: 1440px)": {
    pl: "140px",
    pr: "140px",
  },
};
const iconCopy = {
  marginLeft: "5px",
  cursor: "pointer",
  "&:hover > svg > path": {
    stroke: "#AE4FD0",
  },
} as ThemeUIStyleObject;

const nameTitle = {
  variant: "text.h2",
  display: "block",
  textAlign: "center",
  "@media screen and (max-width: 1200px)": {
    textAlign: "left",
    // ml: "20px",
  },
} as ThemeUIStyleObject;

const userFoto = {
  position: "relative",
  width: "180px",
  height: "180px",
  borderRadius: "50%",
  mr: "40px",
  //   "@media screen and (max-width: 1200px)": {
  //     m: 0,
  //     left: 0,
  //   },
  "@media screen and (max-width: 719px)": {
    width: "120px",
    height: "120px",
  },
} as ThemeUIStyleObject;

const userContainer = {
  justifyContent: "center",
  marginBottom: "14px",
  mt: "4px",
  alignItems: "center",
  "@media screen and (min-width: 1200px)": {
    mb: "40px",
    "& > div > div > .arrowTooltip": {
      marginLeft: "46.5%",
    },
  },
  "@media screen and (min-width: 719px) and (max-width: 1300px)": {
    "& > div > div > .arrowTooltip": {
      marginLeft: "46%",
    },
  },
  "@media screen and (max-width: 1200px)": {
    justifyContent: "flex-start",
    mt: 0,
    position: "relative",
    "@media screen and (max-width: 719px)": {
      justifyContent: "flex-start",
      m: 0,
      position: "relative",
    },
  },
} as ThemeUIStyleObject;

const title = {
  variant: "text.h2",
  display: "block",
  pb: "16px",
} as ThemeUIStyleObject;

const badges = {
  variant: "text.normalTextBold",
  display: "block",
  pr: "24px",
  cursor: "pointer",
} as ThemeUIStyleObject;

const references = {
  variant: "text.normalTextBold",
  display: "block",
  opacity: "0.5",
  cursor: "pointer",
} as ThemeUIStyleObject;

const noContentContainer = {
  textAlign: "center",
  mt: "80px",
  mb: "385px",
  minHeight: "184px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "@media screen and (max-width: 1199px)": {
    mt: "100px",
    mb: "187px",
  },
  "@media screen and (max-width: 719px)": {
    mt: "88px",
    mb: "133px",
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
  // "@media screen and (max-width: 480px)": {

  // },
} as ThemeUIStyleObject;

export {
  noContentContainer,
  profileContainer,
  userContainer,
  references,
  nameTitle,
  noContent,
  userFoto,
  iconCopy,
  badges,
  title,
};
