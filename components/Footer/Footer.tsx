import React from "react";
import { Flex, Box, Text, Input, Button, Container } from "theme-ui";
import iconsObj from "../../assets/icons";
import {
  iconContainer,
  socialTitle,
  inputFooter,
  footerText,
  container,
  rightSide,
  iconEmail,
  leftSide,
  aboutUs,
  footer,
} from "./styles";
import Icon from "../icon";

export default function Footer() {
  return (
    <Container sx={footer}>
      <Flex sx={container}>
        <Box sx={leftSide}>
          <Text
            sx={{
              variant: "text.normalTextBold",
              display: "inline-block",
              mb: "8px",
            }}
          >
            Get the latest updates
          </Text>
          <Input placeholder="Your Email" sx={inputFooter} />
          <Box sx={iconEmail}>
            <Icon src={iconsObj.send} />
          </Box>
        </Box>
        <Flex sx={rightSide}>
          <Box>
            <Text
              sx={{
                variant: "text.normalTextBold",
                display: "inline-block",
                mb: "12px",
              }}
            >
              DaoSign
            </Text>
            <Text
              sx={{
                variant: "text.smallTextMedium",
                display: "block",
                mb: "4px",
              }}
            >
              About
            </Text>
            <Text sx={{ variant: "text.smallTextMedium", display: "block" }}>
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
              }}
            >
              GitHub
            </Text>
            <Text
              sx={{
                variant: "text.smallTextMedium",
                display: "block",
                mb: "4px",
              }}
            >
              Discussion
            </Text>
            <Text sx={{ variant: "text.smallTextMedium", display: "block" }}>
              Support
            </Text>
          </Box>
          <Box>
            <Text sx={socialTitle}>Join Community</Text>
            <Flex sx={iconContainer}>
              <Icon src={iconsObj.github} />
              <Icon src={iconsObj.twitter} />
              <Icon src={iconsObj.facebook} />
              <Icon src={iconsObj.world} />
              <Icon src={iconsObj.telegram} />
            </Flex>
            <Button sx={aboutUs} type="button">
              About Us
            </Button>
          </Box>
        </Flex>
      </Flex>
      <Text sx={footerText}>
        © Copywriting 2022. Created with ❤️ by
        <a
          href="#"
          style={{
            color: "#CA5CF2",
            display: "inline-block",
            marginLeft: "5px",
          }}
        >
          CIDT
        </a>
      </Text>
    </Container>
  );
}
