import React from "react";
import { FieldError } from "../../types";
import { Text } from "theme-ui";

interface Props {
  error: FieldError;
}

function FieldErrorMessage({ error }: Props) {
  return error ? (
    <div style={{ position: "relative" }}>
      <Text sx={{ variant: "forms.inputError" }}>* {error}</Text>{" "}
    </div>
  ) : null;
}

export default FieldErrorMessage;
