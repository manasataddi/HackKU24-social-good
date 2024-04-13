import React from 'react'
import Box from '@mui/material/Box';
import { colors } from '@mui/material';


function HomePage() {
    return (
        <div>
            
            <div><h1 className='titleHP'></h1>Food</div>

            <Box height={200}
                className="descriptionHomePage"
                my={4}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                sx={
                    { 
                        border: '2px solid grey',
                        bgcolor: 'primary.dark',
                        
                    }
                }>
                Welcome to food distribution platform. We distribute food.
            </Box>
        </div>
    )
}

export default HomePage;