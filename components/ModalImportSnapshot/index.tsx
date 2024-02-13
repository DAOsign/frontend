/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
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
  LEGAL_JURISDICTION_COUNTRY,
  LEGAL_JURISDICTION_STATE,
  NON_SOLICITATION_CLAUSE,
  INDEMNIFICATION_CLAUSE,
  METHOD_IMPORT_SHAPSHOT,
  SNAPSHOT_PROPOSAL_URL,
  LEGAL_JURISDICTION,
  ADDITIONAL_DETAILS,
  STATEMENT_OF_WORK,
  ENABLE_TRANSFORM,
  CONTRACT_TYPE,
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
import { snapshotProposal } from "../../modules/graphql/queries";
import FieldErrorMessage from "../Form/FieldErrorMessage";
import { generateAgreement } from "../../modules/graphql/queries";
import { switches, selectsValue, initialStateSelects } from "./initialState";
import { extractProposalId } from "../../utils/formats";
import {
  iconInfoEnableTransform,
  overflowContentStyles,
  labelInputTellMore,
  loadingStylesBtn,
  btnCancelLoading,
  switchContainer,
  containerSelect,
  flexSelectItem,
  secondaryTitle,
  importingText,
  labelSwitch,
  inputSearch,
  itemOption,
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
  loadingState,
} from "./styles";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { notifError } from "../../utils/notification";
import { useMutation } from "urql";
import { saveAgreementMutation } from "../../modules/graphql/mutations";
import Tooltip from "../Tooltip";
import CloseIcon from "../IconComponent/CloseIcon";
import ArrowLeftPink from "../ArrowLeftPink";
import { fW } from "../CreateAgreement/styles";

interface Props {
  isOpen: boolean;
  page: string;
  setMethod: React.Dispatch<React.SetStateAction<string>>;
  onExit: () => any;
}

export default function ModalImportSnapshot({ isOpen, page, onExit, setMethod }: Props) {
  const { width }: any = useWindowDimensions();
  const [loading, setLoading] = useState(false);
  const create = useCreateAgreement();
  const edit = useEditAgreement();
  const { changeValue, values } = page === "create" ? create : edit;
  const [{ fetching: savingAgreement }, saveAgreement] = useMutation(saveAgreementMutation);
  const {
    addIntellectualPropertyClause,
    addIndemnificationClause,
    legalJurisdictionCountry,
    addNonSolicitationClause,
    legalJurisdictionState,
    snapshotProposalUrl,
    additionalDetails,
    legalJurisdiction,
    enableTransform,
    statementWork,
    contractType,
  } = values.proposal;
  const initialErrorObj = { value: false, text: "" };
  const [errors, setErrors] = useState({
    errorLegalJurisdiction: initialErrorObj,
    errorProposalLink: initialErrorObj,
    errorContractType: initialErrorObj,
  });
  const [selectsOpen, setSelectsOpen] = useState(initialStateSelects);
  const [searchValue, setSearchValue] = useState("");

  const { query } = useClient();

  const validationproposalLink = () => {
    if (!!values.proposal.snapshotProposalUrl.trim()) {
      if (!extractProposalId(values.proposal.snapshotProposalUrl)) {
        setErrors({
          ...errors,
          errorProposalLink: { value: true, text: "Not valid Proposal link" },
        });
        return false;
      }
    } else {
      setErrors({
        ...errors,
        errorProposalLink: { value: true, text: "Proposal link field is require" },
      });
      return false;
    }
    return true;
  };

  const validationContractType = () => {
    if (enableTransform && contractType && !statementWork) {
      setErrors({
        ...errors,
        errorContractType: { value: true, text: "Select Contract type" },
      });
      return false;
    }
    return true;
  };

  const validationLegalJurisdiction = () => {
    if (enableTransform && legalJurisdiction && !legalJurisdictionCountry) {
      setErrors({
        ...errors,
        errorLegalJurisdiction: { value: true, text: "Choose Country" },
      });
      return false;
    }
    if (
      enableTransform &&
      legalJurisdiction &&
      !!legalJurisdictionCountry &&
      legalJurisdictionCountry === UNITED_STATES &&
      !legalJurisdictionState
    ) {
      setErrors({
        ...errors,
        errorLegalJurisdiction: { value: true, text: "Choose State" },
      });
      return false;
    }
    return true;
  };

  const validationData = () => {
    const isValid =
      validationproposalLink() && validationContractType() && validationLegalJurisdiction();
    if (isValid) {
      handleSubmit();
    }
  };

  const queryProposal = async () => {
    const getIdRes = extractProposalId(values.proposal.snapshotProposalUrl);
    if (!!getIdRes) {
      setLoading(true);

      return query(
        snapshotProposal,
        { proposalId: getIdRes },
        {
          url: snapshotUrl,
          requestPolicy: "network-only",
        }
      )
        .toPromise()
        .then(r => {
          return r?.data?.proposal;
        });
    }
  };

  const handleSubmit = async () => {
    const isValid =
      !errors.errorLegalJurisdiction.value &&
      !errors.errorContractType.value &&
      !errors.errorProposalLink.value;
    if (isValid) {
      await queryProposal()
        .then(async data => {
          if (!enableTransform) {
            setData(data?.body);
            setLoading(false);
            return;
          } else {
            await generate(data?.body);
          }
        })
        .catch(e => console.error(e));
    }
  };

  const setData = (text: string) => {
    onExit();
    changeValue("proposal", { ...values.proposal, propousalText: text }, true);
    changeValue("textEditorValue", text, true);
    setMethod(METHOD_IMPORT_SHAPSHOT);
  };

  const handleCreateAgreement = async (): Promise<string> => {
    const agreementId = await saveAgreement({
      agreementId: values.agreementId || undefined,
      title: values.title,
      agreementLocation: undefined,
      snapshotProposalUrl: values.proposal?.snapshotProposalUrl,
      content: "",
      agreementPrivacy: undefined,
      signers: [],
      observers: [],
      agreementHash: "",
      agreementFilePath: "",
      isReadyToSign: false,
      storeOnBlockchain: values.storeOnBlockchain,
    }).then((res: any) => {
      if (res.error) {
        notifError(res.error.message);
        return;
      }
      return res.data.saveAgreement.agreementId;
    });
    changeValue("agreementId", agreementId, true);
    return agreementId;
  };

  const generate = async (proposalText: string) => {
    const id = !!values.agreementId ? values.agreementId : await handleCreateAgreement();
    changeValue("agreementId", id, true);
    let dataGenerateAggrement: any = {
      addIntellectualPropertyClause,
      addNonSolicitationClause,
      addIndemnificationClause,
      legalJurisdiction,
    };
    if (enableTransform) {
      if (legalJurisdiction && !!legalJurisdictionCountry) {
        dataGenerateAggrement = { ...dataGenerateAggrement, legalJurisdictionCountry };
      }
      if (!!legalJurisdictionCountry && legalJurisdictionCountry === UNITED_STATES) {
        dataGenerateAggrement = { ...dataGenerateAggrement, legalJurisdictionState };
      }
      if (contractType) {
        dataGenerateAggrement = { ...dataGenerateAggrement, statementWork };
      }
      if (!!additionalDetails) {
        dataGenerateAggrement = { ...dataGenerateAggrement, additionalDetails };
      }
    }
    return query(
      generateAgreement,
      {
        agreementId: id,
        proposalText,
        ...dataGenerateAggrement,
      },
      { url: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, requestPolicy: "network-only" }
    )
      .toPromise()
      .then(data => {
        if (data?.error) {
          throw new Error(data?.error?.message || "OpenAI internal error");
        } else {
          setData(data?.data?.generateAgreement?.text || "");
        }
      })
      .catch(err => {
        notifError(err?.message as string);
        return false;
      })
      .finally(() => setLoading(false));
  };

  const onChangeSelect = (name: string, el: string) => {
    const field =
      name === LEGAL_JURISDICTION_COUNTRY || name === LEGAL_JURISDICTION_STATE
        ? "errorLegalJurisdiction"
        : "errorContractType";
    setErrors({ ...errors, [field]: initialErrorObj });
    if (name === LEGAL_JURISDICTION_COUNTRY && el !== UNITED_STATES) {
      changeValue("proposal", { ...values.proposal, LEGAL_JURISDICTION_STATE: undefined }, true);
      changeValue("proposal", { ...values.proposal, [name]: el }, true);
    } else {
      changeValue("proposal", { ...values.proposal, [name]: el }, true);
    }
    setSelectsOpen({ ...selectsOpen, [name]: !selectsOpen[name] });
    setSearchValue("");
  };

  const getStylesSelectContainer = (name: string): ThemeUICSSObject => {
    const zIndexSelect: number =
      name === STATEMENT_OF_WORK ? 3 : name === LEGAL_JURISDICTION_COUNTRY ? 2 : 1;
    return {
      ...containerSelect,
      borderRadius: selectsOpen[name] ? "8px 8px 0 0" : "8px",
      zIndex: zIndexSelect,
    };
  };

  const selectContent = (name: string) => {
    const { options, value } = selectsValue[name];
    const isCountry = name === LEGAL_JURISDICTION_COUNTRY;
    const isState = name === LEGAL_JURISDICTION_STATE;

    const inputIsHidden =
      (isCountry && selectsOpen[name]) ||
      (isState && selectsOpen[name]) ||
      (isCountry && !values.proposal[LEGAL_JURISDICTION_COUNTRY]);

    const optionsFilter =
      (searchValue !== "" && isCountry) || (searchValue !== "" && isState)
        ? options.filter((el: string) => el.toLowerCase().includes(searchValue.toLowerCase()))
        : options.filter((el: string) => el !== values.proposal[name]);

    const onInputSearchClick = () => {
      if (!selectsOpen[name]) {
        setSelectsOpen({ ...initialStateSelects, [name]: true });
      }
      return;
    };

    return (
      <Container sx={getStylesSelectContainer(name)}>
        <motion.div
          variants={name === STATEMENT_OF_WORK ? variantsSelectStatmentOfWork : variantsSelect}
          animate={selectsOpen[name] ? "enter" : "hidden"}
          className="settingImportSnapshotProposal"
          transition={{ type: "linear" }}
          initial="hidden"
          style={{
            boxShadow: selectsOpen[name] ? "0px 4px 32px rgba(33, 33, 33, 0.16)" : "none",
          }}
        >
          <Flex
            sx={{
              ...flexSelect,
              borderRadius: selectsOpen[name] ? "8px 8px 0 0" : "8px",
              "&:hover > div  svg > path": {
                stroke: "#AE4FD0",
              },
            }}
          >
            {inputIsHidden ? (
              <Input
                onChange={e => setSearchValue(e.target.value)}
                onClick={onInputSearchClick}
                placeholder={isCountry ? "Choose country" : "Choose state"}
                value={searchValue}
                sx={inputSearch}
              />
            ) : (
              <Text
                onClick={() => setSelectsOpen({ ...initialStateSelects, [name]: true })}
                sx={titleSelect}
              >
                {values.proposal[name] || value}
              </Text>
            )}
            <motion.div
              variants={width < 480 ? iconsRotateMobile : iconsRotate}
              animate={selectsOpen[name] ? "enter" : "hidden"}
              transition={{ type: "linear" }}
              initial="hidden"
            >
              <Box
                onClick={() =>
                  setSelectsOpen({ ...initialStateSelects, [name]: !selectsOpen[name] })
                }
                sx={icon}
              >
                <ArrowLeftPink />
              </Box>
            </motion.div>
          </Flex>
          <Container
            sx={{ ...itemOption, maxHeight: name === STATEMENT_OF_WORK ? "138px" : "178px" }}
          >
            {isCountry && (
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
          </Container>
        </motion.div>
      </Container>
    );
  };

  const SwitchContent = ({ name, sx }: { name: string; sx: ThemeUICSSObject }) => {
    const field = name === CONTRACT_TYPE ? "errorContractType" : "errorLegalJurisdiction";
    const stylesIcon = name === ENABLE_TRANSFORM ? iconInfoEnableTransform : iconInfo;
    return (
      <Flex sx={sx}>
        <Flex sx={switchContainer}>
          <Label htmlFor={name} sx={{ ...labelSwitch, ml: "8px" }}>
            {switches[name].title}
          </Label>
          <Switch
            onChange={({ target }) => {
              changeValue("proposal", { ...values.proposal, [name]: target.checked }, true);
              if (name !== ENABLE_TRANSFORM) setErrors({ ...errors, [field]: initialErrorObj });
            }}
            checked={values.proposal[name]}
            className="switch"
            sx={switchBtn}
            id={name}
          />
        </Flex>
        <Box sx={stylesIcon}>
          <Tooltip
            className={`${[name]}Toltip`}
            top={switches[name].top}
            left="-148px"
            transform=""
            minWidth="300px"
            title={switches[name].tooltip}
            height={undefined}
          >
            <Box sx={{ width: "20px", height: "20px" }}>
              <Icon src={iconsObj.infoCircle} />
            </Box>
          </Tooltip>
        </Box>
      </Flex>
    );
  };

  const isVisibleSelectChooseState =
    legalJurisdictionCountry === UNITED_STATES && legalJurisdiction;

  const onChangeInputProposal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors({ ...errors, errorProposalLink: initialErrorObj });
    changeValue(
      "proposal",
      {
        ...values.proposal,
        [SNAPSHOT_PROPOSAL_URL]: e.target.value,
      },
      true
    );
  };

  return (
    <Portal sx={bg} isOpen={isOpen} onClose={onExit}>
      <ModalBase height="auto" sx={modalBase}>
        <Flex sx={flexContent}>
          <Box onClick={onExit} sx={closeIcon}>
            <CloseIcon />
          </Box>
          <Text sx={{ ...mainText, mb: "40px" }}>Import From Snapshot</Text>
          <Flex sx={{ ...flexContent, ...overflowContentStyles }}>
            {!loading ? (
              <>
                <Text sx={labelInput}>Proposal link *</Text>
                <Input
                  value={snapshotProposalUrl}
                  onChange={onChangeInputProposal}
                  sx={{ ...input, mb: errors.errorProposalLink.value ? "3px" : "45px" }}
                />
                {errors.errorProposalLink.value && (
                  <Box sx={{ mb: "45px" }}>
                    <FieldErrorMessage error={errors.errorProposalLink.text} />
                  </Box>
                )}
                <SwitchContent sx={{ mb: 0, position: "relative" }} name={ENABLE_TRANSFORM} />
                <motion.div
                  initial={enableTransform ? "enter" : "hidden"}
                  animate={enableTransform ? "enter" : "hidden"}
                  className="settingImportSnapshotProposal"
                  variants={variants}
                >
                  <Text sx={secondaryTitle}>Transformation Configurations</Text>

                  <SwitchContent sx={{ mb: "19px" }} name={CONTRACT_TYPE} />
                  {contractType && selectContent(STATEMENT_OF_WORK)}
                  {errors.errorContractType.value && (
                    <Box sx={{ mb: "45px" }}>
                      <FieldErrorMessage
                        sx={{ marginBottom: "0px" }}
                        error={errors.errorContractType.text}
                      />
                    </Box>
                  )}
                  <SwitchContent sx={{ mb: "19px" }} name={LEGAL_JURISDICTION} />

                  {legalJurisdiction && selectContent(LEGAL_JURISDICTION_COUNTRY)}
                  {isVisibleSelectChooseState && selectContent(LEGAL_JURISDICTION_STATE)}
                  {errors.errorLegalJurisdiction.value && (
                    <Box sx={{ mb: "45px" }}>
                      <FieldErrorMessage
                        sx={{ marginBottom: "0px" }}
                        error={errors.errorLegalJurisdiction.text}
                      />
                    </Box>
                  )}

                  <SwitchContent sx={{ mb: "21px" }} name={INDEMNIFICATION_CLAUSE} />
                  <SwitchContent sx={{ m: "21px 0" }} name={INTELLECTUAL_PROPERTY_CLAUSE} />
                  <SwitchContent sx={{ mb: "24px" }} name={NON_SOLICITATION_CLAUSE} />

                  <Box>
                    <Text sx={labelInputTellMore}>Additional Instructions for AI</Text>
                    <Input
                      placeholder={
                        width > 480
                          ? "Add Non-disclosure clause for the agreement"
                          : "Add Non-disclosure clause "
                      }
                      value={additionalDetails}
                      onChange={e =>
                        changeValue(
                          "proposal",
                          {
                            ...values.proposal,
                            [ADDITIONAL_DETAILS]: e.target.value,
                          },
                          true
                        )
                      }
                      sx={input}
                    />
                  </Box>
                </motion.div>
                <Flex sx={loading ? loadingStylesBtn : stylesBtn}>
                  {!loading && (
                    <Button
                      disabled={
                        loading ||
                        errors.errorProposalLink.value ||
                        errors.errorLegalJurisdiction.value ||
                        errors.errorContractType.value
                      }
                      onClick={validationData}
                      sx={subBtn}
                    >
                      Transform and Import
                    </Button>
                  )}
                  <Button onClick={onExit} sx={loading ? btnCancelLoading : btnCancel}>
                    Cancel
                  </Button>
                </Flex>
              </>
            ) : (
              <Flex sx={loadingState}>
                <Lottie style={{ height: "80px" }} animationData={loader} loop />
                <Text sx={importingText}>Importing...</Text>
                <Flex sx={stylesBtn}>
                  <Button variant="secondary" onClick={onExit} sx={{ ...fW, padding: "10px 22px" }}>
                    Cancel
                  </Button>
                </Flex>
              </Flex>
            )}
          </Flex>
        </Flex>
      </ModalBase>
    </Portal>
  );
}
