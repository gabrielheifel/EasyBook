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
    <div className='App' style={{backgroundColor: '#DEE2E6'}}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Rotes />
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
