import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Checkbox, 
  Button, 
  CardActionArea, 
  CardActions,
  Box
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CheckIcon from '@mui/icons-material/Check';
import { Route, Routes } from 'react-router-dom';
import ProductPage from '../../pages/ProductPage/ProductPage';

const CardProduct = ({product}) => {
  const { id, imageUrl, title, price } = product;

  const handleCart = () => {
    // setIsFavorited(!isFavorited);
  }

  return (
    <Card sx={{ width: 160, m: 0.5, flex: 'none'}}>
      <CardActionArea sx={{backgroundColor: '#C4C8CC'}}>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
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
          <Box>
            <StarIcon sx={{width:'20px', color: '#ffa500'}}/>
            <StarIcon sx={{width:'20px', color: '#ffa500'}}/>
            <StarIcon sx={{width:'20px', color: '#ffa500'}}/>
            <StarIcon sx={{width:'20px', color: '#ffa500'}}/>
            <StarOutlineIcon sx={{width:'20px'}}/>
          </Box>
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
        <IconButton 
          aria-label="add to cart"
          onClick={handleCart}  
        >
          <Checkbox 
            sx={{p:0, left:0}} 
            icon={<AddShoppingCartIcon />} 
            checkedIcon={<CheckIcon sx={{color: 'green'}} />} 
          />

        </IconButton>
      </CardActions>
    </Card>
  );
}

export default CardProduct;