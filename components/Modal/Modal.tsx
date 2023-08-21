import React from "react";
import { Button, Container, Flex, Heading, Text } from "theme-ui";
import CloseIcon from "../CloseIcon";
import styles, { btnCancel } from "./styles";

export default function Modal() {
  return (
    <Container
      sx={{
        position: "absolute",
        width: "100%",
        height: "113vh",
        bg: "#00000099",
        top: "-80px",
        zIndex: "1",
      }}
    >
      <Container sx={styles}>
        <Button
          style={{
            position: "absolute",
            top: "10px",
            zIndex: 3,
            right: "9px",
            opacity: 0.5,
            width: "55px",
            backgroundColor: "unset",
          }}
        >
          <CloseIcon />
        </Button>
        <Heading sx={{ variant: "text.h2", mb: "16px" }} as="h1">
          Are You Sure?
        </Heading>
        <Text
          sx={{ variant: "text.smallTextMedium", opacity: 1, mb: "60px", display: "inline-block" }}
        >
          All unsaved data will be lost
        </Text>
        <Flex>
          <Button
            sx={{ variant: "buttons.secondary", width: "100px", border: "unset", opacity: 0.5 }}
          >
            Apply
          </Button>
          <Button sx={btnCancel}>Cancel</Button>
        </Flex>
      </Container>
    </Container>
  );
}
