import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton
} from '@mui/material';
import { Button, CardActionArea, CardActions } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const CardProduct = ({book}) => {
  const { imageUrl, title, price } = book;

  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
  }

  return (
    <Card sx={{ width: 140, m: 0.5, flex: 'none'}}>
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
            sx={{fontWeight: 'bold'}}
          >
            {title}
          </Typography>
          <Typography variant="body2">
            R$ {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{pt:0, backgroundColor: '#C4C8CC'}}>
        <Button size="small" variant='contained'>
          Comprar
        </Button>
        <IconButton 
          aria-label="add to favorites"
          onClick={handleFavorite}  
        >
          {isFavorited
            ? <FavoriteOutlinedIcon sx={{color: 'red'}}/>
            : <FavoriteBorderOutlinedIcon/>
          }
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default CardProduct;