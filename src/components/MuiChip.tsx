import { Face } from "@mui/icons-material";
import { Avatar, Chip, Stack } from "@mui/material";
import React, { useState } from "react";

const MuiChip = () => {
    const [chip,setChip] = useState(["Chip 1","Chip 2","Chip 3"]);
    const handelDelete=(chipToDelete:string)=>{
         setChip(chips=>chips.filter((item)=> item!==chipToDelete));
    }
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="chip" color="primary" size="small" icon={<Face />} />
      <Chip
        label="chip outline"
        variant="outlined"
        color="secondary"
        size="small"
        avatar={<Avatar>V</Avatar>}
      />
      <Chip
        label="click"
        color="success"
        onClick={() => alert("Clicked")}
        size="small"
      />
      <Chip
        label="delete"
        color="error"
        onClick={() => alert("Clicked")}
        size="small"
        onDelete={() => {
          alert("delete");
        }}
      />
      {chip.map((chip)=>(
        <Chip key={chip} label={chip} color="primary" onDelete={()=>handelDelete(chip)}/>
      ))}
    </Stack>
  );
};

export default MuiChip;
