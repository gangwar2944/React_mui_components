import { Box, FormControlLabel, Switch } from '@mui/material'
import React, { useState } from 'react'

const MuiSwitch = () => {
    const [value,setValue] = useState(false);
    console.log(value);
    const handelChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.checked);
    }
  return (
    <Box>
         <FormControlLabel label="I agree" control={<Switch size="small" color='primary' checked={value} value={value} onChange={handelChange}/>}/>

    </Box>
  )
}

export default MuiSwitch