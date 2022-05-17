import React, { useEffect, useState, useRef } from 'react';
import {
  Typography,
  Button,
  Box
} from '@mui/material';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import CardProduct from '../CardProduct/CardProduct';
import './index.css';

const Carousel = (props) => {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  const handleLeftArrow = e => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightArrow = e => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
    
  useEffect(() => {
    fetch('http://localhost:5000/books')
      .then((response) => response.json())
      .then(setData);
      console.log(data)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Box 
        style={{
          maxWidth: '90vw',
          height: 320,
          flex: 1, 
          alignItems: 'flex-start',
          padding: 15
        }}
      >
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <div>
          <Button 
            color="inherit"
            onClick={handleLeftArrow}
            sx={{
              position: 'absolute',
              left: 20,
              minWidth: 0,
              width: 30,
              height: 260,
              backgroundColor: 'rgba(0,0,0,0.1)',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.4)',
              }
            }}
          >
            <ArrowBackIosOutlinedIcon/>
          </Button>
          <Button 
            color="inherit"
            onClick={handleRightArrow}
            sx={{
              position: 'absolute',
              right: 20,
              minWidth: 0,
              width: 30,
              height: 260,
              backgroundColor: 'rgba(0,0,0,0.1)',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.4)',
              }
            }} 
          >
            <ArrowForwardIosOutlinedIcon/>
          </Button>
        </div>
        <Box
          className='carousel' 
          ref={carousel}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            scrollBehavior: 'smooth'
          }}
        >
          {data.map((item, index) => {
            return(
              <CardProduct key={index} book={item} />
            )
          })}
        </Box>
      </Box>
        
    </>
  )
}

export default Carousel