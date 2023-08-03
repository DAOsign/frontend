import react, { useMemo } from "react";
import { Box, Flex, Container } from "theme-ui";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Observer } from "../../modules/graphql/gql/graphql";
import { formatAddress, onCopyClick } from "../../utils/formats";
import { notifSuccess } from "../../utils/notification";
import Identicon from "../Identicon/Identicon";
import Icon from "../icon";
import iconsObj from "../../assets/icons";
import {
  informationRowIcon,
  tableAddressCell,
  textMobile,
  usernameText,
  userPicture,
  signersRow,
  cardMobile,
} from "./styles";

interface Props {
  observer: Observer;
}
const ObserverCardMobile = ({ observer }: Props) => {
  const { width } = useWindowDimensions();

  const handleCopyAddress = (address: string) => {
    onCopyClick(address);
    notifSuccess("Address copied");
  };

  const address = useMemo<string>(
    () =>
      observer?.wallet?.address
        ? observer.wallet.address
        : !!observer?.email?.startsWith("0x")
        ? observer?.email
        : "",
    [observer]
  );

  const observerName = useMemo<string>(
    () => observer?.ens?.name || observer?.wallet?.user?.name || "Anonymous",
    [observer]
  );

  return (
    <Container sx={cardMobile}>
      <Flex sx={{ alignItems: "center" }}>
        <Box sx={userPicture}>
          {address ? (
            //@ts-ignore
            <Identicon account={address} size={width > 720 ? 20 : 40} />
          ) : (
            <Icon src={iconsObj.defaultUserPicture} />
          )}
        </Box>
        <Box sx={usernameText}>{observerName}</Box>
      </Flex>
      <Flex sx={tableAddressCell}>
        <Box sx={textMobile}>Observer Address</Box>
        {address ? (
          <Flex sx={signersRow}>
            <Box>{formatAddress(address)}</Box>
            <Box onClick={() => handleCopyAddress(address)} sx={informationRowIcon}>
              <Icon style={{ cursor: "pointer" }} src={iconsObj.iconSix} />
            </Box>
          </Flex>
        ) : (
          "-"
        )}
      </Flex>
    </Container>
  );
};

export default ObserverCardMobile;
