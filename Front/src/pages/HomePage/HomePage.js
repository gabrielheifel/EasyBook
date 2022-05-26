import React, { useEffect, useState } from 'react';
import api, { createSearch } from '../../services/api';
import {
  Container,
  Box 
} from '@mui/material';
import NavBar from '../../components/NavBar/NavBar';
import Categories from '../../components/Categories/Categories';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';
import CardProduct from '../../components/CardProduct/CardProduct';
 
const HomePage = () => {

  const [searchInput, setSearchInput] = useState(0);
  const [products, setProducts] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  const searchItems = (searchInput) => {
    if (searchInput !== '') {
        const filteredData = products.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
    }
    else{
        setFilteredResults(products)
    }
  }

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  useEffect(() => {
    fetch("http://localhost:5000/books", requestOptions)
      .then(response => response.json())
      .then(setProducts)
      .catch(error => console.log('error', error));

    searchItems(searchInput);
  },[searchInput])

  return (
    <div className='main'>
      <NavBar 
        color='primary' 
        isUser={true} 
        setSearchInput={setSearchInput} 
      />
      <Categories color='secundary' />
      <Container maxWidth="xl">
        <Box 
          display="flex"
          flexDirection='column'
          justifyContent="center"
          alignItems='center'
          sx={{ p: 4}} 
        >
          {searchInput == 0 ? (
            <div style={{display: 'contents'}}>
              <Box 
                style={{
                  width: 600,
                  height: 180,
                  backgroundColor: '#ffa500',
                  justifySelf: 'center'
                }}
              />
                <Carousel title={'Lançamentos'}/>
                <Carousel title={'Mais Vendidos'}/>
                <Carousel title={'Recomendados'}/>
            </div>
          ) : (
            filteredResults.map((product) => {
              return (
                <CardProduct key={product.id} product={product} />
              )
            })
          )}

        </Box>
      </Container>
      <Footer position='static'/>
    </div>
  );
}

export default HomePage;
