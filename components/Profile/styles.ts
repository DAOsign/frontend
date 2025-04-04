import { ThemeUIStyleObject } from "theme-ui";

export const profileSection = {
  maxWidth: "1440px",
  margin: "80px auto 0",
  pl: "140px",
  pr: "140px",
  backgroundColor: "#F7F7FB",
  "@media screen and (max-width: 1200px)": {
    pl: "24px",
    pr: "24px",
  },
  "@media screen and (max-width: 768px)": {
    flexDirection: "column",
  },
  "@media screen and (max-width: 480px)": {
    margin: "16px auto 0",
    pl: "16px",
    pr: "16px",
  },
} as ThemeUIStyleObject;

export const infoSection = {
  "@media screen and (max-width: 480px)": {
    flexDirection: "column",
  },
} as ThemeUIStyleObject;

export const title = {
  variant: "text.overscript",
} as ThemeUIStyleObject;

// ========= UserPhoto =============
export const userPhoto = {
  position: "relative",
  width: "180px",
  height: "180px",
  borderRadius: "50%",
  "@media screen and (max-width: 375px)": {
    width: "120px",
    height: "120px",
  },
} as ThemeUIStyleObject;

export const btnUserPhoto = {
  variant: "buttons.userBtn",
  height: "46px",
  padding: "10px 22px",
  mt: "24px",
} as ThemeUIStyleObject;

// ========= Info ===========
export const container = {
  flexBasis: " 45%",
  maxWidth: "100%",
  flexDirection: "column",
  "@media screen and (max-width: 480px)": {
    maxWidth: "343px",
  },
} as ThemeUIStyleObject;

export const infoContainer = {
  pb: "13px",
} as ThemeUIStyleObject;

export const subTitle = {
  variant: "text.smallTextMediumUser",
  width: "400px",
} as ThemeUIStyleObject;

// ======= walletContainer =========
export const walletContainer = {
  pb: "10px",
} as ThemeUIStyleObject;

export const copyIcon = {
  cursor: "pointer",
} as ThemeUIStyleObject;

// ======= UserName =========
export const containerName = {
  alignItems: "baseline",
  flexDirection: "column",
  pl: "40px",
  "@media screen and (max-width: 480px)": {
    pl: "0",
    alignItems: "center",
    marginTop: "16px",
  },
} as ThemeUIStyleObject;

export const userName = {
  variant: "text.h2",
  display: "block",
  textAlign: "center",
  pb: "16px",
  "@media screen and (max-width: 1200px)": {
    textAlign: "left",
  },
  "@media screen and (max-width: 720px)": {
    fontSize: "20px",
  },
} as ThemeUIStyleObject;

export const badges = {
  variant: "text.normalTextBold",
  display: "block",
  pr: "24px",
} as ThemeUIStyleObject;

export const references = {
  variant: "text.normalTextBold",
  display: "block",
  opacity: "0.5",
} as ThemeUIStyleObject;

export const verificationBtn = {
  display: "flex",
  alignItems: "initial",
  paddingRight: "0",
} as ThemeUIStyleObject;

// ======== VerificationBadges =======
export const verification = {
  minWidth: "232px",
  width: "20%",
  ml: "auto",
  mr: "0",
  "@media screen and (max-width: 768px)": {
    m: "auto",
  },
} as ThemeUIStyleObject;

// ========= verificationCard ===========
export const verificationCard = {
  maxWidth: "100%",
  backgroundColor: "#fff",
  p: "28px",
  borderRadius: "12px",
  border: "1px solid #EDEDF3",
  mb: "21px",
  "@media screen and (max-width: 768px)": {
    flexDirection: "column",
  },
} as ThemeUIStyleObject;

export const description = {
  variant: "text.smallTextMediumUser",
};

export const cardTitle = {
  variant: "text.h4",
  pb: "13.5px",
} as ThemeUIStyleObject;

export const progressBox = {
  position: "relative",
  width: "100%",
  height: "24px",
  backgroundColor: "#EDEDF3",
  borderRadius: "12px",
} as ThemeUIStyleObject;

export const progress = {
  position: "absolute",
  width: "77%",
  height: "24px",
  backgroundColor: "#44F268",
  borderRadius: "12px",
  textAlign: "center",
} as ThemeUIStyleObject;

// =======socialVerificationCard=====
export const cardBtn = {
  p: "12px 24px",
  width: "fit-content",
  minWidth: "150px",
  m: "2% 0 0 auto",
  "@media screen and (max-width: 768px)": {
    mt: "24px",
  },
  "@media screen and (max-width: 480px)": {
    width: "100%",
  },
} as ThemeUIStyleObject;

export const statusBtn = {
  display: "flex",
  alignItems: "center",
  p: "5px 16px",
  width: "fit-content",
  m: "0 0 0 12px",
  background: "#44F268",
  maxHeight: "32px",
  "@media screen and (max-width: 480px)": {
    m: "0 0 8px 0",
  },
} as ThemeUIStyleObject;

export const socialVerificationCard = {
  maxWidth: "48%",
  backgroundColor: "#fff",
  p: "28px",
  borderRadius: "12px",
  border: "1px solid #EDEDF3",
  mb: "21px",
  flexWrap: "wrap",
} as ThemeUIStyleObject;

export const cardImage = {
  display: "block",
  m: "0 0 0 auto",
} as ThemeUIStyleObject;

export const infoCard = {
  "@media screen and (max-width: 480px)": {
    flexDirection: "column-reverse",
  },
} as ThemeUIStyleObject;
