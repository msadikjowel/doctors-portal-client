import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import bg from '../../../images/quotation.png';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';

const arrow = <FontAwesomeIcon icon={faArrowRight} />



const Blogs = () => {
    return (

        <Box>

            <Typography variant='h6' color='#5FC7C7' sx={{ fontWeight: 600, mb: 2 }}>
                OUR BLOGS
            </Typography>
            <Typography variant='h3' sx={{ color: '#203047', fontWeight: 400 }}>
                From Our Blog News
            </Typography>

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginY: '7rem',
                '& > :not(style)': {
                    m: 1,
                    width: 400,
                    height: 450,
                },
            }}>

                <Paper elevation={3} sx={{ borderRadius: '10px', backgroundImage: 'linear-gradient(to right, #18d2b6, #00d2c4, #00d2d1, #00d1dc, #11d0e5)', width: '8rem', position: 'relative' }}>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left', m: 4 }}>

                        <Box sx={{ textAlign: 'left' }}>
                            <Typography sx={{ fontWeight: 500, color: 'white' }}>Dr. Kane Williams

                            </Typography>
                            <Typography sx={{ fontSize: 14, color: 'white', fontWeight: 400, mt: .3 }}>09 August 2022</Typography>
                        </Box>

                    </Box>

                    <Typography sx={{ color: 'white', fontSize: 20, px: 3, textAlign: 'left', fontWeight: 400 }}>
                        Check at least a doctor in a
                        year for your teeth
                    </Typography>

                    <Typography sx={{ padding: 2, mt: 10, fontSize: 70, px: 3, color: 'white', textAlign: 'left' }}>{arrow}</Typography>
                    <Typography sx={{ position: 'absolute', top: '5rem', right: '3rem', opacity: .04 }}>
                        <img style={{ width: '10rem' }} src={bg} alt="" />
                    </Typography>

                </Paper>





                <Paper elevation={3} sx={{ borderRadius: '10px' }}>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left', m: 4 }}>
                        <Typography sx={{ marginRight: 2 }}><img style={{ width: '4rem', height: '4rem' }} src={people1} alt="" /></Typography>
                        <Box sx={{ textAlign: 'left' }}>
                            <Typography sx={{ color: '#3C3C3E', fontWeight: 600 }}>Dr. Rods Roddey

                            </Typography>
                            <Typography sx={{ fontSize: 14, color: '#b2b2b2', fontWeight: 400, mt: .3 }}>29 April 2022</Typography>
                        </Box>

                    </Box>

                    <Typography sx={{ color: '#3C3C3E', fontSize: 20, px: 3, textAlign: 'left' }}>
                        2 times of brush in a day can
                        Keep you healthy
                    </Typography>

                    <Typography sx={{ padding: 2, height: '50%', mt: 2, fontWeight: 300, color: '#B3B2B5', textAlign: 'left' }}>We recommends brushing your teeth twice a day with fluoride toothpaste for two minutes each time. When you brush your teeth, you help remove food and plaque — a sticky white film that forms on your teeth and contains bacteria.</Typography>

                </Paper>

                <Paper elevation={3} sx={{ borderRadius: '10px' }}>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left', m: 4 }}>
                        <Typography sx={{ marginRight: 2 }}><img style={{ width: '4rem', height: '4rem' }} src={people2} alt="" /></Typography>
                        <Box sx={{ textAlign: 'left' }}>
                            <Typography sx={{ color: '#3C3C3E', fontWeight: 600 }}>Dr. Kagiso Lame

                            </Typography>
                            <Typography sx={{ fontSize: 14, color: '#b2b2b2', fontWeight: 400, mt: .3 }}>29 April 2022</Typography>
                        </Box>

                    </Box>

                    <Typography sx={{ color: '#3C3C3E', fontSize: 20, px: 3, textAlign: 'left' }}>
                        The tooth cancer is taking a
                        challenge
                    </Typography>

                    <Typography sx={{ padding: 2, height: '50%', mt: 1, fontWeight: 300, color: '#B3B2B5', textAlign: 'left' }}>Mouth cancer, also known as oral cancer or cancer of the oral cavity, is often used to describe a number of cancers that start in the region of the mouth. These most commonly occur on the lips, tongue and floor of the mouth but can also start in the cheeks, gums, roof of the mouth, tonsils and salivary glands.</Typography>

                </Paper>



            </Box>
        </Box>
    );
};

export default Blogs;