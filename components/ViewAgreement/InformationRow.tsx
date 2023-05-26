import React from "react";
import { Box, Container, Flex, Text } from "theme-ui";
import Tooltip from "../Tooltip";
import { informationRow, informationRowName, informationRowValue } from "./styles";

interface Props {
  name: string;
  value: string | React.ReactElement;
  tooltipValue?: string;
  left?: string;
  className?: string;
}

export const InformationRow = ({ name, value, tooltipValue, left, className }: Props) => {
  return (
    <Container>
      <Flex sx={informationRow}>
        <Box sx={informationRowName}>{name}</Box>
        <Flex className="rowInformation" sx={informationRowValue}>
          {left && tooltipValue ? (
            <Tooltip
              className={className}
              title={tooltipValue}
              height={undefined}
              minWidth="300px"
              left={left}
              top="-46px"
            >
              <Text sx={{ fontSize: "16px" }}>{value}</Text>
            </Tooltip>
          ) : (
            value
          )}
        </Flex>
      </Flex>
    </Container>
  );
};
