import { Autocomplete, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
type Skill={
 id:number,
 label:string
}
const MuiAutocomplete = () => {
  const skills = [
    "html",
    "css",
    "Javascript",
    "React",
    "Java",
    "Mysql",
    "NextJs",
  ];
  const skillOptions = skills.map((skill:string,index:number)=>({
    id : index+1,
    label:skill,
  }))
//   const [value, setValue] = useState<string | null>(null);
  const [skill,setSkill] = useState<Skill | null>(null);
  console.log(skill);
  const handelChange =(_event:any,newValue:Skill|null)=>{
    setSkill(newValue);
  }
//   console.log(value);
  return (
    <>
    {/* <Stack spacing={2} width={250}>
      <Autocomplete
        options={skills}
        value={value}
        renderInput={(params) => <TextField {...params} label="skills"/>}
        onChange={(_event:any,newValue:string|null)=> setValue(newValue)}
        freeSolo
      />
    </Stack> */}
    <Stack spacing={2} width={250}>
      <Autocomplete
        options={skillOptions}
        value={skill}
        renderInput={(params) => <TextField {...params} label="skills" variant="standard"/>}
        onChange={handelChange}
      />
    </Stack>
    </>
  );
};

export default MuiAutocomplete;
