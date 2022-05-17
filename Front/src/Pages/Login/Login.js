import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from '../../utils/axios';
import { signInServices } from '../../services/auth';
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

const Login = () => {
  const navigate = useNavigate(); 
  const {signed, signIn} = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = async() => {
  const handleLogin = async() => {
    // e.preventDefault();
    // console.log('first', {email, password}, signed)
    // signIn(email, password);
    const resp = await signInServices();
    console.log(resp)
    // signIn();
  }

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
          {/* <form onSubmit={handleSubmit}> */}
          <form>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              sx={{width: 700, height: 400, p: 15, pt: 6 }}
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
                // onClick={() => navigate('/administrator')}
                type='submit'
                onClick={handleLogin}
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
    </div>
  )
}

export default Login;