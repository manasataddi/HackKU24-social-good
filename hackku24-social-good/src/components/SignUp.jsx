import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import DatePicker from "react-datepicker";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "react-datepicker/dist/react-datepicker.css";
import '../css/signinSignup.css';

const defaultTheme = createTheme();

var bgColors = { "Blue": "#354f52",                 
};

function SignUp() {
  const [isBusiness, setIsBusiness] = useState(false);
  const [startDateDOB, setStartDateDOB] = useState(new Date());
  const [extraInfoBusiness, setExtraInfoBusiness] = useState({
    businessName: '',
    businessType: ''
  });
  const [isOrganization, setIsOrganization] = useState(false);
  const [extraInfoOrg, setExtraInfoOrg] = useState({
    organizationName: '',
    organizationType: ''
  });
  const [isIndividual, setIsIndividual] = useState(false);
  const [extraInfoInd, setExtraInfoInd] = useState({
    individualName: '',
    individualDob: '',
    individualDriverLicense: ''
  });
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleCheckBoxChangeBusiness = () => {
    setIsBusiness(!isBusiness);
    if (isIndividual) {
      setIsIndividual(!isIndividual);
    }
    if (isOrganization) {
      setIsOrganization(!isOrganization);
    }
  };
  const handleCheckBoxChangeOrg = () => {
    setIsOrganization(!isOrganization);
    if (isIndividual) {
      setIsIndividual(!isIndividual);
    }
    if (isBusiness) {
      setIsBusiness(!isBusiness);
    }
  };
  const handleCheckBoxChangeInd = () => {
    setIsIndividual(!isIndividual);
    if (isBusiness) {
      setIsBusiness(!isBusiness);
    }
    if (isOrganization) {
      setIsOrganization(!isOrganization);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExtraInfoBusiness({
      ...extraInfoBusiness,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Combine form data with extraInfo for businesses
    const data = {
      ...formData,
      ...(isBusiness && extraInfoBusiness)
    };
    // Do something with the form data
    console.log(data);
    // Reset the form
    setFormData({
      username: '',
      password: ''
    });
    setExtraInfoBusiness({
      businessName: '',
      businessType: '',
    });
  };

  return (

    <div>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              paddingTop: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: bgColors.Blue}}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
              <label>
                Are you a business?
                <input
                  type="checkbox"
                  checked={isBusiness}
                  onChange={handleCheckBoxChangeBusiness}
                />
              </label>
              <br />
              <label>
                Are you an organization?
                <input
                  type="checkbox"
                  checked={isOrganization}
                  onChange={handleCheckBoxChangeOrg}
                />
              </label>
              <br />
              <label>
                Are you an individual?
                <input
                  type="checkbox"
                  checked={isIndividual}
                  onChange={handleCheckBoxChangeInd}
                />
              </label>
              <br />
              {isBusiness && (
                <>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="businessName"
                    label="Business Name"
                    name="businessname"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="Location"
                    label="Location"
                    name="location"
                    autoFocus
                  />
                </>
              )}

              {isIndividual && (
                <>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="individualName"
                    label="Name"
                    name="individualname"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="driverslicense"
                    label="Driver's License"
                    type="driverslicense"
                    id="driverslicense"
                  />
                  <DatePicker className='dobDatePicker' selected={startDateDOB} onChange={(date) => setStartDateDOB(date)} />
                </>
              )}

              {isOrganization && (
                <>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="organizationName"
                    label="Organization Name"
                    name="organizationname"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="Location"
                    label="Location"
                    name="location"
                    autoFocus
                  />
                </>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: bgColors.Blue}}
              >
                Sign Up
              </Button>
              
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <img src="https://www.creativefabrica.com/wp-content/uploads/2022/09/05/Cartoon-of-donation-food-box-isolated-Graphics-37786816-1.png"/>

    </div>
  );
}

export default SignUp;