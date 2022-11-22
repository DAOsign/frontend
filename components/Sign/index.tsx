import React, { useState } from "react";
import { Box, Button, Input } from "theme-ui";
import { useLock } from "../../hooks/useLock";

export default function Sign() {
  const [value, setValue] = useState<string>("");
  const { provider, sign } = useLock();

  const handleSign = async () => {
    console.log(provider);
    sign(value)
  };



  return (
    <Box>
      <Input
        type={"text"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        sx={{ border: "1px solid silver", mx: "auto", mb: "10px" }}
      />
      <Button variant="primary" onClick={handleSign}>
        Sign
      </Button>
    </Box>
  );
}
