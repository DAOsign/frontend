import React from "react";
import { FieldError } from "../../types";
import { Box, Text } from "theme-ui";

interface Props {
  error: FieldError;
  isAbsolutePosition?: boolean;
}

function FieldErrorMessage({ error, isAbsolutePosition = true }: Props) {
  return error ? (
    <Box sx={{ position: "relative" }}>
      <Text
        sx={{
          variant: "forms.inputError",
          position: isAbsolutePosition ? "absolute" : "relative",
          marginBottom: isAbsolutePosition ? "-20px" : "0",
        }}
      >
        * {error}
      </Text>
    </Box>
  ) : null;
}

export default FieldErrorMessage;
