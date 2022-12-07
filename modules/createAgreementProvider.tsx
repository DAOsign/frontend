import { useRouter } from "next/router";
import { useState, createContext, ProviderProps, useCallback, useEffect, useRef } from "react";
import { AgreementLocation, AgreementMethod, AgreementPrivacy, LOCATION_CLOUD } from "../types";

interface CreationState {
  title: string;
  agreementPrivacy: AgreementPrivacy;
  agreementMethod: AgreementMethod;
  textEditorValue: string;
  agreementLocation: AgreementLocation;
  filePath?: string;
  observers: { id: number; value: string }[];
  signers: { id: number; value: string }[];
}
interface CreateAgrementContext {
  values: CreationState;
  changeValue: (key: keyof CreationState, value: any) => void;
}

const DRAFT_STORAGE_KEY = "draftAgreement";

const defaultState: CreationState = {
  agreementPrivacy: "",
  title: "",
  textEditorValue: "",
  agreementLocation: LOCATION_CLOUD,
  agreementMethod: "",
  filePath: "",
  observers: [],
  signers: [],
};

const recoverDraft = (): CreationState => {
  if (typeof window !== "undefined") {
    const draft = localStorage.getItem(DRAFT_STORAGE_KEY);
    if (draft) {
      return JSON.parse(draft);
    }
  }
  return defaultState;
};

const saveDraft = (state: CreationState) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(state));
  }
};

export const clearDraft = () => {
  if (typeof window !== "undefined") {
    localStorage.setItem(DRAFT_STORAGE_KEY, "");
  }
};

const CreateAgreementProvider = (props?: Partial<ProviderProps<CreateAgrementContext>>) => {
  const [values, setValues] = useState<CreationState>(recoverDraft());
  const { query, push } = useRouter();
  const valuesLoadedRef = useRef(false);

  useEffect(() => {}, []);

  const changeValue = (key: keyof CreationState, value: any) => {
    setValues(state => {
      const newState: CreationState = {
        ...state,
        [key]: value,
        agreementLocation:
          key === "agreementPrivacy"
            ? ""
            : key === "agreementLocation"
            ? value
            : state.agreementLocation,
      };
      saveDraft(newState);
      return newState;
    });
  };

  useEffect(() => {
    if (!valuesLoadedRef.current) {
      setValues(recoverDraft());

      valuesLoadedRef.current = true;

      if (query.step) {
        const step = Number(query.step);

        if (step > 1 && (!values.title || !values.agreementPrivacy)) {
          push({ query: { step: 1 } }, undefined, { shallow: true });
        }
        // TODO redirect if step 3 and no textEditorValue or filePath
        if (step > 2 && (!values.textEditorValue || false)) {
          push({ query: { step: 2 } }, undefined, { shallow: true });
        }
      }
    }
    return () => {
      valuesLoadedRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <CreateAggrementContext.Provider {...props} value={{ values, changeValue }} />;
};

//@ts-ignore
export const CreateAggrementContext = createContext<CreateAgrementContext>({});

export default CreateAgreementProvider;
