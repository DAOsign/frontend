import type { Theme } from "theme-ui";

const btnBase = {
  cursor: "pointer",
  transition: ".3s all",
};

const linkBase = {
  color: "#CA5CF2",
  cursor: "pointer",
};

export const theme: Theme = {
  forms: {
    label: {
      fontFamily: "InterMedium",
      fontStyle: "normal",
      fontWeight: 400,
      maxWidth: "150px",
      fontSize: "12px",
      lineHeight: "160%",
      color: " #212121",
      opacity: 0.5,
      alignItems: "center",
      height: "20px",
      display: "block",
    },
    input: {
      height: "50px",
      width: "345px",
      background: "#ffffff90",
      borderRadius: "50px",
      backdropFilter: "blur(6px)",
      fontFamily: "InterMedium",
      border: "1px solid #EDEDF3",
      fontStyle: "normal",
      color: "#212121",
      display: "block",
      paddingX: "20px",
      "&:hover": {
        border: "1px solid #00000030",
      },
      "&:focus": {
        outline: "none",
      },
    },
    inputError: {
      fontFamily: "InterMedium",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "160%",
      color: "red",
      display: "block",
      left: "0",
      bottom: "0",
    },
    checkbox: {
      width: "18px",
      height: "18px",
      border: "2px solid dark",
    },
  },
  buttons: {
    grey: {
      width: "310px",
      height: "50px",
      background: "#FFFFFF",
      border: "2px solid #EDEDF3",
      borderRadius: "80px",
      fontFamily: "InterBold",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "160%",
      textAlign: "center",
      color: "#212121",
      "&:hover": {
        border: "2px solid #ADADB5",
        background: "#FFFFFF",
      },
      "&:focus": {
        border: "2px solid #ADADB5",
        background: "#FFFFFF",
      },
    },
    primary: {
      ...btnBase,
      width: "225px",
      height: "50px",
      borderRadius: "40px",
      backgroundColor: "#CA5CF2",
      color: "#fff",
      fontSize: "16px",
      lineHeight: "25.6px",
      fontFamily: "InterBold",
      fontWeight: 700,
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      "&:hover": {
        background: "linear-gradient(0deg, rgba(0, 0, 0, 0.14), rgba(0, 0, 0, 0.14)), #CA5CF2;",
      },
      "&:focus": {
        background: "linear-gradient(0deg, rgba(0, 0, 0, 0.14), rgba(0, 0, 0, 0.14)), #CA5CF2;",
      },
      "&:disbled": {
        opacity: 0.2,
      },
      "@media screen and (max-width: 375px)": {
        width: "100%",
      },
    },
    secondary: {
      ...btnBase,
      height: "50px",
      width: "165px",
      borderRadius: "80px",
      border: "2px solid #CA5CF250",
      backgroundColor: "inherit",
      color: "#CA5CF2",
      fontSize: "16px",
      lineHeight: "160%",
      fontFamily: "InterBold",
      fontWeight: 700,
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "center",
      "&:hover": {
        border: "2px solid #AE4FD0",
      },
      "&:focus": {
        border: "2px solid  #AE4FD0",
      },
      "@media screen and (max-width: 375px)": {
        width: "100%",
      },
    },
    back: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      height: "40px",
      width: "165px",
      borderRadius: "80px",
      border: "unset",
      backgroundColor: "inherit",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "160%",
      color: "#CA5CF2",
      fontFamily: "InterMedium",
      marginLeft: "auto",
      marginRight: 0,
      cursor: "pointer",
      textAlign: "center",
      px: 0,
      pb: 0,
      "&:hover": {
        backgroundColor:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.14), rgba(0, 0, 0, 0.14)), #CA5CF2;",
      },
    },
    link: {
      ...btnBase,
      bg: "transparent",
      color: "primary",
      fontWeight: 400,
      fontSize: "12px",
      fontFamily: "InterMedium",
      p: 0,
    },
    itemsBtn: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      fontFamily: "InterBold",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "14px",
      lineHeight: "160%",
      color: "#212121",
      background: "#F7F7FB",
      borderRadius: "90px",
      height: "32px",
      pl: "14px",
      m: "0 5px 0 0",
      width: "initial",
    },
    userBtn: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "InterBold",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "25.6px",
      color: "#212121",
      background: "#FFFFFF",
      borderRadius: "80px",
      height: "26px",
      width: "initial",
      border: "2px solid #EDEDF3",
      "&:hover": {
        background: "#FFFFFF",
        border: "2px solid #ADADB5",
      },
      "&:focus": {
        border: "2px solid  #ADADB5",
        background: "#FFFFFF",
      },
    },
  },
  fonts: {
    fontMedium: "InterMedium",
    fontBold: "InterBold",
  },
  colors: {
    black: "#212121",
    dark: "#212121",
    pink: "#CA5CF2",
    primary: "#CA5CF2",
    green: "#44F268",
    red: "#FF5269",
    blue: "#5051F2",
    greyPrimary: "#F7F7FB",
    grey: "#EDEDF3",
    greySecondary: "#EDEDF3",
    white: "#fff",
  },
  fontSizes: {
    h1: "48px",
    h2: "32px",
    h3: "28px",
    h4: "24px",
    h5: "20px",
    h6: "16px",
    small: "14px",
    extraSmall: "12px",
  },
  lineHeights: {
    lineHeightPrimary: "120%",
    lineHeightSecondary: "160%",
  },
  fontWeights: {
    bold: 700,
    medium: 500,
  },
  borders: {
    grey: "1px solid #EDEDF3",
    borderPink: "2px solid #CA5CF2",
  },
  radii: {
    primary: "40px",
    bigRadius: "80px",
    smallRadius: "8px",
  },
  shadows: {
    primary: "inset 0px -1px 0px #EFEDF0",
  },
  text: {
    h1: {
      fontFamily: "InterBold",
      fontWeight: 700,
      lineHeight: "120%",
      fontSize: "48px",
    },
    h2: {
      fontFamily: "InterBold",
      fontWeight: 700,
      lineHeight: "120%",
      fontSize: "32px",
    },
    h3: {
      fontFamily: "InterBold",
      fontWeight: 700,
      lineHeight: "120%",
      fontSize: "28px",
    },
    h4: {
      fontFamily: "InterBold",
      fontWeight: 700,
      lineHeight: "28.8px",
      fontSize: "24px",
    },
    normalTextBold: {
      fontFamily: "InterBold",
      fontWeight: 700,
      lineHeight: "25.6px",
      fontSize: "16px",
      color: "#212121",
    },
    smallTextMedium: {
      fontFamily: "InterMedium",
      fontWeight: 500,
      lineHeight: "22.4px",
      fontSize: "14px",
      color: "#212121",
      opacity: 0.5,
    },
    smallTextMediumUser: {
      fontFamily: "InterMedium",
      fontWeight: 500,
      lineHeight: "22.4px",
      fontSize: "14px",
      color: "#212121",
      opacity: 1,
    },
    smallTextBold: {
      fontFamily: "InterBold",
      fontWeight: 700,
      lineHeight: "22.4px",
      fontSize: "14px",
      display: "block",
      color: "#212121",
    },
    largeTextBold: {
      fontFamily: "InterBold",
      fontWeight: 700,
      lineHeight: "24px",
      display: "block",
      fontSize: "20px",
      color: "#212121",
    },
    overscript: {
      fontFamily: "InterRegular",
      fontWeight: 400,
      lineHeight: "19.2px",
      fontSize: "12px",
      color: "#212121",
      display: "block",
    },
    normalTextMedium: {
      fontFamily: "InterMedium",
      fontWeight: 500,
      lineHeight: "25.6px",
      fontSize: "16px",
      color: "#212121",
    },
    secondary: {
      fontFamily: "InterMedium",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "15px",
      color: "#212121",
      opacity: 0.5,
    },
    link: {
      ...linkBase,
    },
    linkUnderline: {
      ...linkBase,
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
};
