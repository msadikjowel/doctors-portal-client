import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Alert, AlertTitle, Container, Typography } from '@mui/material';
import Booking from '../Booking/Booking';


const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 AM',
        space: 10,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 AM - 07.00 AM',
        space: 13,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 AM - 08.00 AM',
        space: 7,
    },
]

const AvailableAppointments = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography variant='h4' sx={{ my: 5, color: '#5FC7C7', fontSize: 26, fontWeight: 600 }}>
                Available Appointment Today: {date.toDateString()}
            </Typography>
            {bookingSuccess &&
                <Alert severity="success">
                    <AlertTitle>Appointment Booked Successfully</AlertTitle>

                </Alert>}

            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }

            </Grid>
        </Container>
    );
};

export default AvailableAppointments;