import React, { useState } from "react";
import { Container, Flex, Input, Text, Box, Checkbox, Button } from "theme-ui";
import iconsObj from "../../assets/icons";
import CheckboxComponent from "../Checkbox";
import CloseIcon from "../IconComponent/CloseIcon";
import Icon from "../icon";
import {
  container,
  title,
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
      <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Text sx={title}>Filter by:</Text>
        <Box
          onClick={() => {
            setVisible(false);
          }}
          sx={{ ...icon, cursor: "pointer" }}
        >
          <Icon src={iconsObj.chevronUp} />
        </Box>
        <Box
          onClick={() => {
            setVisible(false);
          }}
          sx={{ ...iconClose }}
        >
          <CloseIcon />
        </Box>
      </Flex>
      <Container>
        <Text sx={{ ...secondaryTitle, "@media screen and (max-width: 768px)": { mt: "22px" } }}>
          Status
        </Text>
        {filterOptions.status.map((el: any, i: number) => {
          return (
            <Flex
              onClick={() => onChange(el.id)}
              sx={{
                ...conteinerCheckbox,
                opacity: el.value ? 1 : 0.5,
                position: "relative",
                mt: "10px",
                "@media screen and (max-width: 768px)": { mt: i === 0 ? "8px" : "12px" },
              }}
              key={el.id}
            >
              <CheckboxComponent disabled={false} checked={el.value} />
              <Text sx={text}>{el.name}</Text>
            </Flex>
          );
        })}
        <Text sx={secondaryTitle}>Permission</Text>
        {filterOptions.permission.map((el: any, i: number) => {
          return (
            <Flex
              onClick={() => onChange(el.id)}
              sx={{
                ...conteinerCheckbox,
                opacity: el.value ? 1 : 0.5,
                position: "relative",
                mt: "10px",
                "@media screen and (max-width: 768px)": { mt: i === 0 ? "8px" : "12px" },
              }}
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
            mt: "8px",
            position: "relative",
          }}
          onClick={() => onChange(filterOptions.signature.id)}
        >
          <CheckboxComponent disabled={false} checked={filterOptions.signature.value} />
          <Text sx={text}>{filterOptions.signature.name}</Text>
        </Flex>
        <Button onClick={reset} sx={clear}>
          Clear All
        </Button>
      </Container>
    </Container>
  );
}
