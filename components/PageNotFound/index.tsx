import React from "react";
import { Button, Container, Flex, Text, Box } from "theme-ui";
import { useRouter } from "next/router";
import iconsObj from "../../assets/icons";
import Icon from "../icon";
import {
  leftSideContainer,
  rightSideContainer,
  buttonContainer,
  leftContainer,
  iconContainer,
  pageContainer,
  secondText,
  pageText,
} from "./styles";

export default function PageNotFound() {
  const { push } = useRouter();
  return (
    <Flex sx={pageContainer}>
      <Container sx={leftSideContainer}>
        <Flex sx={leftContainer}>
          <Box sx={iconContainer}>
            <Icon src={iconsObj.error} />
          </Box>
          <Flex sx={{ pb: "12px" }}>
            <Text sx={pageText}>Page Not Found</Text>
          </Flex>
          <Flex>
            <Text sx={secondText}>{`Sorry, we couldn't find the page you are looking for`}</Text>
          </Flex>
          <Button onClick={() => push("/")} sx={buttonContainer} type="button">
            Go Home
          </Button>
        </Flex>
      </Container>
      <Flex sx={{ ml: "auto", mr: "auto" }}>
        <Box sx={rightSideContainer}>
          <Icon src={iconsObj.LostConnection} />
        </Box>
      </Flex>
    </Flex>
  );
}
