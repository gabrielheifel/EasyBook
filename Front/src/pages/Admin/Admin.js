import React from 'react'
import {
  Box,
  Button,
  Container, 
  Grid
} from '@mui/material'
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

const Adm = () => {
  return (
    <>
      <NavBar color='primary' isUser={false}/>
      <Container maxWidth="xl">
        <Box 
          display="flex"
        >
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={5}>
              <Button 
                variant='contained'
                color="secundary" 
                size="large"
                sx={{mb: 1, width: '250px', height: '130px', borderRadius: 8}}
                style={{color: 'white'}}
              >
                Adicionar Produto
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button 
                variant='contained'
                color="secundary" 
                size="large"
                sx={{mb: 1, width: '250px', height: '130px', borderRadius: 8}}
                style={{color: 'white'}}
              >
                Transações
              </Button>
            </Grid>
            <Grid item xs={5}>
              <Button 
                variant='contained'
                color="secundary" 
                size="large"
                sx={{mb: 1, width: '250px', height: '130px', borderRadius: 8}}
                style={{color: 'white'}}
              >
                Editar Produto
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button 
                variant='contained'
                color="secundary" 
                size="large"
                sx={{mb: 1, width: '250px', height: '130px', borderRadius: 8}}
                style={{color: 'white'}}
              >
                Suporte ao Cliente
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  )
}

export default Adm