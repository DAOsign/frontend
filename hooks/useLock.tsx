import { useContext } from "react";
import { LockContext } from "../modules/lockProvider";

export const useLock = () => {
  return useContext(LockContext);
};
