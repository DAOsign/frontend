import React from "react";
import { Container, Flex, Text } from "theme-ui";
import iconsObj from "../../assets/icons";
import { formatAddress } from "../../utils/formats";
import { container } from "./styles";
import Icon from "../icon";
import { Logo } from "../Logo/Logo";

export default function Header({ address }: any) {
  return (
    <Container sx={container}>
      <Flex sx={{ justifyContent: "space-between" }}>
        <Logo margin="0 0 auto 0" />
        <Flex sx={{ alignItems: "center", flexDirection: "row" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              backgroundColor: "#F7F7FB",
              textAlign: "center",
              paddingTop: "9px",
              cursor: "pointer",
            }}
          >
            <Icon src={iconsObj.Bell} />
          </div>
          <Flex
            sx={{
              alignItems: "center",
              backgroundColor: "#F7F7FB",
              height: "44px",
              paddingX: "12px",
              borderRadius: "80px",
              ml: "20px",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                backgroundColor: "#000",
                marginRight: "8px",
              }}
            >
              {/* <Icon src={iconsObj.Bell}/> */}
            </div>
            <Text>{formatAddress(address)}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}
