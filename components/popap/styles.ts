import { ThemeUIStyleObject } from "theme-ui";

const backgroundPopap = {
  position: "absolute",
  height: "100%",
  zIndex: 1,
  width: "100%",
  top: 0,
  backgroundColor: "#21212180",
} as ThemeUIStyleObject;

const popap = {
  zIndex: 2,
  borderRadius: "12px",
  border: "1px solid #EDEDF3",
  width: "539px",
  height: "382px",
  backgroundColor: "#FFFFFF",
  top: "25%",
  left: "50%",
  transform: "translate(-50%,0)",
  position: "absolute",
  "@media screen and (max-width: 780px )": {
    "&": {
      width: "343px",
      height: "464px",
    },
  },
} as ThemeUIStyleObject;

const popapTitle = {
  fontFamily: "InterBold",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "32px",
  lineHeight: "120%",
  textAlign: "center",
  color: "#212121",
  mb: "16px",
  "@media screen and (max-width: 480px )": {
    "&": {
      maxWidth: "223px",
    },
  },
} as ThemeUIStyleObject;

const popapText = {
  fontFamily: "InterMedium",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "160%",
  textAlign: "center",
  color: "#212121",
  maxWidth: "420px",
  "@media screen and (max-width: 480px )": {
    "&": {
      maxWidth: "223px",
    },
  },
} as ThemeUIStyleObject;

export { backgroundPopap, popapTitle, popapText, popap };
