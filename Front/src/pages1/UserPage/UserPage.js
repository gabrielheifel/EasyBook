import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import AuthContext from '../../contexts/auth';
import { 
  Box,
  Typography,
  Container,
  Button,
  Grid
} from '@mui/material';
import NavBar from '../../components/NavBar/NavBar';
import Categories from '../../components/Categories/Categories';
import Footer from '../../components/Footer/Footer';

const UserPage = () => {

  const navigate = useNavigate();

  return (
    <div>
      <NavBar color='primary' isUser={true} />
      <Categories color='secundary' />
      <Container maxWidth="xl">
        <Box 
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          color="background"
          sx={{ p:4, height: '75vh' }} 
        >    
          <Typography variant="h4" sx={{m: 2, fontWeight: 'bold'}}>
            Bem vindo, Fulano.
          </Typography>
          <Grid container spacing={4} columns={15} ml={2} >
            <Grid item xs={4}>
              <Box flexDirection="column" sx={{m:2}}>
                <Typography variant="h6" sx={{fontWeight: 'bold', mb:1}}>
                  Minha conta
                </Typography>
                <Box display="flex" flexDirection="column" alignItems="flex-start">
                  <Button 
                    onClick={() => navigate('/edit-info')}
                    color="orange" 
                    sx={{textTransform: 'initial', p:0}}
                  >
                      Editar Informações
                  </Button>
                  <Button 
                    onClick={() => navigate('/edit-email')}
                    color="orange" 
                    sx={{textTransform: 'initial', p:0}}
                  >
                    Modificar E-mail
                  </Button>
                  <Button 
                    onClick={() => navigate('/edit-password')}
                    color="orange" 
                    sx={{textTransform: 'initial', p:0}}
                  >
                    Alterar senha
                  </Button>
                </Box>
                <Typography variant="h6" sx={{fontWeight: 'bold', mt:2, mb:1}}>
                  Meus Pedidos
                </Typography>
                <Button color="orange" sx={{textTransform: 'initial', p:0}}>
                  Visualizar histórico de pedidos
                </Button>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box flexDirection="column" sx={{m:2}}>
                <Typography variant="h6" sx={{fontWeight: 'bold', mb:1}}>
                  Meus Endereços
                </Typography>
                <Box 
                  display="flex" 
                  flexDirection="column" 
                  alignItems="flex-start"
                  sx={{p:1, pl:1, mb:1, border: '1px solid grey', borderRadius: 2}}
                >
                  <Typography variant="body2" sx={{fontWeight: 'bold', mb:1}}>
                    Fulano de tal
                  </Typography>
                  <Typography variant="body2">
                    Rua xxxxxxxxxxxxxxxxx, 111
                  </Typography>
                  <Typography variant="body2">
                    Complemento
                  </Typography>
                  <Typography variant="body2">
                    Centro, Pelotas - 960020-000
                  </Typography>
                  <Typography variant="body2">
                    Rio Grande do Sul, Brasil
                  </Typography>
                  <Box sx={{mt:1}}>
                    <Button color="orange" sx={{textTransform: 'initial', p:0}}>
                      Editar
                    </Button>
                    <Button color="orange" sx={{textTransform: 'initial', p:0}}>
                      Excluir
                    </Button>
                  </Box>
                </Box>
                <Button color="orange" sx={{textTransform: 'initial', p:0}}>
                  Adicionar novo endereço
                </Button>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box flexDirection="column" sx={{m:2}}>
                <Typography variant="h6" sx={{fontWeight: 'bold', mb:1}}>
                  Meus Cartões
                </Typography>
                <Box 
                  display="flex" 
                  flexDirection="column" 
                  alignItems="flex-start"
                  sx={{p:1, pl:1, mb:1, border: '1px solid grey', borderRadius: 2}}
                >
                  <Typography variant="body2" sx={{fontWeight: 'bold', mb:1}}>
                    Fulano de tal
                  </Typography>
                  <Typography variant="body2">
                    xxxx-xxxx-xxxx-xxxx
                  </Typography>
                  <Typography variant="body2">
                    mm/yy
                  </Typography>
                  <Box sx={{mt:1}}>
                    <Button 
                      onClick={() => navigate('/edit-card')}
                      color="orange" 
                      sx={{textTransform: 'initial', p:0}}
                    >
                      Editar
                    </Button>
                    <Button color="orange" sx={{textTransform: 'initial', p:0}}>
                      Excluir
                    </Button>
                  </Box>
                </Box>
                <Button 
                  onClick={() => navigate('/edit-card')}
                  color="orange" 
                  sx={{textTransform: 'initial', p:0}}
                >
                  Adicionar novo cartão
                </Button>
              </Box>
            </Grid>   
          </Grid>
        </Box>
      </Container>
      <Footer position='fixed'/>
    </div>
  )
}

export default UserPage;