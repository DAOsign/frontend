import React from "react";
import { Box, Flex } from "theme-ui";
import { informationRow, informationRowName, informationRowValue } from "./styles";

interface Props {
  name: string;
  value: string | React.ReactElement;
  valueIcon?: string;
}

export const InformationRow = ({ name, value, valueIcon }: Props) => {
  return (
    <Flex sx={informationRow}>
      <Box sx={informationRowName}>{name}</Box>
      {typeof value === "string" ? (
        <Flex sx={informationRowValue}>
          {value}
          {valueIcon || null}
        </Flex>
      ) : (
        value
      )}
    </Flex>
  );
};
