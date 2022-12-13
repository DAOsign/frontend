import React from "react";
import { toast } from "react-toastify";
import { Box, Flex, Text } from "theme-ui";
import Icon from "../../components/icon/index";
import iconsObj from "../../assets/icons";

export const notifSucces = (text: string) =>
  toast(
    <Flex sx={{ alignItems: "center" }}>
      <Box sx={{ width: "44px", height: "44px", mr: "16px" }}>
        <Icon src={iconsObj.good} />
      </Box>
      {text}
    </Flex>,
    {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    }
  );

export const notifError = (text: string) =>
  toast(
    <Flex sx={{ alignItems: "center" }}>
      <Box sx={{ width: "44px", height: "44px", mr: "16px" }}>
        <Icon src={iconsObj.errorSvg} />
      </Box>
      {text}
    </Flex>,
    {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    }
  );

export const notifWarning = (text: string) =>
  toast(
    <Flex sx={{ alignItems: "center" }}>
      <Box sx={{ width: "44px", height: "44px", mr: "16px" }}>
        <Icon src={iconsObj.alert} />
      </Box>
      {text}
    </Flex>,
    {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    }
  );
