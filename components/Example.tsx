import React, { useState } from "react";
import { useLock } from "../hooks/useLock";

export default function Example() {
  const [visible, setVisible] = useState<boolean>()
  const lock = useLock();

  const getProvider = () => {
    console.log("provider", lock.provider);
  };

  const getLock = () => {
    console.log("lock", lock.lockClient);
  };

  const login = async () => {
    setVisible(true)
  };

  const connectMetamask = async () => {
    const res = await lock.login("injected");
    console.log("res", res);
  }

 const connectWallet = async () => {
  const res = await lock.login("walletconnect");
  console.log("res", res);
 }

 const connectGnosis = async () => {
  const res = await lock.login("gnosis");
  console.log("res", res);
 }

 const connectStargazer = async () => {
  const res = await lock.login("stargazer");
  console.log("res", res);
 }

  const logout = () => {
    lock.logout();
  };

  return (
    <div>
      <div>
        {lock.isLoading
          ? "Loading..."
          : `Authenticated: ${String(lock.isAuthenticated)}`}
      </div>
     { visible &&   <div className="popap">
         <button className="close" type="button" onClick={() => setVisible(false)}>close</button>
       <div className="buttons">
         <button type="button" onClick={connectMetamask}>Metamask</button>
         <button type="button" onClick={connectWallet}>Connect Wallet</button>
         <button type="button" onClick={connectGnosis}>Connect Gnosis</button>
         <button type="button" onClick={connectStargazer}>Connect Gnosis</button>
       </div>
      </div>
      }
      <br />
      <button onClick={login}>Login</button>
      <br />
      <button onClick={logout}>Logout</button>
      <br />
      <br />
      <button disabled={!lock.isAuthenticated} onClick={getProvider}>
        Log Provider
      </button>
      <br />
      <button onClick={getLock}>Log Lock</button>
    </div>
  );
}
