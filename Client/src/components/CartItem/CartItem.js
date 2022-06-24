import React, { useContext } from 'react';
import {CartFavoritesContext} from '../../contexts/userContext';
import { 
  Box, 
  Button, 
  Card, 
  CardActionArea, 
  CardActions, 
  CardContent, 
  CardMedia, 
  IconButton, 
  Rating, 
  Tooltip, 
  Typography 
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

const IconX = {
  position: 'absolute', 
  top: 0,
  right: 0,
  backgroundColor:'#808080',
  p:0.5,
  zIndex: 9
}

const CartItem = ({id, title, price}) => {
  // const {id, imageUrl, title, price} = product
  const {handleRemoveItemToCart} = useContext(CartFavoritesContext)

  return (
    <Card sx={{width: 160, flex: 'none', position: 'relative'}}>
      <CardActionArea sx={{backgroundColor: '#C4C8CC'}}>
        <CardMedia
          component="img"
          height="140"
          // image={imageUrl}
          image='img.png'
          alt="book"
        />
        <CardContent sx={{p:1}}>
          <Typography 
            gutterBottom 
            variant="body1" 
            component="div"
            sx={{fontWeight: 'bold', mb: 0}}
          >
            {title}
          </Typography>
          <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
          <Typography variant="body2">
            R$ {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions 
        sx={{pt:0, justifyContent: 'center', backgroundColor: '#C4C8CC'}}>
        <Button size="small" variant='contained' sx={{borderRadius: 4}}>
          Saiba mais
        </Button>
      </CardActions>
      <IconButton 
        sx={IconX}
        onClick={() => handleRemoveItemToCart(id)}  
      >
        <CloseIcon sx={{fontSize: '1rem'}} />    
      </IconButton>
    </Card>
  )
}

export default CartItem