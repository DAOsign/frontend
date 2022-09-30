import React from "react";
import { useLock } from "../hooks/useLock";

export default function Example() {
  const lock = useLock();

  const getProvider = () => {
    console.log("provider", lock.provider);
  };

  const getLock = () => {
    console.log("lock", lock.lockClient);
  };

  const login = async () => {
    const res = await lock.login("injected");
    console.log("res", res);
  };

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
