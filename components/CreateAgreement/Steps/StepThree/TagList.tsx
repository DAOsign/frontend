import React from "react";
import { Flex, Text, Box } from "theme-ui";
import iconsObj from "../../../../assets/icons";
import Icon from "../../../icon";

export type ParticipantType = "signers" | "observers";

interface TagListProps<T = any> {
  items: T[];
  onDelete: (val: T, type: ParticipantType) => void;
  type: ParticipantType;
}

export default function TagList<T = any>({ items, type, onDelete }: TagListProps<T>) {
  return (
    <Flex sx={{ flexWrap: "wrap", gap: "4px" }}>
      {items.map((el: any) => {
        return (
          <Box
            onClick={() => onDelete(el, type)}
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
              {el.value}
            </Text>
            <Box sx={{ width: "13px", height: "11px" }}>
              <Icon style={{ opacity: 0.5 }} src={iconsObj.plusCircle} />
            </Box>
          </Box>
        );
      })}
    </Flex>
  );
}
