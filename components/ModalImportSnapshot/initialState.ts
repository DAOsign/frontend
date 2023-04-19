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
    title: "Enable Transform to Contract (Utilizing GPT-3 OpenAI API)",
    isOpen: true,
  },
  [CONTRACT_TYPE]: {
    title: "Contract Type",
    isOpen: true,
  },
  [LEGAL_JURISDICTION]: {
    title: "Legal Jurisdiction",
    isOpen: true,
  },
  [INDEMNIFICATION_CLAUSE]: {
    title: "Indemnification Clause",
    tooltip: `An indemnification clause is a provision in a 
      contract that requires one party to compensate or "indemnify" 
      the other party for losses or damages that may arise from the 
      agreement or its breach. In other words, it is a legal mechanism that 
      allocates the risks and costs associated with certain events between the parties.
      The indemnification clause may specify the types of losses or damages that are 
      covered, such as legal fees, settlement costs, or damages resulting 
      from bodily injury or property damage. It may also specify the 
      circumstances under which indemnification will be required, such as when 
      one party breaches the contract or when a third party makes
      a claim against the other party.
      Indemnification clauses are commonly included in contracts such as leases, 
      service agreements, and employment contracts. They are particularly important 
      in high-risk industries, such as construction or healthcare, where the potential 
      for accidents or lawsuits is greater.`,
    isOpen: false,
  },
  [INTELLECTUAL_PROPERTY_CLAUSE]: {
    title: "Intellectual Property Clause",
    tooltip: `An intellectual property (IP) clause is a provision in a 
      ontract that addresses ownership, use, and protection of the intellectual 
      property rights related to the subject matter of the contract. The purpose 
      of an IP clause is to define the rights and obligations of the parties with
      respect to the intellectual property created or used in connection with the contract.
      The types of intellectual property that may be covered by an IP clause 
      include patents, trademarks, copyrights, trade secrets, and other proprietary 
      information. The IP clause may specify who owns the intellectual property rights, 
      who has the right to use them, and how they can be used.
      For example, in an employment agreement, an IP clause may state that any 
      inventions or discoveries made by the employee during the course of their employment
      belong to the employer. In a licensing agreement, the IP clause may specify the scope 
      of the license, the permitted uses of the licensed intellectual property, and the
      obligations of the licensee to protect the owner's IP rights.
      An IP clause is important because it helps to clarify the respective rights
      and obligations of the parties with respect to the intellectual property 
      involved in the contract. This can help to prevent disputes over ownership 
      or use of intellectual property and can provide a framework for resolving 
      such disputes if they arise.`,
    isOpen: false,
  },
  [NON_SOLICITATION_CLAUSE]: {
    title: "Non-solicitation Clause",
    tooltip: `A non-solicitation clause is a provision in a 
      contract that restricts one party from soliciting, hiring, 
      or enticing the employees, clients, or customers of the other
      party to leave and work for or do business with a competitor 
      or another entity. Non-solicitation clauses are commonly 
      found in employment agreements and business contracts, 
      such as partnership agreements and vendor agreements.
      The purpose of a non-solicitation clause is to protect 
      the business interests of the party that would be harmed by 
      the loss of its employees, clients, or customers. By preventing 
      the other party from soliciting or poaching its personnel, 
      the party can maintain its competitive position and avoid disruption to its operations.
      The non-solicitation clause may specify the types of individuals 
      or entities that are covered by the clause, the duration of the 
      restriction, and the geographic scope of the restriction. 
      For example, a non-solicitation clause in an employment agreement 
      may prohibit the employee from soliciting the employer's clients or 
      customers for a certain period of time after leaving the company 
      within a specific geographic area.
      Non-solicitation clauses are typically enforceable if they 
      are reasonable in scope and duration and if they are necessary 
      to protect the legitimate business interests of the affected party. 
      However, the enforceability of such clauses may vary depending on 
      the jurisdiction and the specific circumstances of the case.`,
    isOpen: false,
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
