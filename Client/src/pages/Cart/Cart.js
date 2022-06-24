import { 
  Box, 
  Container, 
  Grid, 
  Typography 
} from '@mui/material'
import React, { useContext } from 'react'
import CardProduct from '../../components/CardProduct/CardProduct'
import CartItem from '../../components/CartItem/CartItem'
import Categories from '../../components/Categories/Categories'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import { CartFavoritesContext } from '../../contexts/userContext'

const Cart = () => {

  const {cart} = useContext(CartFavoritesContext)

  return (
    <>
      <NavBar color='primary' />
      <Categories color='secundary' />
      <Container maxWidth="xl">
          <Typography variant="h5" sx={{m: 2, mb:1, fontWeight: 'bold'}}>
            Carrinho
          </Typography>
        <Box 
          display="flex"
          flexDirection='row'
          justifyContent="space-between"
          sx={{p:1}} 
        >
          <Grid container spacing={2} columns={3}>
            {cart.map((cartItem, index) => {
              return(
                <Grid item xs={1} key={index}>
                  <CartItem 
                    key={index} 
                    id={index}
                    title={cartItem.name}
                    price={cartItem.price}
                  />
                </Grid>
              )
            })}
          </Grid>
          <Box 
            sx={{
              width:'40vw',
              height:'55vh',
              backgroundColor: '#ffa500',
              justifySelf: 'center',
              borderRadius: 2
            }}
          >
            text
          </Box>
        </Box>
      </Container>
      <Footer/>
    </>
  )
}

export default Cart;