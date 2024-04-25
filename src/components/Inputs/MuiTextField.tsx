import {
  Stack,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";

const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Typography variant="h2">Text Field</Typography>
      <Stack spacing={2} direction="row">
        {/* default is outlined */}
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      {/* with props, such as size or color to customize */}
      <Typography variant="h4">Text Filled with Props</Typography>
      <Stack direction="row" spacing={2}>
        <TextField label="Small Secondary" size="small" color="secondary" />
      </Stack>

      <Typography variant="h4">
        Text Filled with Askterisk and Helper Text
      </Typography>
      <Stack direction="row" spacing={2}>
        <TextField label="Form input" required />
        <TextField
          label="Password"
          type="password"
          helperText="Do not share your password with anyone"
        />
        <TextField
          label="Disabled"
          helperText="This text field is disabled"
          disabled
        />
        <TextField label="Read Only" inputProps={{ readOnly: true }} />
      </Stack>

      <Typography variant="h4">Text Filled with InputAdornment</Typography>
      <Stack direction="row" spacing={2}>
        <TextField
          //   label="Amount"
          placeholder="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />

        {/* InputAdorment with IconButton */}
        <TextField
          placeholder="Search..."
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        <TextField
          placeholder="Password"
          type="password"
          InputProps={{
            endAdornment: (
              <IconButton>
                <VisibilityIcon />
              </IconButton>
            ),
          }}
        />
      </Stack>

      <Typography variant="h4">Text Filled Error</Typography>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? "Required" : "Do not share your password with anyone"
          }
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
