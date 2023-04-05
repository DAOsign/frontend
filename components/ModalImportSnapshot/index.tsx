/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Box, Button, Flex, Switch, Text, Input, Label, Container } from "theme-ui";
import iconsObj from "../../assets/icons";
import Icon from "../icon";
import { ModalBase } from "../ModalBase/ModalBase";
import { Portal } from "../Portal/Portal";
import {
  INTELLECTUAL_PROPERTY_CLAUSE,
  NON_SOLICITATION_CLAUSE,
  INDEMNIFICATION_CLAUSE,
  METOD_IMPORT_SHAPHOT,
  LEGAL_JURISDICTION,
  ENABLE_TRANSFORM,
  STATEMENT_WORK,
  CHOOSE_COUNTRY,
  CONTRACT_TYPE,
  CHOOSE_STATE,
  UNITED_STATES,
} from "../../types";
import { variants, variantsSelect } from "../../utils/animation";
import { motion } from "framer-motion";
import loader from "../../img/json/loader.json";
import Lottie from "lottie-react";
import { useClient } from "urql";
import { snapshotUrl } from "../../modules/graphql/index";
import { useCreateAgreement } from "../../hooks/useCreateAgreement";
import { useEditAgreement } from "../../hooks/useEditAgreement";
import { snapshotProposal } from "../../modules/graphql/queries/snapshot";
import { generateAgreement } from "../../modules/graphql/queries";
import { initialStateSwitches, initialState } from "./initialState";

import {
  labelInputTellMore,
  loadingStylesBtn,
  btnCancelLoading,
  switchContainer,
  containerSelect,
  secondaryTitle,
  importingText,
  labelSwitch,
  flexLoader,
  flexContent,
  titleSelect,
  labelInput,
  flexSelect,
  stylesBtn,
  switchBtn,
  closeIcon,
  modalBase,
  btnCancel,
  iconInfo,
  mainText,
  subBtn,
  input,
  icon,
} from "./styles";

interface Props {
  isOpen: boolean;
  page: string;
  onExit: () => any;
}

export default function ModalImportSnapshot({ isOpen, page, onExit }: Props) {
  const [loading, setLoading] = useState(false);
  const [switches, setSwitches] = useState(initialStateSwitches);
  const [id, setId] = useState("");
  const create = useCreateAgreement();
  const edit = useEditAgreement();
  const { values, changeValue } = page === "create" ? create : edit;
  const [selectsOpen, setSelectsOpen] = useState({ statementWork: false });
  const [selectsValue, setSelectsValue] = useState(initialState);
  const { query } = useClient();

  const queryProposal = async () =>
    query(snapshotProposal, { proposalId: id }, { url: snapshotUrl, requestPolicy: "network-only" })
      .toPromise()
      .then(r => r?.data?.proposal);

  const handleSubmit = async () => {
    setLoading(true);
    await queryProposal()
      .then(data => {
        return data?.body;
      })
      .then(async data => {
        if (!!data) {
          const generetedValue = await generate(data);
          return generetedValue;
        }
      })
      .then(data => {
        console.log(data);
        if (!!data) {
          onExit();
          //@ts-ignore
          changeValue("propousal", { proposalText: data.text });
          //@ts-ignore
          changeValue("textEditorValue", data.text);
          changeValue("agreementMethod", METOD_IMPORT_SHAPHOT);
        }
        setLoading(false);
      })
      .catch(e => console.error(e))
      .finally(() => setLoading(false));
  };

  const generate = async (proposalText: string) =>
    query(
      generateAgreement,
      {
        proposalText,
        legalJurisdictionState: undefined,
        legalJurisdictionCountry:
          switches.enableTransform.isOpen && switches.legalJurisdiction.isOpen
            ? selectsValue.chooseCountry.value
            : "",
        contractType:
          switches.enableTransform.isOpen && switches.legalJurisdiction.isOpen
            ? selectsValue.statementWork.value
            : "",
        additionalDetails: undefined,
        addIndemnificationClause: switches.indemnificationClause.isOpen,
        addIntellectualPropertyClause: switches.intellectualPropertyClause.isOpen,
        addNonSolicitationClause: switches.nonSolicitationClause.isOpen,
      },
      { url: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, requestPolicy: "network-only" }
    )
      .toPromise()
      .then(data => data?.data?.generateAgreement)
      .catch(() => false);

  const onChangeSelect = (name: string, el: string) => {
    setSelectsValue({
      ...selectsValue,
      [name]: { ...selectsValue[name], value: el },
    });
    setSelectsOpen({ ...selectsOpen, [name]: !selectsOpen[name] });
  };

  const selectContent = (name: string) => {
    const { value, options, defaultValue } = selectsValue[name];
    return (
      <Container sx={containerSelect}>
        <Flex
          onClick={() => setSelectsOpen({ ...selectsOpen, [name]: !selectsOpen[name] })}
          sx={flexSelect}
        >
          <Text sx={{ ...titleSelect, opacity: value === defaultValue ? 0.5 : 1 }}>{value}</Text>
          <Box sx={icon}>
            <Icon src={iconsObj.arrowLeftPink} />
          </Box>
        </Flex>
        <motion.div
          animate={selectsOpen[name] ? "enter" : "exit"}
          transition={{ type: "linear" }}
          variants={name === STATEMENT_WORK ? variants : variantsSelect}
          initial="hidden"
        >
          {options?.map((el: string, i: number) => {
            return (
              el !== value && (
                <Flex
                  onClick={() => onChangeSelect(name, el)}
                  key={i}
                  sx={{
                    ...flexSelect,
                    "&:hover": {
                      backgroundColor: "#D8D8E2",
                    },
                  }}
                >
                  <Text sx={{ ...titleSelect, fontSize: "12px" }}>{el}</Text>
                </Flex>
              )
            );
          })}
        </motion.div>
      </Container>
    );
  };

  const SwitchContent = ({ name }: { name: string }) => {
    return (
      <Flex sx={{ mb: "19px" }}>
        <Flex sx={switchContainer}>
          <Label
            htmlFor={name}
            sx={{ ...labelSwitch, ml: switches[name].isOpen ? "12px !important" : "8px" }}
          >
            {switches[name].title}
          </Label>
          <Switch
            onChange={({ target }) => {
              return setSwitches({
                ...switches,
                [name]: { ...switches[name], isOpen: target.checked },
              });
            }}
            checked={switches[name].isOpen}
            className="switch"
            sx={switchBtn}
            id={name}
          />
        </Flex>
        <Box sx={iconInfo}>
          <Icon src={iconsObj.infoCircle} />
        </Box>
      </Flex>
    );
  };

  return (
    <Portal isOpen={isOpen} onClose={onExit}>
      <ModalBase height="auto" sx={modalBase}>
        <Flex sx={flexContent}>
          <Box onClick={onExit} sx={closeIcon}>
            <Icon src={iconsObj.xClose} />
          </Box>
          <Text sx={{ ...mainText, mb: "40px" }}>Import From Snapshot</Text>
          {!loading ? (
            <>
              <Text sx={labelInput}>Proposal link</Text>
              <Input
                value={id}
                onChange={e => setId(e.target.value)}
                sx={{ ...input, mb: "45px" }}
              />
              <SwitchContent name={ENABLE_TRANSFORM} />
              <motion.div
                animate={switches.enableTransform.isOpen ? "enter" : "exit"}
                transition={{ type: "linear" }}
                variants={variants}
                initial="hidden"
              >
                <Text sx={secondaryTitle}>Transformation Configurations</Text>
                <SwitchContent name={CONTRACT_TYPE} />
                {switches[CONTRACT_TYPE].isOpen && selectContent(STATEMENT_WORK)}

                <SwitchContent name={LEGAL_JURISDICTION} />

                {switches[LEGAL_JURISDICTION].isOpen && selectContent(CHOOSE_COUNTRY)}
                {selectsValue[CHOOSE_COUNTRY].value === UNITED_STATES &&
                  switches[LEGAL_JURISDICTION].isOpen &&
                  selectContent(CHOOSE_STATE)}

                <SwitchContent name={INDEMNIFICATION_CLAUSE} />
                <Box sx={{ m: "21px 0" }}>
                  <SwitchContent name={INTELLECTUAL_PROPERTY_CLAUSE} />
                </Box>
                <SwitchContent name={NON_SOLICITATION_CLAUSE} />
              </motion.div>
              <Text sx={labelInputTellMore}>Additional ChatGPT Instructions</Text>
              <Input sx={input} />
            </>
          ) : (
            <Flex sx={flexLoader}>
              <Lottie style={{ height: "80px" }} animationData={loader} loop={true} />
              <Text sx={importingText}>Importing...</Text>
            </Flex>
          )}
          <Flex sx={loading ? loadingStylesBtn : stylesBtn}>
            {!loading && (
              <Button onClick={handleSubmit} sx={subBtn} disabled={loading || !id}>
                Transform and Import
              </Button>
            )}
            <Button onClick={onExit} sx={loading ? btnCancelLoading : btnCancel}>
              Cancel
            </Button>
          </Flex>
        </Flex>
      </ModalBase>
    </Portal>
  );
}
