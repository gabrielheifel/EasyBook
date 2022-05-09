import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { makeStyles } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchInput from '../SearchInput/SearchInput';
import Logo from '../../Images/logo.png';

const NavBar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar 
            variant='dense'
            sx={{p: 0.5, display: 'flex', justifyContent: 'space-between'}}
          >
            <Link to='/'>
              <Button sx={{p:0}}>
                <img src={Logo} alt="easy book" style={{height: '35px'}} />
              </Button>
            </Link>
            <SearchInput />        
            <div>
              <Button 
                variant='text' 
                color="inherit" 
                size="small"
                sx={{marginRight: '5px'}}
              >
                <Link to='/register' style={{textDecoration: 'none', color: '#fff'}}>
                  Registrar
                </Link>
              </Button>
              <Button 
                variant='contained'
                color="inherit" 
                size="small"
                sx={{ marginRight: '10px'}}
              >
                <Link to='login' style={{textDecoration: 'none', color:'#000'}}>
                  Login
                </Link>
              </Button>
              <IconButton color="inherit" >
                <FavoriteBorderIcon/>
              </IconButton>
              <IconButton color="inherit" >
                <ShoppingCartOutlinedIcon/>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default NavBar;