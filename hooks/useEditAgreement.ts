import { useContext } from "react";
import { EditAggrementContext } from "../modules/editAggrementProvider";

export function useEditAgreement() {
  return useContext(EditAggrementContext);
}
