import React from "react";
import { Flex } from "theme-ui";
import Identicon from "../../Identicon/Identicon";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { userFoto } from "./styles";

export default function UserFoto({ address }: any) {
  const { width } = useWindowDimensions();
  return (
    <Flex sx={{ alignItems: "center" }}>
      <Identicon account={address} size={width && width > 720 ? 180 : 120} sx={userFoto} />
    </Flex>
  );
}
