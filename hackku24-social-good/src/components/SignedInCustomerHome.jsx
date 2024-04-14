import React from 'react'
import { Avatar, Button, Link, Stack } from '@mui/material'
import {useEffect, useState } from 'react'
import FoodPostForm from './FoodPostForm'
import ViewAllFoods from './ViewAllFoods';
import Orders from './Orders';

function SignedInCustomerHome() {
  const [selectedNav, setSelectedNav] = useState("View Post"); // Example state for login status

  const renderComponent = () => {
    if (selectedNav === "Track Order") {
      return <Orders />;
    } else {
      return < ViewAllFoods />;
    }
    // Add more conditions if needed
  };
  return (
    <div>
      <Stack
        direction={'row'}
        sx={{
          overflowX: "auto",
          height: {
            sx: 'auto',
            md: '95%'
          },
          flexDirection: { md: 'row' },
          margin: '10px',
        }}
      >
        <Avatar sx={{ bgcolor: '#354f52' }}/>
        <Button className='buttonViewPostsNav'
          style={{
            background: selectedNav === "View Posts" && '#354f52',
            marginLeft: '10px'
          }}
          onClick={() => setSelectedNav("View Posts")}>
          <span style={{ color: selectedNav === "View Posts" ? 'white' : '#354f52' }}>
            {"View Posts"}
          </span>
        </Button>
        <Button className='buttonOrdersNav' style={{
          background: selectedNav === "Track Order" && '#354f52',
          marginLeft: '10px'
        }}
          onClick={() =>
            setSelectedNav("Track Order")
          }
        >
          <span style={{ color: selectedNav === "Track Order" ? 'white' : '#354f52' }}>
            {"Track Order"}
          </span>

        </Button>

      <Link href="/">
        <Button className='logOutBtn'
          style={{
            background: '#354f52',
            marginLeft:'20px'
          }}>
          <span style={{ color: 'white'}}>
            {"Log Out"}
          </span>
        </Button>
        </Link>
      </Stack>
      <div>
        {renderComponent()}
      </div>

    </div>
  )
}

export default SignedInCustomerHome