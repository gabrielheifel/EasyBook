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
import { Favorite, FavoriteBorder} from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

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
            sx={{fontWeight: 'bold', mb: 0}}
          >
            {title}
          </Typography>
          <Box>
            <StarIcon sx={{width:'20px', color: 'orange'}}/>
            <StarIcon sx={{width:'20px', color: 'orange'}}/>
            <StarIcon sx={{width:'20px', color: 'orange'}}/>
            <StarIcon sx={{width:'20px', color: 'orange'}}/>
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
        {/* <IconButton 
          aria-label="add to favorites"
          onClick={handleFavorite}  
        >
          <Checkbox 
            sx={{p:0, left:0}} 
            icon={<FavoriteBorder />} 
            checkedIcon={<Favorite sx={{color: 'red'}} />} 
          />

        </IconButton> */}
      </CardActions>
    </Card>
  );
}

export default CardProduct;