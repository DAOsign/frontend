import React from "react";
import { Flex, Text, Box } from "theme-ui";
import iconsObj from "../../../../assets/icons";
import Icon from "../../../icon";
import { formatAddress } from "../../../../utils/formats";

export type ParticipantType = "signers" | "observers";
import { useWeb3 } from "../../../../hooks/useWeb3";

interface TagListProps<T = any> {
  items: T[];
  onDelete: (val: T, type: ParticipantType) => void;
  type: ParticipantType;
}

export default function TagList<T = any>({ items, type, onDelete }: TagListProps<T>) {
  const { account } = useWeb3();

  return (
    <Flex sx={{ flexWrap: "wrap", gap: "4px" }}>
      {items.map((el: any) => {
        return (
          <Box
            sx={{
              variant: "buttons.itemsBtn",
              p: "5px 9px 5px 14px",
              width: "fit-content",
              gap: "4px",
              cursor: "pointer",
            }}
            key={el.id}
          >
            <Text
              sx={{
                fontFamily: "InterRegular",
              }}
            >
              {el.value.length > 10 ? formatAddress(el.value) : el.value}
            </Text>
            <Box onClick={() => onDelete(el, type)} sx={{ width: "13px", height: "11px" }}>
              <Icon style={{ opacity: 0.5 }} src={iconsObj.plusCircle} />
            </Box>
          </Box>
        );
      })}
    </Flex>
  );
}
