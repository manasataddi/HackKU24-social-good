import React from 'react'
import { Avatar, Stack } from '@mui/material'
import { categories } from '../utils/constants'

const selectedNav = 'New Post'

function Navbar() {
    return (
        <Stack
            direction={'row'}
            sx={{
                overflowX: "auto",
                height: {
                    sx: 'auto',
                    md: '95%'
                },
                flexDirection: { md: 'row' },
            }}
        >
            <Avatar />
            {categories.map((category) => (
                <button className='buttonSignedInBusinessNav'
                    style={{
                        background: category.name === selectedNav && '#fc1503',
                        marginLeft: '10px'
                    }}
                    key={category.name}>
                    <span style={{color : category.name === selectedNav ? 'white' : 'black'}}>
                        {category.name}
                    </span>
                </button>
            ))}

        </Stack>
    )
}

export default Navbar