/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Container, Flex, Text } from "theme-ui";
import iconsObj from "../../assets/icons";
import Icon from "../icon";
import Image from "next/image";
import { verification } from "./styles";

type Props = {
  className?: string;
};

interface Social {
  img: Icon;
}
const verificationIcon: Social[] = [
  { img: iconsObj.verificationAnonymous },
  { img: iconsObj.verificationPseudonymous },
];

export const VerificationBadges = ({ className }: Props) => {
  return (
    <Container sx={verification}>
      <Flex sx={{ marginTop: "16px", justifyContent: "space-between" }}>
        {verificationIcon.map((el: any, i: number) => {
          return (
            <Box key={i}>
              <Image src={el.img} width={100} height={100} alt="socialIcon" />
            </Box>
          );
        })}
      </Flex>
    </Container>
  );
};
