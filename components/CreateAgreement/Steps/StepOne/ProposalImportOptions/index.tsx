import React, { useState } from "react";
import { importOptionsTitle, textSecondary, importOptions, textInput } from "../../../styles";
import { Container, Flex, Text, Button, Textarea, Spinner } from "theme-ui";
import { refineGeneratedAgreement } from "../../../../../modules/graphql/queries";
import { useCreateAgreement } from "../../../../../hooks/useCreateAgreement";
import { useEditAgreement } from "../../../../../hooks/useEditAgreement";
import { useClient } from "urql";
import FieldErrorMessage from "../../../../Form/FieldErrorMessage";

const ProposalImportOptions = ({
  setIsOpenModalImport,
  page,
}: {
  setIsOpenModalImport: any;
  page: string;
}) => {
  const [loadingUpdateOptions, setLoadingUpdateOptions] = useState(false);
  const create = useCreateAgreement();
  const edit = useEditAgreement();
  const initialError = { isVisible: false, textError: "" };
  const { values, changeValue } = page === "create" ? create : edit;
  const [optionsValue, setOptionsValue] = useState("");
  const [error, setError] = useState(initialError);
  const { query: queryClient } = useClient();

  const updateProposal = async () => {
    if (!optionsValue) {
      setError({ isVisible: true, textError: "Please enter instructions" });
      return;
    }
    if (!!optionsValue && optionsValue?.length < 3) {
      setError({ isVisible: true, textError: "Instructions should be min 3 words" });
      return;
    }
    if (!!optionsValue && !!values.agreementId) {
      setLoadingUpdateOptions(true);
      await queryClient(
        refineGeneratedAgreement,
        {
          agreementId: Number(values.agreementId),
          userRequest: optionsValue,
        },
        { url: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, requestPolicy: "network-only" }
      )
        .toPromise()
        .then(data => {
          if (data?.data?.refineGeneratedAgreement?.text) {
            changeValue("textEditorValue", data?.data?.refineGeneratedAgreement?.text);
          }
        })
        .catch(() => false)
        .finally(() => setLoadingUpdateOptions(false));
    }
    setOptionsValue("");
  };

  return (
    <Container sx={importOptions}>
      <Text sx={importOptionsTitle}>Proposal Import Options</Text>
      <Text sx={textSecondary}>Provide additional instructions </Text>
      <Textarea
        disabled={loadingUpdateOptions}
        onChange={e => {
          setError(initialError);
          setOptionsValue(e.target.value);
        }}
        value={optionsValue}
        sx={textInput}
        rows={8}
      />
      {error.isVisible && (
        <FieldErrorMessage
          sx={{
            mb: "40px",
            "@media screen and (max-width: 1200px)": {
              "&": {
                mb: "17px",
              },
            },
          }}
          error={error.textError}
        />
      )}
      <Button
        disabled={loadingUpdateOptions}
        onClick={updateProposal}
        variant="secondary"
        sx={{ mb: "20px" }}
      >
        {loadingUpdateOptions ? <Spinner size={16} color="pink" /> : " Update Proposal"}
      </Button>
      <Button
        onClick={() => {
          setIsOpenModalImport(true);
        }}
      >
        Reimport From Snapshot
      </Button>
    </Container>
  );
};

export default ProposalImportOptions;
