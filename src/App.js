import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Container,
  Box 
} from '@mui/material';
import NavBar from './Components/NavBar/NavBar';
import Categories from './Components/Categories/Categories';
import Footer from './Components/Footer/Footer';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Edit4Inputs from './Pages/Edit4Inputs/Edit4Inputs';
import Edit2Inputs from './Pages/Edit2Inputs/Edit2Inputs';
// import Rotas from './routes';

const theme = createTheme({
  palette: {
    primary: {
      main: '#212529'
    },
    secundary: {
      main: '#343A40'
    },
    white: {
      main: '#ffffff'
    },
  },
});

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <NavBar color='primary' />
          <Categories color='secundary' />
          <Container maxWidth="xl">
            <Box 
              display="flex"
              justifyContent="center"
              sx={{ bgcolor: 'white', p: 4 }} 
            >
              {/* <Rotas /> */}
              <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route 
                    path="/edit-info" 
                    element={
                      <Edit4Inputs 
                        description="Alterar Informações"
                        textfield1="Nome"
                        textfield2="Sobrenome"
                        textfield3="Data de Nascimento"
                        textfield4="Sexo"
                      />
                    } 
                  />
                  <Route 
                    path="/edit-card" 
                    element={
                      <Edit4Inputs 
                        description="Informações do Cartão"
                        textfield1="Nome do Cartão"
                        textfield2="Número do Cartão"
                        textfield3="Data de Vencimento"
                        textfield4="CVV"
                      />
                    } 
                  />
                  <Route 
                    path="/edit-email" 
                    element={
                      <Edit2Inputs 
                        isPassword={false}
                        description="Alterar E-mail"
                        textfield1="Novo E-mail"
                        textfield2="Confirmar novo E-mail"
                      />
                    } 
                  />
                  <Route 
                    path="/edit-password" 
                    element={
                      <Edit2Inputs 
                        isPassword={true}
                        description="Alterar Senha"
                        textfield1="Nova Senha"
                        textfield2="Confirmar nova Senha"
                      />
                    } 
                  />
              </Routes>
            </Box>
          </Container>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
