import networks from "../../lib/snapshot/networks.json";
import { ConnectorType } from "../../lib/snapshot/options";
import { TypedDataField, TypedDataDomain } from "ethers";

export interface AuthProps {}

export interface AuthContext {
  login: (
    connector?: ConnectorType,
    email?: string,
    emailVerificationSalt?: string
  ) => Promise<any>;
  logout: () => void;
  account: string | null;
  authLoading: boolean;
  network: (typeof networks)[ChainId] | null;
  walletConnectType: string | null;
  sign: (message: string) => Promise<string>;
  signTypedData: (
    domain: TypedDataDomain,
    types: Record<string, TypedDataField[]>,
    value: Record<string, any>
  ) => Promise<string>;
  _signTypedData: (msg: any) => Promise<any>;
  resolveEns: (name: string) => Promise<string | undefined | null>;
  switchToMainnet: () => void;
}

export type ChainId = keyof typeof networks;

export interface Web3State {
  account: string | null;
  network: (typeof networks)[ChainId];
  authLoading: boolean;
  walletConnectType: string | null;
  profile: null;
  //isTrezor: boolean;
}

export interface LoginResponse {
  message?: string;
  error?: string;
  payload?: string;
  token?: string;
}
