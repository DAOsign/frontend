import React from "react";
import { Box } from "theme-ui";
import iconsObj from "../../assets/icons";
import Icon from "../icon";
import styles from "./index.module.css";

type Props = {
  title: string;
  left: string;
  top: string;
  transform: string;
  minWidth: string;
  height: undefined | string;
  children: string | JSX.Element | JSX.Element[];
};

const Tooltip = ({ children, left, top, transform, minWidth, title, height }: Props) => {
  return (
    <div style={{ paddingTop: 0 }} className={`${styles.tooltip} tooltip`}>
      <button className={`${styles.tooltip_button}`}> {children} </button>
      <div
        style={{
          top: top,
          left: left,
          transform: transform,
          pointerEvents: "none",
          minWidth: minWidth,
          height: height ? height : "100px",
        }}
        className={`${styles.tooltip_container}`}
      >
        <div
          style={{ justifyContent: "center", pointerEvents: "none" }}
          className={`${styles.tooltip_text}`}
        >
          {title}
        </div>
        <Box className="arrowTooltip" sx={{ width: "15px", height: "6px", marginLeft: "50.5%" }}>
          <Icon src={iconsObj.arrowTooltip} width="15px" height="6px" />
        </Box>
      </div>
    </div>
  );
};

export default Tooltip;
