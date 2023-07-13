import React, { useMemo } from "react";
import { Box, Flex } from "theme-ui";
import {
  informationRowIcon,
  tableAddressCell,
  tableUserNameCell,
  usernameText,
  userPicture,
} from "./styles";
import Identicon from "../Identicon/Identicon";
import Icon from "../icon";
import iconsObj from "../../assets/icons";
import { onCopyClick } from "../../utils/formats";
import { Observer } from "../../modules/graphql/gql/graphql";
import { notifSucces } from "../../utils/notification";

interface Props {
  observer: Observer;
}

export const ObserverRow = ({ observer }: Props) => {
  const handleCopyAddress = (address: string) => {
    onCopyClick(address);
    notifSucces("Address copied");
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
    <tr>
      <td>
        <Flex sx={tableUserNameCell}>
          <Box sx={userPicture}>
            {address ? (
              <Identicon account={address} size={20} />
            ) : (
              <Icon src={iconsObj.defaultUserPicture} />
            )}
          </Box>
          <Box sx={usernameText}>{observerName}</Box>
        </Flex>
      </td>
      <td>
        {address ? (
          <Flex sx={tableAddressCell}>
            <Box>{address}</Box>
            <Box onClick={() => handleCopyAddress(address)} sx={informationRowIcon}>
              <Icon style={{ cursor: "pointer" }} src={iconsObj.iconSix} />
            </Box>
          </Flex>
        ) : (
          "-"
        )}
      </td>
    </tr>
  );
};
