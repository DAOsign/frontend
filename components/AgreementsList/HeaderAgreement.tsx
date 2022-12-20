import React, { useState } from "react";
import { Container, Flex, Input, Text, Box } from "theme-ui";
import iconsObj from "../../assets/icons";
import Filter from "../Filter";
import Icon from "../icon";

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

const initialStatus = [
  { value: false, name: "Draft", id: 1 },
  { value: false, name: "Partially Signed", id: 2 },
  { value: false, name: "Ready to Sign", id: 3 },
  { value: false, name: "Signed", id: 4 },
];

const initialPermission = [
  { value: false, name: "Public", id: 5 },
  { value: false, name: "Private", id: 6 },
];

const initialSignature = {
  value: false,
  name: "Waiting for my signature",
  id: 7,
};

export default function HeaderAgreement() {
  const [filterOptions, setFilterOptions] = useState({
    status: initialStatus,
    permission: initialPermission,
    signature: initialSignature,
  });
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

  return (
    <Container>
      <Flex sx={headerContainer}>
        <Container sx={searchContainer}>
          <Box sx={iconSearchContainer}>
            <Icon src={iconsObj.search} />
          </Box>
          <Input sx={{ variant: "forms.input", ...inputMyAgreement }} placeholder="Search" />
        </Container>
        <Container>
          <Flex onClick={() => setVisible(!visible)} sx={textContainer}>
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
        {[filterOptions.signature, ...filterOptions.permission, ...filterOptions.status]
          .filter(el => el.value)
          .map(el => {
            return (
              <Flex onClick={() => onChange(el.id)} sx={filterItem} key={el.id}>
                <Text sx={titleItem}>{el.name}</Text>
                <Box sx={delBth}>
                  <Icon src={iconsObj.xClose} />
                </Box>
              </Flex>
            );
          })}
      </Flex>
    </Container>
  );
}
