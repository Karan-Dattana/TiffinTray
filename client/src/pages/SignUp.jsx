import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from '../Components/Layout';
import BannerBackground from "../Assets/home-banner-background.png";
import {Link, useNavigate} from "react-router-dom";
import { useState } from 'react';
import axios from "axios";
import { register } from '../redux/authSlice'
import { useDispatch } from 'react-redux';
import classes from './signup.module.css'




const theme = createTheme();

export default function SignUp() {


  const [state , setState] = useState({});
  const [error, setError] = useState(false)
  const [emptyFields, setEmptyFields] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleState = (e)=>{
    setState((prev)=>{
      return {...prev , [e.target.name] : e.target.value}
    })
  }


  const handleSubmit = async(event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    //   name : data.get('name')
    // });
    if (Object.values(state).some((v) => v === '')) {
      setEmptyFields(true)
      setTimeout(() => {
        setEmptyFields(false)
      }, 2500)
    }

    try {
      const data = await axios.post("http://localhost:5000/auth/register" ,{...state}, {headers : {
        "Content-Type": "application/json",
      }});
      // console.log(data);
      dispatch(register(data));
      navigate("/");
    } catch (error) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 2000)
      console.error(error)
    }
    
  };


  return (
   <Layout>
    <div className="SignUp-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
    </div>
     <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}> */}
          <Avatar sx={{ m : 1 , bgcolor : '#FE9E0D'}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="UserName"
                  label="User Name"
                  autoFocus
                  onChange={handleState}
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address/Phone Number"
                  name="email"
                  autoComplete="email"
                  onChange={handleState}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleState}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signin" variant="body2" className='myLink'>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    {error && (
          <div className={classes.error}>
            There was an error signing up! Try again.
          </div>
        )}
        {emptyFields && (
          <div className={classes.error}>
            Fill all fields!
          </div>
        )}
   </Layout>
  );
}