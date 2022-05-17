import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/auth';
// import { makeStyles } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchInput from '../SearchInput/SearchInput';
import Logo from '../../images/logo.png';

const NavBar = (props) => {
  const navigate = useNavigate();
  const {signed} = useContext(AuthContext);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar 
            variant='dense'
            sx={{p: 0.5, display: 'flex', justifyContent: 'space-between'}}
          >
            <Button sx={{p:0}} onClick={() => navigate('/')}>
              <img src={Logo} alt="easy book" style={{height: '35px'}} />
            </Button>
            {props.isUser 
              ? <SearchInput />
              : <Typography variant="overline">
                  Administrador
                </Typography>
            }
            {props.isUser
              ? signed
                  ? <div>
                      <Button 
                        variant='text' 
                        color="inherit" 
                        size="small"
                        sx={{marginRight: '5px'}}
                        onClick={() => navigate('/')}
                      >
                        Sair
                      </Button>
                      <Button 
                        variant='contained'
                        color="inherit" 
                        size="small"
                        sx={{ marginRight: '10px'}}
                        style={{textDecoration: 'none', color:'#000'}}
                        onClick={() => navigate('/')}
                      >
                        Minha Conta  
                      </Button>
                      <IconButton color="inherit" >
                        <FavoriteBorderIcon/>
                      </IconButton>
                      <IconButton color="inherit" >
                        <ShoppingCartOutlinedIcon/>
                      </IconButton>
                    </div>
                  : <div>
                      <Button 
                        variant='text' 
                        color="inherit" 
                        size="small"
                        sx={{marginRight: '5px'}}
                        onClick={() => navigate('/register')}
                      >
                        Registrar
                      </Button>
                      <Button 
                        variant='contained'
                        color="inherit" 
                        size="small"
                        sx={{ marginRight: '10px'}}
                        style={{textDecoration: 'none', color:'#000'}}
                        onClick={() => navigate('/login')}
                      >
                        Login
                      </Button>
                      <IconButton color="inherit" >
                        <FavoriteBorderIcon/>
                      </IconButton>
                      <IconButton color="inherit" >
                        <ShoppingCartOutlinedIcon/>
                      </IconButton>
                    </div>
              : <Button 
                  variant='text' 
                  color="inherit" 
                  size="small"
                  onClick={() => navigate('/')}
                >
                  Sair
                </Button> 
            }
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default NavBar;