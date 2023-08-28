import React, { useState } from "react";
import { Flex, Text, Button, Link, Box } from "theme-ui";
import Image from "next/image";
import Tooltip from "../Tooltip";
import iconsObj from "../../assets/icons";
import { userName, badges, references, profileSection, verificationBtn } from "./styles";

import { btn } from "../PublicProfile/styles";
import { VerificationBadges } from "./VerificationBadges";
import { VerificationsCards } from "./VerificationsCard";

export default function Score() {
  const [isBadges, setIsBadges] = useState(true);
  const getBorder = (value: boolean) => {
    return {
      borderBottom: value ? "2px solid #212121!important" : "#EDEDF3",
      opacity: value ? 1 : 0.5,
    };
  };
  return (
    <Flex sx={{ ...profileSection, marginTop: "40px", flexDirection: "column" }}>
      <Box>
        <Text sx={{ ...userName, textAlign: "start" }}>Verifications</Text>
      </Box>

      <Flex sx={{ width: "fit-content" }}>
        <Button
          sx={{ ...btn, ...verificationBtn, ...getBorder(isBadges) }}
          onClick={() => setIsBadges(true)}
        >
          <Text sx={{ marginRight: "2px" }}>Verification Badges</Text>
          <Tooltip
            title="User's badges received based on a verification"
            transform="translate(-58%, -11%)"
            minWidth="170px"
            left="120%"
            top="-330%"
            height="0"
          >
            <Image src={iconsObj.iicon} width={16} height={16} alt="socialIcon" />
          </Tooltip>
        </Button>
        <Button
          sx={{ ...btn, ...getBorder(!isBadges), paddingLeft: "16px" }}
          onClick={() => setIsBadges(false)}
        >
          References
        </Button>
      </Flex>
      <Flex>
        <VerificationsCards />
      </Flex>
    </Flex>
  );
}
