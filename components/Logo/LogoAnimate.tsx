/* eslint-disable react/display-name */
import React, { useEffect, useRef } from "react";
import { Flex, Box, Text } from "theme-ui";
import iconsObj from "../../assets/icons";
import { container, logo, text, d, a, o, iconLogo } from "./styles";
import Icon from "../icon";

export default React.memo(() => {
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
});
