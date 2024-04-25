import {
  Box,
  FormControlLabel,
  Switch,
  FormControl,
  FormGroup,
} from "@mui/material";
import React, { useState } from "react";

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  console.log({ checked });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            size="small"
            color="warning"
          />
        }
      />
    </Box>
  );
};

export default MuiSwitch;
