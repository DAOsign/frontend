import React from "react";
import { Flex, Button, Container, Text, Link } from "theme-ui";
import Identicon from "../Identicon/Identicon";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { userPhoto, btnUserPhoto, userName } from "./styles";

export default function UserPhoto({ address, setVisible }: any) {
  const { width } = useWindowDimensions();
  return (
    <Flex
      sx={{
        alignItems: "center",
        flexDirection: "column",
        minWidth: "fit-content",
      }}
    >
      <Identicon account={address} size={width && width > 375 ? 180 : 120} sx={userPhoto} />
      <Button onClick={setVisible} sx={btnUserPhoto}>
        Edit Profile
      </Button>
    </Flex>
  );
}
