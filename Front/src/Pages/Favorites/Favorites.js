import { Box, Container } from '@mui/material'
import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import Categories from '../../components/Categories/Categories'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'

const Favorites = () => {
  return (
    <div>
      <NavBar color='primary' />
      <Categories color='secundary' />
      <Container maxWidth="xl">
        <Box 
          display="flex"
          flexDirection='column'
          justifyContent="center"
          alignItems='center'
          sx={{ p: 4}} 
        >
          <Carousel title={'Favoritos'}/>
        </Box>
      </Container>
      <Footer position='static'/>
    </div>
  )
}

export default Favorites