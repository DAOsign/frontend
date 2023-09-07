import React from "react";
import { Flex, Text, Box } from "theme-ui";
import { container, title, subTitle, infoContainer } from "./styles";

const data = [
  { title: "Email", subTitle: "johndoe@mail.com" },
  { title: "Phone", subTitle: "(219) 555-0114" },
  {
    title: "Bio",
    subTitle:
      "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies.",
  },
];

const Info = () => {
  return (
    <>
      <Flex sx={container}>
        {data.map((el, i) => {
          return (
            <Flex sx={infoContainer} key={i}>
              <Text sx={{ ...title, minWidth: "55px" }}>{el.title}</Text>
              <Text sx={subTitle}>{el.subTitle}</Text>
            </Flex>
          );
        })}
      </Flex>
    </>
  );
};

export default Info;
