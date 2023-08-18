import React from "react";
import { Flex, Text, Box } from "theme-ui";
import Tooltip from "../Tooltip";
import CopyIcon from "../CopyIcon";
import { notifSucces } from "../../utils/notification";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { formatAddress, onCopyClick } from "../../utils/formats";
import { title, walletContainer } from "./styles";

const WalletAddress = ({ address }: any) => {
  const { width } = useWindowDimensions();

  return (
    <>
      <Flex sx={walletContainer}>
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
              paddingRight: "4px",
            }}
          >
            {address && width && width > 719 ? address : formatAddress(address)}
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
