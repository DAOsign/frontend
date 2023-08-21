import { ThemeUIStyleObject } from "theme-ui";
const profileContainer = {
  maxWidth: "1440px",
  margin: "80px auto 0",
  pl: "140px",
  pr: "140px",
  backgroundColor: "#F7F7FB",
  "@media screen and (max-width: 1200px)": {
    margin: "40px auto 0",
    pl: "24px",
    pr: "24px",
  },
  "@media screen and (max-width: 480px)": {
    margin: "16px auto 0",
    pl: "16px",
    pr: "16px",
  },
};
const iconCopy = {
  marginLeft: "5px",
  cursor: "pointer",
  "&:hover > svg > path": {
    stroke: "#AE4FD0",
  },
} as ThemeUIStyleObject;

const verificationContainer = {
  pt: "60px",
  "@media screen and (max-width: 719px)": {
    pt: "0",
  },
} as ThemeUIStyleObject;

const agreementSection = {
  "@media screen and (max-width: 719px)": {
    pt: "34px !important",
  },
} as ThemeUIStyleObject;

const infoContainer = {
  width: "80%",
  justifyContent: "space-between",
  ml: "40px",
  "@media screen and (max-width: 1000px)": {
    width: "70%",
    flexDirection: "column",
    marginLeft: "40px",
  },
  "@media screen and (max-width: 719px)": {
    width: "100%",
    marginLeft: "0",
    alignItems: "center",
    pt: "16px",
  },
} as ThemeUIStyleObject;

const profile = {
  flexDirection: "column",
  alignItems: "baseline",
  paddingTop: "40px",
  "@media screen and (max-width: 1000px)": {
    paddingTop: "0",
  },
  "@media screen and (max-width: 720px)": {
    paddingBottom: "40px",
  },
  "@media screen and (max-width: 719px)": {
    alignItems: "center",
  },
  "@media screen and (max-width: 480px)": {
    alignItems: "center",
    pt: "16px",
  },
} as ThemeUIStyleObject;

const nameTitle = {
  variant: "text.h2",
  display: "block",
  textAlign: "center",
  "@media screen and (max-width: 1200px)": {
    textAlign: "left",
  },
  "@media screen and (max-width: 720px)": {
    fontSize: "20px",
    display: "block",
  },
} as ThemeUIStyleObject;

const userFoto = {
  position: "relative",
  width: "180px",
  height: "180px",
  borderRadius: "50%",
  maxWidth: "25%",
  "@media screen and (max-width: 719px)": {
    mr: "0",
    maxWidth: "100%",
  },
  "@media screen and (max-width: 375px)": {
    width: "120px",
    height: "120px",
  },
} as ThemeUIStyleObject;

const userContainer = {
  justifyContent: "center",
  marginBottom: "24px",
  mt: "4px",
  alignItems: "center",
  "@media screen and (min-width: 1200px)": {
    mb: "24px",
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
      mb: "24px!important",
      m: 0,
      position: "relative",
    },
  },
} as ThemeUIStyleObject;

const title = {
  variant: "text.h2",
  display: "block",
  pb: "16px",
  "@media screen and (max-width: 480px)": {
    variant: "text.h3",
  },
} as ThemeUIStyleObject;

const badges = {
  variant: "text.normalTextBold",
  display: "block",
  pr: "24px",
  cursor: "pointer",
} as ThemeUIStyleObject;

const btn = {
  variant: "text.normalTextBold",
  display: "flex",
  alignItems: "center",
  opacity: "0.5",
  cursor: "pointer",
  backgroundColor: "transparent",
  borderRadius: 0,
  width: "fit-content",
  pl: "0",
  borderBottom: "2px solid #EDEDF3",
  "&:hover": { background: "transparent", boxShadow: "unset" },
  "&:focus": { background: "transparent", boxShadow: "unset" },
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
} as ThemeUIStyleObject;

const container = {
  width: "100%",
  "@media screen and (max-width: 719px)": {
    flexDirection: "column",
    alignItems: "center",
  },
} as ThemeUIStyleObject;

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 100px)",
  gap: "40px",
  pt: "38px",
  "@media screen and (max-width: 719px)": {
    gridTemplateColumns: "repeat(3, 100px)",
    gap: "21px",
  },
} as ThemeUIStyleObject;

export {
  verificationContainer,
  noContentContainer,
  profileContainer,
  agreementSection,
  userContainer,
  infoContainer,
  container,
  nameTitle,
  noContent,
  userFoto,
  iconCopy,
  profile,
  badges,
  title,
  grid,
  btn,
};
