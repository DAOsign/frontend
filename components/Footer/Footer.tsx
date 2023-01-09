import React, { useState } from "react";
import { Flex, Box, Text, Input, Button, Container } from "theme-ui";
import iconsObj from "../../assets/icons";
import {
  iconContainer,
  errorMessage,
  socialTitle,
  inputFooter,
  footerText,
  footerItem,
  iconFooter,
  rightSide,
  container,
  iconEmail,
  leftSide,
  aboutUs,
  footer,
  icon,
} from "./styles";
import Icon from "../icon";

export default function Footer({ animationNotVisible, setVisible }: any) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const submit = () => {
    const validationEmail =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if (!validationEmail.test(email.trim())) {
      setError(true);
      return;
    }
    setVisible(true);
    setEmail("");
    setError(false);
  };

  return (
    <Container sx={{ ...footer, animation: animationNotVisible ? "unset" : "footer 4s 1 linear" }}>
      <Flex sx={container}>
        <form
          onSubmit={e => {
            e.preventDefault();
            submit();
          }}
        >
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
              }}
            />
            <Box onClick={submit} sx={iconEmail}>
              <Icon src={iconsObj.send} />
            </Box>
            {error && <Text sx={errorMessage}>*Please enter valid email</Text>}
          </Box>
        </form>
        <Flex sx={rightSide}>
          <Box>
            <Text sx={{ variant: "text.normalTextBold", display: "inline-block", mb: "12px" }}>
              DaoSign
            </Text>
            <Text sx={footerItem}>About</Text>
            <Text sx={{ ...footerItem, mb: 0 }}>Terms of Service</Text>
          </Box>
          <Box>
            <Text sx={socialTitle}>Resources</Text>
            <Text sx={footerItem}>GitHub</Text>
            <Text sx={footerItem}>Discussion</Text>
            <Text sx={{ ...footerItem, mb: 0 }}>Support</Text>
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
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 19.0004C4.7 20.4004 4.7 16.5004 3 16.0004M15 21.0004V17.5004C15 16.5004 15.1 16.1004 14.5 15.5004C17.3 15.2004 20 14.1004 20 9.50044C19.9988 8.3054 19.5325 7.15775 18.7 6.30044C19.0905 5.26241 19.0545 4.11207 18.6 3.10044C18.6 3.10044 17.5 2.80044 15.1 4.40044C13.0672 3.87103 10.9328 3.87103 8.9 4.40044C6.5 2.80044 5.4 3.10044 5.4 3.10044C4.94548 4.11207 4.90953 5.26241 5.3 6.30044C4.46745 7.15775 4.00122 8.3054 4 9.50044C4 14.1004 6.7 15.2004 9.5 15.5004C8.9 16.1004 8.9 16.7004 9 17.5004V21.0004"
                    stroke="#212121"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Box>

              <Box
                onClick={() => {
                  window.open("https://consideritdone.tech/", "_blank");
                }}
                sx={icon}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 4.00904C21 4.49904 20.02 4.69804 19 4.99904C17.879 3.73404 16.217 3.66404 14.62 4.26204C13.023 4.86004 11.977 6.32204 12 7.99904V8.99904C8.755 9.08204 5.865 7.60404 4 4.99904C4 4.99904 -0.182 12.432 8 15.999C6.128 17.246 4.261 18.087 2 17.999C5.308 19.802 8.913 20.422 12.034 19.516C15.614 18.476 18.556 15.793 19.685 11.774C20.0218 10.5517 20.189 9.2889 20.182 8.02104C20.18 7.77204 21.692 5.24904 22 4.00804V4.00904Z"
                    stroke="#212121"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Box>
              <Box
                onClick={() => {
                  window.open("https://consideritdone.tech/", "_blank");
                }}
                sx={icon}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10V14H10V21H14V14H17L18 10H14V8C14 7.73478 14.1054 7.48043 14.2929 7.29289C14.4804 7.10536 14.7348 7 15 7H18V3H15C13.6739 3 12.4021 3.52678 11.4645 4.46447C10.5268 5.40215 10 6.67392 10 8V10H7Z"
                    stroke="#212121"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Box>
              <Box
                onClick={() => {
                  window.open("https://consideritdone.tech/", "_blank");
                }}
                sx={icon}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                    stroke="#212121"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.00005 9H20.0001M4 15H20.0001M10.9219 20C9.61151 17.5431 8.92187 14.7962 8.92187 12C8.92187 9.20377 9.61151 6.45687 10.9219 4M13.0775 20C14.3878 17.5431 15.0775 14.7962 15.0775 12C15.0775 9.20377 14.3878 6.45687 13.0775 4"
                    stroke="#212121"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Box>
              <Box
                onClick={() => {
                  window.open("https://consideritdone.tech/", "_blank");
                }}
                sx={icon}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15"
                    stroke="#212121"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
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
          sx={{
            cursor: "pointer",
            color: "#CA5CF2",
            ml: "5px",
            opacity: 0.5,
            "&:hover": { opacity: 1 },
          }}
        >
          CIDT
        </Text>
      </Text>
    </Container>
  );
}
