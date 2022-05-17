import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './components/Footer/Footer';
import Rotes from './routes';
// import './mock';
// import {AuthProvider} from './contexts/auth';
import AuthContext from './contexts/auth';

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
        {/* <AuthProvider> */}
          <AuthContext.Provider value={{signIn: true}}>
            <Rotes />
            <Footer />
          </AuthContext.Provider>
        {/* </AuthProvider> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
