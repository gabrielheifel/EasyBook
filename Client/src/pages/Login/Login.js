import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/auth';
import { 
  Box,
  Typography,
  TextField,
  Container,
  Button
} from '@mui/material';
import NavBar from '../../components/NavBar/NavBar';
import Categories from '../../components/Categories/Categories';
import Footer from '../../components/Footer/Footer';

const Login = () => {
  const navigate = useNavigate(); 
  const {login} = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
  // const handleLogin = async(e) => {
    e.preventDefault();
    console.log("submit", {email, password})
    login(email, password);

    // navigate('/edit-info');
  }

  return (
    <>
      <NavBar color='primary' isUser={true} />
      <Categories color='secundary' />
      <Container bgcolor="background.main">
        <Box 
          display="flex"
          justifyContent="center"
          sx={{ p:4, height: '75vh' }} 
        >    
          <form onSubmit={handleSubmit}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              sx={{width: 700, height: 350, p:15, pt:6, pb:6 }}
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
                sx={{mb: 2, width: 250}}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField 
                type='password' 
                label="Senha" 
                variant="outlined"
                size='small'
                sx={{mb: 4, width: 250}}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button 
                variant='contained'
                size="small"
                sx={{mb: 1}}
                // onClick={() => navigate('/edit-info')}
                type='submit'
                // onClick={handleSubmit}
              >
                Login
              </Button>
              <Button 
                variant='text'
                size="small"
                sx={{mb: 1}}
                onClick={() => navigate('/register')}
              >
                Registrar
              </Button>
              <Button 
                variant='text'
                size="small"
                sx={{fontSize: 10}}
                onClick={() => navigate('/register')}
              >
                Esqueci minha senha
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
      <Footer position='fixed'/>
    </>
  )
}

export default Login;