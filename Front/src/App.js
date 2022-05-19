import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Rotes from './routes';
import {AuthProvider} from './contexts/auth';

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
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Rotes />
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
