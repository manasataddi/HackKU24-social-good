import React from 'react'
import {getAllFoods} from '../utils/fetchFromAPI'
import { Box, Stack } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function ViewAllFoods() {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2} style={{margin:'20px'}}>
        {getAllFoods.map(item => (
            <Box key={item.foodId}>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/foodPic.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.foodName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <div>
            Food By: {item.foodPostedBy}<br/>
            Best By: {item.foodBestBy}<br/>
            Location: {item.foodLocation}<br/>
            Pick up by: {item.pickUpTime}<br/>

          </div>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">quantity: {item.foodQuantity}</Button>
        <Button size="small">Order</Button>
      </CardActions>
    </Card>
            </Box>
    ))}
    </Stack>
    
  )
}

export default ViewAllFoods
