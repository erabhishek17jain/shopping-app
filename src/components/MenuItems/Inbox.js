import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import FlagIcon from '@mui/icons-material/Flag';
import MailIcon from '@mui/icons-material/Mail';
import ArchiveIcon from '@mui/icons-material/Archive';
import { DataGrid } from '@mui/x-data-grid';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const columns = [
    { field: 'subject', headerName: 'Subject', width: 180 },
    { field: 'mailBody', headerName: 'Mail Body', width: 220 },
    { field: 'recieveDate', headerName: 'Recieve Date', width: 180 },
];
const rows = [
    { id: 1, subject: 'HCL New Mail ', mailBody: 'This is temperory mail data used to display for demo', recieveDate: '27 December 2021' },
    { id: 2, subject: 'Abhishek Jain Resume', mailBody: 'This is temperory mail data used to display for demo', recieveDate: '22 December 2021' },
    { id: 3, subject: 'HCL Joining', mailBody: 'This is temperory mail data used to display for demo', recieveDate: '21 November 2021' },
    { id: 4, subject: 'Assignment for Project', mailBody: 'This is temperory mail data used to display for demo', recieveDate: '22 December 2021' },
    { id: 5, subject: 'Company Events', mailBody: 'This is temperory mail data used to display for demo', recieveDate: '23 September 2021' },
    { id: 6, subject: 'Documents Related to Joining HCL', mailBody: 'This is temperory mail data used to display for demo', recieveDate: '27 December 2021' },
    { id: 7, subject: 'Profile generated form', mailBody: 'This is temperory mail data used to display for demo', recieveDate: '4 October 2021' },
    { id: 8, subject: 'Social Media Accounts', mailBody: 'This is temperory mail data used to display for demo', recieveDate: '2 December 2021' },
    { id: 9, subject: 'Login to Facebook', mailBody: 'This is temperory mail data used to display for demo', recieveDate: '7 November 2021' },
    { id: 10, subject: 'See your followers on Twitter', mailBody: 'This is temperory mail data used to display for demo', recieveDate: '10 August 2021' },
    { id: 11, subject: 'You achieve 100k subscrier today', mailBody: 'This is temperory mail data used to display for demo', recieveDate: '20 January 2021' },
    { id: 12, subject: 'Login to Instagram', mailBody: 'This is temperory mail data used to display for demo', recieveDate: '26 December 2021' },
    { id: 13, subject: 'Records of last month', mailBody: 'This is temperory mail data used to display for demo', recieveDate: '25 December 2021' },
    { id: 14, subject: 'Check best offer for you', mailBody: 'This is temperory mail data used to display for demo', recieveDate: '24 December 2021' },
    { id: 15, subject: 'Temporary Mail to you', mailBody: 'This is temperory mail data used to display for demo', recieveDate: '28 December 2021' },
    { id: 16, subject: 'New Mail from Abhishek', mailBody: 'This is temperory mail data used to display for demo', recieveDate: '30 November 2021' },
    
];
export default function Inbox() {
    const [mails, setMails] = useState([]);
    const getData = () => {
        setMails(rows)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Button variant="contained">New Message <MailIcon /></Button>
                </Grid>
                <Grid item xs={4}>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Grid>
                <Grid item xs={4} justifyContent='right'>
                    <Button variant="text">Delete <DeleteIcon /></Button>
                    <Button variant="text">Flag <FlagIcon /></Button>
                    <Button variant="text">Archive <ArchiveIcon /></Button>
                </Grid>
            </Grid>
            <div style={{ height: 500, width: '100%', marginTop: '10px' }}>
                <DataGrid
                    rows={mails}
                    columns={columns}
                    pageSize={7}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </Box>
    );
}
