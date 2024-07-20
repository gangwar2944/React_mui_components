import { CopyAll, Edit, Print, Share} from '@mui/icons-material'
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import React from 'react'

const MuiSpeedDail = () => {
  return (
    <SpeedDial ariaLabel='Navigation speed dail' sx={{position:"absolute",bottom:16,right:16}} icon={<SpeedDialIcon openIcon={<Edit/>}/>}>
        <SpeedDialAction icon={<CopyAll/>} tooltipTitle="copy" tooltipOpen/>
        <SpeedDialAction icon={<Print/>} tooltipTitle="print" tooltipOpen/>
        <SpeedDialAction icon={<Share/>} tooltipTitle="share" tooltipOpen/>
    </SpeedDial>
  )
}

export default MuiSpeedDail