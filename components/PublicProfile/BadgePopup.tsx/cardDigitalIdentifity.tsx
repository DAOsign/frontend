import React from "react";
import { Container, Text, Box, Flex, Link } from "theme-ui";
import Icon from "../../icon";
import iconsObj from "../../../assets/icons";
import { cardContainer, link, socialTitle } from "./styles";

interface Social {
  img: Icon;
  title: string;
}

const socialIcon: Social[] = [
  { img: iconsObj.twitter, title: "Twitter Verification" },
  { img: iconsObj.facebook, title: "Facebook Verification" },
  { img: iconsObj.github, title: "Github Verification" },
  { img: iconsObj.telegram, title: "Telegram Verification" },
  { img: iconsObj.website, title: "Website Verification" },
];
export default function CardDigitalIdentifity() {
  return (
    <>
      {socialIcon.map((el: any, i: number) => {
        return (
          <Container sx={cardContainer} key={i}>
            <Flex
              sx={{
                paddingTop: "24px",
                paddingLeft: "32px",
                paddingRight: "16px",
                flexDirection: "column",
              }}
            >
              <Flex
                sx={{
                  justifyContent: "space-between",
                }}
              >
                <Flex>
                  <Box sx={{ width: "24px", height: "24px" }}>
                    <Icon width={24} height={24} src={el.img} />
                  </Box>
                  <Text sx={socialTitle}>{el.title}</Text>
                </Flex>
                <Box sx={{ width: "24px", height: "24px" }}>
                  <Icon src={iconsObj.greenArrow} width={24} height={24} />
                </Box>
              </Flex>
              <Link sx={link}>
                View proof
                <Box sx={{ width: "14px", height: "14px", marginLeft: "4px" }}>
                  <Icon src={iconsObj.iconArrow} width={14} height={14} />
                </Box>
              </Link>
            </Flex>
          </Container>
        );
      })}
    </>
  );
}
