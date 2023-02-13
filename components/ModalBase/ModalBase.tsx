import React, { ReactNode } from "react";
import { modalContainer } from "./styles";
import { Flex } from "theme-ui";

interface Props {
  children: ReactNode;
  height: string;
  width: string | undefined;
}

export const ModalBase = ({ children, height, width = "fit-content" }: Props) => {
  return <Flex sx={{ ...modalContainer, height, width }}>{children}</Flex>;
};
