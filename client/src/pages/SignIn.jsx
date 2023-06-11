import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from '../Components/Layout';
import BannerBackground from "../Assets/home-banner-background.png";
import {Link, useNavigate} from "react-router-dom"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from "axios"
import { login } from '../redux/authSlice'
import classes from './signin.module.css'
// ln stands for link


const theme = createTheme();

export default function SignIn() {

  const [email , setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false)
  const [emptyFields, setEmptyFields] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit = async(event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });

    
    if(email === '' || password === ''){
      setEmptyFields(true)
      setTimeout(() => {
       setEmptyFields(false)
      }, 2500)
   }
    try {
      const data = await axios.post("http://localhost:5000/auth/login" ,{email,password}, {headers : {
        "Content-Type": "application/json",
      }});
      // console.log("login successfull!");
      // console.log(data);
      dispatch(login(data));
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
          <Avatar sx={{ m : 1 , bgcolor : '#FE9E0D'}}> 
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
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
              onChange={(e)=>setEmail(e.target.value)}
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
              onChange={(e)=>setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <a href="#" variant="body2" className='myLink'>
                  Forgot password?
                </a>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2" className='myLink'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    {error && (
          <div className={classes.error}>
            There was an error signing in!
            Wrong credentials or server error
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