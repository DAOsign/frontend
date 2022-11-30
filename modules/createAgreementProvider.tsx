import { useState, createContext, ProviderProps } from "react";
import { AgreementLocation, AgreementPrivacy } from "../types";

interface CreateAgrementContext {
  state: State;
  setStateCreateAgreement: (key: keyof State, value: any) => void;
}

//@ts-ignore
export const CreateAggrementContext = createContext<CreateAgrementContext>({});

interface State {
  title: string;
  agreementPrivacy: AgreementPrivacy;
  textEditorValue: string;
  agreementLocation: AgreementLocation;
  observersValue: string;
  signersValue: string;
  observers: { id: number; value: string }[];
  signers: { id: number; value: string }[];
}

const CreateAgreementProvider = (props?: Partial<ProviderProps<CreateAgrementContext>>) => {
  const [state, setState] = useState<State>({
    agreementPrivacy: "",
    title: "",
    textEditorValue: "",
    agreementLocation: "Local",
    signersValue: "",
    observersValue: "",
    observers: [],
    signers: [],
  });

  const setStateCreateAgreement = (key: keyof State, value: any) => {
    setState({ ...state, [key]: value });
  };

  return (
    <CreateAggrementContext.Provider
      {...props}
      value={{ state: { ...state }, setStateCreateAgreement }}
    />
  );
};

export default CreateAgreementProvider;
