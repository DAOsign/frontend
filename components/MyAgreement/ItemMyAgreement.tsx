import React from "react";
import { Flex, Text, Box, Button } from "theme-ui";
import Icon from "../icon/index";
import iconsObj from "../../assets/icons";
import { agreementConteiner, iconMenuAgreement, greyAgrBtn, headerItem } from "./styles";

export default function ItemMyAgreement() {
  return (
    <Flex sx={agreementConteiner}>
      <Flex sx={headerItem}>
        <Flex>
          <Box sx={{ width: "12px", height: "12px", opacity: "0.5", ml: "5px" }}>
            <Icon style={{ cursor: "pointer" }} src={iconsObj.calendar} />
          </Box>
          <Text sx={{ variant: "text. smallTextMedium", opacity: "0.5", ml: "6px" }}>
            Created:{" "}
          </Text>
          <Text sx={{ variant: "text.smallTextMediumUser", ml: "5px" }}>data</Text>
        </Flex>
        <Flex>
          <Button sx={greyAgrBtn}>Draft</Button>
          <Box sx={iconMenuAgreement}>
            <Icon src={iconsObj.privateIcon} />
          </Box>
        </Flex>
      </Flex>
      <Text sx={{ variant: "text.largeTextBold", pt: "12px" }}>
        Minim mollit non deserunt ullamco
      </Text>
      <Flex sx={{ pt: "8px" }}>
        <Text sx={{ variant: "text. smallTextMedium", opacity: "0.5", mr: "6px" }}>Signers:</Text>
        <Text sx={{ variant: "text.smallTextMediumUser", mr: "20px" }}>0</Text>
        <Text sx={{ variant: "text. smallTextMedium", opacity: "0.5", mr: "6px" }}>Signed:</Text>
        <Text sx={{ variant: "text.smallTextMediumUser", mr: "20px" }}>0</Text>
        <Text sx={{ variant: "text. smallTextMedium", opacity: "0.5", mr: "6px" }}>Observers:</Text>
        <Text sx={{ variant: "text.smallTextMediumUser", mr: "20px" }}>0</Text>
      </Flex>
    </Flex>
  );
}
