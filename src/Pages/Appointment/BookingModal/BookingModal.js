import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import useAuth from '../../../hooks/useAuth';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date, setBookingSuccess }) => {
    const { name, time } = booking;
    const { user } = useAuth();

    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' };
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }

    // submit booking
    const handleBookingSubmit = e => {

        // collecting data
        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString()
        }
        // send to server
        fetch('https://polar-reef-29268.herokuapp.com/appointments', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                    handleBookingClose();

                }
            })



        e.preventDefault();
    }



    // cancel booking
    const cancelBooking = e => {
        handleBookingClose();
        e.preventDefault();
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center', mb: 1, fontSize: 18, color: '#1CC7C1', fontWeight: 400 }}>
                        {name}
                    </Typography>

                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            disabled
                            sx={{ width: '100%', m: 1 }}
                            label="Time"
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                        />
                        <TextField
                            required
                            sx={{ width: '100%', m: 1 }}
                            label="Your Name"
                            id="outlined-size-small"
                            defaultValue={user.displayName}
                            size="small"
                            name="patientName"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            required
                            sx={{ width: '100%', m: 1 }}
                            label="Your Email"
                            id="outlined-size-small"
                            defaultValue={user.email}
                            size="small"
                            name="email"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            required
                            type="number"
                            sx={{ width: '100%', m: 1 }}
                            label="Your Phone"
                            id="outlined-size-small"
                            defaultValue=''
                            size="small"
                            name="phone"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            disabled
                            sx={{ width: '100%', m: 1 }}
                            label="Appointment Date"
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                        />
                        <Box sx={{ display: 'flex', justifyContents: 'space-between' }}>
                            <Button onClick={cancelBooking} type='submit' variant='contained' style={{ backgroundColor: 'darkRed', margin: 'auto' }}>Cancel Book</Button>
                            <Button type='submit' variant='contained' style={{ backgroundImage: 'linear-gradient(to right, #18d2b6, #00d2c4, #00d2d1, #00d1dc, #11d0e5)', textAlign: 'center', margin: 'auto' }}>Confirm Book</Button>
                        </Box>
                    </form>

                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;