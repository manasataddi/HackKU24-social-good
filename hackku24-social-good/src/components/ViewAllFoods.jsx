import React from 'react'
import {getAllFoods} from '../utils/fetchFromAPI'
import { Box, Stack } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../css/viewAllFoods.css';

var bgColors = { "Blue": "#354f52"
                   
};
function ViewAllFoods() {
  return (
    <div className="page-container" style={{ height:'100vh', 
    paddingTop: '20px',
    paddingBottom: '20px',
    backgroundImage: `url('https://c4.wallpaperflare.com/wallpaper/780/572/955/pastel-pink-morning-blur-wallpaper-thumb.jpg')`, 
    backgroundSize: 'cover',
    height: '100vh',
    }}>
    <Stack direction="row" className="posts-stack"flexWrap="wrap" justifyContent="start" gap={10} style={{margin:'20px'}}>
        {getAllFoods.map(item => (
            <Box key={item.foodId}>
            <Card sx={{ borderRadius: 5, width: 350, background: '#d8e2dc' }}>
      <CardMedia
        sx={{ height: 140 }}
          image = {item.imgUrl}
        title="green iguana"
      />

      <CardContent className="card-content">
        <Typography gutterBottom variant="h5" component="div" className="typography-text"
        sx={{}}>
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
        <Button size="small" className="button-small">quantity: {item.foodQuantity}</Button>
        <Button size="small" className="button-small">Order</Button>
      </CardActions>
    </Card>
            </Box>
    ))}
    </Stack>
    </div>
  )
}

export default ViewAllFoods
