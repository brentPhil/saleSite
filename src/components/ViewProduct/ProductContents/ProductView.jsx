import React from 'react';
import { Card, CardMedia, CardContent, Typography, Paper, IconButton, Grid } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Rating } from '@material-ui/lab';
import '../../../assets/mainStyle/mainStyle.css';
import useStyles from './styles';

const ProductView = ({details, onAddToCart}) => {
    const classes = useStyles();
    console.log(details)

    return (
        <>
        <Card className={classes.cardActions}>
                <Paper className={classes.buttons} >
                    <IconButton type="button" size="small" color="secondary"
                    // onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
                    ><RemoveIcon size="small" /></IconButton>
                    <Typography variant='body2' style={{padding: '.5em'}}>4</Typography>
                    <IconButton type="button" size="small" color="primary"
                    // onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
                    ><AddIcon size="small" /></IconButton>
                    <Typography variant='body2' style={{padding: '.5em'}}>
                        {details.inventory.available} Available
                    </Typography>
                </Paper>
        </Card>
        </>
    )
}

export default ProductView
