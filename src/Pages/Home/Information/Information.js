import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const ClockElement = <FontAwesomeIcon icon={faClock} />
const LocationElement = <FontAwesomeIcon icon={faMapMarkerAlt} />
const PhoneElement = <FontAwesomeIcon icon={faPhoneAlt} />

const Information = () => {
    return (
        <Box sx={{ flexGrow: 1, marginTop: '-70px', marginBottom: '80px' }}>
            <Container>
                <Grid container sx={{ display: 'flex' }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    <Grid item xs={12} sm={4} md={4} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        padding: '20px',
                        backgroundColor: '#1CC7C1',
                        color: 'white',
                        // borderRadius: 2
                    }}>
                        <Grid sx={{ fontSize: '4rem', color: 'white' }}>{ClockElement}</Grid>
                        <Grid sx={{

                        }}>
                            <Typography sx={{ fontSize: '1rem', fontWeight: '500', mb: 1 }}>
                                Opening Hours
                            </Typography>
                            <Typography sx={{ fontWeight: 300, fontSize: 12 }}>
                                24/7
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        padding: '20px',
                        backgroundColor: '#3A4256',
                        color: 'white',
                        // margin: '0px 10px'
                    }}>
                        <Grid sx={{ fontSize: '4rem', color: 'white' }}>{LocationElement}</Grid>
                        <Grid sx={{

                        }}>
                            <Typography sx={{ fontSize: '1rem', fontWeight: '500', mb: 1 }}>
                                Visit Our Location
                            </Typography>
                            <Typography sx={{ fontWeight: 300, fontSize: 12 }}>
                                Coxs Bazar, Bangladesh
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        padding: '20px',
                        backgroundColor: '#1CC7C1',
                        color: 'white'
                    }}>
                        <Grid sx={{ fontSize: '4rem', color: 'white' }}>{PhoneElement}</Grid>
                        <Grid sx={{

                        }}>
                            <Typography sx={{ fontSize: '1rem', fontWeight: '500', mb: 1 }}>
                                Contact Us Now
                            </Typography>
                            <Typography sx={{ fontWeight: 300, fontSize: 12 }}>
                                +880 18888 88888
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default Information;