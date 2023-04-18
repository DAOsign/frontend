import React from "react";
import { FieldError } from "../../types";
import { Box, Text, ThemeUIStyleObject } from "theme-ui";

interface Props {
  error: FieldError;
  isAbsolutePosition?: boolean;
  sx?: ThemeUIStyleObject;
}

function FieldErrorMessage({ error, isAbsolutePosition = true, sx = {} }: Props) {
  return error ? (
    <Box sx={{ position: "relative" }}>
      <Text
        sx={{
          variant: "forms.inputError",
          position: isAbsolutePosition ? "absolute" : "relative",
          marginBottom: isAbsolutePosition ? "-20px" : "0",
          ...sx,
        }}
      >
        {error}
      </Text>
    </Box>
  ) : null;
}

export default FieldErrorMessage;
