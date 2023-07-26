/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Container, Flex, Text } from "theme-ui";
import iconsObj from "../../assets/icons";
import Icon from "../icon";
import Image from "next/image";
import { title, badges, references } from "./styles";

interface Social {
  img: Icon;
}
const verificationIcon: Social[] = [
  { img: iconsObj.verificationAnonymous },
  { img: iconsObj.verificationPseudonymous },
  { img: iconsObj.verificationDigital },
  { img: iconsObj.verificationReal },
  { img: iconsObj.verificationNotarized },
];

export const Verification = () => {
  return (
    <Container sx={{ paddingTop: "60px" }}>
      <Text sx={title}>Verifications</Text>
      <Flex sx={{ paddingBottom: "38px" }}>
        <Text sx={badges}>Badges</Text>
        <Text sx={references}>References</Text>
      </Flex>
      <Flex>
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
