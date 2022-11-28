import React, { useState } from "react";
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import iconsObj from "../../assets/icons";
import Icon from "../icon";
import { Text, Button, Flex, Box } from "theme-ui";

const TextEditor = ({ setCloud, cloud }: any) => {
  const [value, setValue] = useState<string>("");

  const MDEditor = dynamic(() => import("@uiw/react-md-editor").then((mod) => mod.default), {
    ssr: false,
  });

<<<<<<< HEAD
  return (
    <div style={{ position: "relative" }}>
      <Flex sx={{ alignItems: "center" }}>
        <Text sx={{ variant: "forms.label", minWidth: "170px" }}>Enter agreement description</Text>
        <Button
          onClick={() => setCloud(!cloud)}
          sx={{ variant: "buttons.back", height: "30px", pt: 0 }}
        >
          <Icon style={{ display: "block" }} src={iconsObj.arrowLeftPink} />
          <Text sx={{ display: "block", fontSize: "10px" }}>Choose another privacy</Text>
        </Button>
      </Flex>
      <MDEditor value={value} onChange={(e) => setValue(e || "")} preview="edit" autoFocus />
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
=======
    return <div style={{ position: 'relative'}}>
    <Flex sx={{alignItems: 'center'}}>
        <Text sx={{variant: 'forms.label', minWidth: '170px'}}>Enter agreement description</Text>
        <Button onClick={() => setCloud(!cloud)}  sx={{variant: 'buttons.back', height: '30px', pt: 0}}>
            <Icon style={{display: 'block'}} src={iconsObj.arrowLeftPink}/>
            <Text sx={{display: 'block', fontSize: '10px'}}>Choose another privacy</Text>
        </Button>
    </Flex>
    <MDEditor
        value={value}
        onChange={(e) => setValue(e || '')}
        preview="edit"
        autoFocus

      />
      <Box sx={{position: 'absolute', right: '5px', backgroundColor: 'inherit', bottom: '35px', pointerEvents: 'none', cursor: 'pointer'}} >
        <Icon width='30px' height='30px' style={{opacity: 0.3}} src={iconsObj.fieldResize}/>
>>>>>>> 3cd6dc35758ab2c422d2171a3e30abd7cdcd9291
      </Box>
      <Flex
        sx={{
          backgroundColor: "#EDEDF3",
          borderRadius: "0 0 8px 8px",
          height: "32px",
          alignItems: "center",
          pl: "12px",
        }}
      >
        <Icon src={iconsObj.m} />{" "}
        <Text sx={{ variant: "text.overscript", opacity: 0.5, ml: "4px" }}>
          Markdown is supported
        </Text>
      </Flex>
    </div>
  );
};

export default TextEditor;
