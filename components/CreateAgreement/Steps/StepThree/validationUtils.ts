export const validateEnsDomains = (value: string) => {
  const isValidEns = value.match(/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/);
  if (!isValidEns) {
    return "Invalid ENS name";
  }
};

export const validateAddress = (value: string) => {
  const isValidAddress = value.match(/^0x[a-fA-F0-9]{40}$/);
  if (!isValidAddress) {
    return "Invalid wallet address";
  }
};
