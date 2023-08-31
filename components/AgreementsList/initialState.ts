export const initialStatus = [
  { value: false, name: "Draft", id: 1, nameSecondary: "draft" },
  { value: false, name: "Partially Signed", id: 2, nameSecondary: "partiallySigned" },
  { value: false, name: "Ready to Sign", id: 3, nameSecondary: "readyToSign" },
  { value: false, name: "Signed", id: 4, nameSecondary: "signed" },
];

export const initialStatusProfile = [
  { value: false, name: "Draft", id: 1, nameSecondary: "draft" },
  { value: false, name: "Partially Signed", id: 2, nameSecondary: "partiallySigned" },
  { value: false, name: "Ready to Sign", id: 3, nameSecondary: "readyToSign" },
  { value: true, name: "Signed", id: 4, nameSecondary: "signed" },
];

export const initialPermission = [
  { value: false, name: "Public", id: 5, nameSecondary: "published" },
  { value: false, name: "Private", id: 6, nameSecondary: "private" },
];

export const initialPermissionProfile = [
  { value: true, name: "Public", id: 5, nameSecondary: "published" },
  { value: false, name: "Private", id: 6, nameSecondary: "private" },
];

export const initialSignature = {
  value: false,
  name: "Waiting for my signature",
  nameSecondary: "waitingForMySignature",
  id: 7,
};
//withLink
//proofOnly
