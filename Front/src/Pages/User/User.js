import React from 'react';
import {
  Container,
  Box 
} from '@mui/material';
import NavBar from '../../Components/NavBar/NavBar';
import Categories from '../../Components/Categories/Categories';
import Main from '../Main/Main';
 
function User() {
  return (
    <div>
      <NavBar color='primary' isUser={true} />
      <Categories color='secundary' />
      <Container maxWidth="xl">
        <Box 
          display="flex"
          justifyContent="center"
          sx={{ bgcolor: 'white', p: 4 }} 
        >
          <Main />
        </Box>
      </Container>
    </div>
  );
}

export default User;
