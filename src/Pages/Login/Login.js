import { Alert, AlertTitle, Button, CircularProgress, Container, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import login from '../../../src/images/login.png';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import FormControl from '@mui/material/FormControl';
// import { Visibility, VisibilityOff } from '@mui/icons-material';



const Login = () => {

    const [loginData, setLoginData] = useState({});

    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };

    // google login
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    };


    const handleLoginSubmit = e => {

        loginUser(loginData.email, loginData.password, location, history);

        e.preventDefault();
    };

    // const [values, setValues] = React.useState({
    //     amount: '',
    //     password: '',
    //     weight: '',
    //     weightRange: '',
    //     showPassword: false,
    // });

    // const handleChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: event.target.value });
    // };

    // const handleClickShowPassword = () => {
    //     setValues({
    //         ...values,
    //         showPassword: !values.showPassword,
    //     });
    // };

    // const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    // };


    return (
        <Container sx={{ height: '100vh' }}>
            <Grid container spacing={2} sx={{ m: 'auto' }}>
                <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} item xs={12} md={6}>
                    <Typography variant="body1" sx={{ fontSize: '1.3rem', color: '#686868' }}>
                        Login
                    </Typography>

                    <form onSubmit={handleLoginSubmit} >
                        <TextField
                            id="standard-basic" label="Your Email"
                            name="email"
                            onBlur={handleOnChange}
                            variant='standard'
                            sx={{ m: 1, width: 3 / 4 }} />

                        <TextField
                            id="standard-password-input"
                            label="Password"
                            name="password"
                            onBlur={handleOnChange}
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            sx={{ m: 1, width: 3 / 4 }}
                        />


                        {/* <FormControl sx={{ m: 1, width: 3 / 4 }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                name="password"

                                value={values.password}
                                onChange={handleOnChange, handleChange('password')}
                                type={values.showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl> <br /> */}



                        <Button type="submit" variant="contained" sx={{ width: 3 / 4, mt: 5, mb: 3, backgroundImage: 'linear-gradient(to right, #18d2b6, #00d2c4, #00d2d1, #00d1dc, #11d0e5)', fontWeight: 500 }}>Login</Button>

                        <NavLink to='/register' style={{ textDecoration: 'none' }}>
                            <Button variant='text'>New User? Please Register</Button>
                        </NavLink>

                        {isLoading && <CircularProgress />
                        }
                        {user?.email &&
                            <Alert severity="success">
                                <AlertTitle>Logged is successfully</AlertTitle>
                            </Alert>
                        }

                        {authError && <Alert severity="error">
                            <AlertTitle>Failed</AlertTitle>
                            {authError}
                        </Alert>}

                    </form> <br />
                    <Button onClick={handleGoogleSignIn} variant='contained' sx={{ width: 3 / 4, mb: 3, backgroundImage: 'linear-gradient(to right, #18d2b6, #00d2c4, #00d2d1, #00d1dc, #11d0e5)', fontWeight: 500 }}>Sign in With Google</Button>

                </Grid>

                <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;