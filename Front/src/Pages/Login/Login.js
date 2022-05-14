import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Box,
  Typography,
  TextField,
  Container,
  Button
} from '@mui/material';
import NavBar from '../../Components/NavBar/NavBar';
import Categories from '../../Components/Categories/Categories';


const Login = () => {
  return (
    <div id='login'>
      <NavBar color='primary' isUser={true} />
      <Categories color='secundary' />
      <Container maxWidth="xl">
        <Box 
          display="flex"
          justifyContent="center"
          sx={{ bgcolor: 'white', p: 4 }} 
        >    
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{width: 700, height: 400, background: "white", p: 15, pt: 6 }}
          >
            <Typography 
              variant="h4" 
              component="h2"
              sx={{m: 2}}
            >
              Acessar sua conta
            </Typography>

            <TextField 
              label="E-mail" 
              variant="outlined"
              size='small'
              sx={{mb: 2}}
            />
            <TextField 
              type='password' 
              label="Senha" 
              variant="outlined"
              size='small'
              sx={{mb: 4}}
            />
            <Button 
              variant='contained'
              // color="secundary" 
              size="small"
              sx={{mb: 1}}
            >
              <Link to='/administrator' style={{textDecoration: 'none', color: '#fff'}}>
                Login
              </Link>
            </Button>
            <Button 
              variant='text'
              color="inherit" 
              size="small"
            >
              <Link to='/register' style={{textDecoration: 'none', color: '#000'}}>
                Registrar
              </Link>
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default Login;