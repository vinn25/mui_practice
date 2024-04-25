import { Stack, Link, Typography, IconButton } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#" variant="h6">
        Link
      </Link>
      {/* <IconButton> */}
      <Link href="/" color="secondary" underline="hover" variant="body1">
        <BookmarkIcon />
      </Link>
      {/* </IconButton> */}
      <Typography variant="h4">
        <Link href="/" color="warning" underline="none">
          Link
        </Link>
      </Typography>
    </Stack>
  );
};

export default MuiLink;
