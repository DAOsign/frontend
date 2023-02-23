import React, { ReactNode } from "react";
import { modalContainer } from "./styles";
import { Flex, ThemeUIStyleObject } from "theme-ui";

interface Props {
  children: ReactNode;
  height: string;
  width?: string | undefined;
  sx?: ThemeUIStyleObject;
}

export const ModalBase = ({ children, height, width = "fit-content", sx }: Props) => {
  return <Flex sx={{ ...modalContainer, height, width, ...sx }}>{children}</Flex>;
};
