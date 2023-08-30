/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Container, Flex, Text } from "theme-ui";
import iconsObj from "../../assets/icons";
import Icon from "../icon";
import Image from "next/image";
import { notifComingSoon } from "../../utils/notification";
import { verification } from "./styles";

type Props = {
  className?: string;
};

interface Status {
  img: Icon;
  name: string;
}
const verificationIcon: Status[] = [
  { img: iconsObj.anonymous, name: "Anonymous" },
  { img: iconsObj.pseudonymous, name: "Pseudonymous" },
];

export const VerificationBadges = ({ className }: Props) => {
  return (
    <Container sx={verification}>
      <Flex sx={{ marginTop: "16px", justifyContent: "space-between" }}>
        {verificationIcon.map((el: any, i: number) => {
          return (
            <Box
              key={i}
              onClick={() => {
                notifComingSoon(`${el.name} verification is coming soon`);
              }}
            >
              <Image src={el.img} width={100} height={100} alt="socialIcon" />
            </Box>
          );
        })}
      </Flex>
    </Container>
  );
};
