import React from "react";
import { Flex, Text, Radio, Label, Box } from "theme-ui";
import Icon from "../../../icon/index";
import { itemRadio } from "../../styles";
import iconsObj from "../../../../assets/icons";
import { useCreateAgreement } from "../../../../hooks/useCreateAgreement";
import {
  AgreementLocation,
  LOCATION_CLOUD,
  LOCATION_LOCAL,
  LOCATION_PRIVATE_IPFS,
  LOCATION_PUBLIC_IPFS,
  PRIVACY_PRIVATE,
  PRIVACY_PUBLIC_PUBLISHED,
  PRIVACY_PUBLIC_WITH_LINK,
} from "../../../../types";

const agreementLocations: { name: string; value: AgreementLocation }[] = [
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

export default function AgreementLocationRadioButtons() {
  const { values, changeValue } = useCreateAgreement();

  const validateLocation = (value: AgreementLocation) => {
    switch (value) {
      case LOCATION_PUBLIC_IPFS:
        return values.agreementPrivacy != PRIVACY_PRIVATE;
      case LOCATION_PRIVATE_IPFS:
        return false;
        return (
          values.agreementPrivacy != PRIVACY_PUBLIC_PUBLISHED &&
          values.agreementPrivacy != PRIVACY_PUBLIC_WITH_LINK
        );
      case LOCATION_LOCAL:
        return (
          values.agreementPrivacy != PRIVACY_PUBLIC_PUBLISHED &&
          values.agreementPrivacy != PRIVACY_PUBLIC_WITH_LINK
        );
      default:
        return true;
    }
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
        <Flex sx={{ mb: "24px", justifyContent: "space-between" }}>
          {agreementLocations.map(el => {
            const isDisabled = !validateLocation(el.value);
            return (
              <Flex
                key={el?.name}
                onClick={() => {
                  changeValue("agreementLocation", el.value);
                }}
                className={`radio${isDisabled ? " disabled" : ""}`}
              >
                <Box style={{ width: "15px", height: "15px", cursor: "pointer" }}>
                  <Icon
                    src={
                      values.agreementLocation === el.value ? iconsObj.radioOn : iconsObj.radioOff
                    }
                  />
                </Box>
                <Label sx={itemRadio}>
                  <Radio sx={{ boxShadow: "none" }} name="letter" value={el.value} />
                  <Text sx={{ ml: "5px", variant: "text.normalTextMedium" }}>{el.name}</Text>
                </Label>
              </Flex>
            );
          })}
        </Flex>
      </Box>
    </>
  );
}
