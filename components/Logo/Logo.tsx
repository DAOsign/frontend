import React from "react";
import { Box } from "theme-ui";
import iconsObj from "../../assets/icons";
import { logoWithoutAnimate } from "./styles";
import Icon from "../icon";

export function Logo() {
  return (
    <div style={{ height: "48px", margin: "0 auto 0 0" }}>
      <Box sx={logoWithoutAnimate}>
        <Icon src={iconsObj.logoHeader} />
      </Box>
    </div>
  );
}
