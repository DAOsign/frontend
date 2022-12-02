import React from "react";
import { Flex, Box, Text } from "theme-ui";
import iconsObj from "../../assets/icons";
import { text } from "./styles";
import Icon from "../icon";

export function Logo({ margin = "0 auto" }) {
  return (
    <div style={{ height: "48px", margin: "0 auto 0 0" }}>
      <Flex sx={{ justifyContent: "center", cursor: "pointer" }}>
        <Box sx={{ width: "43px" }}>
          <Icon src={iconsObj.logoIcon} />
        </Box>
        <Box sx={{ ml: "8px" }}>
          <Flex>
            <Box sx={{ width: "32px", height: "30px" }}>
              <Icon width="28px" height="28px" src={iconsObj.dLogo} />
            </Box>
            <Box sx={{ width: "32px", height: "30px" }}>
              <Icon width="28px" height="28px" src={iconsObj.aLogo} />
            </Box>
            <Box sx={{ width: "32px", height: "30px" }}>
              <Icon width="28px" height="28px" src={iconsObj.oLogo} />
            </Box>
          </Flex>
          <Text
            color="#CA5CF2"
            sx={{ ...text, position: "static", animation: "unset", fontSize: "18px" }}
          >
            sign
          </Text>
        </Box>
      </Flex>
    </div>
  );
}
