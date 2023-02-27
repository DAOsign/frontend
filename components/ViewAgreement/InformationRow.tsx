import React from "react";
import { Box, Container, Flex } from "theme-ui";
import { informationRow, informationRowName, informationRowValue } from "./styles";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

interface Props {
  name: string;
  value: string | React.ReactElement;
  tooltipValue?: string;
}

export const InformationRow = ({ name, value, tooltipValue }: Props) => {
  return (
    <Container>
      <Flex sx={informationRow}>
        <Box sx={informationRowName}>{name}</Box>
        <Flex
          sx={informationRowValue}
          data-tooltip-id={tooltipValue}
          data-tooltip-content={tooltipValue}
        >
          {value}
        </Flex>
        {tooltipValue && <Tooltip content={tooltipValue} id={tooltipValue} />}
      </Flex>
    </Container>
  );
};
