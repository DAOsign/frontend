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
        <Flex sx={{ ...getBorder(isBadges) }}>
          <Button
            sx={{ ...btn, ...verificationBtn, minWidth: "fit-content" }}
            onClick={() => setIsBadges(true)}
          >
            <Text sx={{ marginRight: "2px" }}>Verification Badges</Text>
          </Button>
          <Tooltip
            title="User's badges received based on a verification"
            transform="translate(-59%, -11%)"
            minWidth="170px"
            left="100%"
            top="-110%"
            height="0"
          >
            <Image src={iconsObj.iicon} width={16} height={16} alt="infoIcon" />
          </Tooltip>
        </Flex>
        <Button
          sx={{ ...btn, ...getBorder(!isBadges), paddingLeft: "16px", cursor: "pointer" }}
          // onClick={() => setIsBadges(false)}
          onClick={() => notifComingSoon("References is coming soon")}
          // disabled={true}
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
