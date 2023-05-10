import React, { useState } from "react";
import { importOptionsTitle, textSecondary, importOptions, textInput } from "../../../styles";
import { Container, Flex, Text, Button, Textarea, Spinner } from "theme-ui";
import { refineGeneratedAgreement } from "../../../../../modules/graphql/queries";
import { useCreateAgreement } from "../../../../../hooks/useCreateAgreement";
import { useEditAgreement } from "../../../../../hooks/useEditAgreement";
import { useClient } from "urql";

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
  const { values, changeValue } = page === "create" ? create : edit;
  const [optionsValue, setOptionsValue] = useState("");
  const { query: queryClient } = useClient();

  const updateProposal = async () => {
    if (!!optionsValue && !!values.agreementId) {
      setLoadingUpdateOptions(true);
      await queryClient(
        refineGeneratedAgreement,
        {
          agreementId: +values.agreementId,
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
        onChange={e => setOptionsValue(e.target.value)}
        value={optionsValue}
        sx={textInput}
        rows={8}
      />
      <Button
        disabled={!optionsValue || loadingUpdateOptions}
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
