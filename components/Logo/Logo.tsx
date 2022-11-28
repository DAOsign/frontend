import React from "react";
import { Flex, Box, Text } from "theme-ui";
import iconsObj from "../../assets/icons";
import { container, logo, text, d, a, o, iconLogo } from "./styles";
import Icon from "../icon";

export function LogoAnimate({ margin = "0 auto" }) {
  return (
    <div className="animateLogo">
      <Flex sx={{ justifyContent: "center", cursor: "pointer" }}>
        <Box sx={iconLogo}>
          <Icon width="100%" height="100%" src={iconsObj.logoIcon} />
        </Box>
        <Box sx={container}>
          <Flex sx={logo}>
            <Box sx={d}>
              <Icon width="100%" height="100%" src={iconsObj.dLogo} />
            </Box>
            <Box sx={a}>
              <Icon width="100%" height="100%" src={iconsObj.aLogo} />
            </Box>
            <Box sx={o}>
              <Icon width="100%" height="100%" src={iconsObj.oLogo} />
            </Box>
          </Flex>
          <Text color="#CA5CF2" sx={text}>
            sign
          </Text>
        </Box>
      </Flex>
    </div>
  );
}

export function Logo({ margin = "0 auto" }) {
  return (
    <div style={{ height: "48px", margin: "0 auto 0 0" }}>
      <Flex sx={{ justifyContent: "center", cursor: "pointer" }}>
        <Box>
          <Icon width="48px" src={iconsObj.logoIcon} />
        </Box>
        <Box sx={{ ml: "8px" }}>
          <Flex>
            <Box>
              <Icon width="28px" height="28px" src={iconsObj.dLogo} />
            </Box>
            <Box>
              <Icon width="28px" height="28px" src={iconsObj.aLogo} />
            </Box>
            <Box>
              <Icon width="28px" height="28px" src={iconsObj.oLogo} />
            </Box>
          </Flex>
          <Text
            color="#CA5CF2"
            sx={{ ...text, position: "static", animation: "unset" }}
          >
            sign
          </Text>
        </Box>
      </Flex>
    </div>
  );
}
