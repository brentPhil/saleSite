import React from 'react';
import { Grid, CardActionArea } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Product from './Product/Product';
import useStyle from './styles';

const Products = ({ products, onAddToCart, onFetchDetails }) => {
    const classes = useStyle();

   
    return(
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container alignItems="center" spacing={3}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    {/* <CardActionArea component={Link} to="/ViewProduct"  onClick={() => onFetchDetails(product.id)}> */}
                    <Product product={product} onAddToCart={onAddToCart} />
                    {/* </CardActionArea> */}
                </Grid>
            ))}
        </Grid>
    </main>
    );
}

export default Products;