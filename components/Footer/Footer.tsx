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
              DAOSign
            </Text>
            <Text sx={footerItem}>Terms of Service</Text>
            <Text sx={footerItem}>Coockies Policy</Text>
            <Text sx={{ ...footerItem, mb: 0 }}>Privacy Policy</Text>
          </Box>
          <Box>
            <Text sx={socialTitle}>Resources</Text>
            <Text sx={footerItem}>GitHub</Text>
            <Text sx={{ ...footerItem, mb: 0 }}>Support</Text>
          </Box>
          <Box>
            <Text sx={socialTitle}>Join Community</Text>
            <Flex sx={iconContainer}>
              <Box
                sx={icon}
                onClick={() => {
                  window.open("https://discord.com/invite/AwnhGFbT8Z", "_blank");
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M7.17007 7.18186C10.9172 6.11125 13.0584 6.11125 16.8055 7.18186M6.63477 16.8173C10.3819 17.8879 13.5937 17.8879 17.3408 16.8173M7.70537 11.9996C7.70537 12.2835 7.81817 12.5558 8.01895 12.7566C8.21972 12.9574 8.49204 13.0702 8.77598 13.0702C9.05992 13.0702 9.33223 12.9574 9.53301 12.7566C9.73379 12.5558 9.84659 12.2835 9.84659 11.9996C9.84659 11.7156 9.73379 11.4433 9.53301 11.2426C9.33223 11.0418 9.05992 10.929 8.77598 10.929C8.49204 10.929 8.21972 11.0418 8.01895 11.2426C7.81817 11.4433 7.70537 11.7156 7.70537 11.9996ZM14.129 11.9996C14.129 12.2835 14.2418 12.5558 14.4426 12.7566C14.6434 12.9574 14.9157 13.0702 15.1996 13.0702C15.4836 13.0702 15.7559 12.9574 15.9567 12.7566C16.1574 12.5558 16.2702 12.2835 16.2702 11.9996C16.2702 11.7156 16.1574 11.4433 15.9567 11.2426C15.7559 11.0418 15.4836 10.929 15.1996 10.929C14.9157 10.929 14.6434 11.0418 14.4426 11.2426C14.2418 11.4433 14.129 11.7156 14.129 11.9996Z"
                      stroke="#212121"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.7343 17.3534C15.7343 18.424 17.3402 20.5652 17.8755 20.5652C19.4814 20.5652 20.9085 18.7805 21.6226 17.3534C22.3367 15.5687 22.1579 11.1086 20.0167 5.04146C18.4568 3.95479 16.8049 3.60684 15.199 3.43555L14.1284 6.11206M8.24002 17.3534C8.24002 18.424 6.78827 20.5652 6.27867 20.5652C4.74877 20.5652 3.39017 18.7805 2.71033 17.3534C2.0305 15.5687 2.20073 11.1086 4.23916 5.04146C5.72516 3.95479 7.21759 3.60684 8.77532 3.43555L9.84593 6.11206"
                      stroke="#212121"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </Box>
              <Box
                onClick={() => {
                  window.open("https://github.com/daosign", "_blank");
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
                  window.open("https://t.me/DAOsign", "_blank");
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Box>
              <Box
                onClick={() => {
                  window.open("https://twitter.com/dao_sign", "_blank");
                }}
                sx={icon}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M22 4.00904C21 4.49904 20.02 4.69804 19 4.99904C17.879 3.73404 16.217 3.66404 14.62 4.26204C13.023 4.86004 11.977 6.32204 12 7.99904V8.99904C8.755 9.08204 5.865 7.60404 4 4.99904C4 4.99904 -0.182 12.432 8 15.999C6.128 17.246 4.261 18.087 2 17.999C5.308 19.802 8.913 20.422 12.034 19.516C15.614 18.476 18.556 15.793 19.685 11.774C20.0218 10.5517 20.189 9.2889 20.182 8.02104C20.18 7.77204 21.692 5.24904 22 4.00804V4.00904Z"
                    stroke="#212121"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Box>
              <Box
                onClick={() => {
                  window.open("https://www.linkedin.com/company/daosign/", "_blank");
                }}
                sx={icon}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g>
                    <path
                      d="M8 11V16M8 8V8.01M12 16V11M4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6Z"
                      stroke="#212121"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16 16V13C16 12.4696 15.7893 11.9609 15.4142 11.5858C15.0391 11.2107 14.5304 11 14 11C13.4696 11 12.9609 11.2107 12.5858 11.5858C12.2107 11.9609 12 12.4696 12 13"
                      stroke="#212121"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </Box>
            </Flex>
            <Button
              onClick={() => {
                window.open("https://daosign.org/", "_blank");
              }}
              sx={aboutUs}
              type="button"
            >
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
            "&:hover": { color: "#AE4FD0" },
            "&:focus": { color: "#AE4FD0" },
          }}
        >
          CIDT
        </Text>
      </Text>
    </Container>
  );
}
