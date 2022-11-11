export const formatAddress = (address: string) => {
    return address.length > 14
      ? `${address.slice(0, 10)} ... ${address.slice(-4)}`
      : address;
  };