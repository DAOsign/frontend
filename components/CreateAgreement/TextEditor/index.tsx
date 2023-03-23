import React, { Suspense, useState } from "react";
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import iconsObj from "../../../assets/icons";
import Icon from "../../icon";
import { Text, Button, Flex, Box, ButtonProps, Spinner } from "theme-ui";
import { useCreateAgreement } from "../../../hooks/useCreateAgreement";
import { useEditAgreement } from "../../../hooks/useEditAgreement";
import styles, { btnBack } from "./styles";

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

  const handleChooseAnotherMethod = () => {
    changeValue("agreementMethod", "");
    changeValue("filePath", "");
    changeValue("textEditorValue", "");
    changeValue("file", undefined);
  };

  return (
    <Box style={{ position: "relative", width: "100%" }} sx={styles}>
      <Flex sx={{ alignItems: "center", mt: "24px" }}>
        <Flex sx={{ minWidth: "140px" }}>
          <Text sx={{ variant: "forms.label", display: "inline-block", mr: "5px" }}>
            Enter agreement{" "}
          </Text>
          <Text
            sx={{
              variant: "forms.label",
              display: "inline-block",
              "@media screen and (max-width: 768px)": {
                display: "none",
              },
            }}
          >
            description
          </Text>
        </Flex>
      </Flex>

      <Suspense fallback={<Spinner />}>
        <Flex className="tabsContainer">
          <Button onClick={() => setState("edit")} {...buttonPropsByStatus(state, "edit")}>
            <Box sx={{ width: "20px", height: "20px", mr: "5px" }}>
              <Icon width={20} height={20} src={iconsObj.editFile} />
            </Box>
            Edit File
          </Button>
          <Button onClick={() => setState("preview")} {...buttonPropsByStatus(state, "preview")}>
            <Box sx={{ width: "20px", height: "20px", mr: "5px" }}>
              <Icon src={iconsObj.preview} />
            </Box>
            Preview
          </Button>
          <Button sx={btnBack} className="backBtn" onClick={handleChooseAnotherMethod}>
            <Icon style={{ display: "block" }} src={iconsObj.arrowLeftPink} />
            <Text sx={{ display: "block" }}>{" < "} Choose another method</Text>
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
