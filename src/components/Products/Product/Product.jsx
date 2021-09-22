import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import '../../../assets/mainStyle/mainStyle.css';
import useStyles from './styles';

const Product = ({product, onAddToCart }) => {
    const classes = useStyles();

    console.log(product)
    
    return (
      <Card className={classes.root}>
          <CardMedia className={classes.media} image={product.media.source} title={product.name} />
          <CardContent className='product'>
              <div className={classes.cardContent}>
                  <Typography variant="body2" className={classes.name} id='name' gutterBottom>
                      { product.name }                     
                  </Typography>
                  <Typography variant="body2" id='name'>
                     {product.price.formatted_with_symbol}
                  </Typography> 
              </div>
              <div className={classes.cardContent}>
              <Rating size="small" name="half-rating-read" className={classes.star} defaultValue={2.5} precision={0.5} readOnly />
              <Typography variant="body2" id='name'>
                    (0)sold
              </Typography>
              </div>
              {/* <Typography dangerouslySetInnerHTML={{__html: product.description }}  variant="body2" color="textSecondary" /> */}
          </CardContent>
          <CardActions disableSpacing className={classes.cardActions}>
             <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                <AddShoppingCart />
             </IconButton>
          </CardActions>
      </Card>
    )
}

export default Product
