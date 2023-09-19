import { ThemeUIStyleObject } from "theme-ui";

const container = {
  maxWidth: "1200px",
  margin: "40px auto 0",
  textAlign: "center",
  rowGap: "20px",
  columnGap: "40px",
  justifyContent: "center",
  "@media screen and (max-width: 1200px)": {
    flexDirection: "column",
    p: "24px 24px 28px 24px",
    mt: 0,
  },
  "@media screen and (max-width: 719px)": {
    overflow: "hidden",
    p: "24px 16px 28px 16px",
    flexDirection: "column",
  },
} as ThemeUIStyleObject;

const card = {
  background: "white",
  position: "relative",
  border: "1px solid #EDEDF3",
  flexDirection: "column",
  borderRadius: "12px",
} as ThemeUIStyleObject;

const mainData = {
  minWidth: "756px",
  width: "756px",
  flexDirection: "column",
  textAlign: "left",
  marginBottom: "16px",
  "@media screen and (max-width: 1199px)": {
    width: "100%",
    maxWidth: "672px",
    m: "0 auto",
    minWidth: "unset",
  },
  "@media screen and (min-width: 1200px)": {
    mr: "auto",
  },
} as ThemeUIStyleObject;

const briefInformation = {
  ...card,
  width: "364px",
  padding: "28px 32px",
  height: "fit-content",
  "@media screen and (max-width: 1199px)": {
    width: "100%",
    maxWidth: "672px",
    m: "0 auto",
  },
  "@media screen and (min-width: 1300px)": {
    position: "fixed",
    ml: "750px",
  },
} as ThemeUIStyleObject;

const backContainer = {
  fontFamily: "InterMedium",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "160%",

  alignItems: "center",

  cursor: "pointer",
  opacity: "0.5",

  columnGap: "6px",

  transition: "opacity 0.3s",

  "&:hover": {
    opacity: 1,
  },
} as ThemeUIStyleObject;

const backIcon = {
  width: "18px",
} as ThemeUIStyleObject;

const buttonsContainer = {
  flexDirection: "column",
  rowGap: "20px",
  marginTop: "24px",
} as ThemeUIStyleObject;

const btnBase = {
  fontFamily: "InterBold",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "160%",
  transition: "backgroundColor 0.3s, background 0.3s, color 0.3s, opacity 0.3s, border 0.3s",
  width: "100%",
} as ThemeUIStyleObject;

const btnPrimary = {
  ...btnBase,
  background: "#CA5CF2",
  borderRadius: "40px",
  color: "white",
  padding: "12px 5px",
  "&:hover": {
    opacity: 1,
  },
} as ThemeUIStyleObject;

const btnSecondary = {
  ...btnBase,
  border: "2px solid #CA5CF280",
  borderRadius: "80px",
  backgroundColor: "white",
  color: "#CA5CF2",
  padding: "10px 5px",
  "&:hover": {
    border: "2px solid #CA5CF2",
    background: "white",
    color: "#CA5CF2",
  },
  "&:focus": {
    outline: "none",
    background: "white",
    color: "#CA5CF2",
    border: "2px solid #CA5CF2",
  },
} as ThemeUIStyleObject;

const deleteAgreementBtn = {
  width: "100%",
  textAlign: "center",
  cursor: "pointer",
  fontFamily: "InterBold",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "160%",
  color: "#CA5CF2",
  height: "fit-content",
  borderRadius: 0,
  transition: "opacity 0.3s",
  "&:hover": {
    color: "#AE4FD0",
  },
} as ThemeUIStyleObject;

const title = {
  fontFamily: "InterBold",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "32px",
  lineHeight: "120%",
  color: "#212121",
  marginTop: "13px",
  lineBreak: "anywhere",
} as ThemeUIStyleObject;

const labelsContainer = {
  justifyContent: "space-between",
  marginTop: "24px",
  "@media screen and (max-width: 720px)": {
    justifyContent: "initial",
    flexDirection: "column",
    rowGap: "32px",
  },
} as ThemeUIStyleObject;

const labelsRow = {
  columnGap: "12px",
  height: "32px",
} as ThemeUIStyleObject;

const baseLabel = {
  height: "32px",
  padding: "5px 14px",
  lineHeight: "20px",
  fontFamily: "InterBold",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "14px",
  borderRadius: "52px",
  color: "#212121",
  backgroundColor: "white",
  alignItems: "center",
  justifyContent: "center",
  columnGap: "5px",
} as ThemeUIStyleObject;

const labelIcon = {
  width: "18px",
} as ThemeUIStyleObject;

const greyLabel = {
  ...baseLabel,
  backgroundColor: "#D8D8E2",
  color: "white",
} as ThemeUIStyleObject;

const greyLabelWithHover = {
  ...greyLabel,
  transition: "all 0.3s",
  cursor: "pointer",
  userSelect: "none",
  "&:hover": {
    color: "white",
    backgroundColor: "#212121",
  },
  "@media screen and (max-width: 720px)": {
    height: "52px",
    px: "12px",
  },
} as ThemeUIStyleObject;

const blueLabel = {
  ...baseLabel,
  backgroundColor: "#5051F2",
  color: "white",
} as ThemeUIStyleObject;

const yellowLabel = {
  ...baseLabel,
  backgroundColor: "#F5D549",
  color: "white",
  "@media screen and (max-width: 768px)": {
    mx: 0,
  },
} as ThemeUIStyleObject;

const greenLabel = {
  ...baseLabel,
  backgroundColor: "#44F268",
  color: "white",
  "@media screen and (max-width: 768px)": {
    mx: 0,
  },
} as ThemeUIStyleObject;

const needSigningIcon = {
  width: "32px",
  height: "32px",
  backgroundColor: "red",
  borderRadius: "50%",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
} as ThemeUIStyleObject;

const errorContainer = { flexDirection: "column", margin: "30px auto 0" } as ThemeUIStyleObject;

const errorMessage = {
  fontFamily: "InterBold",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "32px",
  lineHeight: "120%",
  color: "#212121",
} as ThemeUIStyleObject;

const errorBackButton = { marginTop: "30px" } as ThemeUIStyleObject;

const briefInformationHeader = {
  justifyContent: "space-between",
  fontFamily: "InterBold",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "120%",
} as ThemeUIStyleObject;

const briefInformationData = {
  width: "100%",
  marginTop: "16px",
  flexDirection: "column",
  rowGap: "14px",
} as ThemeUIStyleObject;

const informationRow = {
  justifyContent: "space-between",
  color: "#212121",
  fontFamily: "InterMedium",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "100%",
  width: "100%",
  gap: "4px",
} as ThemeUIStyleObject;

const informationRowName = {
  opacity: 0.5,
  textAlign: "left",
} as ThemeUIStyleObject;

const informationRowValue = {
  paddingLeft: "5px",
  display: "flex",
  alignItems: "center",
} as ThemeUIStyleObject;

const informationRowIcon = {
  marginLeft: "4px",
  width: "14px",
  height: "14px",
  transition: "opacity 0.3s",
  cursor: "pointer",
  "&:hover > svg> path": {
    stroke: "#AE4FD0",
  },
  svg: {
    display: "block",
    width: "100%",
    height: "100%",
  },
} as ThemeUIStyleObject;

const contentCard = {
  ...card,
  overflow: "hidden",
  flexDirection: "column",
  marginTop: "40px",
  "@media screen and (max-width: 720px)": {
    mt: "52px",
  },
} as ThemeUIStyleObject;

const contentTitle = {
  fontFamily: "InterBold",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "120%",
  borderBottom: "2px solid #F7F7FB",
  paddingTop: "28px",
  paddingBottom: "16px",
  paddingX: "32px",
} as ThemeUIStyleObject;

const DEFAULT_CONTENT_PREVIEW_MAX_HEIGHT = 300;

const contentData = {
  paddingTop: "0",
  paddingX: "32px",
  borderBottom: "1px solid white",
  minHeight: "200px",
  pb: "60px",
  maxHeight: `${DEFAULT_CONTENT_PREVIEW_MAX_HEIGHT}px`,
  overflow: "hidden",
  ".w-md-editor": {
    backgroundColor: "white !important",
  },
  ".w-md-editor-bar": {
    display: "none",
  },
  ".wmde-markdown": {
    background: "#fff !important",
  },
} as ThemeUIStyleObject;

const participantsCard = {
  ...card,
  flexDirection: "column",
  marginTop: "20px",
  fontFamily: "InterMedium",
  fontStyle: "normal",
  fontWeight: 400,
  "@media screen and (max-width: 720px)": {
    "&": {
      backgroundColor: "transparent",
      border: "unset",
    },
  },
} as ThemeUIStyleObject;

const participantsCardTitle = {
  fontFamily: "InterBold",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "120%",
  paddingTop: "28px",
  paddingBottom: "16px",
  paddingX: "32px",
} as ThemeUIStyleObject;

const tableCellBase = { alignItems: "center" } as ThemeUIStyleObject;

const tableUserNameCell = {
  ...tableCellBase,
  columnGap: "8px",
} as ThemeUIStyleObject;

const tableAddressCell = {
  ...tableCellBase,
  cursor: "pointer",
  "@media screen and (max-width: 720px)": {
    "&": {
      justifyContent: "space-between",
      backgroundColor: "#F7F7FB",
      p: "10px 16px",
    },
  },
} as ThemeUIStyleObject;

const tableSignatureCell = {
  ...tableCellBase,
  columnGap: "7px",
  "@media screen and (max-width: 720px)": {
    "&": {
      justifyContent: "space-between",
      backgroundColor: "#F7F7FB",
      display: "flex",
      p: "10px 16px",
    },
  },
} as ThemeUIStyleObject;

const pendingIcon = {
  color: "#D8D8E2",
  width: "16px",
} as ThemeUIStyleObject;

const userPicture = {
  width: "20px",
  "@media screen and (max-width: 720px)": {
    "&": {
      width: "40px",
      height: "40px",
      ml: "16px",
      mb: "16px",
    },
  },
} as ThemeUIStyleObject;

const usernameText = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "240px",
  "@media screen and (max-width: 720px)": {
    "&": {
      fontFamily: "InterBold",
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "160%",
      color: "#212121",
      ml: "15px",
      mb: "16px",
    },
  },
} as ThemeUIStyleObject;

const noObserversMessage = {
  fontFamily: "InterMedium",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "160%",
  textAlign: "center",
  color: "#D8D8E2",
  mb: "72px",
} as ThemeUIStyleObject;

const verificationsContainer = {
  marginTop: "24px",
  background: "#F7F7FB",
  border: "2px solid #F7F7FB",
  borderRadius: "8px",
  flexDirection: "column",
  padding: "12px 24px 24px",
  width: "100%",
} as ThemeUIStyleObject;

const verificationsTitle = {
  fontFamily: "InterBold",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "14px",
  lineHeight: "160%",
  textAlign: "start",
} as ThemeUIStyleObject;

const verificationsRow = {
  alignItems: "center",
  marginTop: "12px",
  columnGap: "15px",
} as ThemeUIStyleObject;

const verificationCard = {
  width: "52px",
  height: "52px",
} as ThemeUIStyleObject;

const showMoreLabel = {
  position: "absolute",
  bottom: "10px",
  left: "32px",
  color: "#CA5CF2",
  fontFamily: "InterBold",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "160%",
  cursor: "pointer",
  transition: "color 0.3s",
  "&:hover": {
    color: "#AE4FD0",
  },
} as ThemeUIStyleObject;

const uploadedFilePreviewContainer = {
  height: "100%",
  width: "100%",
  marginTop: "14px",
  padding: "0 33px 24px",
  flexDirection: "column",
  position: "relative",
  ".preview": {
    overflow: "hidden",
    borderRadius: "12px",
    height: "100%",
  },
} as ThemeUIStyleObject;

const uploadedFileTitleContainer = {
  cursor: "pointer",
  opacity: 1,
  transition: "opacity 0.3s",
  top: "3px",
  zIndex: "1",
  "&:hover": {
    opacity: 0.8,
  },
} as ThemeUIStyleObject;

const uploadedFileIconContainer = {
  width: "18px",
} as ThemeUIStyleObject;

const uploadedFileTitleLink = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  cursor: "pointer",
} as ThemeUIStyleObject;

const uploadedFileTitleWrapper = {
  maxWidth: "400px",
  overflow: "hidden",
  textOverflow: "ellipsis",
} as ThemeUIStyleObject;

const uploadedFileTitle = {
  fontFamily: "InterMedium",
  fontWeight: "500",
  lineHeight: "160%",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
} as ThemeUIStyleObject;

const uploadedFilePreview = {
  // Document wrapper class
  ".sc-idXgbr": {
    border: "1px solid #EDEDF3",
    borderRadius: "12px",
  },
  ".react-pdf__Document": {
    width: "100%",
    padding: "0",
    height: "300px",
    overflow: "hidden",
  },
  ".react-pdf__Page__canvas": {
    margin: "0 auto",
    "@media screen and (max-width: 768px)": {
      width: "100% !important",
      height: "auto !important",
    },
  },
  "#pdf-zoom-out, #pdf-zoom-out, #pdf-zoom-in, #pdf-zoom-reset, #pdf-toggle-pagination, #pdf-download, #pdf-pagination":
    {
      display: "none",
    },
  "#pdf-controls": {
    padding: "0 0 15px",
    boxShadow: "none",
  },
  "#pdf-pagination-next": {
    marginRight: 0,
  },
  "#txt-renderer": {
    maxHeight: "300px",
    overflow: "hidden",
    marginTop: "45px",
    paddingX: "60px",
    border: "1px solid #EDEDF3",
    borderRadius: "12px",
    whiteSpace: "break-spaces",
  },
  ".sc-idXgbr, #txt-renderer": {
    boxShadow: "none",
    transition: "border 0.6s, boxShadow 0.6s",
    "&:hover": {
      border: "1px solid #CA5CF2",
      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    },
  },
  "#msdoc-renderer": {
    maxHeight: "300px",
    overflow: "scroll",
    overflowX: "hidden",
    marginTop: "45px",
    paddingX: "60px",
    border: "1px solid #EDEDF3",
    borderRadius: "12px",
  },
  ".react-pdf__message--loading": {
    display: "none",
  },
} as ThemeUIStyleObject;

const uploadedFilePreviewLink = {
  cursor: "pointer",
} as ThemeUIStyleObject;

const viewFileLabel = {
  color: "#CA5CF2",
  width: "fit-content",
  marginTop: "16px",
  fontFamily: "InterBold",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "160%",
  opacity: 1,
  transition: "opacity 0.3s",
  cursor: "pointer",
  zIndex: "1",
  bottom: 0,
  "&:hover": {
    color: "#AE4FD0",
  },
} as ThemeUIStyleObject;

const contentHiddenContainer = {
  background: "#F7F7FB80",
  flexDirection: "column",
  justifyContent: "center",
  rowGap: "16px",
  padding: "24px 40px 39px",
} as ThemeUIStyleObject;

const contentHiddenMessage = {
  fontFamily: "InterMedium",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "160%",
  color: "#212121",
  width: "fit-content",
  marginX: "auto",
} as ThemeUIStyleObject;

const contentHiddenIconWrapper = {
  padding: "12px",
  background: "white",
  borderRadius: "50%",
  border: "1px solid #EDEDF3",
  width: "60px",
  height: "60px",
  marginX: "auto",
} as ThemeUIStyleObject;

const contentHiddenIconInnerWrapper = {
  background: "white",
  borderRadius: "50%",
} as ThemeUIStyleObject;

const textMobile = {
  fontFamily: "InterMedium",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "160%",
  color: "#212121",
  opacity: "0.5",
} as ThemeUIStyleObject;

const signersRow = {
  alignItems: "center",
} as ThemeUIStyleObject;

const cardMobile = {
  backgroundColor: "#fff",
  border: "1px solid #EDEDF3",
  borderRadius: "12px",
  pt: "16px",
  mt: "12px",
} as ThemeUIStyleObject;

export {
  container,
  cardMobile,
  card,
  mainData,
  briefInformation,
  buttonsContainer,
  signersRow,
  btnBase,
  btnPrimary,
  btnSecondary,
  deleteAgreementBtn,
  backContainer,
  backIcon,
  title,
  labelsContainer,
  labelsRow,
  baseLabel,
  labelIcon,
  greyLabel,
  greyLabelWithHover,
  blueLabel,
  yellowLabel,
  greenLabel,
  errorContainer,
  textMobile,
  errorMessage,
  errorBackButton,
  briefInformationHeader,
  briefInformationData,
  informationRow,
  informationRowName,
  informationRowValue,
  needSigningIcon,
  informationRowIcon,
  contentCard,
  contentTitle,
  contentData,
  participantsCard,
  participantsCardTitle,
  tableUserNameCell,
  tableAddressCell,
  tableSignatureCell,
  pendingIcon,
  userPicture,
  usernameText,
  noObserversMessage,
  verificationsContainer,
  verificationsTitle,
  verificationsRow,
  verificationCard,
  showMoreLabel,
  DEFAULT_CONTENT_PREVIEW_MAX_HEIGHT,
  uploadedFilePreviewContainer,
  uploadedFileTitleContainer,
  uploadedFileIconContainer,
  uploadedFileTitleLink,
  uploadedFileTitleWrapper,
  uploadedFileTitle,
  uploadedFilePreview,
  uploadedFilePreviewLink,
  viewFileLabel,
  contentHiddenContainer,
  contentHiddenMessage,
  contentHiddenIconWrapper,
  contentHiddenIconInnerWrapper,
};
