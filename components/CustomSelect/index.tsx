import React, { useState } from "react";
import { Container, Flex, Text, Input, Box, Label } from "theme-ui";
import { motion } from "framer-motion";
import ArrowLeftPink from "../ArrowLeftPink";
import { iconsRotate, iconsRotateMobile, variantsCustomSelect } from "../../utils/animation";
import { containerSelect, flexSelect, icon, inputSearch, itemOption, titleSelect } from "./styles";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Image from "next/image";
import { SelectOption } from "../../types";

interface Props {
  value: string | undefined;
  label?: string;
  onChange: (value: string) => void;
  options: SelectOption[];
}

const CustomSelect = ({ value, options, label, onChange }: Props) => {
  const { width }: any = useWindowDimensions();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSelectClick = (el: SelectOption) => {
    onChange(el.title);
    setSearchValue("");
    setIsOpen(false);
  };

  const valuesIcon = value
    ? options.find(el => el.title.toLowerCase() === value.toLowerCase())?.icon
    : null;

  const optionsFilter =
    searchValue !== ""
      ? options.filter(el => el.title.toLowerCase().includes(searchValue.toLowerCase()))
      : options;

  const onInputSearchClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  return (
    <>
      {label && <Label sx={{ textAlign: "left", ml: "5px" }}>{label}</Label>}
      <Container
        sx={{
          ...containerSelect,
          borderRadius: isOpen ? "8px 8px 0 0" : "8px",
        }}
      >
        <motion.div
          variants={variantsCustomSelect}
          animate={isOpen ? "enter" : "hidden"}
          transition={{ type: "linear" }}
          initial="hidden"
          style={{
            boxShadow: isOpen ? "0px 4px 32px rgba(33, 33, 33, 0.16)" : "none",
            overflowX: "hidden",
          }}
        >
          <Flex
            sx={{
              ...flexSelect,
              borderRadius: isOpen ? "8px 8px 0 0" : "8px",
              "&:hover > div  svg > path": {
                stroke: "#AE4FD0",
              },
            }}
          >
            {isOpen ? (
              <Input
                onChange={e => setSearchValue(e.target.value)}
                onClick={onInputSearchClick}
                value={searchValue}
                placeholder={value}
                sx={inputSearch}
              />
            ) : (
              <Flex
                sx={{ gap: "10px", alignItems: "center", width: "100%" }}
                onClick={() => setIsOpen(true)}
                className="itemSelect"
              >
                <Box sx={{ minWidth: "24px", height: "24px" }}>
                  {valuesIcon && <Image src={valuesIcon} width={"24px"} height={"24px"} />}
                </Box>
                <Text onClick={() => setIsOpen(true)} sx={titleSelect}>
                  {value}
                </Text>
              </Flex>
            )}
            <motion.div
              variants={width < 480 ? iconsRotateMobile : iconsRotate}
              animate={isOpen ? "enter" : "hidden"}
              transition={{ type: "linear" }}
              initial="hidden"
            >
              <Box onClick={() => setIsOpen(!isOpen)} sx={icon}>
                <ArrowLeftPink />
              </Box>
            </motion.div>
          </Flex>
          <Container sx={{ ...itemOption, maxHeight: "178px" }}>
            {optionsFilter.map((el: any, i: number) => (
              <Flex
                sx={{ ...flexSelect, "&:hover": { backgroundColor: "#D8D8E2" } }}
                onClick={() => handleSelectClick(el)}
                className="itemSelect"
                key={i}
              >
                {el.icon && <Image src={el.icon} width={"24px"} height={"24px"} />}
                <Text sx={titleSelect}>{el.title}</Text>
              </Flex>
            ))}
          </Container>
        </motion.div>
      </Container>
    </>
  );
};

export default CustomSelect;
