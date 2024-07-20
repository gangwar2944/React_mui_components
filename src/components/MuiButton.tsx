import { FormatBold, FormatItalic, FormatUnderlined, Send } from "@mui/icons-material";
import { Button, ButtonGroup, IconButton, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";

const MuiButton = () => {
    const [formate,setFormate] = useState<string | null>(null);
    console.log("formate",formate);
    const handleChange=(_event:React.MouseEvent<HTMLElement>,updatedFormate:string)=>{
              setFormate(updatedFormate);
    }
  return (
    <Stack spacing={2} direction="column">
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://www.lipsum.com/">
          Button
        </Button>
        <Button variant="contained">Button</Button>
        <Button variant="outlined">Button</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          {" "}
          Button primary
        </Button>
        <Button variant="contained" color="secondary">
          {" "}
          Button Secondary
        </Button>
        <Button variant="contained" color="error">
          {" "}
          Button error
        </Button>
        <Button variant="contained" color="warning">
          {" "}
          Button warning
        </Button>
        <Button variant="contained" color="success">
          {" "}
          Button success
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary" size="small">
          {" "}
          Button primary
        </Button>
        <Button variant="contained" color="secondary" size="medium">
          {" "}
          Button Secondary
        </Button>
        <Button variant="contained" color="error" size="large">
          {" "}
          Button error
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          color="primary"
          startIcon={<Send />}
          disableRipple
        >
          {" "}
          Send
        </Button>
        <Button
          variant="contained"
          color="primary"
          endIcon={<Send />}
          disableElevation
        >
          {" "}
          Send{" "}
        </Button>
        <IconButton aria-label="send" color="primary" size="small">
          <Send />
        </IconButton>
      </Stack>
      <Stack spacing={2} direction="row">
        <ButtonGroup variant="contained" size="small" orientation="vertical" color="secondary" aria-label="group button">
          <Button> Left </Button>
          <Button> Center </Button>
          <Button> Right </Button>
        </ButtonGroup>
      </Stack>
      <Stack spacing={2} direction='row'>
          <ToggleButtonGroup aria-label="text formating" value={formate} onChange={handleChange} exclusive>
            <ToggleButton value='bold' aria-label="bold"><FormatBold/></ToggleButton>
            <ToggleButton value='italic' aria-label="italic"><FormatItalic/></ToggleButton>
            <ToggleButton value='underline' aria-label="underline"><FormatUnderlined/></ToggleButton> 
          </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
