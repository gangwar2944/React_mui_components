import { Checkbox, FormControl, FormGroup, FormHelperText, FormLabel } from "@mui/material";
import { Box, FormControlLabel } from "@mui/material";
import React, { useState } from "react";

const MuiCheckbox = () => {
  const [acceptTnC, setAcceptTnC] = useState(false);
  const [skills,setSkills] = useState<string[]>([]);
  console.log(skills);
  console.log(acceptTnC);
  const handelChange = () => {
    setAcceptTnC(!acceptTnC);
  };
  const handelSkillsChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
    const index = skills.indexOf(e.target.value);
    if(index===-1){
        setSkills([...skills,e.target.value]);
    }else{
        setSkills(skills.filter((sk)=>sk!==e.target.value))
    }
  }
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept term and condition"
          control={<Checkbox size="small" color="secondary" checked={acceptTnC} onChange={handelChange} />}
        />
      </Box>
      <Box>
        <FormControl>
            <FormLabel error>
                skills
            </FormLabel>
            <FormGroup row>
                <FormControlLabel label="HTML" control={<Checkbox value="html" checked={skills.includes("html")} onChange={handelSkillsChange}/>}/>
                <FormControlLabel label="CSS" control={<Checkbox value="css" checked={skills.includes("css")} onChange={handelSkillsChange}/>}/>
                <FormControlLabel label="Javascript" control={<Checkbox value="javascript" checked={skills.includes("javascript")} onChange={handelSkillsChange}/>}/>
            </FormGroup>
            <FormHelperText>This is helper text.</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckbox;
