/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Container, Flex, Text, Button } from "theme-ui";
import iconsObj from "../../assets/icons";
import Icon from "../icon";
import {} from "framer-motion";
import { useWeb3 } from "../../hooks/useWeb3";
import Image from "next/image";
import {
  socialVerificationCard,
  verificationCard,
  progressBox,
  description,
  cardTitle,
  cardImage,
  statusBtn,
  progress,
  cardBtn,
} from "./styles";
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
  {
    img: iconsObj.verificationDigital,
    title: "Digital Identify",
    description: "Verify your Email, ENS and add your name to receive this Verification Badge",
  },
  {
    img: iconsObj.verificationReal,
    title: "Real Identify",
    description: "Verify your Email, ENS and add your name to receive this Verification Badge",
  },
  {
    img: iconsObj.verificationNotarized,
    title: "Notarized Identify",
    description: "Verify your Email, ENS and add your name to receive this Verification Badge",
  },
];

interface Social {
  img: Icon;
  title: string;
  description: string;
}
const Social = [
  {
    img: iconsObj.iicon,
    title: "Twitter Verification",
    description:
      "Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper.",
  },
  {
    img: iconsObj.iicon,
    title: "Github Verification",
    description:
      "Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper.",
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
            <Flex sx={{ marginLeft: "28px", flexDirection: "column", width: "70%" }}>
              <Flex>
                <Text sx={cardTitle}>{el.title}</Text>
                <Button sx={statusBtn}>Verified</Button>
              </Flex>
              <Text sx={description}>{el.description}</Text>
              <WalletAddress address={account || ""} sx={{ paddingTop: "0" }} />
              <Box sx={progressBox}>
                <Box sx={progress}>3 of 4</Box>
              </Box>
            </Flex>
            <Button sx={cardBtn}>View Details</Button>
          </Flex>
        );
      })}

      {Social.map((el: any, i: number) => {
        return (
          <Flex sx={socialVerificationCard} key={i}>
            <Flex sx={{ alignItems: "center" }}>
              <Text sx={cardTitle}>{el.title}</Text>
              <Box sx={cardImage}>
                <Image src={el.img} width={24} height={24} alt="socialIcon" />
              </Box>
            </Flex>
            <Text sx={description}>{el.description}</Text>
          </Flex>
        );
      })}
    </Container>
  );
};
