import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import appointmentBg from '../../../images/appointment-bg.png'
import { Button, Container, Typography } from '@mui/material';


const appointmentBanner = {
    background: `url(${appointmentBg})`,
    // backgroundPosition: 'center',
    backgroundColor: 'rgba(58, 66, 86, .9)',
    backgroundBlendMode: 'darken',
    marginTop: 150,

}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2} >

                    <Grid item xs={12} md={6} sx={{ marginTop: '-130px' }}>
                        <img style={{ width: '100%', height: '100%' }} src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        textAlign: 'left',
                        alignItems: 'center'
                    }}>
                        <Box sx={{ py: 5 }}>
                            <Typography style={{ marginBottom: '20px' }} sx={{ color: '#6ACECE', fontSize: 18, fontWeight: 400, mb: 5 }} variant='p' >
                                APPOINTMENT
                            </Typography>
                            <div style={{ color: 'white', marginTop: 20 }}>
                                <Typography style={{ marginBottom: 20 }} variant='h4' >
                                    Make an appointment Today
                                </Typography>
                                <Typography sx={{ fontWeight: 300, fontSize: 14 }} variant='p' >
                                    Please talk to the receptionist—he'll make an appointment for your next visit.
                                    Unless you've made an appointment, I'm afraid there's no chance you're case will be dealt with today.
                                </Typography></div> <br />
                            <Button variant="contained" style={{ backgroundImage: 'linear-gradient(to right, #18d2b6, #00d2c4, #00d2d1, #00d1dc, #11d0e5)' }}>Learn More</Button>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box >
    );
};

export default AppointmentBanner;