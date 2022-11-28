export const formatAddress = (address: string) => {
<<<<<<< HEAD
  return address.length > 14 ? `${address.slice(0, 10)} ... ${address.slice(-4)}` : address;
};
=======
    return address?.length > 14
      ? `${address.slice(0, 10)} ... ${address.slice(-4)}`
      : address;
  };
>>>>>>> 3cd6dc35758ab2c422d2171a3e30abd7cdcd9291

export function uniqueId() {
  let first: number = (Math.random() * 46656) | 0;
  let second: number = (Math.random() * 46656) | 0;
  return first + second;
}
