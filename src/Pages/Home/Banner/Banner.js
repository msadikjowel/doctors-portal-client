import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography, Container } from '@mui/material';

const bannerBg = {
    background: `url(${bg})`,
    width: '100%',
    backgroundPosition: 'center',
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: '70vh',
    // width: '100%',
    justifyContent: 'center',
    // margin: 'auto'

}

const Banner = () => {

    return (
        <Box style={bannerBg} sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2} sx={{ pb: 7 }}>

                    <Grid item xs={12} md={6} style={{ ...verticalCenter, textAlign: 'left' }}>
                        <Box>
                            <Typography variant='h4' sx={{ fontWeight: 500 }}>
                                Your New Smile <br />
                                Starts Here
                            </Typography> <br />
                            <Typography variant='p' sx={{ fontSize: 16, color: '#B2B2B2', fontWeight: 300 }}>
                                <p>
                                    The Doctor’s Portal provides health organizations that strive for excellence and quality care, with a tool that allows physicians to measure themselves against key performance indicators set by the organization.
                                </p>
                            </Typography> <br />
                            <Button variant='contained' style={{ color: 'white', backgroundImage: 'linear-gradient(to right, #18d2b6, #00d2c4, #00d2d1, #00d1dc, #11d0e5)' }}>
                                GET APPOINtMENT
                            </Button>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6} style={verticalCenter}>
                        <img style={{ width: '100%' }} src={chair} alt="" />
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;