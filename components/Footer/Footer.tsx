import React, { useState } from "react";
import { Flex, Box, Text, Input, Button, Container } from "theme-ui";
import iconsObj from "../../assets/icons";
import {
  iconContainer,
  errorMessage,
  socialTitle,
  inputFooter,
  footerText,
  container,
  rightSide,
  iconFooter,
  iconEmail,
  leftSide,
  aboutUs,
  footer,
  icon,
} from "./styles";
import Icon from "../icon";

export default function Footer({ animationNotVisible }: any) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const submit = () => {
    const validationEmail =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if (!validationEmail.test(email)) {
      setError(true);
      return;
    }
    setError(false);
  };

  return (
    <Container sx={{ ...footer, animation: animationNotVisible ? "unset" : "footer 4s 1 linear" }}>
      <Flex sx={container}>
        <Box sx={leftSide}>
          <Text sx={{ variant: "text.normalTextBold", display: "inline-block", mb: "8px" }}>
            Get the latest updates
          </Text>
          <Input
            onChange={e => {
              setError(false);
              setEmail(e.target.value);
            }}
            value={email}
            name="emai\prettier\eslint-plugin-prettierl"
            placeholder="Your Email"
            sx={{
              ...inputFooter,
              border: error ? "1px solid #FF5269" : "unset",
              color: error ? "#FF5269" : "#21212",
              opacity: error ? 1 : 0.5,
            }}
          />
          <Box onClick={submit} sx={iconEmail}>
            <Icon src={iconsObj.send} />
          </Box>
          {error && <Text sx={errorMessage}>*Please enter a valid email address</Text>}
        </Box>
        <Flex sx={rightSide}>
          <Box>
            <Text sx={{ variant: "text.normalTextBold", display: "inline-block", mb: "12px" }}>
              DaoSign
            </Text>
            <Text
              sx={{
                variant: "text.smallTextMedium",
                display: "block",
                mb: "4px",
                cursor: "pointer",
                "&:hover": {
                  color: "#CA5CF2",
                  opasity: "1",
                },
              }}
            >
              About
            </Text>
            <Text
              sx={{
                variant: "text.smallTextMedium",
                display: "block",
                cursor: "pointer",
                "&:hover": {
                  color: "#CA5CF2",
                  opasity: "1",
                },
              }}
            >
              Terms of Service
            </Text>
          </Box>
          <Box>
            <Text sx={socialTitle}>Resources</Text>
            <Text
              sx={{
                variant: "text.smallTextMedium",
                display: "block",
                mb: "4px",
                cursor: "pointer",
                "&:hover": {
                  color: "#CA5CF2",
                  opasity: "1",
                },
              }}
            >
              GitHub
            </Text>
            <Text
              sx={{
                variant: "text.smallTextMedium",
                display: "block",
                mb: "4px",
                cursor: "pointer",
                "&:hover": {
                  color: "#CA5CF2",
                  opasity: "1",
                },
              }}
            >
              Discussion
            </Text>
            <Text
              sx={{
                variant: "text.smallTextMedium",
                display: "block",
                cursor: "pointer",
                "&:hover": {
                  color: "#CA5CF2",
                  opasity: "1",
                },
              }}
            >
              Support
            </Text>
          </Box>
          <Box>
            <Text sx={socialTitle}>Join Community</Text>
            <Flex sx={iconContainer}>
              <Box
                sx={icon}
                onClick={() => {
                  window.open("https://consideritdone.tech/", "_blank");
                }}
              >
                <div className="first">
                  <Icon src={iconsObj.github} />
                </div>
                <div className="second">
                  <Icon src={iconsObj.githubViolet} />
                </div>
              </Box>

              <Box
                onClick={() => {
                  window.open("https://consideritdone.tech/", "_blank");
                }}
                sx={icon}
              >
                <div className="first">
                  <Icon width={24} height={24} src={iconsObj.twitter} />
                </div>
                <div className="second">
                  <Icon width={24} height={24} src={iconsObj.twitterViolet} />
                </div>
              </Box>
              <Box
                onClick={() => {
                  window.open("https://consideritdone.tech/", "_blank");
                }}
                sx={icon}
              >
                <div className="first">
                  <Icon src={iconsObj.facebook} />
                </div>
                <div className="second">
                  <Icon src={iconsObj.facebookViolet} />
                </div>
              </Box>
              <Box
                onClick={() => {
                  window.open("https://consideritdone.tech/", "_blank");
                }}
                sx={icon}
              >
                <div className="first">
                  <Icon src={iconsObj.world} />
                </div>
                <div className="second">
                  <Icon src={iconsObj.worldViolet} />
                </div>
              </Box>
              <Box
                onClick={() => {
                  window.open("https://consideritdone.tech/", "_blank");
                }}
                sx={icon}
              >
                <div className="first">
                  <Icon src={iconsObj.telegram} />
                </div>
                <div className="second">
                  <Icon src={iconsObj.telegramViolet} />
                </div>
              </Box>
            </Flex>
            <Button sx={aboutUs} type="button">
              About Us
            </Button>
          </Box>
        </Flex>
      </Flex>
      <Text sx={footerText}>
        © Copywriting 2022. Created with
        <Box sx={iconFooter}>
          <Icon src={iconsObj.heartViolet} />
        </Box>
        by
        <Text
          onClick={() => {
            window.open("https://consideritdone.tech/", "_blank");
          }}
          sx={{ cursor: "pointer", color: "#CA5CF2", ml: "5px" }}
        >
          CIDT
        </Text>
      </Text>
    </Container>
  );
}
