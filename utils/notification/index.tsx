import React from "react";
import { toast } from "react-toastify";
import { Box, Flex, Text } from "theme-ui";
import Icon from "../../components/icon/index";
import iconsObj from "../../assets/icons";

const toastList = new Set();

// This container is required for the first parameter of the toast function
const ToastContainer = (props: any) => <div>{props.children}</div>;

export const notifSuccess = (text: string) => {
  const id = toast(
    <ToastContainer>
      <Flex sx={{ alignItems: "center" }}>
        {" "}
        <Box sx={{ width: "44px", height: "44px", mr: "16px" }}>
          <Icon src={iconsObj.good} />{" "}
        </Box>
        {text}{" "}
      </Flex>
    </ToastContainer>,
    {
      position: "top-right",
      autoClose: 3000,
    }
  );
  setTimeout(() => {
    toast.dismiss(id);
  }, 3000);
  toastList.add(id);
};

export const notifComingSoon = (text: string) => {
  const id = toast(
    <ToastContainer>
      <Flex sx={{ alignItems: "center" }}>
        {" "}
        <Box sx={{ width: "44px", height: "44px", mr: "16px" }}>
          <Icon src={iconsObj.soon} />{" "}
        </Box>
        <Text sx={{ maxWidth: "70%" }}>{text} </Text>
      </Flex>
    </ToastContainer>,
    {
      position: "top-right",
      autoClose: 3000,
    }
  );
  setTimeout(() => {
    toast.dismiss(id);
  }, 3000);
  toastList.add(id);
};

export const notifError = (text: string) => {
  const id = toast(
    <ToastContainer>
      <Flex sx={{ alignItems: "center" }}>
        <Box sx={{ width: "44px", height: "44px", mr: "16px" }}>
          <Icon src={iconsObj.errorSvg} />
        </Box>
        {text}
      </Flex>
    </ToastContainer>,
    {
      position: "top-right",
      autoClose: 3000,
    }
  );
  setTimeout(() => {
    toast.dismiss(id);
  }, 3000);
  toastList.add(id);
};

export const notifWarning = (text: string) => {
  const id = toast(
    <ToastContainer>
      <Flex sx={{ alignItems: "center" }}>
        <Box sx={{ width: "44px", height: "44px", mr: "16px" }}>
          <Icon src={iconsObj.alert} />
        </Box>
        {text}
      </Flex>
    </ToastContainer>,
    {
      position: "top-right",
      autoClose: 3000,
    }
  );
  setTimeout(() => {
    toast.dismiss(id);
  }, 3000);
  toastList.add(id);
};
