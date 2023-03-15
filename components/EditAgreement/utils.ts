import {
  PRIVACY_PRIVATE,
  PRIVACY_PUBLIC_WITH_LINK,
  PRIVACY_PUBLIC_PROOF_ONLY,
  PRIVACY_PUBLIC_PUBLISHED,
} from "../../types";

export function privacyValueByName(name?: string) {
  if (!name) return "";
  switch (name) {
    case "Private":
      return PRIVACY_PRIVATE;
    case "Proof Only":
      return PRIVACY_PUBLIC_PROOF_ONLY;
    case "Published":
      return PRIVACY_PUBLIC_PUBLISHED;
    case "With Link":
      return PRIVACY_PUBLIC_WITH_LINK;
    default:
      return "";
  }
}
