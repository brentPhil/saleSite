import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyle from './styles';

const SearchRe = ({ onAddToCart, foundUsers }) => {
    const classes = useStyle();
    return(
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container alignItems="center" spacing={3}>
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
        </Grid>
    </main>
    );
}

export default SearchRe;