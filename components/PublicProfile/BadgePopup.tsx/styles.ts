import { ThemeUIStyleObject } from "theme-ui";
const background = {
  position: "absolute",
  height: "100%",
  zIndex: 99,
  width: "100%",
  top: 0,
  left: 0,
  backgroundColor: "#21212180",
} as ThemeUIStyleObject;

const popup = {
  zIndex: 2,
  borderRadius: "12px",
  border: "1px solid #EDEDF3",
  maxWidth: "829px",
  height: "fit-content",
  backgroundColor: "#FFFFFF",
  top: "5%",
  left: "50%",
  transform: "translate(-50%,0)",
  position: "absolute",
  "@media screen and (max-width: 780px )": {
    "&": {
      width: "343px",
    },
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
  maxWidth: "344px",
  height: "114px",
  borderRadius: "12px",
  border: "1px solid var(--grey-2, #EDEDF3)",
} as ThemeUIStyleObject;

const socialTitle = {
  pl: "4px",
  variant: "text.largeTextBold",
  fontStyle: "normal",
} as ThemeUIStyleObject;

const link = {
  color: "pink",
  display: "flex",
  alignItems: "center",
  pt: "16px",
  cursor: "pointer",
} as ThemeUIStyleObject;

const cardBlock = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 344px)",
  gap: "20px",
  padding: "60px",
  "@media screen and (max-width: 768px )": {
    padding: "20px",
    gap: "10px",
    gridTemplateColumns: "repeat(1, 1fr)",
  },
} as ThemeUIStyleObject;

export { cardContainer, socialTitle, titlePopup, cardBlock, background, button, popup, link };
