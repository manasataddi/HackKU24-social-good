import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
const defaultTheme = createTheme();


var bgColors = { "Blue": "#354f52" 
                   
};
export default function Signin() {
  const location = useLocation();
  const isBusinessLogin = location.state;

  const [isBusiness, setIsBusiness] = React.useState(false);
  const [isOrganization, setIsOrganization] = React.useState(false);
  const [isIndividual, setIsIndividual] = React.useState(false);
  const [userType, setUserType] = React.useState(null);

  const handleClick = () => {
    // Simulate user type determination (replace with actual logic)
    const isCustomer = Math.random() > 0.5; // Example: Randomly assign type
    setUserType(!isBusinessLogin ? 'customer' : 'shop');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            paddingTop: 10,            
            // height: '100vh',
            // width: '30vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Avatar sx={{ m: 1, bgcolor: bgColors.Blue}}>          
          <AccountCircleIcon style={{color:'white'}}/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            {isBusinessLogin && <Link href="/bdashboard">
            <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleClick}
            sx={{ mt: 3, mb: 2, bgcolor: bgColors.Blue}}
          >              
            Sign In
          </Button>
            </Link>
            }
            {!isBusinessLogin && <Link href="/cdashboard">
            <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleClick}
            sx={{ mt: 3, mb: 2, bgcolor: bgColors.Blue }}
          >              
            Sign In
          </Button>
            </Link>
            }
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup">
                  "Don't have an account? Sign Up"
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>    
      </Container>
      <img src="https://www.creativefabrica.com/wp-content/uploads/2022/09/05/Cartoon-of-donation-food-box-isolated-Graphics-37786816-1.png"/>
    </ThemeProvider>
  );


}


