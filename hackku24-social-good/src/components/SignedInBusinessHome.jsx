import { Avatar, Button, Link, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FoodPostForm from './FoodPostForm'
import ViewAllFoods from './ViewAllFoods';

function SignedInBusinessHome() {
  const [selectedNav, setSelectedNav] = useState("New Post"); // Example state for login status

  const renderComponent = () => {
    if (selectedNav === "New Post") {
      return <FoodPostForm />;
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
        <Avatar />
        <Button className='buttonNewPostBusinessNav'
          style={{
            background: selectedNav === "New Post" && '#354f52',
            marginLeft: '10px'
          }}
          onClick={() => setSelectedNav("New Post")}>
          <span style={{ color: selectedNav === "New Post" ? 'white' : '#354f52' }}>
            {"New Post"}
          </span>
        </Button>
        <Button className='buttonViewPostsBusinessNav' style={{
          background: selectedNav === "View Posts" && '#354f52',
          marginLeft: '10px'
        }}
          onClick={() =>
            setSelectedNav("View Posts")
          }
        >
          <span style={{ color: selectedNav === "View Posts" ? 'white' : '#354f52' }}>
            {"View Posts"}
          </span>

        </Button>

      <Link href="/">
        <Button className='logOutBtn'
          style={{
            background: 'red',
            marginLeft:'20px'
          }}>
          <span style={{ color: 'white' }}>
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

export default SignedInBusinessHome