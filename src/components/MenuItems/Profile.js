import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import './MenuItems.css'

export default function Profile() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={4} className="tc">
                <Stack direction="row" spacing={1}>
                    <Avatar alt="Cindy Baker" sx={{ width: 170, height: 180 }} src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
                </Stack>
                <Button variant="contained">Upload Image</Button>
            </Grid>
            <Grid item xs={8} className="tl">
                <TextField
                    id="outlined-name"
                    label="Full Name"
                    defaultValue=""
                    margin="normal"
                /><br />
                <TextField
                    id="outlined-name"
                    label="Email Address"
                    defaultValue=""
                    margin="normal"
                /><br />
                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    defaultValue=""
                    margin="normal"
                />
            </Grid>
        </Grid>
    );
}