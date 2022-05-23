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

const NavBar = ({isUser, setSearchInput}) => { 
  const navigate = useNavigate();
  const {signed, logout} = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar 
            variant='dense'
            sx={{p: 0.5, display: 'flex', justifyContent: 'space-between'}}
          >
            <Button sx={{p:0}} onClick={() => navigate('/')}>
              <img src={Logo} alt="easy book logo" style={{height: '35px'}} />
            </Button>
            {isUser 
              ? <SearchInput setSearchInput={setSearchInput} />
              : <Typography variant="overline">
                  Administrador
                </Typography>
            }
            {isUser
              ? signed
                  ? <div>
                      <Button 
                        variant='text' 
                        color="inherit" 
                        size="small"
                        sx={{marginRight: '5px'}}
                        onClick={handleLogout}
                      >
                        Sair
                      </Button>
                      <Button 
                        variant='contained'
                        color="inherit" 
                        size="small"
                        sx={{ marginRight: '10px'}}
                        style={{textDecoration: 'none', color:'#000'}}
                        onClick={() => navigate('/user')}
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
                  onClick={handleLogout}
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