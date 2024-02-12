import React, { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import iconsObj from "../../../assets/icons";
import Icon from "../../icon";
import Preview from "../../IconComponent/Preview";
import { Text, Button, Flex, Box, ButtonProps, Spinner } from "theme-ui";
import { useCreateAgreement } from "../../../hooks/useCreateAgreement";
import { useEditAgreement } from "../../../hooks/useEditAgreement";
import styles, {
  containerEnter,
  enterAgreement,
  footerText,
  labelDesc,
  expandBtn,
  btnBack,
  icon,
} from "./styles";
import ArrowLeftPink from "../../ArrowLeftPink";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
});

const buttonPropsByStatus = (
  activeTab: "edit" | "preview",
  tab: "edit" | "preview"
): ButtonProps => {
  let props: ButtonProps = {
    variant: "back",
    sx: { color: "black", width: "fit-content", p: "0", px: "8px", borderRadius: "0", m: "0" },
  };
  if (activeTab === tab) {
    props.disabled = true;
    props.className = "active";
    //@ts-ignore
    props.sx!.background = "silver";
  }
  return props;
};

const minHeightTextEditor = 300;

const TextEditor = ({
  page,
  handleChooseAnotherMethod,
}: {
  page: string;
  handleChooseAnotherMethod: () => void;
  setIsOpenModalImport: any;
}) => {
  const [heightValue, setHeightValue] = useState(minHeightTextEditor);
  const create = useCreateAgreement();
  const [expand, setExpand] = useState(false);
  const edit = useEditAgreement();
  const {
    values: { textEditorValue, agreementMethod },
    changeValue,
  } = page === "create" ? create : edit;

  const [state, setState] = useState<"edit" | "preview">("edit");
  const [expandIsVisible, setExpandIsVisible] = useState(true);

  const isOverflown = () => {
    const mdContainer = window.document.getElementsByClassName("w-md-editor-text");

    if (!!mdContainer) {
      if (mdContainer[0]?.scrollHeight < 320) {
        setExpand(false);
        setExpandIsVisible(false);
      } else {
        setExpandIsVisible(true);
      }
    }
  };

  useEffect(() => {
    isOverflown();
  }, [textEditorValue]);

  return (
    <Box style={{ position: "relative", width: "100%" }} className="textEditor" sx={styles}>
      <Flex sx={{ alignItems: "center" }}>
        <Flex sx={containerEnter}>
          <Text sx={enterAgreement}>Enter</Text>
          <Text sx={labelDesc}>agreement </Text>
          <Text sx={enterAgreement}>description *</Text>
        </Flex>
      </Flex>

      <Suspense fallback={<Spinner />}>
        <Flex className="tabsContainer">
          <Button onClick={() => setState("edit")} {...buttonPropsByStatus(state, "edit")}>
            <Box sx={icon}>
              <Icon width={20} height={20} src={iconsObj.editFile} />
            </Box>
            Edit File
          </Button>
          <Button
            onClick={() => {
              setState("preview");
              setHeightValue(minHeightTextEditor);
              setExpand(false);
            }}
            {...buttonPropsByStatus(state, "preview")}
          >
            <Box sx={icon}>
              <Preview />
            </Box>
            Preview
          </Button>
          <Button sx={btnBack} className="backBtn" onClick={handleChooseAnotherMethod}>
            <Box sx={{ width: "20px" }}>
              <ArrowLeftPink />
            </Box>
            <Text sx={{ display: "block" }}>Choose another method</Text>
          </Button>
        </Flex>
        <Box>
          {expand ? (
            <MDEditor
              onChange={val => changeValue("textEditorValue", val || "", true)}
              hideToolbar={state === "preview"}
              minHeight={minHeightTextEditor}
              value={textEditorValue}
              height="fit-content"
              className="expand"
              preview={state}
            />
          ) : (
            <MDEditor
              onChange={val => changeValue("textEditorValue", val || "", true)}
              hideToolbar={state === "preview"}
              value={textEditorValue}
              preview={state}
            />
          )}
        </Box>
        <Flex className="support">
          <Flex>
            <Box sx={{ ...icon, height: "12px" }}>
              <Icon src={iconsObj.m} />
            </Box>
            <Text sx={footerText}>Markdown is supported</Text>
          </Flex>
          {state === "edit" && (
            <Button disabled={!expandIsVisible} onClick={() => setExpand(!expand)} sx={expandBtn}>
              {!expand ? "Expand" : "Collapse"}
            </Button>
          )}
        </Flex>
      </Suspense>
    </Box>
  );
};

export default TextEditor;
