/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Container, Flex, Text, Button } from "theme-ui";
import iconsObj from "../../assets/icons";
import Icon from "../icon";
import { useWeb3 } from "../../hooks/useWeb3";
import Image from "next/image";
import { verificationCard, description, cardTitle, cardBtn, statusBtn } from "./styles";
import WalletAddress from "./WalletAddress";

interface Data {
  img: Icon;
  title: string;
  description: string;
}
const Data = [
  {
    img: iconsObj.verificationAnonymous,
    title: "Anonymous",
    description: "Verify your Email, ENS and add your name to receive this Verification Badge",
  },
  {
    img: iconsObj.verificationPseudonymous,
    title: "Pseudonymous",
    description: "Verify your Email, ENS and add your name to receive this Verification Badge",
  },
];

export const VerificationsCards = () => {
  const { account } = useWeb3();

  return (
    <Container sx={{ marginTop: "32px" }}>
      {Data.map((el: any, i: number) => {
        return (
          <Flex sx={verificationCard} key={i}>
            <Image src={el.img} width={100} height={100} alt="socialIcon" />
            <Flex sx={{ marginLeft: "28px", flexDirection: "column" }}>
              <Flex>
                <Text sx={cardTitle}>{el.title}</Text>
                <Button sx={statusBtn}>Verified</Button>
              </Flex>
              <Text sx={description}>{el.description}</Text>
              <WalletAddress address={account || ""} sx={{ paddingTop: "0" }} />
            </Flex>
            <Button sx={cardBtn}>View Details</Button>
          </Flex>
        );
      })}
    </Container>
  );
};
