import React from "react";
import { Box, Container, Flex, Text } from "theme-ui";
import Tooltip from "../Tooltip";
import {
  informationRow,
  informationRowName,
  informationRowValue,
  informationRowValueText,
} from "./styles";

interface Props {
  name: string;
  value: string | React.ReactElement;
  tooltipValue?: string;
  left?: string;
  className?: string;
}

export const InformationRow = ({
  name,
  value,
  tooltipValue,
  left = "-195px",
  className,
}: Props) => {
  return (
    <Container>
      <Flex sx={informationRow}>
        <Box sx={informationRowName}>{name}</Box>
        <Flex className="rowInformation" sx={informationRowValue}>
          {tooltipValue ? (
            <Tooltip
              className={className}
              title={tooltipValue}
              minWidth="300px"
              left={left}
              top="-46px"
            >
              {value}
            </Tooltip>
          ) : (
            value
          )}
        </Flex>
      </Flex>
    </Container>
  );
};
