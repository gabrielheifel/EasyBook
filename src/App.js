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
          <Categories />
          <Container maxWidth="xl">
            <Box 
              display="flex"
              justifyContent="center"
              sx={{ bgcolor: 'white', p: 4 }} 
            >
              <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
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
