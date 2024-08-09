import React, { useState } from "react";
import { Box, Flex } from "theme-ui";
import { option, arrowOpen, arrow, menuOpen, menu, selected as selectedContainer } from "./styles";
import ArrowLeftPink from "../ArrowLeftPink";

export interface Option {
  label: string;
  title: string;
  value: unknown;
  icon: string;
  disabled?: boolean;
}

type Props = { options: Option[]; selected: Option; onSelect: (option: Option) => void };

export default function Select({ options, selected, onSelect }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: Option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <Box
      className="settingImportSnapshotProposal"
      style={{
        position: "relative",
        boxShadow: isOpen ? "0px 4px 32px rgba(33, 33, 33, 0.16)" : "none",
      }}
    >
      <Flex sx={selectedContainer} onClick={() => setIsOpen(prev => !prev)}>
        {selected?.label}
        <Box sx={isOpen ? arrowOpen : arrow}>
          <ArrowLeftPink />
        </Box>
      </Flex>
      <Box sx={isOpen ? menuOpen(options.length) : menu}>
        {options.map(o => (
          <Box key={o.value as string} sx={option} onClick={() => handleSelect(o)}>
            {o.label}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
