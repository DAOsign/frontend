export const initialStateSwitches = {
  enableTransform: {
    title: "Enable Transform to Contract (Utilizing GPT-3 OpenAI API)",
    isOpen: false,
  },
  legalJurisdiction: {
    title: "Contract Type",
    isOpen: true,
  },
  contractType: {
    title: "Legal Jurisdiction",
    isOpen: true,
  },
  indemnificationClause: {
    title: "Indemnification Clause",
    isOpen: false,
  },
  intellectualPropertyClause: {
    title: "Intellectual Property Clause",
    isOpen: false,
  },
  nonSolicitationClause: {
    title: "Non-solicitation Clause",
    isOpen: false,
  },
};

export const initialState = {
  statementWork: {
    value: "Statement of Work",
    options: ["options 1", "options2", "Statement of Work"],
  },
  chooseCountry: {
    value: "Choose country",
    options: ["US", "Ukraine"],
    defaultValue: "Choose country",
  },
  chooseState: {
    value: "Choose state",
    options: ["1", "2"],
    defaultValue: "Choose state",
  },
};
