import React from "react";
import { Flex, Button, Container, Text, Link } from "theme-ui";
import Identicon from "../Identicon/Identicon";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { userFoto, btnUserFoto, userName } from "./styles";

export default function UserFoto({ address, setVisible }: any) {
  const { width } = useWindowDimensions();
  return (
    <Flex
      sx={{
        alignItems: "center",
        flexDirection: "column",
        minWidth: "fit-content",
      }}
    >
      <Identicon account={address} size={width && width > 375 ? 180 : 120} sx={userFoto} />
      <Button onClick={setVisible} sx={btnUserFoto}>
        Edit Profile
      </Button>
    </Flex>
  );
}
