import { STATUS_READY_TO_SIGN } from "../types";
import { format } from "date-fns";

export const formatAddress = (address: string) => {
  return address?.length > 14 ? `${address.slice(0, 6)}...${address.slice(-4)}` : address;
};

export function uniqueId() {
  let first: number = (Math.random() * 46656) | 0;
  let second: number = (Math.random() * 46656) | 0;
  return first + second;
}

export const onCopyClick = (text: string) => {
  navigator.clipboard.writeText(`${text}`);
};

export const formatAgreementStatus = (agreementStatus: string | undefined): string => {
  if (!agreementStatus) return "";
  switch (agreementStatus) {
    case STATUS_READY_TO_SIGN:
      return "Ready to Sign";
    default:
      return agreementStatus;
  }
};

export const formatAgreementCreationDate = (date: Date | string | number): string => {
  if (!date) return "";
  const dateJS = new Date(date);
  return format(dateJS, "MMM d, yyyy");
};
