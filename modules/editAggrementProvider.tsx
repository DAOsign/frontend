import { useRouter } from "next/router";
import { useState, createContext, ProviderProps, useEffect, useRef } from "react";
import { initialStateProposal, ProposalState } from "./createAgreementProvider";
import {
  AgreementLocation,
  AgreementMethod,
  AgreementPrivacy,
  FieldError,
  METHOD_ENTER,
  METHOD_UPLOAD,
} from "../types";

export interface CreateAgreementFieldErrors {
  agreementLocation?: FieldError;
  title?: FieldError;
  agreementPrivacy?: FieldError;
  agreementFile?: FieldError;
  observers?: FieldError;
  signers?: FieldError;
}

export interface CreationState {
  agreementId: string | undefined;
  title: string;
  agreementPrivacy: AgreementPrivacy;
  agreementMethod: AgreementMethod;
  textEditorValue: string;
  agreementLocation: AgreementLocation;
  filePath?: string;
  agreementHash?: string;
  observers: { id: number; value: string }[];
  signers: { id: number; value: string }[];
  file: File | undefined;
  errors: CreateAgreementFieldErrors;
  proposal: ProposalState;
  storeOnBlockchain?: number | null;
}
interface CreateAgrementContext {
  values: CreationState;
  changeValue: (key: keyof CreationState, value: any) => void;
}

const DRAFT_STORAGE_KEY = "editAgreement";

const defaultState: CreationState = {
  agreementId: undefined,
  agreementPrivacy: "",
  title: "",
  textEditorValue: "",
  agreementLocation: "",
  agreementMethod: "",
  agreementHash: "",
  filePath: "",
  observers: [],
  signers: [],
  file: undefined,
  errors: {},
  proposal: initialStateProposal,
  storeOnBlockchain: null,
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

const EditAgreemntProvider = (props?: Partial<ProviderProps<CreateAgrementContext>>) => {
  const [values, setValues] = useState<CreationState>(recoverDraft());
  const { query, push } = useRouter();
  const valuesLoadedRef = useRef(false);

  const changeValue = (key: keyof CreationState, value: any) => {
    setValues(state => {
      const newState: CreationState = {
        ...state,
        [key]: value,
        agreementLocation:
          key === "agreementPrivacy"
            ? state.agreementLocation
            : key === "agreementLocation"
            ? value
            : state.agreementLocation,
        agreementHash:
          key === "agreementLocation" || key === "agreementMethod"
            ? state.agreementHash
            : key === "agreementHash"
            ? value
            : state.agreementHash,
      };
      saveDraft({ ...newState, file: undefined, errors: {} });
      return newState;
    });
  };

  useEffect(() => {
    if (!valuesLoadedRef.current) {
      //setValues(recoverDraft());

      valuesLoadedRef.current = true;

      if (query.step) {
        const step = Number(query.step);

        if (
          step > 1 &&
          (!values.title ||
            (values.agreementMethod === METHOD_ENTER && !values.textEditorValue) ||
            (values.agreementMethod === METHOD_UPLOAD && !values.agreementHash && !values.filePath))
        ) {
          push({ query: { step: 1 } }, undefined, { shallow: true });
        }
        if (step > 2 && !values.observers.length && !values.signers.length) {
          push({ query: { step: 2 } }, undefined, { shallow: true });
        }
      }
    }

    return () => {
      valuesLoadedRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setValues(prevState => ({ ...prevState, errors: { ...prevState.errors, title: null } }));
  }, [values?.title]);

  useEffect(() => {
    setValues(prevState => ({
      ...prevState,
      errors: { ...prevState.errors, agreementPrivacy: null },
    }));
  }, [values?.agreementPrivacy]);

  useEffect(() => {
    setValues(prevState => ({
      ...prevState,
      errors: { ...prevState.errors, agreementFile: null },
    }));
  }, [values?.agreementMethod, values?.agreementHash, values?.textEditorValue, values?.file]);

  useEffect(() => {
    setValues(prevState => ({
      ...prevState,
      errors: { ...prevState.errors, signers: null },
    }));
  }, [values?.signers]);

  useEffect(() => {
    setValues(prevState => ({
      ...prevState,
      errors: { ...prevState.errors, observers: null },
    }));
  }, [values?.observers]);

  return <EditAggrementContext.Provider {...props} value={{ values, changeValue }} />;
};

//@ts-ignore
export const EditAggrementContext = createContext<CreateAgrementContext>({});

export default EditAgreemntProvider;
