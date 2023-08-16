import React, { useState } from "react";
import { Flex, Text, Button, Link, Box } from "theme-ui";
import { userName, badges, references, profileSection } from "./styles";

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
        <Button sx={{ ...btn, ...getBorder(isBadges) }} onClick={() => setIsBadges(true)}>
          Badges
        </Button>
        <Button sx={{ ...btn, ...getBorder(!isBadges) }} onClick={() => setIsBadges(false)}>
          References
        </Button>
      </Flex>
      <Flex>
        <VerificationsCards />
      </Flex>
    </Flex>
  );
}
