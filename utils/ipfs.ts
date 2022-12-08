const Hash = require("ipfs-only-hash");

export const calculateIpfsHash = async (file: File) => {
  const buffer = await file.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  return await Hash.of(bytes);
};
