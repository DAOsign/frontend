import React from "react";
import { Box, Flex, Text } from "theme-ui";
import iconsObj from "../../assets/icons";
import Image from "next/image";

export default function TestnetIndicator({ sx }: any) {
  return (
    <Flex
      sx={{
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "12px",
        bg: "#F5D549",
        lineHeight: "120%",
        p: "14px 16px 10px",
        mb: "32px",
        ...sx,
      }}
    >
      <Flex sx={{ alignItems: "flex-end", gap: "8px" }}>
        <Image src={iconsObj.warning} alt="warning" width={"30px"} height="30px" />
        <Text sx={{ lineHeight: "125%", fontWeight: "700", fontSize: "28px" }}>TESTNET</Text>
      </Flex>
      <Box
        sx={{
          lineHeight: "inherit",
          fontWeight: "500",
          fontSize: "14px",
          "@media screen and (max-width: 509px)": { textAlign: "center" },
        }}
      >
        Please note! The release is for reference only. <br /> All created agreements are not
        transferred to mainnet
      </Box>
    </Flex>
  );
}
