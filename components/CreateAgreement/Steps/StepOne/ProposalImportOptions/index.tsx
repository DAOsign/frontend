import React, { useState } from "react";
import {
  importOptionsTitle,
  containerInput,
  textSecondary,
  importOptions,
  reimportBtn,
  textInput,
  iconDrag,
} from "../../../styles";
import { Container, Text, Button, Textarea, Spinner, Box } from "theme-ui";
import { refineGeneratedAgreement } from "../../../../../modules/graphql/queries";
import { useCreateAgreement } from "../../../../../hooks/useCreateAgreement";
import { useEditAgreement } from "../../../../../hooks/useEditAgreement";
import { useClient } from "urql";
import FieldErrorMessage from "../../../../Form/FieldErrorMessage";
import drag from "../../../../../img/svg/drag.svg";
import Image from "next/image";

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
      <Box sx={containerInput}>
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
        <Box sx={iconDrag}>
          <Image style={{ position: "absolute", bottom: 0, right: 0 }} alt=">" src={drag} />
        </Box>
      </Box>
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
        sx={reimportBtn}
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
