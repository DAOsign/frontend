import React from "react";
import { Container, Flex, Text, Radio, Label, Box } from "theme-ui";
import Icon from "../../../icon/index";
import { itemRadio } from "../../styles";
import iconsObj from "../../../../assets/icons";
import { useCreateAgreement } from "../../../../hooks/useCreateAgreement";
import { AnimatePresence } from "framer-motion";
import { withFade } from "../..";
import {
  LOCATION_CLOUD,
  LOCATION_LOCAL,
  LOCATION_PRIVATE_IPFS,
  LOCATION_PUBLIC_IPFS,
} from "../../../../types";
import CloudContent from "./CloudContent";
import UploadLocalAgreement from "./UploadLocal";

const agreementLocations = [
  {
    name: "Cloud",
    value: LOCATION_CLOUD,
  },
  {
    name: "Public IPFS",
    value: LOCATION_PUBLIC_IPFS,
  },
  {
    name: "Private IPFS",
    value: LOCATION_PRIVATE_IPFS,
  },
  {
    name: "Local",
    value: LOCATION_LOCAL,
  },
];

export default function StepTwo() {
  const variantsAgreement = {
    Cloud: withFade(<CloudContent />, 1),
    Local: withFade(<UploadLocalAgreement />, 4),
  };

  const { values, changeValue } = useCreateAgreement();

  return (
    <Container sx={{ maxWidth: "440px", textAlign: "left" }}>
      <Text
        sx={{ variant: "forms.label", mr: "auto", display: "block", maxWidth: "150px", mb: "5px" }}
      >
        Agreement location{" "}
        <Box sx={{ width: "12px", height: "12px", display: "inline-block" }}>
          <Icon width="12px" height="12px" style={{ opacity: 0.5 }} src={iconsObj.infoCircle} />
        </Box>
      </Text>
      <Box as="form" onSubmit={e => e.preventDefault()}>
        <Flex sx={{ mb: "24px", justifyContent: "space-between" }}>
          {agreementLocations.map(el => {
            return (
              <Flex sx={{ alignItems: "center" }} key={el?.name}>
                <Box style={{ width: "15px", height: "15px", cursor: "pointer" }}>
                  <Icon
                    src={
                      values.agreementLocation === el.value ? iconsObj.radioOn : iconsObj.radioOff
                    }
                  />
                </Box>
                <Label
                  sx={itemRadio}
                  onClick={() => {
                    changeValue("agreementLocation", el.value);
                  }}
                >
                  <Radio sx={{ boxShadow: "none" }} name="letter" value={el.value} />
                  <Text sx={{ ml: "5px", variant: "text.normalTextMedium" }}>{el.name}</Text>
                </Label>
              </Flex>
            );
          })}
        </Flex>
      </Box>
      <Box>
        <AnimatePresence mode="wait" initial={false}>
          {variantsAgreement[values.agreementLocation]}
        </AnimatePresence>
      </Box>
    </Container>
  );
}
