import { ThemeUIStyleObject } from "theme-ui";
const background = {
  position: "absolute",
  height: "100%",
  zIndex: 1,
  width: "100%",
  top: 0,
  left: 0,
  backgroundColor: "#21212180",
} as ThemeUIStyleObject;

const popup = {
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

const iconCopy = {
  marginLeft: "5px",
  cursor: "pointer",
  "&:hover > svg > path": {
    stroke: "#AE4FD0",
  },
} as ThemeUIStyleObject;

const button = {
  borderRadius: "52px",
  background: "green",
  width: "87px",
  maxHeight: "37px",
  fontSize: "14px",
  padding: "5px 16px",
  mb: "12px",
} as ThemeUIStyleObject;

const titlePopup = {
  variant: "text.h2",
  mb: "8px",
} as ThemeUIStyleObject;

const cardContainer = {
  width: "344px",
  height: "114px",
  borderRadius: "12px",
  border: "1px solid var(--grey-2, #EDEDF3)",
} as ThemeUIStyleObject;

export { cardContainer, titlePopup, background, iconCopy, button, popup };
