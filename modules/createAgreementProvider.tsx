import { useState, createContext, ProviderProps } from "react";

interface CreateAgrementContext {
  state: State;
  setStateCreateAgreement: (key: string, value: any) => void;
}

//@ts-ignore
export const CreateAggrementContext = createContext<CreateAgrementContext>({});

interface State {
  title: string;
  agreementPrivacy: string;
  textEditorValue: string;
  agreementLocation: string;
  observersValue: string;
  signersValue: string;
  observers: [];
  signers: [];
}

const CreateAgreementProvider = (props?: Partial<ProviderProps<CreateAgrementContext>>) => {
  const [state, setState] = useState<State>({
    agreementPrivacy: "",
    title: "",
    textEditorValue: "",
    agreementLocation: "cloud",
    signersValue: "",
    observersValue: "",
    observers: [],
    signers: [],
  });

  const setStateCreateAgreement = (key: string, value: any) => {
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
