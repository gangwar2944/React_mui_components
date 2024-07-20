import { Delete } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'

const MuiToolTip = () => {
  return (
    <Tooltip title="delete" placement='right' arrow enterDelay={200} leaveDelay={300} color='primary'>
       <IconButton>
        <Delete/>
       </IconButton>
    </Tooltip>
  )
}

export default MuiToolTip