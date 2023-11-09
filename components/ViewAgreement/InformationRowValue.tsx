import React from "react";
import { Box, Text } from "theme-ui";

interface Props {
  text: string;
  icon?: React.ReactElement;
  onClick?: () => void;
  className?: string;
}

export const InformationRowValue = ({
  text,
  icon,
  onClick,
  className = "signature_icon",
}: Props) => {
  return (
    <Box
      className={className}
      sx={{
        cursor: onClick ? "pointer" : "default",
        color: "#000",
        display: "flex",
        alignItems: "center",
        gap: "4px",
      }}
      onClick={() => {
        onClick && onClick();
      }}
    >
      <Text sx={{ fontSize: "16px" }}>{text}</Text>
      {icon}
    </Box>
  );
};
