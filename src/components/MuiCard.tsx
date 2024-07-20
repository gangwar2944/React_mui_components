import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia component='img' height='140' image='https://source.unsplash.com/random'/>
        <CardContent>
            <Typography gutterBottom variant='h4' component="div">
               React
            </Typography>
            <Typography variant='body2' color="text.secondary">
                this is new edition for the new component and i wanna take these all field value in one container and i wanna take this again.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size='small'>Read more</Button>
            <Button size='small'>Share</Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default MuiCard