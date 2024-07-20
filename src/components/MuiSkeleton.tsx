import { Avatar, Box, Skeleton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const MuiSkeleton = () => {
  const [isLoading, setIsloading] = useState(true);
  useEffect(()=>{
   setTimeout(()=>{
     setIsloading(false);
   },3000)
  },[])
  return (
    <Box sx={{width:"250px"}}>
      <Stack>
        {isLoading ? (
          <Skeleton variant="rectangular" width={250} height={200} animation="wave"/>
        ) : (
          <img src="https://source.unsplash.com/random/256x144" alt="img" width={250} height={200} />
        )}
      </Stack>
      <Stack>
        {isLoading ? (
          <Skeleton variant="circular" width={40} height={40} />
        ) : (
          <Avatar color="primary">V</Avatar>
        )}
      </Stack>
      <Stack sx={{ width: "80%" }}>
        {isLoading ? (
          <>
            <Typography variant="body1">
              <Skeleton variant="text" width="100%" animation="wave"/>
            </Typography>
            <Typography variant="body2" width="100%">
              <Skeleton variant="text" animation="wave"/>
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="body1">
              <Typography variant="body1"> This is new variant</Typography>
            </Typography>
            <Typography variant="body2" width="100%">
              <Typography variant="body2">This is secont typograpy</Typography>
            </Typography>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default MuiSkeleton;
