import React from "react";
import { Box, Flex } from "theme-ui";
import {
  informationRow,
  informationRowName,
  informationRowValue,
  informationRowIcon,
} from "./styles";
import Icon from "../icon";

interface Props {
  name: string;
  value: string | React.ReactElement;
  valueIcon?: Icon;
  onIconClick?: () => void;
}

export const InformationRow = ({ name, value, valueIcon, onIconClick }: Props) => {
  return (
    <Flex sx={informationRow}>
      <Box sx={informationRowName}>{name}</Box>
      {typeof value === "string" ? (
        <Flex sx={informationRowValue}>
          {value}
          {valueIcon ? (
            <Box onClick={onIconClick ? onIconClick : () => {}} sx={informationRowIcon}>
              <Icon style={{ cursor: "pointer" }} src={valueIcon} />
            </Box>
          ) : null}
        </Flex>
      ) : (
        value
      )}
    </Flex>
  );
};
