import { useContext } from "react";
import { CreateAggrementContext } from "../modules/createAgreementProvider";

export function useCreateAgreement() {
  return useContext(CreateAggrementContext);
}
