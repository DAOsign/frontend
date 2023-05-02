export const validateEnsDomains = (value: string): string | undefined => {
  const isValidEns = value.match(/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/);
  if (!isValidEns) {
    return "Invalid ENS name";
  }
};

export const validateAddress = (value: string): string | undefined => {
  const isValidAddress = value.match(/^0x[a-fA-F0-9]{40}$/);
  if (!isValidAddress) {
    return "Invalid wallet address";
  }
};

export const validateEmail = (value: string): string | undefined => {
  const isValidEmail = value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
  if (!isValidEmail) {
    return "Invalid email address";
  }
};
