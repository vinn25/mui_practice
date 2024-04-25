import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderLinedIcon from "@mui/icons-material/FormatUnderlined";
import React, { useState } from "react";

const MuiButton = () => {
  const [format, setFormat] = useState<string | null>(null);
  console.log(format);
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormat: string | null
  ) => {
    setFormat(updatedFormat);
  };
  return (
    <Stack spacing={4}>
      <Typography variant="h2">Button</Typography>
      <Stack spacing={2} direction="row">
        {/* Used for less attention grabbing, such as pop up, card footer */}
        <Button variant="text" href="https://google.com">
          Text
        </Button>

        {/* Used for primary functions, such as Register, Login, etc */}
        <Button variant="contained">Contained</Button>

        {/* Used for secondary functions, such as cancel, or go back buttons */}
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Typography variant="h4">Button Colors</Typography>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="text" color="primary">
          Primary
        </Button>
        <Button variant="text" color="secondary">
          Secondary
        </Button>
        <Button variant="text" color="error">
          Error
        </Button>
        <Button variant="text" color="warning">
          Warning
        </Button>
        <Button variant="text" color="info">
          Info
        </Button>
        <Button variant="text" color="success">
          Success
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
        <Button variant="outlined" color="warning">
          Warning
        </Button>
        <Button variant="outlined" color="info">
          Info
        </Button>
        <Button variant="outlined" color="success">
          Success
        </Button>
      </Stack>

      {/* Flex is the default display, so change it to 
        something else if you want to change its size */}
      <Typography variant="h4">Button Sizes</Typography>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <Button variant="text" size="small">
          Small
        </Button>
        <Button variant="text" size="medium">
          Medium
        </Button>
        <Button variant="text" size="large">
          Large
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <Button variant="outlined" size="small">
          Small
        </Button>
        <Button variant="outlined" size="medium">
          Medium
        </Button>
        <Button variant="outlined" size="large">
          Large
        </Button>
      </Stack>

      <Typography variant="h4">Button with Icons</Typography>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          disableRipple
          onClick={() => alert("Clicked")}
        >
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        {/* IconButton is mostly used for navigation buttons */}
        <IconButton aria-label="send" size="small" color="warning">
          <SendIcon />
        </IconButton>
      </Stack>

      {/* Button group is used to align contents either left, center, or right */}
      <Typography variant="h2">Button Group</Typography>
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="alignment button group"
        >
          {/* The onClick doesn't work for all 
          buttons in the group, you have to 
          put it in individually*/}
          <Button onClick={() => alert("Left Click")}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Typography variant="h2">Toggle Button with Group</Typography>
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={format}
          onChange={handleFormatChange}
          size="small"
          color="info"
          orientation="vertical"
          exclusive
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderLinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
