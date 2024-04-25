import { Box, Stack, Divider, Grid, Paper } from "@mui/material";

const MuiLayout = () => {
  return (
    // display flex, direction column is the default
    // spacing is times 8 by default, so 2 * 8
    // divider, row works with vertical and column works with horizontal
    // shadow default is 1px
    <Paper sx={{ padding: "32px" }} elevation={4}>
      {/* Bagian Stack */}
      <Stack
        sx={{ border: "1px solid" }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        {/* Bagian Box */}
        <Box
          //   component="span"
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Codevolution
        </Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor={"success.light"}
          p={2} // means 2 * 8. Always times 8 when using p
        ></Box>
      </Stack>
      {/* Bagian Grid */}
      {/* margin vertical is my, and margin horizontal is mx */}
      {/* xs for mobile,
          sm for tablet,
          md for desktop,
          lg and xl for larger monitor */}
      {/* there 12 columns in grid, an item can take up one or more */}
      <Grid container my={4} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MuiLayout;
