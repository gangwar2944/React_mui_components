import { Box } from "@mui/material";
import { styled } from "@mui/material/styles"
import React from "react";

const BoxStyle = styled(Box)(({theme})=>({
    height:"250px",
    width:"250px",
    backgroundColor:theme.palette.neutral?.dark,
  }))

const MuiResponsive = () => {
  return (
    <> 
    <Box
      sx={{
        height: "300px",
        width: {
          xs: 100,
          sm: 200,
          md: 300,
          lg: 400,
          xl: 500,
        },
        bgcolor: "secondary.dark",
      }}
    ></Box>
    <BoxStyle>

    </BoxStyle>
    </>
  );
};

export default MuiResponsive;
