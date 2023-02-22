import React, { useState } from "react";
import { Box, Container, Flex } from "theme-ui";
import {
  informationRow,
  informationRowName,
  informationRowValue,
  informationRowIcon,
} from "./styles";
import Icon from "../icon";
import ModalProof from "../ModalProof";
import CopyIcon from "../CopyIcon";

interface Props {
  name: string;
  value: string | React.ReactElement;
  valueIcon?: Icon;
  onIconClick?: () => void;
  onClick?: () => void;
}

export const InformationRow = ({ name, value, valueIcon, onIconClick, onClick }: Props) => {
  return (
    <Container>
      <Flex sx={informationRow}>
        <Box sx={informationRowName}>{name}</Box>
        {typeof value === "string" ? (
          <Flex
            onClick={onClick}
            sx={{
              ...informationRowValue,
              cursor: value && value !== "-" && onClick ? "pointer" : "unset",
            }}
          >
            {value}
            {valueIcon ? (
              <Box onClick={onIconClick ? onIconClick : () => {}} sx={informationRowIcon}>
                <CopyIcon />
                {/* <Icon style={{ cursor: "pointer" }} src={valueIcon} /> */}
              </Box>
            ) : null}
          </Flex>
        ) : (
          value
        )}
      </Flex>
    </Container>
  );
};
