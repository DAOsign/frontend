import { ThemeUIStyleObject } from "theme-ui";

const container = {
  bottom: "30px",
  animation: "connect 4s 1 linear",
  width: "387px",
  mt: "45px",
  backdropFilter: "blur(6px)",
  borderRadius: "10px",
  paddingTop: "32px",
  paddingX: "60px",
  textAlign: "center",
  pb: "32px",
  button: {
    mb: "12px",
    "&:last-of-type": {
      mb: "40px",
    },
  },
  "@media screen and (max-width: 720px)": {
    width: "303px",
    paddingX: "35px",
  },
} as ThemeUIStyleObject;

const userGreeting = {
  bottom: "30px",
  animation: "connect 4s 1 linear",
  width: "100%",
  lineHeight: "1.5",
  fontSize: "1.8em",
  mt: "45px",
  paddingTop: "32px",
  paddingX: "60px",
  textAlign: "center",
  pb: "32px",
  button: {
    mb: "12px",
    "&:last-of-type": {
      mb: "40px",
    },
  },
  "@media screen and (max-width: 720px)": {
    width: "303px",
    paddingX: "35px",
  },
} as ThemeUIStyleObject;

const title = {
  variant: "text.h3",
  mb: "40px",
  fontSize: "32px",
  "@media screen and (max-width: 720px)": {
    variant: "text.h2",
    fontSize: "28px",
  },
} as ThemeUIStyleObject;

const hiddenInMobile = {
  "@media (hover: none) and (max-width: 1170px)": {
    display: "none",
  },
} as ThemeUIStyleObject;

const link = {
  color: "#CA5CF2",
  cursor: "pointer",
  fontFamily: "InterMedium",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "15px",
  ml: "5px",
  "&:hover": {
    color: "#AE4FD0",
  },
  "&:focus": {
    color: "#AE4FD0",
  },
} as ThemeUIStyleObject;

export { container, title, link, userGreeting, hiddenInMobile };
