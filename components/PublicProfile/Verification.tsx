/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Box, Button, Container, Flex, Link, Text } from "theme-ui";
import iconsObj from "../../assets/icons";
import Icon from "../icon";
import Tooltip from "../Tooltip";
import { notifComingSoon } from "../../utils/notification";
import Image from "next/image";
import { title, btn, grid, verificationContainer, verificationBtn, labelSigners } from "./styles";

interface Status {
  img: Icon;
  name: string;
}
const verificationIcon: Status[] = [
  { img: iconsObj.anonymous, name: "Anonymous" },
  // { img: iconsObj.pseudonymous },
  // { img: iconsObj.digital },
  // { img: iconsObj.real },
  // { img: iconsObj.notarized },
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
    <Container sx={verificationContainer}>
      <Text sx={title}>Verifications</Text>
      <Flex sx={{ alignItems: "baseline", width: "fit-content" }}>
        <Button
          sx={{ ...btn, ...verificationBtn, ...getBorder(isBadges), minWidth: "fit-content" }}
          onClick={() => setIsBadges(true)}
        >
          <Text sx={{ marginRight: "2px" }}>Verification Badges</Text>
          <Tooltip
            title={"User's badges received based on a verification"}
            transform="translate(-58%, -11%)"
            minWidth="170px"
            left="120%"
            top="-330%"
            height="0"
          >
            <Image src={iconsObj.iicon} width={16} height={16} alt="infoIcon" />
          </Tooltip>
        </Button>
        <Button
          sx={{ ...btn, ...getBorder(!isBadges), paddingLeft: "16px" }}
          onClick={() => setIsBadges(false)}
          disabled={true}
        >
          References
        </Button>
      </Flex>
      {isBadges ? (
        <Flex sx={grid}>
          {verificationIcon.map((el: any, i: number) => {
            return (
              <Box
                key={i}
                // onClick={setVisible}
                onClick={() => {
                  notifComingSoon(`${el.name} verification is coming soon`);
                }}
              >
                <Image src={el.img} width={100} height={100} alt="statusIcon" />
              </Box>
            );
          })}
        </Flex>
      ) : null}
    </Container>
  );
};
