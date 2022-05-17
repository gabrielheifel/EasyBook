import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import {
  Grid,
  Paper,
  Typography,
  ButtonBase,
  Box,
  Button,
  IconButton
} from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const ProductPage = (book) => {
  const {imageUrl, title, price} = book;

  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
  }

  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        width: 700,
        flexGrow: 1,
        backgroundColor:'silver'
      }}
    >
      <Box sx={{
          display:'flex', 
          flexDirection:'row',
          justifyContent: 'space-between', 
          alignItems: 'center',
          width: '100%'
        }}
      >
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Box>
          <Typography variant="h6" component="div" sx={{fontWeight: 'bold', flex:1}}>
            R${price}
          </Typography>
        </Box>
      </Box>
      <Box sx={{
          display:'flex', 
          flexDirection:'row',
          justifyContent: 'space-between', 
          alignItems: 'center',
          width: '38%'
        }}
      >
        <Typography variant="body2">
          Autor Name
        </Typography>
        <Box>
          <StarIcon sx={{color: 'orange'}}/>
          <StarIcon sx={{color: 'orange'}}/>
          <StarIcon sx={{color: 'orange'}}/>
          <StarIcon sx={{color: 'orange'}}/>
          <StarOutlineIcon/>
        </Box>
      </Box>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 250, height: 350, backgroundColor:'orange' }}>
            <Img alt="complex" src={imageUrl} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Sinopse
              </Typography>
              <Typography variant="body2" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit. 
                {/* esse cillum. dolore eu fugiat nulla pariatur. Excepteur 
                sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum. */}
              </Typography>
              <Typography variant="body2" sx={{pt: 2}}>
                Informações da Editora
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua.
              </Typography>
            </Grid>
            <Grid item container justifyContent='flex-end' >
              <IconButton 
                aria-label="add to favorites"
                onClick={handleFavorite}  
              >
                {isFavorited
                  ? <FavoriteOutlinedIcon sx={{color: 'red'}}/>
                  : <FavoriteBorderOutlinedIcon/>
                }
              </IconButton>
              <Button 
                startIcon={<AddShoppingCartOutlinedIcon/>}
                sx={{
                  backgroundColor: 'orange', 
                  fontWeight: 600, 
                  pl: 3, pr: 3, ml: 1,
                  '&:hover': {
                    backgroundColor: '#FFE800', 
                  }
                }}
              >
                Comprar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ProductPage;