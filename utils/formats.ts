export const formatAddress = (address: string) => {
    return address?.length > 14
      ? `${address.slice(0, 10)} ... ${address.slice(-4)}`
      : address;
  };

export function uniqueId() {
    let first: number = (Math.random() * 46656) | 0
    let second: number = (Math.random() * 46656) | 0
    return first + second
}