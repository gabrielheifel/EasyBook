import React from 'react'
import { 
  Box,
  Typography,
  Container,
  TextField,
  Button,
} from '@mui/material';
import NavBar from '../../components/NavBar/NavBar';
import Categories from '../../components/Categories/Categories';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';

const baseUrl = 'http://localhost:5432/users'

const Register = () => {
  return (
    <>
      <NavBar color='primary' />
      <Categories color='secundary' />
      <Container maxWidth="xl">
        <Box 
          display="flex"
          justifyContent="center"
          sx={{p: 4}} 
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{
              width: 700, 
              height: 400, 
              p: 15, pt: 6, pb: 6,
              mt: 2
            }}
          >
            <Typography 
              variant="h4" 
              component="h2"
              sx={{m: 2}}
            >
              Registrar conta
            </Typography>

            <TextField 
              // id="outlined-basic"
              label="Nome" 
              variant="outlined"
              size='small'
              sx={{mb: 1}}
            />
            <TextField 
              // id="outlined-basic" 
              label="Sobrenome" 
              variant="outlined"
              size='small'
              sx={{mb: 1}}
            />
            <TextField 
              // id="outlined-basic" 
              label="Data de Nascimento" 
              variant="outlined"
              size='small'
              sx={{mb: 1}}
            />
            <TextField 
              // id="outlined-basic" 
              label="Sexo" 
              variant="outlined"
              size='small'
              sx={{mb: 1}}
            />
            <TextField 
              // id="outlined-basic" 
              label="E-mail" 
              variant="outlined"
              size='small'
              sx={{mb: 1}}
            />
            <TextField 
              // id="outlined-basic" 
              label="Senha"
              type='password' 
              variant="outlined"
              size='small'
              sx={{mb: 1}}
            />
            <TextField 
              // id="outlined-basic" 
              label="Insira senha novamente" 
              type='password' 
              variant="outlined"
              size='small'
              sx={{mb: 3}}
            />
            <Button 
              variant='contained'
              color="secundary" 
              size="small"
              sx={{mb: 1}}
              style={{color: 'white'}}
            >
              Registrar
            </Button>
          </Box>
        </Box>
      </Container>
      <Footer/>
    </>
  )
}

export default Register