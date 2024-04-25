import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

const MuiCard = () => {
  return (
    <Box width="300px">
      <Card elevation={5}>
        <CardMedia
          component="img"
          height="140px"
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            React lets you build user interfaces out of individual pieces called
            components. Create your own React components like Thumbnail,
            LikeButton, and Video. Then combine them into entire screens, pages,
            and apps.
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            justifyContent: "left",
            gap: "10px",
          }}
        >
          <Button size="small" variant="contained">
            Share
          </Button>
          <Button size="small" variant="contained">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
