import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './MenuItems.css'

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

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [sortBy, setSortBy] = useState('');
    const getData = () => {
        fetch('https://fakestoreapi.com/products'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setProducts(myJson)
                console.log(myJson);
            });
    }
    useEffect(() => {
        getData()
    }, [])
    const handleSort = (sort) => {
        var sortedProducts = products
        if (sort === 'priceLow') {
            sortedProducts.sort(function (a, b) {
                return a.price - b.price;
            })
        } else {
            sortedProducts.sort(function (b, a) {
                return a.price - b.price;
            })
        }
        setSortBy(sort)
        setProducts(sortedProducts)
    }
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Button className='f12' variant={sortBy === "priceLow" ? "outlined" : "text"} onClick={() => handleSort('priceLow')}>Low Price</Button>
                    <Button className='f12' variant={sortBy === "priceHigh" ? "outlined" : "text"} onClick={() => handleSort('priceHigh')}>High Price</Button>
                </Grid>
                <Grid item xs={4}>
                    <Search className='f12'>
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
                    <Button variant="contained" className='f12'>Proceed Order <ShoppingCartIcon /></Button>
                </Grid>
            </Grid>
            {products && products.length > 0 && products.map((item) =>
                <Card variant="outlined" className="cardNew">
                    <CardContent>
                        <img
                            src={item.image}
                            srcSet={item.image}
                            width='150px'
                            height='150px'
                            alt={item.title}
                            loading="lazy"
                        />
                        <Typography sx={{ fontSize: 14, width: "75%" }} className="title tl" color="text.secondary" gutterBottom>
                            <b>{item.title}</b>
                        </Typography>
                        <Typography sx={{ fontSize: 14, width: "25%" }} className="price tl" >
                            <CurrencyRupeeIcon sx={{ fontSize: 12 }} />
                            <b>{item.price}</b>
                        </Typography>
                        <Typography className="tl">
                            {item.category}
                        </Typography>
                        {/* { <Typography variant="body2" className="description tl">
                            {item.description}
                        </Typography> } */}
                    </CardContent>
                    <CardActions disableSpacing>
                        <Typography sx={{ mb: 1.5 }} className="rating tl">
                            Rating: <b>{item.rating.rate}</b>
                        </Typography>
                        <AddShoppingCartIcon className="addCart" />
                    </CardActions>
                </Card>
            )}
        </>);
}
