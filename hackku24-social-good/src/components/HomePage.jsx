import React, { useState } from 'react'
import Box from '@mui/material/Box';
import '../css/home.css';
import { colors } from '@mui/material';


function HomePage() {
    return (
        <div className='maintext'>            
            <div><h1>Food For All</h1></div>
            <div><p>"Food For All" a web platform that bridges the gap between restaurants with surplus food and those in need, transforming potential waste into meals for the underprivileged. It’s a movement towards social good, ensuring every leftover dish finds a place at someone’s table, reducing food waste while feeding hope and dignity within the community.</p></div>
            <div className='button'>
                <button className='havefood'> I Have Food</button>
                <button className='wantfood'> I want Foods</button>                
            </div>           
        </div>
    )
}

export default HomePage;