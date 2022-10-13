import { log } from "console";
import React, { useEffect, useState } from "react";
import { useLock } from "../hooks/useLock";

export default function Example() {
  const [visible, setVisible] = useState<boolean>()
  const [address, setAddres] = useState<string>()
  const lock = useLock();
  console.log(lock);
  console.log(address);
  
  useEffect(() => {
    setAddres(lock?.provider?.safe?.safeAddress || lock?.provider?.selectedAddress || lock?.provider?.accounts[0] || '')
  },[lock])

  const getProvider = () => {
    console.log("provider", lock.provider);
  };

  const getLock = () => {
    console.log("lock", lock.lockClient);
  };

  const showLoginModal = async () => {
    setVisible(true)
  };
const connect = async (name: any) => {
    const res = await lock.login(name);
    console.log("res", res );
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
      <div>Address === {address}
      </div>
     { visible &&   <div className="popup">
         <button className="close" type="button" onClick={() => setVisible(false)}>close</button>
       <div className="buttons">
         <button type="button" onClick={() => connect('injected')}>Metamask</button>
         <button type="button" onClick={() => connect('walletconnect')}>Connect Wallet</button>
         <button type="button" onClick={() => connect('walletlink')}>Connect Coinbase Wallet</button>
       </div>
      </div>
      }
      <br />
      <button onClick={showLoginModal}>Login</button>
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
