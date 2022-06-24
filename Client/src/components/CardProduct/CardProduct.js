import React, { useContext, useState } from 'react';
import AuthContext from '../../contexts/auth';
// import { Route, Routes } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Button, 
  CardActionArea, 
  CardActions,
  Box,
  Rating
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CheckIcon from '@mui/icons-material/Check';
// import ProductPage from '../../pages/ProductPage/ProductPage';
import Modal from '../Modal/Modal';
import { CartFavoritesContext } from '../../contexts/userContext';
import { Tooltip } from '@material-ui/core';

const CardProduct = ({product}) => {
  const { id, imageUrl, title, price } = product;
  const {signed} = useContext(AuthContext);
  const {handleAddItemToCart, handleRemoveItemToCart} = useContext(CartFavoritesContext);

  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState();
  const [color, setColor] = useState();
  const [isAdded, setIsAdded] = useState(false);
  
  const handleOpen = () => setOpen(true);

  //usar snackbar MUI
  const handleCart = () => {
    if(signed) {
      if(isAdded) {
        // handle remove to cart
        handleRemoveItemToCart(id)

        setIsAdded(false)
        setDescription('Removido do Carrinho');
        setColor('green');
        handleOpen();
      } else {
        //handle add to cart
        handleAddItemToCart(imageUrl, title, price)

        setIsAdded(true)
        setDescription('Adicionado ao Carrinho');
        setColor('green');
        handleOpen();
      } 
    } else {
      setDescription('Faça login para adicionar ao Carrinho');
      setColor('red');
      handleOpen();
      setIsAdded(false);
    }
  }

  return (
    <>
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
          <Tooltip title='Adicionar ao carrinho'>
            <IconButton 
              aria-label="add to cart"
              onClick={handleCart}  
            >
              {signed 
                ? isAdded
                  ? <CheckIcon sx={{color: 'green'}} />
                  : <AddShoppingCartIcon />
                : <AddShoppingCartIcon />
              }
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
      <Modal open={open} setOpen={setOpen} description={description} color={color} />
    </>
  );
}

export default CardProduct;