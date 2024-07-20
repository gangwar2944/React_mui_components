import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack } from '@mui/material'
import { useState } from 'react'

const MuiDialog = () => {
    const [open,setOpen] = useState(false);

  return (
    <Stack spacing={4} width={200}>
        <Button color='primary' onClick={()=>setOpen(true)}>Dialog Open</Button>
        <Dialog open={open} aria-labelledby='dialog-title' aria-describedby='dialog-description' onClose={()=>setOpen(false)}>
         <DialogTitle id="dialog-title">Submit for test ? </DialogTitle>
         <DialogContent>
            <DialogContentText id="dailog-description">
               Are you sure do you want to submit it? This response can not be edit again if once submitted.
            </DialogContentText>
         </DialogContent>
         <DialogActions>
            <Button onClick={()=>setOpen(false)}>cancel</Button>
            <Button onClick={()=>setOpen(false)}>submit</Button>
         </DialogActions>
        </Dialog>
    </Stack>
  )
}

export default MuiDialog