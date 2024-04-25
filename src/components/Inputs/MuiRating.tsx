import { Stack, Rating, Typography } from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoodIcon from "@mui/icons-material/Mood";
import MoodBadIcon from "@mui/icons-material/MoodBad";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";

const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null);
  console.log({ value });
  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={3}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        // icon={<FavoriteIcon fontSize="inherit" color="error" />}
        // emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        readOnly
        // highlightSelectedOnly
      />
      <Stack direction="column">
        <Typography variant="subtitle1">Happy?</Typography>
        <Stack direction="row">
          <Rating
            size="large"
            max={1}
            icon={<MoodBadIcon color="error" />}
            emptyIcon={<SentimentNeutralIcon />}
          />
          <Rating
            size="large"
            max={1}
            icon={<MoodIcon color="success" />}
            emptyIcon={<SentimentNeutralIcon />}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MuiRating;
