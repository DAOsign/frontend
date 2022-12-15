import React, { ReactNode } from "react";
import { modalContainer } from "./styles";
import { Flex } from "theme-ui";

interface Props {
  children: ReactNode;
}

export const ModalBase = ({ children }: Props) => {
  return <Flex sx={modalContainer}>{children}</Flex>;
};
