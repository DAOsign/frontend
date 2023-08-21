import React, { useState } from "react";
import { Container, Flex, Input, Text, Box, Button } from "theme-ui";
import iconsObj from "../../assets/icons";
import { btnClear } from "./styles";
import Filter from "../Filter";
import Icon from "../icon";
import { initialPermission, initialSignature, initialStatus } from "./initialState";
import {
  iconSearchContainer,
  inputMyAgreement,
  headerContainer,
  searchContainer,
  textContainer,
  filterItem,
  delBth,
  titleItem,
} from "./styles";

export default function HeaderAgreement({
  filterOptions,
  setFilterOptions,
  onChangeSearch,
  value,
}: any) {
  const [visible, setVisible] = useState(false);

  const onChange = (id: number) => {
    const updateStatus = (arr: any) =>
      arr.map((el: any) => {
        if (el.id === id) {
          return { ...el, value: !el.value };
        } else {
          return el;
        }
      });
    if (id === filterOptions.signature.id) {
      setFilterOptions({
        ...filterOptions,
        signature: { ...filterOptions.signature, value: !filterOptions.signature.value },
      });
    } else {
      setFilterOptions({
        status: updateStatus(filterOptions.status),
        permission: updateStatus(filterOptions.permission),
        signature: { ...filterOptions.signature },
      });
    }
  };

  const reset = () => {
    setFilterOptions({
      status: initialStatus,
      permission: initialPermission,
      signature: initialSignature,
    });
  };
  const filterValues = [
    filterOptions.signature,
    ...filterOptions.permission,
    ...filterOptions.status,
  ].filter(el => el.value);

  return (
    <Container>
      <Flex sx={headerContainer}>
        <Container sx={searchContainer}>
          <Box sx={iconSearchContainer}>
            <Icon src={iconsObj.search} />
          </Box>
          <Input
            sx={{ variant: "forms.input", ...inputMyAgreement }}
            placeholder="Search"
            value={value}
            onChange={e => onChangeSearch(e.target.value)}
          />
        </Container>
        <Container>
          <Flex
            onClick={() => setVisible(!visible)}
            sx={{
              ...textContainer,
              "&:hover": {
                border: visible ? "1px solid transparent" : "1px solid #00000040",
              },
              "&:focus": {
                border: visible ? "1px solid transparent" : "1px solid #00000040",
              },
            }}
          >
            <Text
              sx={{
                variant: "text.normalTextMedium",
                opacity: "0.5",
                mr: "4px",
                display: "inline-block",
              }}
            >
              Filter by:
            </Text>
            <Text>All</Text>
            <Box sx={{ width: "24px", height: "24px", ml: "12px" }}>
              <Icon src={iconsObj.chevronDown} />
            </Box>
            {visible ? (
              <Filter
                filterOptions={filterOptions}
                setVisible={setVisible}
                onChange={onChange}
                visible={visible}
                reset={reset}
              />
            ) : null}
          </Flex>
        </Container>
      </Flex>
      <Flex sx={{ flexWrap: "wrap" }}>
        {filterValues.map(el => {
          return (
            <Flex onClick={() => onChange(el.id)} sx={filterItem} key={el.id}>
              <Text sx={titleItem}>{el.name}</Text>
              <Box sx={delBth}>
                <Icon src={iconsObj.xClose} />
              </Box>
            </Flex>
          );
        })}
        {filterValues.length ? (
          <Button onClick={reset} sx={btnClear}>
            Clear All
          </Button>
        ) : null}
      </Flex>
      {visible ? (
        <Container
          onClick={() => setVisible(!visible)}
          sx={{ position: "fixed", left: 0, top: 0, width: "100%", height: "100%", zIndex: 1 }}
        />
      ) : null}
    </Container>
  );
}
