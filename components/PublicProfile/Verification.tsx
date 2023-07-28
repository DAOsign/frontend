/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Box, Button, Container, Flex, Link, Text } from "theme-ui";
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
  const [values, changeValue] = useState("b");

  const getBorder = () => {
    return {
      borderBottom: values === "Badges" ? "2px solid #212121!important" : "none",
    };
  };
  return (
    <Container sx={{ paddingTop: "60px" }}>
      <Text sx={title}>Verifications</Text>
      <Flex>
        <Link sx={{ ...badges, ...getBorder() }} onClick={() => changeValue("b")}>
          Badges
        </Link>
        <Link sx={{ ...references, ...getBorder() }} onClick={() => changeValue("p")}>
          References
        </Link>
      </Flex>
      <div className="line" />
      <Flex sx={{ paddingTop: "38px" }}>
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
