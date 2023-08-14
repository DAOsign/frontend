import React, { useState } from "react";
import { Flex, Text, Button, Link, Box } from "theme-ui";
import { userName, badges, references, profileSection } from "./styles";

import { btn } from "../PublicProfile/styles";
import { VerificationBadges } from "./VerificationBadges";

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
        <Text sx={{ ...userName, textAlign: "start" }}>Score</Text>
      </Box>

      <Flex sx={{ width: "fit-content", paddingBottom: "38px" }}>
        <Button sx={{ ...btn, ...getBorder(isBadges) }} onClick={() => setIsBadges(true)}>
          Verifications
        </Button>
        <Button sx={{ ...btn, ...getBorder(!isBadges) }} onClick={() => setIsBadges(false)}>
          References
        </Button>
      </Flex>
    </Flex>
  );
}
