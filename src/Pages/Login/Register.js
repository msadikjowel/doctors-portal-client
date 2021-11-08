import React, { useState } from 'react';
import { Alert, AlertTitle, alertTitleClasses, Button, CircularProgress, Container, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { NavLink, useHistory } from 'react-router-dom';
import login from '../../../src/images/login.png';
import useAuth from '../../hooks/useAuth';




const Register = () => {
    const [loginData, setLoginData] = useState({});

    const history = useHistory();

    const { user, authError, registerUser, isLoading } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };


    const handleLoginSubmit = e => {

        if (loginData.password !== loginData.password2) {
            alert('password didnot match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);

        e.preventDefault();
    };
    return (
        <Container sx={{ height: '100vh' }}>
            <Grid container spacing={2} sx={{ m: 'auto' }}>
                <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} item xs={12} md={6}>
                    <Typography variant="body1" sx={{ fontSize: '1.3rem', color: '#686868' }}>
                        Register
                    </Typography>

                    {!isLoading && <form onSubmit={handleLoginSubmit} >
                        <TextField
                            required
                            id="standard-basic" label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant='standard'
                            sx={{ m: 1, width: 3 / 4 }} />
                        <TextField
                            required
                            id="standard-basic" label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant='standard'
                            sx={{ m: 1, width: 3 / 4 }} />

                        <TextField
                            required
                            id="standard-password-input"
                            label="Password"
                            name="password"
                            onBlur={handleOnBlur}
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            sx={{ m: 1, width: 3 / 4 }}
                        />

                        <TextField
                            required
                            id="standard-password-input"
                            label="Re-type Your Password"
                            name="password2"
                            onBlur={handleOnBlur}
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            sx={{ m: 1, width: 3 / 4 }}
                        />






                        <Button type="submit" variant="contained" sx={{ width: 3 / 4, mt: 5, mb: 3, backgroundImage: 'linear-gradient(to right, #18d2b6, #00d2c4, #00d2d1, #00d1dc, #11d0e5)', fontWeight: 500 }}>Register</Button>

                        <NavLink to='/login' style={{ textDecoration: 'none' }}>
                            <Button variant='text'>Already Register? Please Login</Button>
                        </NavLink>

                    </form>}
                    {isLoading && <CircularProgress />
                    }
                    {user?.email &&
                        <Alert severity="success">
                            <AlertTitle>Registered Successfully</AlertTitle>
                            Thank you for register — <strong>Check it out!</strong>
                        </Alert>


                    }

                    {authError && <Alert severity="error">
                        <AlertTitle>Failed</AlertTitle>
                        {authError}
                    </Alert>}
                </Grid>

                <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;