import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';



const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a persons teeth to improve health and reduce the risk of cavities. These in-office treatments may take the form of a solution, gel, foam, or varnish.',
        img: fluoride
    },

    {
        name: 'Cavity Filling',
        description: 'Having a cavity filled may cause some discomfort, but it should not cause pain. Anyone who experiences moderate or severe pain during or after the procedure should let their dentist know. Below, we describe the materials in fillings and give details about the procedure.',
        img: cavity
    },

    {
        name: 'Teeth Whitening',
        description: 'Everyone notices a bright, white, glowing smile. How confident you feel when you have that beautiful smile. That’s why we utilize long-lasting Teeth Whitening procedure, because we want you to glow with pride and confidence. You can enjoy the boost in confidence smile.',
        img: whitening
    },
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ m: 2, fontWeight: 500, fontSize: 25, color: '#5FC7C7' }} variant="h6" component="div" >
                    OUR SERVICE
                </Typography>
                <Typography sx={{ mb: 10, fontWeight: 500, fontSize: 52, color: '#203047' }} variant="h4" component="div" >
                    Services We Provide
                </Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;