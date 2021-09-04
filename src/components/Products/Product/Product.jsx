import React from 'react'
import { Card, CardMedia, CardContent, Typography} from '@material-ui/core';
import { Rating } from '@material-ui/lab';


import useStyles from './styles'

const Product = ({product, onAddToCart }) => {
    const classes = useStyles();
    
    return (
      <Card className={classes.root}>
          <CardMedia className={classes.media} image={product.media.source} title={product.name} />
          <CardContent style={{background: '#FF665A',}}>
              <div className={classes.cardContent}>
                  <Typography variant="body2" style={{color: 'white',}} gutterBottom>
                     { (product.name.length > 25) ? ((product.name.substring(0,25-3)) + '...') : product.name }
                  </Typography>
                  <Typography variant="body2" style={{color: 'white',}}>
                     {product.price.formatted_with_symbol}
                  </Typography> 
              </div>
              <div className={classes.cardContent}>
              <Rating size="small" name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
              <Typography variant="body2" style={{color: 'white',}}>
                    (0)sold
              </Typography>
              </div>
              {/* <Typography dangerouslySetInnerHTML={{__html: product.description }}  variant="body2" color="textSecondary" /> */}
          </CardContent>
          {/* <CardActions disableSpacing className={classes.cardActions}>
             <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                <AddShoppingCart />
             </IconButton>
          </CardActions> */}
      </Card>
    )
}

export default Product
