import React from 'react'
import { Grid, Paper } from '@material-ui/core';
import ProductView from './ProductContents/ProductView';
import useStyle from './styles';

const ViewProduct = ({ details, onAddToCart }) => {
    const classes = useStyle();

    return (
        <>
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={12} sm={12} md={7} lg={7}>
                        <ProductView details={details} onAddToCart={onAddToCart} />
                    </Grid>
                {/* <Paper className={classes.paper}>xs=12</Paper> */}

                <Grid item xs={12} sm={12} md={5} lg={5}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
           </Grid>
        </main>
        </>
    )
}

export default ViewProduct
