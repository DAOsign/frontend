import React, { useState } from "react";
import { Container, Flex, Input, Text, Box, Checkbox } from "theme-ui";
import iconsObj from "../../assets/icons";
import CheckboxComponent from "../Checkbox";

import Icon from "../icon";
import {
  container,
  title,
  conteinerHeader,
  secondaryTitle,
  text,
  iconClose,
  icon,
  conteinerCheckbox,
  clear,
} from "./styles";

export default function Filter({ setVisible, onChange, reset, filterOptions }: any) {
  return (
    <Container onClick={e => e.stopPropagation()} sx={container}>
      <Flex
        onClick={() => {
          setVisible(false);
        }}
        sx={conteinerHeader}
      >
        <Text sx={title}>Filter by:</Text>
        <Box sx={icon}>
          <Icon src={iconsObj.chevronUp} />
        </Box>
        <Box sx={iconClose}>
          <Icon src={iconsObj.xClose} />
        </Box>
      </Flex>
      <Container>
        <Text sx={secondaryTitle}>Status</Text>
        {filterOptions.status.map((el: any) => {
          return (
            <Flex
              onClick={() => onChange(el.id)}
              sx={{ ...conteinerCheckbox, opacity: el.value ? 1 : 0.5, position: "relative" }}
              key={el.id}
            >
              <CheckboxComponent disabled={false} checked={el.value} />
              <Text sx={text}>{el.name}</Text>
            </Flex>
          );
        })}
        <Text sx={secondaryTitle}>Permission</Text>
        {filterOptions.permission.map((el: any) => {
          return (
            <Flex
              onClick={() => onChange(el.id)}
              sx={{ ...conteinerCheckbox, opacity: el.value ? 1 : 0.5, position: "relative" }}
              key={el.id}
            >
              <CheckboxComponent disabled={false} checked={el.value} />
              <Text sx={text}>{el.name}</Text>
            </Flex>
          );
        })}
        <Text sx={secondaryTitle}>Signature</Text>
        <Flex
          sx={{
            ...conteinerCheckbox,
            opacity: filterOptions.signature.value ? 1 : 0.5,
            position: "relative",
          }}
          onClick={() => onChange(filterOptions.signature.id)}
        >
          <CheckboxComponent disabled={false} checked={filterOptions.signature.value} />
          <Text sx={text}>{filterOptions.signature.name}</Text>
        </Flex>

        <Text onClick={reset} sx={clear}>
          Clear All
        </Text>
      </Container>
    </Container>
  );
}
