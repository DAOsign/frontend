import { ThemeUIStyleObject } from "theme-ui";

export const flexSelect = {
  justifyContent: "space-between",
  cursor: "pointer",
  alignItems: "center",
  height: "40px",
  px: "16px",
  position: "relative",
  zIndex: 2,
  fontFamily: "InterMedium",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: " 160%",
  transform: "translate3d(1px, 1px, 0)",
  color: "#212121",
} as ThemeUIStyleObject;

export const inputSearch = {
  width: "93%",
  height: "40px",
  left: 0,
  pl: "16px",
  borderRadius: " 8px",
  position: "absolute",
  fontFamily: "InterMedium",
  fontWeight: 500,
  fontSize: "16px",
  opacity: 1,
  lineHeight: "160%",
  background: "#F7F7FB",
  color: "#212121",
  top: 0,
  zIndex: 1,
  ml: "auto",
  border: "none",
  "&:hover": {
    border: "none",
  },
  "&:placeholder": {
    fontFamily: "InterMedium",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "160%",
    color: "#212121",
    opacity: "0.5",
  },
  "@media screen and (max-width: 480px)": {
    width: "85%",
  },
} as ThemeUIStyleObject;

export const titleSelect = {
  fontFamily: "InterMedium",
  width: "95%",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "160%",
  color: "#212121",
  textAlign: "left",
} as ThemeUIStyleObject;

export const icon = {
  rotate: "270deg",
  width: "20px",
  height: "6px",
  ml: "auto",
} as ThemeUIStyleObject;

export const itemOption = {
  overflow: "auto",
  pt: "9px",
  "&::-webkit-scrollbar": {
    width: "0 !important",
  },
} as ThemeUIStyleObject;

export const containerSelect = {
  backgroundColor: "#F7F7FB",
  height: "fit-content",
  zIndex: 1,
  borderRadius: "8px",
  minHeight: "40px",
  mb: "21px",
  position: "relative",
  "& > .settingImportSnapshotProposal": {
    position: "absolute",
    backgroundColor: "#F7F7FB",
    borderRadius: "8px",
    zIndex: 3,
    top: "0",
    width: "100%",
    "& > .settingImportSnapshotProposal > .itemSelect": {
      borderRadius: 0,
    },
  },
} as ThemeUIStyleObject;
