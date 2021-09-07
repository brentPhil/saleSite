import React from 'react'
// eslint-disable-next-line no-unused-vars
import { AppBar, Toolbar, IconButton, Badge, Button, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from './Tool/SearchBar';
import logo from '../../assets/logo.svg';
import useStyles from './styles';
import Account from './Tool/Account/Account';


const NavBar = ({ totalItems, products, filter, name }) => {
    const classes = useStyles();
    const location = useLocation();
    return (
        <>
         <AppBar position="fixed" className={classes.appBar}>
         <Toolbar>
            <Button component={Link} to="/">
                <img src={logo} alt="Commerce.js" height="25px"/>
            </Button>
            <SearchBar products={products} filter={filter} name={name} />
            <div className={classes.grow} />
            {location.pathname === '/cart' && (
            <div className={classes.button}>
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                <Badge badgeContent={totalItems} color="secondary">
                    <ShoppingCart />
                </Badge>
            </IconButton>
            </div>
            )} 
            <Account />
            {/* <div>
            <Button className={classes.emptyButton} size="small" type="button" variant="outlined" color="secondary">Sign In</Button>
            <Button className={classes.checkoutButton} size="small" type="button" variant="contained" color="primary">Sign Up</Button>
            </div> */}
         </Toolbar>
         </AppBar>   
        </>
    )
}

export default NavBar
