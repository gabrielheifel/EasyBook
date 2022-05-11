import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './Components/Footer/Footer';
import Rotes from './routes';

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
        <Rotes />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
