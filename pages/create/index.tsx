import React from "react";
import CreateAgreement from "../../components/CreateAgreement";
import CreateAgreementProvider from "../../modules/createAgreementProvider";

export default function create() {
  return (
    <CreateAgreementProvider>
      <CreateAgreement />
    </CreateAgreementProvider>
  );
}
