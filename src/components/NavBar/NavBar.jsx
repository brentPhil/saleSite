import React from 'react'
// eslint-disable-next-line no-unused-vars
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import useStyles from './styles';


const NavBar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();


    return (
        <>
         <AppBar position="fixed" className={classes.AppBar} color="inherit">
         <Toolbar>
             <Typography component={Link} to="/" variant="h6" className={classes.tilte} color="inherit">
                 <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
             </Typography>
             <div className={classes.grow} />
             {location.pathname === '/' && (
             <div className={classes.button}>
                 <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                     <Badge badgeContent={totalItems} color="secondary">
                         <ShoppingCart />
                     </Badge>
                 </IconButton>
             </div>
             )}
         </Toolbar>
         </AppBar>   
        </>
    )
}

export default NavBar
