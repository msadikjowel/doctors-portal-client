import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';

const PatientSays = () => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginY: '10rem',
            '& > :not(style)': {
                m: 1,
                width: 400,
                height: 300,
            },
        }}>

            <Paper elevation={3} sx={{ borderRadius: '10px' }}>
                <Typography sx={{ padding: 2, height: '50%', mt: 2, fontWeight: 300, color: '#595762' }}>This Doctor restored my faith in Doctors. He listened to me and helped me through a horrible sickness that almost took my life. MUSC Charleston should be Proud to have this doctor on their staff. Thank you Dr. Mcnulty</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 1 }}>
                    <Typography sx={{ marginRight: 2 }}><img style={{ width: '4rem', height: '4rem' }} src={people1} alt="" /></Typography>
                    <Box>
                        <Typography sx={{ color: '#5FC7C7', fontWeight: 600 }}>—William Roddey

                        </Typography>
                        <Typography sx={{ color: '#595762', fontWeight: 300 }}>Chicago</Typography>
                    </Box>

                </Box>
            </Paper>
            <Paper elevation={3} sx={{ borderRadius: '10px' }}>
                <Typography sx={{ padding: 2, height: '50%', mt: 2, fontWeight: 300, color: '#595762' }}>I want to thank everyone in the ICU for saving my life a nd providing me with the care I needed to get better and return to my children and grandchildren. You are all heroes and I am blessed to have been in your care. Eternally grateful.</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 1 }}>
                    <Typography sx={{ marginRight: 2 }}><img style={{ width: '4rem', height: '4rem' }} src={people2} alt="" /></Typography>
                    <Box>
                        <Typography sx={{ color: '#5FC7C7', fontWeight: 600 }}>—Donna Williams

                        </Typography>
                        <Typography sx={{ color: '#595762', fontWeight: 300 }}>New York</Typography>
                    </Box>

                </Box>
            </Paper>
            <Paper elevation={3} sx={{ borderRadius: '10px' }}>
                <Typography sx={{ padding: 2, height: '50%', mt: 2, fontWeight: 300, color: '#595762' }}>During these tough times, you guys are helping out people without thinking about your lives. I am truly glad that we have health care workers like you guys. Thanks for everything you do and stay safe.</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 1 }}>
                    <Typography sx={{ marginRight: 2 }}><img style={{ width: '4rem', height: '4rem' }} src={people3} alt="" /></Typography>
                    <Box>
                        <Typography sx={{ color: '#5FC7C7', fontWeight: 600 }}>—Rudhnan Habib

                        </Typography>
                        <Typography sx={{ color: '#595762', fontWeight: 300 }}>California</Typography>
                    </Box>

                </Box>
            </Paper>


        </Box>
    );
};

export default PatientSays;