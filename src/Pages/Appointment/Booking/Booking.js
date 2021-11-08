import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';


const Booking = ({ booking, date, setBookingSuccess }) => {
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    const { name, time, space } = booking;
    return (


        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography sx={{ color: '#5FC7C7', fontSize: 20, fontWeight: 600 }} variant='h5' gutterBottom component='div'>
                        {name}
                    </Typography>
                    <Typography variant='h6' gutterBottom component='div' sx={{ fontWeight: 400 }}>
                        {time}
                    </Typography>
                    <Typography variant='caption' gutterBottom display='block' sx={{ color: '#b4b4b4', mb: 2 }}>
                        {space} SPACES AVAILABLE
                    </Typography>

                    <Button onClick={handleBookingOpen} variant='contained' style={{ backgroundImage: 'linear-gradient(to right, #18d2b6, #00d2c4, #00d2d1, #00d1dc, #11d0e5)' }}>
                        BOOK APPOINTMENT
                    </Button>
                </Paper>

            </Grid>
            <BookingModal
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                date={date}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </>

    );
};

export default Booking;