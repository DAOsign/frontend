import React, { useState } from "react";
import { Flex, Text, Radio, Label, Box } from "theme-ui";
import Icon from "../../../icon/index";
import iconsObj from "../../../../assets/icons";
import { useCreateAgreement } from "../../../../hooks/useCreateAgreement";
import { useEditAgreement } from "../../../../hooks/useEditAgreement";
import {
  AgreementLocation,
  LOCATION_CLOUD,
  LOCATION_PUBLIC_IPFS,
  PRIVACY_PRIVATE,
} from "../../../../types";
import ModalIpfsWarning from "../../../ModalIpfsWarning/ModalIpfsWarning";
import Tooltip from "../../../Tooltip";
import { nameItem, itemLocation } from "./styles";

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
      <Flex sx={{ alignItems: "center", mt: "24px", mb: "5px" }}>
        <Text
          sx={{
            variant: "forms.label",
            display: "block",
            mr: "5px",
            maxWidth: "150px",
          }}
        >
          Agreement location *{" "}
        </Text>
        <Tooltip
          top="-420%"
          height="0"
          left="50%"
          transform="translate(-54.5%, 0px)"
          minWidth="200px"
          title=" Select where you want to store your agreement."
        >
          <Box sx={{ width: "12px", height: "12px", display: "inline-block" }}>
            <Icon style={{ opacity: 0.5 }} src={iconsObj.infoCircle} />
          </Box>
        </Tooltip>
      </Flex>
      <Box as="form" onSubmit={e => e.preventDefault()}>
        <Flex
          sx={{
            "@media screen and (max-width: 719px)": {
              mb: !values.file ? "36px" : "24px",
              flexDirection: "column",
            },
            "@media screen and (max-width: 1200px)": {
              mb: "24px",
            },

            gap: "22px",
          }}
        >
          {agreementLocations.map(el => (
            <Flex
              key={el?.name}
              sx={{
                ...itemLocation,
                border:
                  values.agreementLocation === el.value
                    ? "2px solid #CA5CF2 !important"
                    : "2px solid #EDEDF3",
              }}
              onClick={() => onAgreementLocationClick(el.value)}
              className="radio"
            >
              <Flex sx={{ alignItems: "center" }}>
                <Box style={{ width: "32px", height: "32px", cursor: "pointer" }}>
                  <Icon src={el.value === LOCATION_CLOUD ? iconsObj.cloud : iconsObj.ipfs} />
                </Box>
                <Text sx={nameItem}>{el.name}</Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Box>
      {/*     <ModalIpfsWarning
        isOpen={isIpfsWarningVisible}
        onExit={() => setIsIpfsWarningVisible(false)}
      /> */}
    </>
  );
}
