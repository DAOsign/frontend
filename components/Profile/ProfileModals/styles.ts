import { ThemeUIStyleObject } from "theme-ui";

export const background = {
  position: "absolute",
  height: "100%",
  zIndex: 1,
  width: "100%",
  top: 0,
  left: 0,
  backgroundColor: "#21212180",
} as ThemeUIStyleObject;

export const popup = {
  zIndex: 2,
  borderRadius: "12px",
  border: "1px solid #EDEDF3",
  width: "829px",
  height: "778px",
  backgroundColor: "#FFFFFF",
  top: "10%",
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

export const iconCopy = {
  marginLeft: "5px",
  cursor: "pointer",
  "&:hover > svg > path": {
    stroke: "#AE4FD0",
  },
} as ThemeUIStyleObject;

export const button = {
  borderRadius: "52px",
  background: "green",
  width: "87px",
  maxHeight: "37px",
  fontSize: "14px",
  padding: "5px 16px",
  mb: "12px",
} as ThemeUIStyleObject;

export const titlePopup = {
  variant: "text.h2",
  mb: "8px",
} as ThemeUIStyleObject;

export const cardContainer = {
  width: "344px",
  height: "114px",
  borderRadius: "12px",
  border: "1px solid var(--grey-2, #EDEDF3)",
} as ThemeUIStyleObject;

export const socialTitle = {
  pl: "4px",
  variant: "text.largeTextBold",
  fontStyle: "normal",
} as ThemeUIStyleObject;

export const link = {
  color: "pink",
  display: "flex",
  alignItems: "center",
  pt: "16px",
  cursor: "pointer",
} as ThemeUIStyleObject;
