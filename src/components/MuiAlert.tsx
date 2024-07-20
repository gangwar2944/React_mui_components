import { Check } from "@mui/icons-material";
import { Alert, AlertTitle, Button, Divider, Stack } from "@mui/material";
import React from "react";

const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error"> This is an error.</Alert>
      <Alert severity="warning"> This is an woaring.</Alert>
      <Alert severity="info"> This is an info.</Alert>
      <Alert severity="success"> This is an success.</Alert>
      <Divider />
      <Alert
        variant="outlined"
        severity="error"
        onClose={() => alert("Close this alert")}
      >
        {" "}
        This is an error.
      </Alert>
      <Alert variant="outlined" severity="warning">
        {" "}
        This is an woaring.
      </Alert>
      <Alert variant="outlined" severity="info">
        {" "}
        This is an info.
      </Alert>
      <Alert variant="outlined" severity="success">
        {" "}
        This is an success.
      </Alert>
      <Divider />
      <Alert variant="filled" severity="error">
        <AlertTitle>Error</AlertTitle> This is an error.
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle> This is an woaring.
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>Info</AlertTitle> This is an info.
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        icon={<Check fontSize="inherit" />}
        action={<Button color="inherit">UNDO</Button>}
      >
        <AlertTitle>Success</AlertTitle> This is an success.
      </Alert>
    </Stack>
  );
};

export default MuiAlert;
