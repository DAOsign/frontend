import React from "react";
import { Flex, Text, Box } from "theme-ui";
import Identicon from "../../Identicon/Identicon";
import Tooltip from "../../Tooltip";
import CopyIcon from "../../CopyIcon";
import { notifSucces } from "../../../utils/notification";
import { formatAddress, onCopyClick } from "../../../utils/formats";
import { container, title, subTitle } from "./styles";

const Info = ({ address }: any) => {
  return (
    <>
      <Flex sx={container}>
        <Flex>
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
        <Flex>
          <Text sx={title}>Email</Text>
          <Text sx={subTitle}>johndoe@mail.com</Text>
        </Flex>
        <Flex>
          <Text sx={title}>Phone</Text>
          <Text sx={subTitle}>(219) 555-0114</Text>
        </Flex>
        <Flex>
          <Text sx={title}>Bio</Text>
          <Text sx={subTitle}>
            Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est
            convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam.
            Donec finibus, urna bibendum ultricies.
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Info;
