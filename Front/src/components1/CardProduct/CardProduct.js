import React, { useContext, useState } from 'react';
import AuthContext from '../../contexts/auth';
import { Route, Routes } from 'react-router-dom';
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
import ProductPage from '../../pages/ProductPage/ProductPage';
import Modal from '../Modal/Modal';

const CardProduct = ({product}) => {
  const { id, imageUrl, title, price } = product;
  const {signed} = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [description, setDescription] = useState();
  const [color, setColor] = useState();
  const [isAdded, setIsAdded] = useState(false);

  const addCart = () => {
    if(signed) {
      if(isAdded) {
        setIsAdded(false)
        setDescription('Removido do Carrinho');
        setColor('green');
        handleOpen();
      } else {
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
            onClick={addCart}  
          >
            {signed 
              ? isAdded
                ? <CheckIcon sx={{color: 'green'}} />
                : <AddShoppingCartIcon />
              : <AddShoppingCartIcon />
            }
            {/* <Checkbox 
              sx={{p:0, left:0}} 
              icon={<AddShoppingCartIcon />} 
              checkedIcon={<CheckIcon sx={{color: 'green'}} />} 
            /> */}

          </IconButton>
        </CardActions>
      </Card>
      <Modal open={open} setOpen={setOpen} description={description} color={color} />
    </>
  );
}

export default CardProduct;