import React from "react";
import { Checkbox, Box } from "theme-ui";
import Icon from "../../components/icon";
import { checkboxContainer } from "./styles";
import iconsObj from "../../assets/icons";

interface checkbox {
  checked: boolean;
  disabled: boolean;
}

const CheckboxComponent = ({ checked, disabled }: checkbox) => {
  const borderValue = disabled
    ? "1.8px solid #21212150"
    : !checked
    ? "1.8px solid #21212150"
    : "1.8px solid #212121";

  return (
    <>
      <Checkbox checked={checked} disabled={disabled} />
      <Box
        sx={{
          border: borderValue,
          ...checkboxContainer,
          "&:hover": {
            border: borderValue,
            opacity: 1,
          },
        }}
      >
        <Box sx={{ width: "8px", height: "9px", mt: "3px" }}>
          {checked && <Icon src={iconsObj.pinkArrow} />}
        </Box>
      </Box>
    </>
  );
};

export default CheckboxComponent;
