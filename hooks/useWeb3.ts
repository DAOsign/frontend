import { useContext } from "react";
import { AuthContext } from "../modules/authProvider";

export function useWeb3() {
  return useContext(AuthContext);
}
