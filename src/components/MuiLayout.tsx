import { Box, Divider, Grid, Paper, Stack } from "@mui/material";
import React from "react";

const MuiLayout = () => {
  return (
    <Paper sx={{ padding: "20px" }} elevation={4}>
      <Stack
        spacing={2}
        sx={{ border: "1px solid" }}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Mui practice for box component .
        </Box>
        <Box
          display="flex"
          width="100px"
          height="100px"
          bgcolor="success.light"
          p={2}
        >
          new
        </Box>
      </Stack>
      <Grid
        container
        my={2}
        spacing={2}
        rowSpacing={2}
        columnSpacing={1}
        height={200}
      >
        <Grid item bgcolor="primary.main" xs={12} sm={6} md={3}>
          <Box> item 01</Box>
        </Grid>
        <Grid item bgcolor="secondary.main" xs={12} sm={6} md={3}>
          <Box> item 02</Box>
        </Grid>
        <Grid item bgcolor="palegreen" xs={12} sm={6} md={3}>
          <Box> item 03</Box>
        </Grid>
        <Grid item bgcolor="gainsboro" xs={12} sm={6} md={3}>
          <Box> item 04</Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MuiLayout;
