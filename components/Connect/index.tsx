import React, { useEffect, useState } from "react";
import { useLock } from "../../hooks/useLock";
import { Button, Container, Heading, Text } from "theme-ui";
import {title, container} from "./styles";

export default function Connect({setAddres}: any) {
  const lock = useLock();
  console.log(lock);

  useEffect(() => {
    setAddres(lock?.provider?.safe?.safeAddress || lock?.provider?.selectedAddress || lock?.provider?.accounts[0] || "");
  }, [lock]);

  const connect = async (name: any) => {
    const res = await lock.login(name);
    console.log("res", res);
  };

  return (
    <Container sx={container}>
      <Heading  sx={title}>
        Connect a Wallet
      </Heading>
      <Button type="button" variant="primary" onClick={() => connect("injected")}>
        MetaMask
      </Button>
      <Button type="button" variant="primary" onClick={() => connect("walletconnect")}>
        Wallet Connect
      </Button>
      <Button type="button" variant="primary" onClick={() => connect("walletlink")}>
        Coinbase Wallet
      </Button>
      <Text variant="secondary" sx={{ maxWidth: "220px", display: "inline-block" }}>
        By connecting a wallet, you agree to our Terms of Service
      </Text>
    </Container>
  );
}

//   const getProvider = () => {
//     console.log("provider", lock.provider);
//   };

//   const getLock = () => {
//     console.log("lock", lock.lockClient);
//   };

//   const showLoginModal = async () => {
//     setVisible(true)
//   };

//   const logout = () => {
//     lock.logout();
//   };

// <div>
//   <div>
//     {lock.isLoading
//       ? "Loading..."
//       : `Authenticated: ${String(lock.isAuthenticated)}`}
//   </div>
//   <div>Address === {address}
//   </div>
//  { visible &&   <div className="popup">
//      <button className="close" type="button" onClick={() => setVisible(false)}>close</button>
//    <div className="buttons">
//      <button type="button" onClick={() => connect('injected')}>Metamask</button>
//      <button type="button" onClick={() => connect('walletconnect')}>Connect Wallet</button>
//      <button type="button" onClick={() => connect('walletlink')}>Connect Coinbase Wallet</button>
//    </div>
//   </div>
//   }
//   <br />
//   <button onClick={showLoginModal}>Login</button>
//   <br />
//   <button onClick={logout}>Logout</button>
//   <br />
//   <br />
//   <button disabled={!lock.isAuthenticated} onClick={getProvider}>
//     Log Provider
//   </button>
//   <br />
//   <button onClick={getLock}>Log Lock</button>
// </div>
