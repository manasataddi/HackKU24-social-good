import React, { useState } from 'react'
import Box from '@mui/material/Box';
import '../css/home.css';
import { colors } from '@mui/material';
import { Link } from 'react-router-dom';
import Signin from './Signin';


function HomePage() {
    return (
        <div className='maintext'>
            <div className='line1'>           
            <div><h1>Food For All</h1></div>
             </div>  
        
            <div><p>"Food For All" a web platform that bridges the gap between restaurants with surplus food and those in need, transforming potential waste into meals for the underprivileged. It’s a movement towards social good, ensuring every leftover dish finds a place at someone’s table, reducing food waste while feeding hope and dignity within the community.</p></div>
           <div> 
            <img src={"https://png.pngtree.com/png-vector/20221024/ourmid/pngtree-tiny-people-standing-near-box-of-donation-food-for-delivery-png-image_6346685.png"}/> 
           </div> 
                <Link to="/login" state={{ isBusinessLogin: true }}
                ><button className='havefood'> I Have Food</button></Link>
                <Link to={{pathname: '/login',
                isBusinessLogin: false }}><button className='wantfood'> I want Food</button></Link>
            </div>           
        
    )
}   

export default HomePage;