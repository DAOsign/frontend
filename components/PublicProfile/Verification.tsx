/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Box, Button, Container, Flex, Link, Text } from "theme-ui";
import iconsObj from "../../assets/icons";
import Icon from "../icon";
import Image from "next/image";
import { title, btn, grid } from "./styles";

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

export const Verification = ({ setVisible }: any) => {
  const [isBadges, setIsBadges] = useState(true);

  const getBorder = (value: boolean) => {
    return {
      borderBottom: value ? "2px solid #212121!important" : "#EDEDF3",
      opacity: value ? 1 : 0.5,
    };
  };

  return (
    <Container sx={{ paddingTop: "60px" }}>
      <Text sx={title}>Verifications</Text>
      <Flex sx={{ width: "fit-content" }}>
        <Button sx={{ ...btn, ...getBorder(isBadges) }} onClick={() => setIsBadges(true)}>
          Badges
        </Button>
        <Button sx={{ ...btn, ...getBorder(!isBadges) }} onClick={() => setIsBadges(false)}>
          References
        </Button>
      </Flex>
      {isBadges ? (
        <Flex sx={grid}>
          {verificationIcon.map((el: any, i: number) => {
            return (
              <Box key={i} onClick={setVisible}>
                <Image src={el.img} width={100} height={100} alt="socialIcon" />
              </Box>
            );
          })}
        </Flex>
      ) : null}
    </Container>
  );
};
