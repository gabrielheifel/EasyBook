import React from 'react';
import {
  Container,
  Box 
} from '@mui/material';
import NavBar from '../../components/NavBar/NavBar';
import Categories from '../../components/Categories/Categories';
import Carousel from '../../components/Carousel/Carousel';
import ProductPage from '../ProductPage/ProductPage';
 
const Main = () => {
  return (
    <div className='main'>
      <NavBar color='primary' isUser={true} />
      <Categories color='secundary' />
      <Container maxWidth="xl">
        <Box 
          display="flex"
          flexDirection='column'
          justifyContent="center"
          alignItems='center'
          sx={{ p: 4}} 
        >
          <ProductPage />
          {/* <Box 
            sx={{
              width: 600,
              height: 180,
              backgroundColor: 'orange'
            }}
          /> */}
          {/* <Carousel title={'Lançamentos'}/> */}
          {/* <Carousel title={'Mais Vendidos'}/> */}
          {/* <Carousel title={'Recomendados'}/> */}
        </Box>
      </Container>
    </div>
  );
}

export default Main;
