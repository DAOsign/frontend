import React from "react";
import { Flex, Text, Button, Box, Container } from "theme-ui";
import Icon from "../icon/index";
import iconsObj from "../../assets/icons";
import {
  flexContainer,
  textContainer,
  btnContainer,
  containerIcon,
  secondText,
  container,
  mainText,
  closeIcon,
  bg,
} from "./styles";
import { useMutation } from "urql";
import CloseIcon from "../IconComponent/CloseIcon";
import { logoutMutation } from "../../modules/graphql/mutations";
import { useWeb3 } from "../../hooks/useWeb3";
import { clearToken } from "../../utils/token";
import { useRouter } from "next/router";

export default function LogOutPopap({
  setVisible,
  onLogout,
}: {
  setVisible: any;
  onLogout?: () => void;
}) {
  const [, logoutRequest] = useMutation(logoutMutation);
  const { push } = useRouter();
  const { logout } = useWeb3();

  const defaultLogout = async () => {
    const result = await logoutRequest({});
    if (result.data && !result.error) {
      logout();
      clearToken();
    }
    push("/connect");
  };

  const handleLogout = onLogout || defaultLogout;

  return (
    <Container sx={bg}>
      <Flex sx={container}>
        <Flex sx={flexContainer}>
          <Box onClick={() => setVisible(false)} sx={closeIcon}>
            <CloseIcon />
          </Box>
          <Box sx={containerIcon}>
            <Icon width={"44px"} height={"44px"} src={iconsObj.frame} />
          </Box>
          <Text sx={mainText}>Are you sure you want to Log Out?</Text>
          <Text sx={textContainer}>You will be returned to Login page</Text>
          <Button onClick={handleLogout} sx={btnContainer}>
            Log Out
          </Button>
          <Text onClick={() => setVisible(false)} sx={secondText}>
            Cancel
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
}
