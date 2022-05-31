import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Rotes from './routes';
import {AuthProvider} from './contexts/auth';
import './style.css';
import { CartFavoritesProvider } from './contexts/userContext';

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
    orange: {
      main: '#DB8F00'
    },
    background: {
      main: '#808080'
    }
  },
});

function App() {

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <CartFavoritesProvider>
            <Rotes />
          </CartFavoritesProvider>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
