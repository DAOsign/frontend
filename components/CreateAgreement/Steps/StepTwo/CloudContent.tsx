import React, { useState } from "react";
import { Container, Flex, Text } from "theme-ui";
import Icon from "../../../icon/index";
import { card, primaryTitleItem } from "../../styles";
import iconsObj from "../../../../assets/icons";
import TextEditor from "../../../TextEditor/index";
import { useCreateAgreement } from "../../../../hooks/useCreateAgreement";
import { withFade } from "../..";
import Upload from "./Upload";

const Hash = require("ipfs-only-hash");

type CloudVariant = "enter" | "upload" | null;

export default function CloudContent() {
  const { values } = useCreateAgreement();
  const [variant, setVariant] = useState<CloudVariant>(values.textEditorValue ? "enter" : null);

  const getCloudContent = () => {
    switch (variant) {
      case "enter":
        return withFade(<TextEditor goBack={() => setVariant(null)} />, 1);
      case "upload": {
        return withFade(<Upload />, 2);
      }
      default:
        return withFade(
          <Flex sx={{ justifyContent: "space-between" }}>
            <Container onClick={() => setVariant("upload")} sx={{ ...card, cursor: "pointer" }}>
              <div style={{ width: "50px", height: "50px", margin: "0 auto" }}>
                <Icon width="50px" height="50px" src={iconsObj.uploadCloudPrimary} />
              </div>
              <Text sx={{ ...primaryTitleItem, mb: "12px", mt: "24px" }}>Upload Agreement</Text>
              <Text sx={{ variant: "text.smallTextMedium", maxWidth: "160px", opacity: 1 }}>
                Upload file of a type PDF, DOCX, TXT
              </Text>
            </Container>

            <Container onClick={() => setVariant("enter")} sx={{ ...card, cursor: "pointer" }}>
              <div style={{ width: "50px", height: "50px", margin: "0 auto" }}>
                <Icon width="50px" height="50px" src={iconsObj.fileSecondarysvg} />
              </div>
              <Text sx={{ ...primaryTitleItem, mb: "12px", mt: "24px" }}>Enter Agreement</Text>
              <Text sx={{ variant: "text.smallTextMedium", maxWidth: "160px", opacity: 1 }}>
                Enter Text or Markdown content for the Agreement
              </Text>
            </Container>
          </Flex>,
          3
        );
    }
  };

  return getCloudContent();
}
