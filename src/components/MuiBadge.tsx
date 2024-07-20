import { Mail } from '@mui/icons-material'
import { Badge, Stack } from '@mui/material'

const MuiBadge = () => {
  return (
    <Stack direction="row" spacing={2}>
        <Badge badgeContent="4" color='primary'>
           <Mail/>
        </Badge>
        <Badge badgeContent="0" color='secondary' showZero={true}>
           <Mail/>
        </Badge>
        <Badge badgeContent="100" color='primary'>
           <Mail/>
        </Badge>
        <Badge badgeContent="100" color='info' max={999}>
           <Mail/>
        </Badge>
        <Badge variant='dot' color='info' invisible={true}>
           <Mail/>
        </Badge>
        <Badge variant='dot' color='info' invisible={false}>
           <Mail/>
        </Badge>
    </Stack>
  )
}

export default MuiBadge