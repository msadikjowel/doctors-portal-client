import { Alert, AlertTitle, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {

        // const user = { email };
        fetch('https://polar-reef-29268.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`, 'content-type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })

        e.preventDefault();
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    id="standard-basic" label="Email"
                    type="email"
                    name="email"
                    onBlur={handleOnBlur}
                    variant='standard'
                    sx={{ m: 1, width: 2 / 5 }} /> <br />

                <Button type="submit" variant="contained" sx={{ width: 2 / 5, mt: 5, mb: 3, backgroundImage: 'linear-gradient(to right, #18d2b6, #00d2c4, #00d2d1, #00d1dc, #11d0e5)', fontWeight: 500 }}>Make Admin</Button>
            </form>
            {success &&
                <Alert severity="success">
                    <AlertTitle>Admin made successfully</AlertTitle>
                </Alert>
            }
        </div>
    );
};

export default MakeAdmin;