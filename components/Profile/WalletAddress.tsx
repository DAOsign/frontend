import React from "react";
import { Flex, Text, Box } from "theme-ui";
import Tooltip from "../Tooltip";
import CopyIcon from "../CopyIcon";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { formatAddress, onCopyClick } from "../../utils/formats";
import { title, walletContainer, copyIcon } from "./styles";
import { notifSuccess } from "../../utils/notification";

const WalletAddress = ({ address }: any) => {
  const { width } = useWindowDimensions();

  return (
    <>
      <Flex sx={walletContainer}>
        {width && width < 719 ? (
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
        ) : (
          <Text
            sx={{
              variant: "text.smallTextMediumUser",
              cursor: "default",
              paddingRight: "4px",
            }}
          >
            {address}
          </Text>
        )}
        <Box
          sx={copyIcon}
          onClick={() => {
            onCopyClick(address);
            notifSuccess("Link copied");
          }}
        >
          <CopyIcon />
        </Box>
      </Flex>
    </>
  );
};

export default WalletAddress;
