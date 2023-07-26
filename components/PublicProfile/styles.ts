import { ThemeUIStyleObject } from "theme-ui";
const profileContainer = {
  maxWidth: "1440px",
  margin: "80px auto 0",
  backgroundColor: "#F7F7FB",
  "@media screen and (max-width: 1440px)": {
    pl: "140px",
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
  pb: "8px",
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
} as ThemeUIStyleObject;

const references = {
  variant: "text.normalTextBold",
  display: "block",
  opacity: "0.5",
};

export {
  profileContainer,
  userContainer,
  references,
  nameTitle,
  userFoto,
  iconCopy,
  badges,
  title,
};
