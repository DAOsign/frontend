import React, { Suspense, useState } from "react";
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import iconsObj from "../../../assets/icons";
import Icon from "../../icon";
import { Text, Button, Flex, Box, ButtonProps, Spinner } from "theme-ui";
import { useCreateAgreement } from "../../../hooks/useCreateAgreement";
import { useEditAgreement } from "../../../hooks/useEditAgreement";
import styles from "./styles";

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

const TextEditor = ({ page }: { page: string }) => {
  const create = useCreateAgreement();
  const edit = useEditAgreement();
  const {
    values: { textEditorValue },
    changeValue,
  } = page === "create" ? create : edit;

  const [state, setState] = useState<"edit" | "preview">("edit");

  const handleOnChange = (value?: string) => {
    changeValue("textEditorValue", value || "");
  };

  // const replaceValue = () => {
  //   const str = JSON.parse(textEditorValue);
  //   return JSON.parse(str);
  // };
  // console.log(state);

  return (
    <Box style={{ position: "relative" }} sx={styles}>
      <Flex sx={{ alignItems: "center" }}>
        <Text sx={{ variant: "forms.label", minWidth: "170px" }}>Enter agreement description</Text>
        <Button className="backBtn" onClick={() => changeValue("agreementMethod", "")}>
          <Icon style={{ display: "block" }} src={iconsObj.arrowLeftPink} />
          <Text sx={{ display: "block", fontSize: "10px" }}>{" < "} Choose another method</Text>
        </Button>
      </Flex>

      <Suspense fallback={<Spinner />}>
        <Flex className="tabsContainer">
          <Button onClick={() => setState("edit")} {...buttonPropsByStatus(state, "edit")}>
            Edit
          </Button>
          <Button onClick={() => setState("preview")} {...buttonPropsByStatus(state, "preview")}>
            Preview
          </Button>
        </Flex>
        <MDEditor
          value={textEditorValue}
          onChange={val => handleOnChange(val)}
          preview={state}
          hideToolbar={state === "preview"}
        />

        <Box
          sx={{
            position: "absolute",
            right: "5px",
            backgroundColor: "inherit",
            bottom: "35px",
            pointerEvents: "none",
            cursor: "pointer",
          }}
        >
          <Icon width="30px" height="30px" style={{ opacity: 0.3 }} src={iconsObj.fieldResize} />
        </Box>
        <Flex className="support">
          <Icon src={iconsObj.m} />
          <Text sx={{ variant: "text.overscript", opacity: 0.5, ml: "4px" }}>
            Markdown is supported
          </Text>
        </Flex>
      </Suspense>
    </Box>
  );
};

export default TextEditor;
