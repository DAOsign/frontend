import React, { useState } from "react";
import { Flex, Text, Button, Link, Box } from "theme-ui";
import { userName, badges, references, profileSection } from "./styles";
import { VerificationBadges } from "./VerificationBadges";

export default function Score() {
  return (
    <Flex sx={{ ...profileSection, marginTop: "40px", flexDirection: "column" }}>
      <Box>
        <Text sx={{ ...userName, textAlign: "start" }}>Score</Text>
      </Box>
      <Flex sx={{ paddingBottom: "38px" }}>
        <Link sx={badges}>Verifications</Link>
        <Link sx={references}>References</Link>
      </Flex>
    </Flex>
  );
}
