import React from "react";
import UserCard from "./UserCard";
import { Flex, Button, Text, Container } from "theme-ui";
import { title, containerSides, noContent, btnText, btn } from "./styles";
import Icon from "../icon/index";
import iconsObj from "../../assets/icons";
import HeaderAgreement from "./HeaderAgreement";
import ItemMyAgreement from "./ItemMyAgreement";

export default function MyAgreement({ address }: any) {
  return (
    <Flex sx={containerSides}>
      <UserCard address={address} />
      <Container>
        <Flex>
          <Text sx={title}>My Agreement</Text>
          <Button sx={btn} type="button">
            <Icon src={iconsObj.plus} />
            <Text sx={btnText}>New Agreement</Text>
          </Button>
        </Flex>
        <HeaderAgreement />
        {false ? (
          <Container sx={{ textAlign: "center" }}>
            <Flex sx={noContent}>
              <Icon src={iconsObj.portfile} />
            </Flex>
            <Text
              sx={{ variant: "text.normalTextBold" }}
            >{`You don't have any agreements yet`}</Text>
          </Container>
        ) : (
          <ItemMyAgreement />
        )}
      </Container>
    </Flex>
  );
}
