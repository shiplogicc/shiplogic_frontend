import { useEffect, useState } from 'react';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BgImage from '../../Assets/Static/Images/bg2.jpeg';
import Logo from '../../Assets/Static/Images/logo1.jpeg';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getToken, loginResponse  } from '../../Redux/Actions/auth';
import { showFeedback } from '../../Redux/Actions/feedback';




function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Shiplogic Solutions
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login(props) {
  //console.log('LoginPorps', props)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const loginFailureResponse = useSelector(state => state.authentication.loginFailure)
  const handleSubmit = (event) => {
    event.preventDefault();
    let payload = {
      username: username,
      password: password,
    }

    dispatch(getToken(navigate, payload))
    // login(navigate, payload).then(response => {
    //   dispatch(loader({state:false, title:"Logging..."}))
    //   if (response.status === "success") {
    //     dispatch(setAuthData(response))
    //     navigate('/dashboard')
    //   } else {

    //     dispatch(showFeedback({ type: "error", message: response.error }))
    //   }
    // }).catch(error => {
    //   dispatch(loader({state:false, title:"Logging..."}))
    //   dispatch(showFeedback({ type: "error", message: "Something went wrong!" }))
    // })
  };

  useEffect(() => {
    dispatch(loginResponse(null))
    //dispatch(showFeedback(null))
    //dispatch(loader({state:false, title:"Logging..."}))
    //dispatch({type: "AUTHORIZATION" , payload : null})
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${BgImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box component="div">
              <Typography variant='h3'>Shiplogic Solutions</Typography>
            </Box>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                //autoComplete="email"
                autoFocus
                onChange={(e) => setUsername(e.target.value)}
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
                //helperText={"Password?"}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              {
                loginFailureResponse &&
                <Grid container>
                  <Grid item  sx={{color:"red"}}>{loginFailureResponse.message}</Grid>
                </Grid>
              }

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}