/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Switch,
  Text,
  Input,
  Label,
  Container,
  ThemeUICSSObject,
} from "theme-ui";
import iconsObj from "../../assets/icons";
import Icon from "../icon";
import { ModalBase } from "../ModalBase/ModalBase";
import { Portal } from "../Portal/Portal";
import {
  INTELLECTUAL_PROPERTY_CLAUSE,
  NON_SOLICITATION_CLAUSE,
  INDEMNIFICATION_CLAUSE,
  METHOD_IMPORT_SHAPSHOT,
  LEGAL_JURISDICTION,
  ENABLE_TRANSFORM,
  STATEMENT_OF_WORK,
  CHOOSE_COUNTRY,
  CONTRACT_TYPE,
  CHOOSE_STATE,
  UNITED_STATES,
} from "../../types";
import {
  variantsSelectStatmentOfWork,
  iconsRotateMobile,
  variantsSelect,
  iconsRotate,
  variants,
} from "../../utils/animation";
import { motion } from "framer-motion";
import loader from "../../img/json/loader.json";
import Lottie from "lottie-react";
import { useClient } from "urql";
import { snapshotUrl } from "../../modules/graphql/index";
import { useCreateAgreement } from "../../hooks/useCreateAgreement";
import { useEditAgreement } from "../../hooks/useEditAgreement";
import { snapshotProposal } from "../../modules/graphql/queries/snapshot";
import FieldErrorMessage from "../Form/FieldErrorMessage";
import { generateAgreement } from "../../modules/graphql/queries";
import { initialStateSwitches, initialState, initialStateSelects } from "./initialState";
import { extractProposalId } from "../../utils/formats";
import {
  iconInfoEnableTransform,
  overflowContentStyles,
  labelInputTellMore,
  tellMoreContainer,
  loadingStylesBtn,
  btnCancelLoading,
  switchContainer,
  containerSelect,
  flexSelectItem,
  secondaryTitle,
  importingText,
  labelSwitch,
  inputSearch,
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
  bg,
} from "./styles";
import useWindowDimensions from "../../hooks/useWindowDimensions";

interface Props {
  isOpen: boolean;
  page: string;
  onExit: () => any;
}

export default function ModalImportSnapshot({ isOpen, page, onExit }: Props) {
  const { width }: any = useWindowDimensions();
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const create = useCreateAgreement();
  const edit = useEditAgreement();
  const { changeValue } = page === "create" ? create : edit;

  const [switches, setSwitches] = useState(initialStateSwitches);
  const [error, setError] = useState({ value: false, text: "" });
  const [selectsOpen, setSelectsOpen] = useState(initialStateSelects);
  const [selectsValue, setSelectsValue] = useState(initialState);
  const [searchValue, setSearchValue] = useState("");
  const { query } = useClient();

  const validationproposalLink = () => {
    if (!!id.trim()) {
      if (!extractProposalId(id)) {
        setError({ value: true, text: "Not valid Proposal link" });
      }
    } else {
      setError({ value: true, text: "Proposal link field is require" });
    }
  };

  const queryProposal = async () => {
    const getIdRes = extractProposalId(id);
    if (!!getIdRes) {
      setLoading(true);
      return query(
        snapshotProposal,
        { proposalId: getIdRes },
        { url: snapshotUrl, requestPolicy: "network-only" }
      )
        .toPromise()
        .then(r => r?.data?.proposal);
    }
  };

  const handleSubmit = async () => {
    validationproposalLink();
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
      .then((data: any) => {
        if (!!data) {
          onExit();
          changeValue("proposal", { proposalText: data?.text, snapshotProposalUrl: id });
          changeValue("textEditorValue", data?.text);
          changeValue("agreementMethod", METHOD_IMPORT_SHAPSHOT);
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
    setSearchValue("");
  };

  const getStylesSelectContainer = (name: string): ThemeUICSSObject => {
    const zIndexSelect: number = name === STATEMENT_OF_WORK ? 3 : name === CHOOSE_COUNTRY ? 2 : 1;
    return {
      ...containerSelect,
      boxShadow: selectsOpen[name] ? "0px 4px 32px rgba(33, 33, 33, 0.16)" : "none",
      borderRadius: selectsOpen[name] ? "8px 8px 0 0" : "8px",
      zIndex: zIndexSelect,
    };
  };

  const selectContent = (name: string) => {
    const { value, options } = selectsValue[name];
    const inputIsHidden =
      (name === CHOOSE_COUNTRY && selectsOpen[name]) || !selectsValue[name].value;
    const optionsFilter =
      searchValue !== "" && name === CHOOSE_COUNTRY
        ? options.filter((el: string) => el.toLowerCase().includes(searchValue.toLowerCase()))
        : options.filter((el: string) => el !== selectsValue[name].value);

    const onInputSearchClick = () => {
      if (!selectsOpen[name]) {
        setSelectsOpen({ ...initialStateSelects, [name]: true });
      }
      return;
    };

    return (
      <Container sx={getStylesSelectContainer(name)}>
        <Flex sx={flexSelect}>
          {inputIsHidden ? (
            <Input
              onChange={e => setSearchValue(e.target.value)}
              onClick={onInputSearchClick}
              placeholder="Choose country"
              value={searchValue}
              sx={inputSearch}
            />
          ) : (
            <Text
              onClick={() => setSelectsOpen({ ...initialStateSelects, [name]: true })}
              sx={titleSelect}
            >
              {value}
            </Text>
          )}
          <motion.div
            animate={selectsOpen[name] ? "enter" : "hidden"}
            transition={{ type: "linear" }}
            variants={width < 480 ? iconsRotateMobile : iconsRotate}
            initial="hidden"
          >
            <Box
              onClick={() => setSelectsOpen({ ...initialStateSelects, [name]: !selectsOpen[name] })}
              sx={icon}
            >
              <Icon src={iconsObj.arrowLeftPink} />
            </Box>
          </motion.div>
        </Flex>
        <motion.div
          variants={name === STATEMENT_OF_WORK ? variantsSelectStatmentOfWork : variantsSelect}
          animate={selectsOpen[name] ? "enter" : "hidden"}
          className="settingImportSnapshotProposal"
          transition={{ type: "linear" }}
          initial="hidden"
          // style={{ boxShadow: selectsOpen[name] ? "0px 4px 32px rgba(33, 33, 33, 0.16)" : "none" }}
        >
          {name === CHOOSE_COUNTRY && (
            <Flex
              onClick={() => onChangeSelect(name, UNITED_STATES)}
              sx={{ ...flexSelectItem, borderRadius: "0 !important" }}
            >
              <Text sx={titleSelect}>{UNITED_STATES}</Text>
            </Flex>
          )}
          {optionsFilter?.map((el: string, i: number) => {
            return (
              el !== UNITED_STATES && (
                <Flex
                  sx={{ ...flexSelect, "&:hover": { backgroundColor: "#D8D8E2" } }}
                  onClick={() => onChangeSelect(name, el)}
                  className="itemSelect"
                  key={i}
                >
                  <Text sx={titleSelect}>{el}</Text>
                </Flex>
              )
            );
          })}
        </motion.div>
      </Container>
    );
  };

  const SwitchContent = ({ name, sx }: { name: string; sx: ThemeUICSSObject }) => {
    const stylesIcon = name === ENABLE_TRANSFORM ? iconInfoEnableTransform : iconInfo;
    return (
      <Flex sx={sx}>
        <Flex sx={switchContainer}>
          <Label htmlFor={name} sx={{ ...labelSwitch, ml: "8px" }}>
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
        <Box sx={stylesIcon}>
          <Icon src={iconsObj.infoCircle} />
        </Box>
      </Flex>
    );
  };

  const isHiddenSelectChooseState =
    selectsValue[CHOOSE_COUNTRY].value === UNITED_STATES && switches[LEGAL_JURISDICTION].isOpen;

  return (
    <Portal sx={bg} isOpen={isOpen} onClose={onExit}>
      <ModalBase height="auto" sx={modalBase}>
        <Flex sx={flexContent}>
          <Box onClick={onExit} sx={closeIcon}>
            <Icon src={iconsObj.xClose} />
          </Box>
          <Text sx={{ ...mainText, mb: "40px" }}>Import From Snapshot</Text>
          <Flex sx={{ ...flexContent, ...overflowContentStyles }}>
            {!loading ? (
              <>
                <Text sx={labelInput}>Proposal link</Text>
                <Input
                  value={id}
                  onChange={e => {
                    setError({ value: false, text: "" });
                    setId(e.target.value);
                  }}
                  sx={{ ...input, mb: error.value ? "3px" : "45px" }}
                />
                {error.value && (
                  <Box sx={{ mb: "45px" }}>
                    <FieldErrorMessage error={error.text} />
                  </Box>
                )}
                <SwitchContent sx={{ mb: 0, position: "relative" }} name={ENABLE_TRANSFORM} />
                <motion.div
                  className="settingImportSnapshotProposal"
                  initial={switches.enableTransform.isOpen ? "enter" : "hidden"}
                  animate={switches.enableTransform.isOpen ? "enter" : "exit"}
                  transition={{ type: "linear" }}
                  variants={variants}
                >
                  <Text sx={secondaryTitle}>Transformation Configurations</Text>

                  <SwitchContent sx={{ mb: "19px" }} name={CONTRACT_TYPE} />
                  {switches[CONTRACT_TYPE].isOpen && selectContent(STATEMENT_OF_WORK)}
                  <SwitchContent sx={{ mb: "19px" }} name={LEGAL_JURISDICTION} />

                  {switches[LEGAL_JURISDICTION].isOpen && selectContent(CHOOSE_COUNTRY)}
                  {isHiddenSelectChooseState && selectContent(CHOOSE_STATE)}

                  <SwitchContent sx={{ mb: "21px" }} name={INDEMNIFICATION_CLAUSE} />
                  <SwitchContent sx={{ m: "21px 0" }} name={INTELLECTUAL_PROPERTY_CLAUSE} />
                  <SwitchContent sx={{ mb: "24px" }} name={NON_SOLICITATION_CLAUSE} />

                  <Box sx={tellMoreContainer}>
                    <Text sx={labelInputTellMore}>Additional Instructions for AI</Text>
                    <Input sx={input} />
                  </Box>
                </motion.div>
                <Flex sx={loading ? loadingStylesBtn : stylesBtn}>
                  {!loading && (
                    <Button onClick={handleSubmit} sx={subBtn} disabled={loading}>
                      Transform and Import
                    </Button>
                  )}
                  <Button onClick={onExit} sx={loading ? btnCancelLoading : btnCancel}>
                    Cancel
                  </Button>
                </Flex>
              </>
            ) : (
              <Flex sx={flexLoader}>
                <Lottie style={{ height: "80px" }} animationData={loader} loop={true} />
                <Text sx={importingText}>Importing...</Text>
              </Flex>
            )}
          </Flex>
        </Flex>
      </ModalBase>
    </Portal>
  );
}
