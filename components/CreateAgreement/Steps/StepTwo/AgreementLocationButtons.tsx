import React, { useState } from "react";
import { Flex, Text, Radio, Label, Box } from "theme-ui";
import Icon from "../../../icon/index";
import { itemRadio } from "../../styles";
import iconsObj from "../../../../assets/icons";
import { useCreateAgreement } from "../../../../hooks/useCreateAgreement";
import {
  AgreementLocation,
  LOCATION_CLOUD,
  LOCATION_PUBLIC_IPFS,
  PRIVACY_PRIVATE,
} from "../../../../types";
import ModalIpfsWarning from "../../../ModalIpfsWarning/ModalIpfsWarning";

const agreementLocations: { name: string; value: AgreementLocation }[] = [
  {
    name: "Cloud",
    value: LOCATION_CLOUD,
  },
  {
    name: "IPFS",
    value: LOCATION_PUBLIC_IPFS,
  },
];

export default function AgreementLocationRadioButtons() {
  const { values, changeValue } = useCreateAgreement();
  const [isIpfsWarningVisible, setIsIpfsWarningVisible] = useState<boolean>(false);

  const onAgreementLocationClick = (location: AgreementLocation) => {
    if (
      location === LOCATION_PUBLIC_IPFS &&
      values.agreementLocation !== LOCATION_PUBLIC_IPFS &&
      values.agreementPrivacy === PRIVACY_PRIVATE
    ) {
      setIsIpfsWarningVisible(true);
    }
    changeValue("agreementLocation", location);
  };

  return (
    <>
      <Text
        sx={{ variant: "forms.label", mr: "auto", display: "block", maxWidth: "150px", mb: "5px" }}
      >
        Agreement location{" "}
        <Box sx={{ width: "12px", height: "12px", display: "inline-block" }}>
          <Icon width="12px" height="12px" style={{ opacity: 0.5 }} src={iconsObj.infoCircle} />
        </Box>
      </Text>
      <Box as="form" onSubmit={e => e.preventDefault()}>
        <Flex sx={{ mb: "24px", display: "flex", gap: "22px" }}>
          {agreementLocations.map(el => (
            <Flex
              key={el?.name}
              onClick={() => onAgreementLocationClick(el.value)}
              className="radio"
            >
              <Box style={{ width: "15px", height: "15px", cursor: "pointer" }}>
                <Icon
                  src={values.agreementLocation === el.value ? iconsObj.radioOn : iconsObj.radioOff}
                />
              </Box>
              <Label sx={itemRadio}>
                <Radio sx={{ boxShadow: "none" }} name="letter" value={el.value} />
                <Text sx={{ ml: "5px", variant: "text.normalTextMedium" }}>{el.name}</Text>
              </Label>
            </Flex>
          ))}
        </Flex>
      </Box>
      <ModalIpfsWarning
        isOpen={isIpfsWarningVisible}
        onExit={() => setIsIpfsWarningVisible(false)}
      />
    </>
  );
}
