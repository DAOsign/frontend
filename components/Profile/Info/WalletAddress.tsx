import React from "react";
import { Flex, Text, Box } from "theme-ui";
import Identicon from "../../Identicon/Identicon";
import Tooltip from "../../Tooltip";
import CopyIcon from "../../CopyIcon";
import { notifSucces } from "../../../utils/notification";
import { formatAddress, onCopyClick } from "../../../utils/formats";
import { container, title, subTitle, walletContainer } from "./styles";

const WalletAddress = ({ address }: any) => {
  return (
    <>
      <Flex sx={walletContainer}>
        <Text sx={title}>Address</Text>
        <Tooltip
          top="-164%"
          left="-95px"
          transform=""
          minWidth=""
          title={address}
          height={undefined}
          className="userCardAddress"
        >
          <Text
            sx={{
              variant: "text.smallTextMediumUser",
              cursor: "default",
            }}
          >
            {address ? formatAddress(address) : "\u00A0"}
          </Text>
        </Tooltip>
        <Box
          onClick={() => {
            onCopyClick(address);
            notifSucces("Link copied");
          }}
        >
          <CopyIcon />
        </Box>
      </Flex>
    </>
  );
};

export default WalletAddress;
