import { useEffect, useState } from "react";
import { Box, Button, Flex, Switch, Text, Input, Label, Container } from "theme-ui";
import iconsObj from "../../assets/icons";
import Icon from "../icon";
import { ModalBase } from "../ModalBase/ModalBase";

import {
  switchContainer,
  containerSelect,
  secondaryTitle,
  flexContainer,
  importingText,
  containerIcon,
  btnContainer,
  labelSwitch,
  flexLoader,
  flexContent,
  titleSelect,
  labelInput,
  flexSelect,
  switchBtn,
  closeIcon,
  modalBase,
  mainText,
  input,
  icon,
} from "./styles";
import { Portal } from "../Portal/Portal";
import { motion, Variants } from "framer-motion";
import loader from "../../img/json/loader.json";
import Lottie from "lottie-react";
import { useClient } from "urql";
import { initialStateSwitches, initialState } from "./initialState";
import { snapshotUrl } from "../../modules/graphql/index";
import { snapshotProposal } from "../../modules/graphql/queries/snapshot";

const variants: Variants = {
  hidden: { opacity: 1, height: 0, overflow: "hidden" },
  enter: { opacity: 1, height: "auto", overflow: "hidden" },
  exit: { opacity: 1, height: 0, overflow: "hidden" },
};

interface Props {
  isOpen: boolean;
  // onSubmit: () => Promise<any>;
  onExit: () => any;
}

export default function ModalImportSnapshot({
  isOpen,
  // onSubmit,
  onExit,
}: Props) {
  const [loading, setLoading] = useState(false);
  const [switches, setSwitches] = useState(initialStateSwitches);
  const [selectsOpen, setSelectsOpen] = useState({ statementWork: false });
  const [selectsValue, setSelectsValue] = useState(initialState);
  const { query } = useClient();

  const queryProposal = async (
    // remove default arg
    proposalId: string = "0x1a359a4fe248efde94047365215bf3128ab0f466350ffa1472c2801f226bb1bc"
  ) =>
    query(
      snapshotProposal,
      { proposalId: proposalId },
      { url: snapshotUrl, requestPolicy: "network-only" }
    )
      .toPromise()
      .then(r => r?.data?.proposal);

  useEffect(() => {
    // remove example
    queryProposal().then(console.log);
  }, []);

  const handleSubmit = async () => {
    if (loading) return;
    setLoading(true);
  };

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
          variants={variants}
          initial="hidden"
        >
          {options?.map((el: string, i: number) => {
            return (
              el !== value && (
                <Flex onClick={() => onChangeSelect(name, el)} key={i} sx={flexSelect}>
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
      <Flex sx={switchContainer}>
        <Label
          htmlFor={name}
          sx={{ ...labelSwitch, ml: switches[name].isOpen ? "12px !important" : "8px" }}
        >
          {switches[name].title}
        </Label>
        <Switch
          onChange={({ target }) =>
            setSwitches({ ...switches, [name]: { ...switches[name], isOpen: target.checked } })
          }
          checked={switches[name].isOpen}
          className="switch"
          sx={switchBtn}
          id={name}
        />
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
              <Input sx={input} />
              <SwitchContent name="enableTransform" />
              <motion.div
                animate={switches.enableTransform.isOpen ? "enter" : "exit"}
                transition={{ type: "linear" }}
                variants={variants}
                initial="hidden"
              >
                <Text sx={secondaryTitle}>Transformation Configurations</Text>
                <SwitchContent name="contractType" />
                {selectContent("statementWork")}
                <SwitchContent name="legalJurisdiction" />
                {selectContent("chooseCountry")}
                {selectContent("chooseState")}
                {/* <SwitchContent name="indemnificationClause" />
                <SwitchContent name="intellectualPropertyClause" />
                <SwitchContent name="nonSolicitationClause" /> */}
              </motion.div>
              <Text sx={{ ...labelInput, mt: "20px" }}>Tell us more</Text>
              <Input sx={input} />
            </>
          ) : (
            <Flex sx={flexLoader}>
              <Lottie style={{ height: "80px" }} animationData={loader} loop={true} />
              <Text sx={importingText}>Importing...</Text>
            </Flex>
          )}
          <Flex sx={{ mt: loading ? 0 : "40px", flexDirection: "row-reverse" }}>
            {!loading && (
              <Button
                onClick={handleSubmit}
                sx={{ ...btnContainer, m: "0", width: "215px" }}
                disabled={loading}
              >
                Transform and Import
              </Button>
            )}
            <Button
              onClick={onExit}
              variant="secondary"
              sx={{ mr: loading ? "auto" : "24px", ml: loading ? "auto" : "0" }}
            >
              Cancel
            </Button>
          </Flex>
        </Flex>
      </ModalBase>
    </Portal>
  );
}
