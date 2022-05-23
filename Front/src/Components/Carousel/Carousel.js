import React, { useEffect, useState, useRef } from 'react';
import {
  Typography,
  Button,
  Box,
  CircularProgress
} from '@mui/material';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import CardProduct from '../CardProduct/CardProduct';
import './index.css';

const Carousel = (props) => {
  const [products, setProducts] = useState([]);
  const carousel = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleLeftArrow = e => {
    e.preventDefault(); 
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightArrow = e => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
    
  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:5000/books')
      .then((response) => response.json())
      .then(setProducts);
    setLoading(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Box 
        className='box-carousel'
        style={{
          maxWidth: '95vw',
          height: 320,
          flex: 1, 
          alignItems: 'flex-start',
          padding: 15,
          marginBottom: 15
        }}
        >
          <Typography variant="h5" component="div">
            {props.title}
          </Typography>
          <Button 
            className='leftArrow'
            color="inherit"
            onClick={handleLeftArrow}
            sx={{
              position: 'absolute',
              left: 0,
              minWidth: 0,
              width: 30,
              height: 285,
              zIndex: 99,
              transition: '.5s',
              backgroundColor: 'rgba(0,0,0,0.1)',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.4)',
              }
            }}
          >
            <ArrowBackIosOutlinedIcon/>
          </Button>
          <Button 
            className='rightArrow'
            color="inherit"
            onClick={handleRightArrow}
            sx={{
              position: 'absolute',
              right: 0,
              minWidth: 0,
              width: 30,
              height: 285,
              zIndex: 99,
              transition: '.5s',
              backgroundColor: 'rgba(0,0,0,0.1)',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.4)',
              }
            }} 
          >
            <ArrowForwardIosOutlinedIcon/>
          </Button>
        
        {
          loading ? (
            <CircularProgress />
          ) : (
            <Box
              className='carousel' 
              ref={carousel}
              sx={{
                display: 'flex',
                overflowX: 'auto',
                scrollBehavior: 'smooth'
              }}
            >
              {products.map((product) => {
                return(
                  <CardProduct key={product.id} product={product} />
                )
              })}
            </Box>
          )
        }
      </Box>
    </>
  )
}

export default Carousel