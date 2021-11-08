import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import treatment from '../../../images/treatment.png'
import { Button, Container, Typography } from '@mui/material';

const InformationTwo = () => {
    return (
        <Box sx={{ flexGrow: 1, my: 10 }}>
            <Container>
                <Grid container spacing={2} >
                    <Grid item xs={12} sm={6} sx={{ padding: 2 }}>
                        <img style={{ width: '100%', borderRadius: '10px' }} src={treatment} alt="" />
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ textAlign: 'left', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='h4'>
                            Exceptional Dental <br />
                            Care, on Your Terms
                        </Typography>
                        <Typography varint='p' sx={{ color: '#b2b2b2', fontWeight: 300, my: 5 }}>
                            It is a long established fact that a reader will be distracted
                            by the readable content of a page when looking at its
                            layout. The point of using Lorem Ipsumis that it has
                            a more-or-less normal distribution of letters,as opposed
                            to using ‘Content here, content here’, making it look like
                            readable English. Many desktop publishing packages
                            and web page
                        </Typography>
                        <Button variant='contained' style={{ backgroundImage: 'linear-gradient(to right, #18d2b6, #00d2c4, #00d2d1, #00d1dc, #11d0e5)', width: '8rem' }}>LEARN MORE</Button>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default InformationTwo;