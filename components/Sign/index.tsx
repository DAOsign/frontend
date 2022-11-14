import React, { useState } from "react";
import { Box, Button, Input } from "theme-ui";
import { useLock } from "../../hooks/useLock";

export default function Sign() {
  const [value, setValue] = useState<string>("");
  const { provider } = useLock();

  const handleSign = async () => {
    console.log(provider);
  };

  const signMetamask = async () => {
    const signature = await provider.request({
      method: "personal_sign",
      params: [provider?.selectedAddress, value],
    });
  };

  const signCoinbase = async () => {
    await window.coinbaseSolana.connect();
    const signature = await window.coinbaseSolana.signMessage(value);
    console.log("signature", signature);
  };

  const signWalletConnect = async () => {
    const res = await provider.request({
      method: "eth_sign",
      params: [provider?.accounts[0], value],
    });
    console.log(res)
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
