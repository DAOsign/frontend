import React, { useState } from "react";
import { Flex, Text, Radio, Label, Box } from "theme-ui";
import Icon from "../../../icon/index";
import { itemRadio } from "../../styles";
import iconsObj from "../../../../assets/icons";
import { useCreateAgreement } from "../../../../hooks/useCreateAgreement";
import { useEditAgreement } from "../../../../hooks/useEditAgreement";
import stylesTooltip from "../../../Header/index.module.css";
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

export default function AgreementLocationRadioButtons({ page }: { page: string }) {
  const create = useCreateAgreement();
  const edit = useEditAgreement();
  const { values, changeValue } = page === "create" ? create : edit;
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
      <Flex sx={{ alignItems: "center" }}>
        <Text
          sx={{
            variant: "forms.label",
            display: "block",
            maxWidth: "150px",
            mb: "5px",
          }}
        >
          Agreement location{" "}
        </Text>
        <div style={{ paddingTop: 0 }} className={`${stylesTooltip.tooltip}`}>
          <button className={`${stylesTooltip.tooltip_button}`}>
            <Box sx={{ width: "12px", height: "12px", display: "inline-block" }}>
              <Icon style={{ opacity: 0.5 }} src={iconsObj.infoCircle} />
            </Box>
          </button>
          <div
            style={{
              top: "-361%",
              left: "50%",
              width: "200px",
              transform: "translate(-57%, 0)",
              pointerEvents: "none",
            }}
            className={`${stylesTooltip.tooltip_container}`}
          >
            <div className={`${stylesTooltip.tooltip_text}`}>
              Select where you want to store your agreement.
            </div>
            <div
              style={{ marginLeft: "50.5%" }}
              className={`${stylesTooltip.tooltip_text_buttom}`}
            ></div>
          </div>
        </div>
      </Flex>
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
