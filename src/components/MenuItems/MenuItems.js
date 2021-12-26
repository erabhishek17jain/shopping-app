import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import DraftsIcon from '@mui/icons-material/Drafts';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Dashboard from '../MenuItems/Dashboard.js';
import Shop from '../MenuItems/Shop.js';
import Profile from '../MenuItems/Profile.js';
import Inbox from '../MenuItems/Inbox.js';
import Grid from '@mui/material/Grid';
import {
    Routes,
    Route, useNavigate
} from 'react-router-dom';
import './MenuItems.css'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 4 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function MenuItems() {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();
    const handleChange = (event, newValue) => {
        console.log(event)
        setValue(newValue);
        if (newValue === 1) {
            navigate("/shop");
        } else if (newValue === 2) {
            navigate("/profile");
        } else if (newValue === 3) {
            navigate("/inbox");
        } else {
            navigate("/");
        }
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    <Tab icon={<HomeIcon />} label="Dashboard" {...a11yProps(0)} />
                    <Tab icon={<ShoppingCartIcon />} label="Shop" {...a11yProps(1)} />
                    <Tab icon={<AccountBoxIcon />} label="Profile" {...a11yProps(2)} />
                    <Tab icon={<DraftsIcon />} label="Inbox" {...a11yProps(3)} />
                </Tabs>
            </Grid>
            <Grid item xs={10}>
                <TabPanel>
                    <Routes>
                        <Route exact path='/' element={< Dashboard />}></Route>
                        <Route exact path='/shop' element={< Shop />}></Route>
                        <Route exact path='/profile' element={< Profile />}></Route>
                        <Route exact path='/inbox' element={< Inbox />}></Route>
                    </Routes>
                </TabPanel>
            </Grid>
        </Grid>
    );
}
