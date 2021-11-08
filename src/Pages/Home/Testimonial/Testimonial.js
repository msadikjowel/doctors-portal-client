import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import quotationMark from '../../../images/quotation.png'





const Testimonial = () => {
    return (
        <Box sx={{ flexGrow: 1, my: 10 }}>
            <Container>
                <Grid container spacing={2} sx={{ height: '20vh', textAlign: 'left', alignItems: 'center' }}>
                    <Grid item xs={8} md={8} >
                        <Typography variant='h6' sx={{ color: '#6ACECE', fontWeight: 600, mb: 1 }}>
                            TESTIMONIAL
                        </Typography>
                        <Typography variant='h4' sx={{ fontSize: '2.5rem', fontWeight: 500 }}>
                            What's Our Patients <br /> Says
                        </Typography>
                    </Grid>
                    <Grid item xs={4} md={4} sx={{ height: '20vh', textAlign: 'end' }}>
                        <img style={{ width: '50%', opacity: '.1' }} src={quotationMark} alt="" />
                    </Grid>

                </Grid>
            </Container>
        </Box >
    );
};

export default Testimonial;