/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Container, Flex, Text } from "theme-ui";
import iconsObj from "../../assets/icons";
import Icon from "../icon";
import Image from "next/image";
import { title, badges, references, titleVerif } from "./styles";

interface Social {
  img: Icon;
}
const verificationIcon: Social[] = [
  { img: iconsObj.verificationAnonymous },
  { img: iconsObj.verificationPseudonymous },
];

export const VerificationBadges = () => {
  return (
    <Container sx={{ marginLeft: "73px" }}>
      <Text sx={titleVerif}>Verification Badges</Text>
      <Flex sx={{ marginTop: "16px" }}>
        {verificationIcon.map((el: any, i: number) => {
          return (
            <Box key={i} sx={{ marginRight: "40px" }}>
              <Image src={el.img} width={100} height={100} alt="socialIcon" />
            </Box>
          );
        })}
      </Flex>
    </Container>
  );
};
