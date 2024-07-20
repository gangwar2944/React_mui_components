import {
  Box,
  CircularProgress,
  LinearProgress,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

const MuiProgress = () => {
  const theme = useTheme();
  const progressValue = 60;
  return (
    <>
      <Stack spacing={4} direction="row">
        {/* <CircularProgress />
        <CircularProgress color="secondary" /> */}
     <Box
      sx={{
        width: "30%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "inline-flex",
          width: "100px",
          height: "100px",
        }}
      >
        <CircularProgress
          variant="determinate"
          value={100}
          size={"100px"}
          sx={{
            color: theme.palette.grey[300], // Background color
          }}
        />
        <CircularProgress
          variant="determinate"
          value={progressValue}
          size={"100px"}
          sx={{
            // color: theme.palette.neutral?.darker, 
            color: theme.palette.graphColor?.peela, 
            position: "absolute",
            left: 0,
          }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="textPrimary"
          >{`${progressValue}%`}</Typography>
        </Box>
      </Box>
    </Box>
        <LinearProgress />
        <LinearProgress color="secondary" />
        <LinearProgress variant="determinate" value={60} />
      </Stack>
    </>
  );
};

export default MuiProgress;
