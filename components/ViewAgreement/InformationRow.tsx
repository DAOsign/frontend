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
}

export const AGREEMENT_PROOF = "Agreement proof";
export const AUTHORITY_PROOF = "Authority proof";

export const InformationRow = ({ name, value, valueIcon, onIconClick }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    if (name === AGREEMENT_PROOF || name === AUTHORITY_PROOF) {
      setIsOpen(true);
    }
    return;
  };

  return (
    <Container>
      <Flex sx={informationRow}>
        <Box sx={informationRowName}>{name}</Box>
        {typeof value === "string" ? (
          <Flex onClick={onClick} sx={informationRowValue}>
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
      <ModalProof title={name} isOpen={isOpen} onExit={() => setIsOpen(!isOpen)} />
    </Container>
  );
};
