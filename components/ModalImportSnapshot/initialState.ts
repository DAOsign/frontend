import { countries } from "countries-list";
import {
  INTELLECTUAL_PROPERTY_CLAUSE,
  LEGAL_JURISDICTION_COUNTRY,
  LEGAL_JURISDICTION_STATE,
  NON_SOLICITATION_CLAUSE,
  INDEMNIFICATION_CLAUSE,
  LEGAL_JURISDICTION,
  ENABLE_TRANSFORM,
  STATEMENT_OF_WORK,
  CONTRACT_TYPE,
} from "../../types";

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const countriesData = Object.values(countries).map(el => el.name);

const contractType = [
  "Statement of Work",
  "Service Level Agreement",
  "Non-Disclosure Agreement",
  "Master Services Agreement",
  "Work Order Agreement",
];

export const switches = {
  [ENABLE_TRANSFORM]: {
    title: "Enable Transform to Agreement (Using GPT AI)",
    isOpen: true,
    tooltip: "Transform Snapshot to Contract with AI",
    top: "-45px",
  },
  [CONTRACT_TYPE]: {
    title: "Contract Type",
    isOpen: true,
    tooltip: "Select the type of contract that best suits your agreement",
    top: "-65px",
  },
  [LEGAL_JURISDICTION]: {
    title: "Legal Jurisdiction",
    isOpen: true,
    tooltip: "Select agreement's legal jurisdiction country",
    top: "-45px",
  },
  [INDEMNIFICATION_CLAUSE]: {
    title: "Indemnification Clause",
    tooltip: `Indemnification clause allocates risks/costs, covers losses/damages, and is common in high-risk industries.`,
    isOpen: false,
    top: "-85px",
  },
  [INTELLECTUAL_PROPERTY_CLAUSE]: {
    title: "Intellectual Property Clause",
    tooltip: `IP clause addresses IP ownership, use, protection; clarifies rights/obligations to prevent disputes.`,
    isOpen: false,
    top: "-85px",
  },
  [NON_SOLICITATION_CLAUSE]: {
    title: "Non-solicitation Clause",
    tooltip: `Restricts soliciting/hiring, protects business interests; enforceable if reasonable scope/duration.`,
    isOpen: false,
    top: "-85px",
  },
};

export const initialStateSelects = {
  [STATEMENT_OF_WORK]: false,
  [LEGAL_JURISDICTION_COUNTRY]: false,
  [LEGAL_JURISDICTION_STATE]: false,
};

export const selectsValue = {
  [STATEMENT_OF_WORK]: {
    options: contractType,
    value: "Statement of Work",
  },
  [LEGAL_JURISDICTION_COUNTRY]: {
    options: countriesData,
  },
  [LEGAL_JURISDICTION_STATE]: {
    options: states,
    value: "Choose state",
  },
};
