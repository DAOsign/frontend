import { ThemeUIStyleObject } from "theme-ui";
const leftSideContainer = {
  maxWidth: "384px",
  minHeight: "372px",
  pt: "132px",
  pb: "139px",
  textAlign: "left",
  ml: "auto",
  mr: "0",
  "@media screen and (max-width: 768px)": {
    pb: "40px",
    pt: "0",
    ml: "auto",
    mr: "auto",
    //  ml: "52px",
  },
} as ThemeUIStyleObject;

const rightSideContainer = {
  paddingTop: "80px",
  width: "495px",
  height: "442px",
  "@media screen and (max-width: 1024px)": {
    mt: "100px",
    mr: "auto",
    width: "356px",
    height: "253px",
  },
  "@media screen and (max-width: 768px)": {
    pt: "0",
    mt: "40px",
    width: "332px",
    height: "300px",
  },
} as ThemeUIStyleObject;

const pageContainer = {
  "@media screen and (max-width: 768px)": {
    pt: "100px",
  },
  "@media screen and (max-width: 767px)": {
    flexDirection: "column",
  },
} as ThemeUIStyleObject;

const pageText = {
  variant: "text.h1",
  "@media screen and (max-width: 768px)": {
    variant: "text.h2",
  },
} as ThemeUIStyleObject;

const secondText = {
  pb: "60px",
  variant: "text.largeTextMedium",
  "@media screen and (max-width: 768px)": {
    variant: "text.normalTextMedium",
    pb: "40px",
    maxWidth: "246px",
  },
} as ThemeUIStyleObject;

const iconContainer = {
  width: "292px",
  height: "112px",
  mb: "32px",
  "@media screen and (max-width: 768px)": {
    JustifyContent: "center",
    mb: "28px",
  },
} as ThemeUIStyleObject;

const buttonContainer = {
  variant: "buttons.primary",
  maxWidth: "120px",
  ml: "0",
  "@media screen and (max-width: 767px)": {
    mr: "auto",
    ml: "auto",
  },
} as ThemeUIStyleObject;

const leftContainer = {
  flexDirection: "column",
  "@media screen and (max-width: 767px)": {
    JustifyContent: "center",
    alignItems: "center",
  },
} as ThemeUIStyleObject;

const footerNotFoundPage = {
  marginTop: "224px",
  position: "relative",
  "@media screen and (max-width: 1024px)": {
    mt: "300px",
  },
  "@media screen and (max-width: 768px)": {
    mt: "600px",
  },
} as ThemeUIStyleObject;
export {
  leftSideContainer,
  rightSideContainer,
  footerNotFoundPage,
  buttonContainer,
  pageContainer,
  leftContainer,
  iconContainer,
  secondText,
  pageText,
};
