import React from "react";
import EditAgreement from "../../../components/EditAgreement";
import EditAgreementProvider from "../../../modules/editAggrementProvider";

export default function create() {
  return (
    <EditAgreementProvider>
      <EditAgreement page="edit" />
    </EditAgreementProvider>
  );
}
