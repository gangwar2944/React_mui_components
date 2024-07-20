import { Link, Stack, Typography } from "@mui/material";
import React from "react";

const MuiLink = () => {
  return (
    <Stack spacing={4} direction="row">
      <Link color="primary">Link</Link>
      <Typography variant="h6">
        <Link href="#" color="secondary" underline="none">
          Link
        </Link>
      </Typography>
    </Stack>
  );
};

export default MuiLink;
