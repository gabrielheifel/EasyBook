import { 
  Box, 
  Container, 
  Grid, 
  Typography 
} from '@mui/material'
import React from 'react'
import CardProduct from '../../components/CardProduct/CardProduct'
import CartItem from '../../components/CartItem/CartItem'
import Categories from '../../components/Categories/Categories'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'

const Cart = () => {
  return (
    <>
      <NavBar color='primary' />
      <Categories color='secundary' />
      <Container maxWidth="xl">
          <Typography variant="h5" sx={{m: 2, fontWeight: 'bold'}}>
            Carrinho
          </Typography>
        <Box 
          display="flex"
          flexDirection='column'
          justifyContent="center"
          alignItems='center'
          sx={{p:1}} 
        >
          <Grid container spacing={2} columns={10} >
            <Grid item xs={7} >
              <Grid container spacing={2} columns={5}>
                {Array.from(Array(6)).map((_, index) => (
                  <Grid item xs={1} key={index}>
                    <CartItem/>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={3} >
            <Box 
              sx={{
                height: '85%',
                backgroundColor: '#ffa500',
                justifySelf: 'center',
                borderRadius: 2
              }}
            >

            </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer/>
    </>
  )
}

export default Cart;