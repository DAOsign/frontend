import React from "react";
import { Flex, Text, Box } from "theme-ui";
import { container, title, subTitle, userName } from "./styles";

const Info = ({ address }: any) => {
  return (
    <>
      <Flex sx={container}>
        <Flex>
          <Text sx={title}>Email</Text>
          <Text sx={subTitle}>johndoe@mail.com</Text>
        </Flex>
        <Flex>
          <Text sx={title}>Phone</Text>
          <Text sx={subTitle}>(219) 555-0114</Text>
        </Flex>
        <Flex>
          <Text sx={title}>Bio</Text>
          <Text sx={subTitle}>
            Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est
            convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam.
            Donec finibus, urna bibendum ultricies.
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Info;
