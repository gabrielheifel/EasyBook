import React from 'react'
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
  top:-15, 
  right:-15,
  backgroundColor:'red',
  p:0.5,
  zIndex: 9
}

const CartItem = () => {
  return (
    <Card sx={{ width: 160, flex: 'none', position: 'relative'}}>
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
            {/* {title} */}
            title
          </Typography>
          <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
          <Typography variant="body2">
            R$ 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions 
        sx={{pt:0, justifyContent: 'center', backgroundColor: '#C4C8CC'}}>
        <Button size="small" variant='contained' sx={{borderRadius: 4}}>
          Saiba mais
        </Button>
      </CardActions>
      <IconButton sx={IconX}>
        <CloseIcon color='inherit' />    
      </IconButton>
    </Card>
  )
}

export default CartItem