import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      {/* Heading */}
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1">
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      {/* Sub title */}
      <Typography variant="subtitle1">Sub title 1</Typography>
      <Typography variant="subtitle2">Sub title 2</Typography>

      {/* Body */}
      <Typography variant="body1">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, voluptas
        eum dignissimos similique expedita magni molestias excepturi neque
        corrupti nihil fuga voluptatibus voluptates ipsam aliquam! Sequi non
        unde dignissimos sit.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione
        facere corrupti cum laudantium dolore quaerat, deserunt modi dolores qui
        velit illo accusantium quibusdam quae id consequuntur sint quas
        consectetur.
      </Typography>
    </div>
  );
};

export default MuiTypography;
